<?php
/**
 * OG Handler — sirve meta tags por ruta a crawlers sociales.
 * Llamado desde .htaccess cuando el User-Agent es un bot de red social.
 */
$path    = trim($_GET['path'] ?? '', '/');
$baseUrl = 'https://leosenderovsky.com.ar';
$site    = 'Leo Senderovsky';

$pages = [

  // ── SECCIONES RAÍZ (existentes, no tocar) ────────────────────────────────
  'audiovisual/edicion' => [
    'title'       => 'Edición de Video | Leo Senderovsky',
    'description' => 'Portfolio de edición de video de Leo Senderovsky. Editor audiovisual senior con casi veinte años de experiencia en documentales, spots y contenido para Infobae, LN+, NBA LATAM y más.',
    'image'       => '/assets/img/dibujos/edicion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/guion' => [
    'title'       => 'Guión Cinematográfico y Script Doctoring | Leo Senderovsky',
    'description' => 'Servicios de guión y consultoría narrativa (script doctoring) por Leo Senderovsky. Asesoría para cine, televisión y publicidad. Freelance, Buenos Aires.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia' => [
    'title'       => 'Docencia de Cine — Charlas y Ciclos | Leo Senderovsky',
    'description' => 'Charlas y ciclos de cine por Leo Senderovsky desde 2011. Judaísmo en el cine, cine argentino en dictadura, humor judío, cine de terror. Para instituciones y grupos en Buenos Aires.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/critica' => [
    'title'       => 'Crítica de Cine — Análisis y Reseñas | Leo Senderovsky',
    'description' => 'Críticas cinematográficas y colaboraciones en medios por Leo Senderovsky. Análisis de cine argentino y mundial. Radio, medios gráficos y online.',
    'image'       => '/assets/img/dibujos/critica-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'web' => [
    'title'       => 'Desarrollo Web Frontend | Leo Senderovsky',
    'description' => 'Desarrollo de sitios y aplicaciones web a medida por Leo Senderovsky. Frontend con React, TypeScript, Tailwind. Portfolio de proyectos para pymes y emprendimientos.',
    'image'       => '/assets/img/dibujos/web-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'ia' => [
    'title'       => 'IA para Video, Sitios Web y Apps — sender.ia | Leo Senderovsky',
    'description' => 'sender.ia: proyectos de inteligencia artificial aplicados al audiovisual y la web por Leo Senderovsky. Herramientas IA para producción, automatización y edición de video.',
    'image'       => '/assets/img/dibujos/ia-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE EDICIÓN ───────────────────────────────────────────────
  'audiovisual/edicion/experiencia' => [
    'title'       => 'Experiencia en Edición de Video | Leo Senderovsky',
    'description' => 'Trayectoria como editor audiovisual senior: Infobae, LN+, NBA LATAM, ESPN, documentales y publicidad. Casi veinte años de trabajo en medios y productoras argentinas.',
    'image'       => '/assets/img/dibujos/edicion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/edicion/portfolio' => [
    'title'       => 'Portfolio de Edición de Video | Leo Senderovsky',
    'description' => 'Selección de trabajos de edición de Leo Senderovsky: documentales, spots institucionales, reels y contenido digital para medios y marcas argentinas e internacionales.',
    'image'       => '/assets/img/dibujos/edicion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/edicion/portfolio/reels' => [
    'title'       => 'Reels — Portfolio de Edición | Leo Senderovsky',
    'description' => 'Reels de edición de video de Leo Senderovsky. Spots, documentales y contenido audiovisual para marcas, medios y productoras.',
    'image'       => '/assets/img/dibujos/edicion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE GUIÓN ─────────────────────────────────────────────────
  'audiovisual/guion/experiencia' => [
    'title'       => 'Experiencia en Guión Cinematográfico | Leo Senderovsky',
    'description' => 'Trayectoria de Leo Senderovsky como guionista: cortos, publicidad, contenido institucional y asesoría narrativa. Formación y proyectos destacados.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/guion/portfolio' => [
    'title'       => 'Portfolio de Guión | Leo Senderovsky',
    'description' => 'Proyectos de guión de Leo Senderovsky: cortos, institucionales, publicitarios y consultoría narrativa para cine, TV y publicidad.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/guion/consultoria' => [
    'title'       => 'Consultoría de Guión — Script Doctoring | Leo Senderovsky',
    'description' => 'Script doctoring y asesoría narrativa para cine, TV y publicidad. Leo Senderovsky analiza y mejora guiones en todas sus etapas. Freelance, Buenos Aires.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE DOCENCIA ──────────────────────────────────────────────
  'audiovisual/docencia/experiencia' => [
    'title'       => 'Experiencia en Docencia de Cine | Leo Senderovsky',
    'description' => 'Leo Senderovsky como docente de cine desde 2011: instituciones, comunidades e historia de su trayectoria en charlas y ciclos sobre cine y judaísmo.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/entrevistas' => [
    'title'       => 'Entrevistas — Docencia de Cine | Leo Senderovsky',
    'description' => 'Entrevistas y apariciones de Leo Senderovsky como docente y crítico de cine en medios gráficos, radio y plataformas online.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── DOCUMENTOS DE DOCENCIA (PDFs — /audiovisual/docencia/leer/:filename) ──
  // Ciclo: El humor judío en el cine
  'audiovisual/docencia/leer/el-humor-judio-en-el-cine-norteamericano.pdf' => [
    'title'       => 'Cine norteamericano — El humor judío en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre humor judío en el cine norteamericano. Ciclo "El humor judío en el cine", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-el-cine-europeo.pdf' => [
    'title'       => 'Cine europeo — El humor judío en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre humor judío en el cine europeo. Ciclo "El humor judío en el cine", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-el-cine-israeli.pdf' => [
    'title'       => 'Cine israelí — El humor judío en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre humor judío en el cine israelí. Ciclo "El humor judío en el cine", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-el-cine-argentino.pdf' => [
    'title'       => 'Cine argentino — El humor judío en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre humor judío en el cine argentino. Ciclo "El humor judío en el cine", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  // Ciclo: El humor judío en la TV norteamericana
  'audiovisual/docencia/leer/el-humor-judio-en-la-tv-norteamericana-parte-I.pdf' => [
    'title'       => 'Personajes y referencias — El humor judío en la TV norteamericana | Docencia | Leo Senderovsky',
    'description' => 'Personajes y referencias culturales judías en la TV norteamericana. Ciclo "El humor judío en la TV norteamericana", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-la-tv-norteamericana-parte-II.pdf' => [
    'title'       => 'Ceremonias — El humor judío en la TV norteamericana | Docencia | Leo Senderovsky',
    'description' => 'Ceremonias judías en la TV norteamericana. Ciclo "El humor judío en la TV norteamericana", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-la-tv-norteamericana-parte-III.pdf' => [
    'title'       => 'El judío como "el otro" — El humor judío en la TV norteamericana | Docencia | Leo Senderovsky',
    'description' => 'El judío como "el otro" y el antisemitismo en la TV norteamericana. Ciclo "El humor judío en la TV norteamericana", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-judio-en-la-tv-norteamericana-parte-IV.pdf' => [
    'title'       => 'Festividades — El humor judío en la TV norteamericana | Docencia | Leo Senderovsky',
    'description' => 'Festividades judías en la TV norteamericana. Ciclo "El humor judío en la TV norteamericana", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  // Ciclo: Historia del cine israelí
  'audiovisual/docencia/leer/cine-israeli-70x7.pdf' => [
    'title'       => 'Películas emblemáticas — Historia del cine israelí | Docencia | Leo Senderovsky',
    'description' => 'Películas emblemáticas del cine israelí. Ciclo "Historia del cine israelí", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/humor-y-musical-en-el-cine-israeli.pdf' => [
    'title'       => 'Humor y musical — Historia del cine israelí | Docencia | Leo Senderovsky',
    'description' => 'Humor y cine musical israelí. Ciclo "Historia del cine israelí", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/ejercito-y-conflictos-belicos-en-el-cine-israeli.pdf' => [
    'title'       => 'Ejército y conflictos bélicos — Historia del cine israelí | Docencia | Leo Senderovsky',
    'description' => 'El ejército y los conflictos bélicos en el cine israelí. Ciclo "Historia del cine israelí", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/identidad-religiosa-y-sexual-en-el-cine-israeli.pdf' => [
    'title'       => 'Identidad religiosa y sexual — Historia del cine israelí | Docencia | Leo Senderovsky',
    'description' => 'Identidad religiosa y sexual en el cine israelí. Ciclo "Historia del cine israelí", por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  // Ciclos individuales
  'audiovisual/docencia/leer/conflicto-israeli-palestino-miradas-desde-el-cine-documental.pdf' => [
    'title'       => 'Conflicto israelí-palestino en el cine documental | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre el conflicto israelí-palestino en el cine documental, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/la-shoa-en-el-cine.pdf' => [
    'title'       => 'La shoá en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre la Shoá en el cine, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-judaismo-en-el-cine-argentino.pdf' => [
    'title'       => 'Judaísmo en el cine argentino | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre el judaísmo en el cine argentino, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/la-mujer-judia-en-el-cine.pdf' => [
    'title'       => 'La mujer judía en el cine | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre la mujer judía en el cine, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-humor-en-el-cine-argentino.pdf' => [
    'title'       => 'El humor en el cine argentino | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre el humor en el cine argentino, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/el-cine-argentino-en-dictadura.pdf' => [
    'title'       => 'El cine argentino en dictadura | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre el cine argentino durante la última dictadura militar, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/leer/cine-bajo-tijeras-la-censura-en-dictadura.pdf' => [
    'title'       => 'Cine bajo tijeras: La censura en dictadura | Docencia | Leo Senderovsky',
    'description' => 'Reseña del encuentro sobre la censura cinematográfica durante la dictadura argentina, por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE CRÍTICA ───────────────────────────────────────────────
  'audiovisual/critica/experiencia' => [
    'title'       => 'Experiencia en Crítica de Cine | Leo Senderovsky',
    'description' => 'Trayectoria de Leo Senderovsky como crítico de cine: medios gráficos, radio y plataformas online. Colaboraciones y publicaciones destacadas.',
    'image'       => '/assets/img/dibujos/critica-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE WEB ───────────────────────────────────────────────────
  'web/experiencia' => [
    'title'       => 'Experiencia en Desarrollo Web | Leo Senderovsky',
    'description' => 'Trayectoria en desarrollo web Frontend de Leo Senderovsky: proyectos, tecnologías y clientes. React, TypeScript, Tailwind CSS, Vite.',
    'image'       => '/assets/img/dibujos/web-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── SUBSECCIONES DE IA ────────────────────────────────────────────────────
  'ia/portfolio' => [
    'title'       => 'Portfolio sender.ia — IA Aplicada al Audiovisual | Leo Senderovsky',
    'description' => 'Proyectos realizados con inteligencia artificial para producción de video, automatización de contenido y desarrollo web. sender.ia por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/ia-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],

  // ── CV Y SOBRE MÍ ─────────────────────────────────────────────────────────
  'sobre-mi/cv-audiovisual' => [
    'title'       => 'CV Audiovisual | Leo Senderovsky',
    'description' => 'Curriculum vitae completo de Leo Senderovsky: editor de video, guionista y consultor de guión. Más de quince años de experiencia en medios, productoras y marcas.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
  'sobre-mi/cv-web' => [
    'title'       => 'CV Desarrollo Web | Leo Senderovsky',
    'description' => 'Curriculum vitae en desarrollo web Frontend de Leo Senderovsky. React, TypeScript, Tailwind CSS, Vite. Proyectos para pymes y emprendimientos.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
  'audiovisual/cv/castellano' => [
    'title'       => 'CV Audiovisual en Español | Leo Senderovsky',
    'description' => 'Curriculum vitae de Leo Senderovsky en español: editor de video senior, guionista y consultor de guión. Buenos Aires, Argentina.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
  'audiovisual/cv/ingles' => [
    'title'       => 'Audiovisual CV in English | Leo Senderovsky',
    'description' => 'Leo Senderovsky\'s resume in English: senior video editor, screenwriter and script consultant. Buenos Aires, Argentina.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
];

// Default: home o ruta desconocida
$data = [
  'title'       => 'Editor, docente de cine y consultor de guión | Leo Senderovsky',
  'description' => 'Leo Aquiba Senderovsky: editor de video senior, consultor de guión, docente de cine, desarrollador web frontend y especialista en IA. Buenos Aires, Argentina.',
  'image'       => '/assets/img/og-social-preview.webp',
  'img_w'       => 1200, 'img_h' => 630,
];

// Prefix matching: buscar la sección cuya clave sea prefijo del path.
// Ordenar por longitud descendente para que claves más específicas tengan prioridad.
$keys = array_keys($pages);
usort($keys, fn($a, $b) => strlen($b) - strlen($a));

foreach ($keys as $key) {
  // Match exacto O path que empieza con "clave/"
  if ($path === $key || str_starts_with($path, $key . '/')) {
    $data = $pages[$key];
    break;
  }
}

$title       = htmlspecialchars($data['title'],       ENT_QUOTES, 'UTF-8');
$description = htmlspecialchars($data['description'], ENT_QUOTES, 'UTF-8');
$imageUrl    = htmlspecialchars($baseUrl . $data['image'], ENT_QUOTES, 'UTF-8');
$canonical   = htmlspecialchars($baseUrl . ($path ? '/' . $path : '/'), ENT_QUOTES, 'UTF-8');

header('Content-Type: text/html; charset=UTF-8');
?><!DOCTYPE html>
<html lang="es-AR">
<head>
  <meta charset="UTF-8">
  <title><?= $title ?></title>
  <meta name="description" content="<?= $description ?>">
  <link rel="canonical" href="<?= $canonical ?>">

  <!-- Schema Person estático para sub-páginas (crawlers sin JS) -->
  <script type="application/ld+json">
  {"@context":"https://schema.org","@type":"Person","@id":"https://leosenderovsky.com.ar/#person","name":"Leo Aquiba Senderovsky","url":"https://leosenderovsky.com.ar","jobTitle":["Editor de Video Senior","Guionista","Consultor de Guión","Docente de Cine","Desarrollador Web Frontend"],"address":{"@type":"PostalAddress","addressLocality":"Buenos Aires","addressCountry":"AR"}}
  </script>

  <!-- Open Graph -->
  <meta property="og:type"         content="website">
  <meta property="og:site_name"    content="<?= htmlspecialchars($site, ENT_QUOTES, 'UTF-8') ?>">
  <meta property="og:url"          content="<?= $canonical ?>">
  <meta property="og:title"        content="<?= $title ?>">
  <meta property="og:description"  content="<?= $description ?>">
  <meta property="og:image"        content="<?= $imageUrl ?>">
  <meta property="og:image:width"  content="<?= $data['img_w'] ?>">
  <meta property="og:image:height" content="<?= $data['img_h'] ?>">
  <meta property="og:image:alt"    content="<?= $title ?>">
  <meta property="og:locale"       content="es_AR">

  <!-- Twitter Card -->
  <meta name="twitter:card"        content="summary_large_image">
  <meta name="twitter:site"        content="@leosenderovsky">
  <meta name="twitter:title"       content="<?= $title ?>">
  <meta name="twitter:description" content="<?= $description ?>">
  <meta name="twitter:image"       content="<?= $imageUrl ?>">

  <!-- Redirect inmediato para bots que ejecuten JS y para evitar indexar esta página -->
  <meta name="robots"              content="noindex">
  <meta http-equiv="refresh"       content="0;url=<?= $canonical ?>">
</head>
<body>
  <a href="<?= $canonical ?>">Ir al sitio →</a>
</body>
</html>