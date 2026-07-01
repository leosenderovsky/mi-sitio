import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import compression from 'vite-plugin-compression'
import prerender from '@prerenderer/rollup-plugin'

const prerenderRoutes = [
  '/',
  '/audiovisual/edicion',
  '/audiovisual/guion',
  '/audiovisual/docencia',
  '/audiovisual/critica',
  '/web',
  '/ia',
]

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cssInjectedByJs({
      // Inyectar el CSS del pdf-viewer via JS (solo cuando el chunk se carga)
      // en lugar de como <link> global en index.html
      relativeCSSInjection: true,
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
    prerender({
      routes: prerenderRoutes,
      renderer: '@prerenderer/renderer-puppeteer',
      rendererOptions: {
        renderAfterTime: 2500,
        timeout: 30000,
        headless: true,
        skipThirdPartyRequests: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      postProcess(renderedRoute) {
        if (renderedRoute.route === '/') {
          renderedRoute.outputPath = 'index.html'
        }

        renderedRoute.html = renderedRoute.html
          .replace(/http:\/\/localhost:\d+/g, 'https://leosenderovsky.com.ar')
          .replace(/http:\/\/127\.0\.0\.1:\d+/g, 'https://leosenderovsky.com.ar')
      },
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
  ],
  assetsInclude: ['**/*.pdf'],
  build: {
    cssCodeSplit: true,
    modulePreload: {
      resolveDependencies: (_filename, deps) => {
        return deps.filter((dep) => !dep.includes('pdf-viewer'));
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-pdf') || id.includes('pdfjs-dist')) {
            return 'pdf-viewer';
          }
          if (id.includes('framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router/')) {
            return 'vendor-router';
          }
          if (id.includes('node_modules/react-helmet-async')) {
            return 'vendor-helmet';
          }
        },
      },
    },
  },
})
