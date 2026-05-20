// scripts/generate-responsive-images.mjs
import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, basename, extname } from 'path';

/**
 * Imágenes a procesar con sus anchos objetivo.
 * Las variantes se guardan como: nombre-{ancho}w.webp/avif en la misma carpeta.
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
    widths: [320, 400, 700, 1024, 1376],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/critica.webp',
    widths: [320, 400, 700, 1024, 1376],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/ia.webp',
    widths: [320, 400, 700, 1024, 1376],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/web.webp',
    widths: [320, 400, 700, 1024, 1376],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/guion.webp',
    widths: [320, 400, 700, 1024, 1376],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/docencia-1.webp',
    widths: [320, 400, 700, 1024],
    avif: true,
  },
  {
    src: 'public/assets/img/dibujos/leo-chico-escribiendo.webp',
    widths: [300, 512, 768, 1024],
  },
  {
    src: 'public/assets/img/certificados/certificado-motion-graphics-coderhouse.webp',
    widths: [480, 768, 1024],
    avif: true,
  },
];

for (const { src, widths, avif = false } of TARGETS) {
  const dir = dirname(src);
  const ext = extname(src);
  const name = basename(src, ext);

  for (const w of widths) {
    const dest = join(dir, `${name}-${w}w${ext}`);
    const avifDest = join(dir, `${name}-${w}w.avif`);
    try {
      await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(dest);
      console.log(`✓ ${dest}`);

      if (avif) {
        await sharp(src)
          .resize({ width: w, withoutEnlargement: true })
          .avif({ quality: 70 })
          .toFile(avifDest);
        console.log(`✓ ${avifDest}`);
      }
      // Preserve aspect ratio and don't upscale on non-responsified versions
      // The original file acts as the base fallback
    } catch (e) {
      console.error(`✗ ${dest}:`, e.message);
    }
  }
}
console.log('\nListo. Ejecuta el build normalmente.');
