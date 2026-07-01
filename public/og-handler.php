<?php
/**
 * OG Handler — sirve meta tags por ruta a crawlers sociales.
 * Llamado desde .htaccess cuando el User-Agent es un bot de red social.
 */
$path    = trim($_GET['path'] ?? '', '/');
$baseUrl = 'https://leosenderovsky.com.ar';
$site    = 'Leo Senderovsky';

$pages = [
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
  'sobre-mi/cv-audiovisual' => [
    'title'       => 'CV Audiovisual | Leo Senderovsky',
    'description' => 'Curriculum vitae completo de Leo Senderovsky: editor de video, guionista y consultor de guión. Más de 15 años de experiencia en medios, productoras y marcas argentinas e internacionales.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
  'sobre-mi/cv-web' => [
    'title'       => 'CV Desarrollo Web | Leo Senderovsky',
    'description' => 'Curriculum vitae en desarrollo web Frontend de Leo Senderovsky. React, TypeScript, Tailwind CSS, Vite. Proyectos para pymes y emprendimientos.',
    'image'       => '/assets/img/og-social-preview.webp',
    'img_w'       => 1200, 'img_h' => 630,
  ],
  'audiovisual/guion/consultoria' => [
    'title'       => 'Consultoría de Guión — Script Doctoring | Leo Senderovsky',
    'description' => 'Script doctoring y asesoría narrativa para cine, TV y publicidad. Leo Senderovsky analiza y mejora guiones en todas sus etapas. Freelance, Buenos Aires.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/guion/portfolio' => [
    'title'       => 'Portfolio de Guión | Leo Senderovsky',
    'description' => 'Proyectos de guión y consultoría narrativa de Leo Senderovsky: cortos, institucionales, publicitarios y asesoría en desarrollo de guiones.',
    'image'       => '/assets/img/dibujos/guion-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'audiovisual/docencia/entrevistas' => [
    'title'       => 'Entrevistas — Docencia de Cine | Leo Senderovsky',
    'description' => 'Entrevistas y apariciones de Leo Senderovsky como docente y crítico de cine en medios gráficos, radio y plataformas online.',
    'image'       => '/assets/img/dibujos/docencia-1-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'ia/portfolio' => [
    'title'       => 'Portfolio sender.ia — IA Aplicada al Audiovisual | Leo Senderovsky',
    'description' => 'Proyectos realizados con inteligencia artificial para producción de video, automatización de contenido y desarrollo web. sender.ia por Leo Senderovsky.',
    'image'       => '/assets/img/dibujos/ia-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
  ],
  'web/experiencia' => [
    'title'       => 'Experiencia en Desarrollo Web | Leo Senderovsky',
    'description' => 'Trayectoria en desarrollo web Frontend de Leo Senderovsky: proyectos, tecnologías y clientes. React, TypeScript, Tailwind CSS, Vite.',
    'image'       => '/assets/img/dibujos/web-1024w.webp',
    'img_w'       => 1024, 'img_h' => 572,
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