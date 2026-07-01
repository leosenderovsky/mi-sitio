import { Helmet } from "react-helmet-async";

// ── SCHEMA GLOBAL (Person + WebSite) ──────────────────────
// Usarlo en App.tsx o en el layout raíz

export function SchemaGlobal() {
  const dateModified = "2026-06-18";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://leosenderovsky.com.ar/#person",
    name: "Leo Aquiba Senderovsky",
    alternateName: "Leo Senderovsky",
    url: "https://leosenderovsky.com.ar",
    image: {
      "@type": "ImageObject",
      url: "https://leosenderovsky.com.ar/assets/img/about/about-1.webp",
      width: 400,
      height: 400,
    },
    description:
      "Editor de video senior, guionista, consultor de guión, docente de cine, desarrollador web Frontend y especialista en IA aplicada al audiovisual. Basado en Buenos Aires, Argentina.",
    dateModified,
    jobTitle: [
      "Editor de Video",
      "Guionista",
      "Consultor de Guión",
      "Docente de Cine",
      "Desarrollador Web Frontend",
      "Especialista en Inteligencia Artificial",
    ],
    nationality: {
      "@type": "Country",
      name: "Argentina",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    email: "l.a.senderovsky@gmail.com",
    telephone: "+5491130452585",
    knowsAbout: [
      "Edición de Video",
      "Post-producción audiovisual",
      "Guión cinematográfico",
      "Script doctoring",
      "Docencia de cine",
      "Crítica cinematográfica",
      "Cine judío",
      "Cine argentino",
      "Desarrollo web Frontend",
      "React",
      "Inteligencia Artificial aplicada al video",
      "sender.ia",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universidad del Cine",
      alternateName: "FUC",
      url: "https://www.ucine.edu.ar",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Buenos Aires",
        addressCountry: "AR",
      },
    },
    sameAs: [
      "https://www.linkedin.com/in/lsender/",
      "https://www.youtube.com/c/LeoAquibaSenderovsky",
      "https://www.behance.net/leosenderovsky",
      "https://www.facebook.com/Leo.Aquiba.Senderovsky",
      "https://twitter.com/leosenderovsky",
      "https://www.instagram.com/leo.senderovsky/",
      "https://github.com/leosenderovsky",
    ],
    affiliation: [
      {
        "@type": "Organization",
        name: "Infobae",
        url: "https://www.infobae.com",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://leosenderovsky.com.ar/#website",
    url: "https://leosenderovsky.com.ar",
    name: "Leo Senderovsky — Portfolio",
    description:
      "Sitio personal y portfolio de Leo Aquiba Senderovsky: editor de video, guionista, docente de cine, desarrollador web y especialista en IA.",
    inLanguage: "es-AR",
    dateModified,
    publisher: {
      "@id": "https://leosenderovsky.com.ar/#person",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://leosenderovsky.com.ar/#professional-service",
    name: "Servicios profesionales de Leo Senderovsky",
    url: "https://leosenderovsky.com.ar",
    image: "https://leosenderovsky.com.ar/assets/img/og-social-preview.webp",
    description:
      "Servicios freelance de ediciÃ³n de video, guiÃ³n, consultorÃ­a narrativa, docencia de cine, desarrollo web Frontend e inteligencia artificial aplicada al audiovisual.",
    founder: { "@id": "https://leosenderovsky.com.ar/#person" },
    areaServed: [
      { "@type": "Country", name: "Argentina" },
      { "@type": "Place", name: "Remoto internacional" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
    email: "l.a.senderovsky@gmail.com",
    telephone: "+5491130452585",
    priceRange: "$$",
    knowsAbout: person.knowsAbout,
    sameAs: person.sameAs,
    dateModified,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [person, website, professionalService],
        })}
      </script>
    </Helmet>
  );
}

// ── SCHEMA SERVICIOS PROFESIONALES ────────────────────────
// Usarlo en Home.tsx

export function SchemaProfessionalServices() {
  const services = [
    {
      "@type": "Service",
      name: "Edición de Video",
      description:
        "Edición audiovisual profesional para documentales, spots publicitarios, contenido para redes sociales y medios de comunicación. Más de 15 años de experiencia.",
      provider: { "@id": "https://leosenderovsky.com.ar/#person" },
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://leosenderovsky.com.ar/audiovisual/edicion",
      serviceType: "Edición de video y post-producción audiovisual",
    },
    {
      "@type": "Service",
      name: "Consultoría de Guión",
      description:
        "Script doctoring, asesoría y redacción de guiones para cine, TV y publicidad. Servicio freelance de consultoría narrativa.",
      provider: { "@id": "https://leosenderovsky.com.ar/#person" },
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://leosenderovsky.com.ar/audiovisual/guion",
      serviceType: "Guión y consultoría narrativa",
    },
    {
      "@type": "Service",
      name: "Docencia de Cine",
      description:
        "Charlas y ciclos de cine para instituciones educativas y grupos privados. Especialización en cine judío, cine argentino y cine en dictadura.",
      provider: { "@id": "https://leosenderovsky.com.ar/#person" },
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://leosenderovsky.com.ar/audiovisual/docencia",
      serviceType: "Docencia y divulgación cinematográfica",
    },
    {
      "@type": "Service",
      name: "Desarrollo Web Frontend",
      description:
        "Desarrollo de sitios y aplicaciones web a medida. Frontend developer con React, HTML, CSS y JavaScript para proyectos personales y pymes.",
      provider: { "@id": "https://leosenderovsky.com.ar/#person" },
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://leosenderovsky.com.ar/web",
      serviceType: "Desarrollo web Frontend",
    },
    {
      "@type": "Service",
      name: "sender.ia — IA Aplicada al Audiovisual",
      description:
        "Proyectos de inteligencia artificial aplicados al sector audiovisual y web. Automatización, herramientas IA para producción de contenido.",
      provider: { "@id": "https://leosenderovsky.com.ar/#person" },
      areaServed: { "@type": "Country", name: "Argentina" },
      url: "https://leosenderovsky.com.ar/ia",
      serviceType: "Inteligencia Artificial aplicada al audiovisual",
    },
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Servicios de Leo Senderovsky",
          numberOfItems: services.length,
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: s,
          })),
        })}
      </script>
    </Helmet>
  );
}

// ── SCHEMA BREADCRUMB ────────────────────────────────────
// Props: items = [{ name, url }]
// Usarlo en cada página de nivel 2 en adelante

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function SchemaBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ── SCHEMA VIDEO ─────────────────────────────────────────
// Usarlo en páginas de portfolio de edición

interface SchemaVideoProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl?: string;
  embedUrl?: string;
  duration?: string; // ISO 8601, ej: "PT3M22S"
}

export function SchemaVideo(props: SchemaVideoProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl,
    uploadDate: props.uploadDate,
    author: { "@id": "https://leosenderovsky.com.ar/#person" },
    ...(props.contentUrl && { contentUrl: props.contentUrl }),
    ...(props.embedUrl && { embedUrl: props.embedUrl }),
    ...(props.duration && { duration: props.duration }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ── SCHEMA CURSO / EVENTO EDUCATIVO ──────────────────────
// Usarlo en la página de Docencia

export function SchemaCourse({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: name,
    description: description,
    url: url,
    provider: { "@id": "https://leosenderovsky.com.ar/#person" },
    inLanguage: "es",
    availableLanguage: "es",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

// ── SCHEMA PROFILE PAGE ────────────────────────────────
// Usarlo en páginas de CV

export function SchemaProfilePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: { "@id": "https://leosenderovsky.com.ar/#person" },
    url: "https://leosenderovsky.com.ar/sobre-mi/cv-audiovisual",
    name: "CV de Leo Senderovsky — Editor de Video y Guionista",
    description:
      "Curriculum Vitae completo de Leo Aquiba Senderovsky: editor de video, guionista y consultor de guión con más de 15 años de experiencia.",
    inLanguage: ["es", "en"],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
