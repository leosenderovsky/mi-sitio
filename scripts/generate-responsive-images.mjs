// scripts/generate-responsive-images.mjs
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';

/**
 * Imágenes a procesar con sus anchos objetivo.
 * Las variantes se guardan como: nombre-{ancho}w.webp en la misma carpeta.
 */
const TARGETS = [
  {
    src: 'public/assets/img/hero-area-office.webp',
    widths: [640, 960, 1280, 1920],
  },
  {
    src: 'public/assets/img/edicion/bg-edicion.webp',
    widths: [480, 768, 1280, 1920],
  },
  {
    src: 'public/assets/img/web/bg-web.webp',
    widths: [480, 768, 1280, 1920],
  },
  {
    src: 'public/assets/img/ia/bg-ia.webp',
    widths: [480, 768, 1280, 1920],
  },
  {
    src: 'public/assets/img/critica/bg-critica.webp',
    widths: [480, 768, 1280, 1920],
  },
  {
    src: 'public/assets/img/guion/bg-guion.webp',
    widths: [480, 768, 1280, 1920],
  },
  {
    src: 'public/assets/img/dibujos/edicion.webp',
    widths: [400, 700, 1024, 1376],
  },
  {
    src: 'public/assets/img/dibujos/critica.webp',
    widths: [400, 700, 1024, 1376],
  },
  {
    src: 'public/assets/img/dibujos/ia.webp',
    widths: [400, 700, 1024, 1376],
  },
  {
    src: 'public/assets/img/dibujos/web.webp',
    widths: [400, 700, 1024, 1376],
  },
  {
    src: 'public/assets/img/dibujos/guion.webp',
    widths: [400, 700, 1024, 1376],
  },
  {
    src: 'public/assets/img/dibujos/docencia-1.webp',
    widths: [400, 700, 1024],
  },
  {
    src: 'public/assets/img/dibujos/leo-chico-escribiendo.webp',
    widths: [300, 512, 768, 1024],
  },
];

for (const { src, widths } of TARGETS) {
  const dir = dirname(src);
  const ext = extname(src);
  const name = basename(src, ext);

  for (const w of widths) {
    const dest = join(dir, `${name}-${w}w${ext}`);
    try {
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(dest);
      console.log(`✓ ${dest}`);
    } catch (e) {
      console.error(`✗ ${dest}:`, e.message);
    }
  }
}
console.log('\nListo. Ejecuta el build normalmente.');
