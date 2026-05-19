import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'
import compression from 'vite-plugin-compression'

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
