import { spawn } from 'node:child_process';
import { setTimeout as wait } from 'node:timers/promises';

const baseUrl = process.env.TEST_BASE_URL || 'http://127.0.0.1:5173';
const chromePath =
  process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const remotePort = Number(process.env.CHROME_REMOTE_PORT || 9222);

const tests = [
  { path: '/', anchors: ['#contacto'] },
  { path: '/audiovisual/edicion', anchors: ['#resume', '#portfolio-edicion', '#contacto'] },
  { path: '/audiovisual/guion', anchors: ['#portfolio-guion', '#contacto'] },
  { path: '/audiovisual/docencia', anchors: ['#resume2', '#entrevistas', '#contacto'] },
  { path: '/audiovisual/critica', anchors: ['#contacto'] },
  { path: '/web', anchors: ['#timeline-web', '#contacto'] },
  { path: '/ia', anchors: ['#portfolio-ia', '#contacto'] },
];

function launchChrome() {
  return spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${remotePort}`,
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--window-size=390,844',
    '--user-data-dir=C:\\tmp\\codex-responsive-anchor-test',
    'about:blank',
  ], {
    stdio: 'ignore',
    windowsHide: true,
  });
}

async function getPageWebSocketUrl() {
  const listUrl = `http://127.0.0.1:${remotePort}/json/list`;
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(listUrl);
      const targets = await response.json();
      const page = targets.find((target) => target.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {
      // Chrome is still starting.
    }
    await wait(100);
  }
  throw new Error('No pude conectar con Chrome DevTools.');
}

function createCdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const listeners = new Map();

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }

    const callbacks = listeners.get(message.method);
    if (callbacks) callbacks.forEach((callback) => callback(message.params));
  });

  return {
    open: () => new Promise((resolve, reject) => {
      ws.addEventListener('open', resolve, { once: true });
      ws.addEventListener('error', reject, { once: true });
    }),
    send: (method, params = {}) => new Promise((resolve, reject) => {
      const commandId = id += 1;
      pending.set(commandId, { resolve, reject });
      ws.send(JSON.stringify({ id: commandId, method, params }));
    }),
    once: (method) => new Promise((resolve) => {
      const callbacks = listeners.get(method) || [];
      const callback = (params) => {
        listeners.set(method, callbacks.filter((item) => item !== callback));
        resolve(params);
      };
      listeners.set(method, [...callbacks, callback]);
    }),
    close: () => ws.close(),
  };
}

async function evaluate(client, expression) {
  const result = await client.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });

  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
}

async function navigate(client, url) {
  const load = client.once('Page.loadEventFired');
  await client.send('Page.navigate', { url });
  await load;
  await wait(600);
}

async function run() {
  const chrome = launchChrome();
  let client;

  try {
    const wsUrl = await getPageWebSocketUrl();
    client = createCdpClient(wsUrl);
    await client.open();
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });

    const failures = [];

    for (const test of tests) {
      for (const anchor of test.anchors) {
        await navigate(client, `${baseUrl}${test.path}`);

        const result = await evaluate(client, `new Promise((resolve) => {
          const anchor = ${JSON.stringify(anchor)};
          const link = document.querySelector('a[href="' + anchor + '"]');
          const target = document.getElementById(anchor.slice(1));
          if (!link || !target) {
            resolve({ ok: false, reason: !link ? 'missing link' : 'missing target', scrollY: window.scrollY });
            return;
          }

          window.scrollTo(0, 0);
          setTimeout(() => {
            link.click();
            setTimeout(() => {
              const expected = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - 96);
              const delta = Math.abs(window.scrollY - expected);
              resolve({
                ok: window.scrollY > 20 && delta < 180,
                scrollY: window.scrollY,
                expected,
                delta,
                hash: window.location.hash,
              });
            }, 2200);
          }, 100);
        })`);

        if (!result.ok) {
          failures.push({ path: test.path, anchor, ...result });
        }
      }
    }

    if (failures.length) {
      console.table(failures);
      process.exitCode = 1;
    } else {
      console.log(`OK: ${tests.reduce((count, test) => count + test.anchors.length, 0)} anclas responsive verificadas.`);
    }
  } finally {
    client?.close();
    chrome.kill();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
