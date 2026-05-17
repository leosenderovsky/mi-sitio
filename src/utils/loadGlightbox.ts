import type { GLightboxInstance, GLightboxOptions } from "../types/glightbox";

const GLIGHTBOX_CSS_ID = "glightbox-css";
const GLIGHTBOX_SCRIPT_ID = "glightbox-script";
const GLIGHTBOX_CSS_URL =
  "https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css";
const GLIGHTBOX_SCRIPT_URL =
  "https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js";

let glightboxPromise: Promise<void> | null = null;

function loadStylesheet() {
  if (document.getElementById(GLIGHTBOX_CSS_ID)) return;

  const link = document.createElement("link");
  link.id = GLIGHTBOX_CSS_ID;
  link.rel = "stylesheet";
  link.href = GLIGHTBOX_CSS_URL;
  document.head.appendChild(link);
}

export function loadGlightbox() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.GLightbox) {
    return Promise.resolve();
  }

  if (glightboxPromise) {
    return glightboxPromise;
  }

  glightboxPromise = new Promise<void>((resolve, reject) => {
    loadStylesheet();

    const existingScript = document.getElementById(
      GLIGHTBOX_SCRIPT_ID,
    ) as HTMLScriptElement | null;

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = GLIGHTBOX_SCRIPT_ID;
    script.src = GLIGHTBOX_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Unable to load GLightbox"));
    document.head.appendChild(script);
  });

  return glightboxPromise;
}

export async function createGlightbox(
  options?: GLightboxOptions,
): Promise<GLightboxInstance | null> {
  await loadGlightbox();
  return window.GLightbox?.(options) ?? null;
}
