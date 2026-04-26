import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageSEO } from "../components/PageSEO";
import { SchemaProfessionalServices } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { FlipCard } from "../components/FlipCard";
import { ServiceCard } from "../components/ServiceCard";
import { ContactSection } from "../components/ContactSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScissors,
  faPencil,
  faChalkboardUser,
  faFilm,
  faCode,
  faClapperboard,
  faLaptopCode,
  faArrowDown,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faYoutube,
  faBehance,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const audiovisualCards = [
  {
    id: "edicion",
    title: "Edición",
    image: "/assets/img/dibujos/edicion.webp",
    icon: faScissors,
    bgColor: "#19D3FF",
    description:
      "Editor de video senior con más de 15 años de experiencia. Documentales, spots publicitarios y contenido para medios como Infobae.",
    ctas: [
      { label: "Ver mi experiencia", href: "/audiovisual/edicion/experiencia" },
      {
        label: "Ver mi portfolio de videos",
        href: "/audiovisual/edicion/portfolio",
      },
      {
        label: "Ver portfolio de reels",
        href: "/audiovisual/edicion/portfolio/reels",
      },
    ],
  },
  {
    id: "guion",
    title: "Guión",
    image: "/assets/img/dibujos/guion.webp",
    icon: faPencil,
    bgColor: "#19D3FF",
    description:
      "Guionista y consultor de guión freelance. Script doctoring, asesoría y redacción de guiones para cine, TV y publicidad.",
    ctas: [
      { label: "Ver mi experiencia", href: "/audiovisual/guion/experiencia" },
      { label: "Ver mi portfolio", href: "/audiovisual/guion/portfolio" },
      {
        label: "Ver servicios de consultoría",
        href: "/audiovisual/guion/consultoria",
      },
    ],
  },
  {
    id: "docencia",
    title: "Docencia",
    image: "/assets/img/dibujos/docencia-1.webp",
    icon: faChalkboardUser,
    bgColor: "#19D3FF",
    description:
      "Charlas y ciclos de cine para instituciones y grupos privados.",
    ctas: [
      { label: "Ver mis encuentros de cine", href: "/audiovisual/docencia" },
      {
        label: "Ver mi experiencia",
        href: "/audiovisual/docencia/experiencia",
      },
      { label: "Ver entrevistas", href: "/audiovisual/docencia/entrevistas" },
    ],
  },
  {
    id: "critica",
    title: "Crítica",
    image: "/assets/img/dibujos/critica.webp",
    icon: faFilm,
    bgColor: "#19D3FF",
    description:
      "Colaboraciones en sitios web, radio y medios gráficos. Archivo completo en mi blog.",
    ctas: [
      { label: "Ver más", href: "/audiovisual/critica" },
      { label: "Ver mi experiencia", href: "/audiovisual/critica/experiencia" },
      {
        label: "Ver mi blog",
        href: "https://blog.leosenderovsky.com.ar",
        external: true,
      },
    ],
  },
];

const webCard = {
  id: "web",
  title: "Desarrollo Web",
  image: "/assets/img/dibujos/web.webp",
  icon: faCode,
  bgColor: "#19D3FF",
  description:
    "Sitios y aplicaciones web a medida. Frontend developer con foco en proyectos personales y de pequeñas empresas.",
  ctas: [
    { label: "Ver mis servicios", href: "/web" },
    { label: "Ver mi experiencia", href: "/web/experiencia" },
  ],
};

const iaCard = {
  id: "ia",
  title: "sender.ia",
  image: "/assets/img/dibujos/ia.webp",
  icons: [faClapperboard, faLaptopCode],
  bgColor: "#19D3FF",
  description:
    "Todo lo que hacía por separado —audiovisual y web— ahora potenciado con inteligencia artificial.",
  ctas: [
    { label: "Ver sender.ia", href: "/ia" },
    { label: "Ver mi portfolio IA", href: "/ia/portfolio" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lsender/",
    icon: faLinkedinIn,
    cls: "linkedin",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/c/LeoAquibaSenderovsky",
    icon: faYoutube,
    cls: "youtube",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/leosenderovsky",
    icon: faBehance,
    cls: "behance",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Leo.Aquiba.Senderovsky",
    icon: faFacebookF,
    cls: "facebook",
  },
  {
    label: "Twitter/X",
    href: "https://twitter.com/leosenderovsky",
    icon: faXTwitter,
    cls: "twitter",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leo.senderovsky/",
    icon: faInstagram,
    cls: "instagram",
  },
  {
    label: "GitHub",
    href: "https://github.com/leosenderovsky",
    icon: faGithub,
    cls: "github",
  },
];

// Countries moved to src/data/countries.ts

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */

export function Home() {
  useSectionScroll();

  useEffect(() => {
    if (typeof window !== "undefined" && "GLightbox" in window) {
      const lightbox = window.GLightbox?.({ selector: ".glightbox-home" });
      return () => lightbox?.destroy();
    }
  }, []);

  return (
    <>
      <PageSEO
        title="Inicio"
        description="Leo Aquiba Senderovsky: editor de video senior con 15+ años de experiencia, guionista y consultor de guión, docente de cine, desarrollador web Frontend y especialista en IA. Buenos Aires, Argentina."
        path="/"
        keywords="editor de video Buenos Aires, editor audiovisual Argentina, consultor de guion, script doctor, docente de cine, critica de cine, desarrollador web Frontend, inteligencia artificial audiovisual, sender.ia"
      />
      <SchemaProfessionalServices />

      {/* ══════════════════════════════════════
          HERO – Flip Cards (igual al legacy)
      ══════════════════════════════════════ */}
      <div
        id="hero-area"
        className="hidden md:block relative overflow-hidden min-h-[600px] py-20 lg:pt-[80px] lg:pb-[120px] text-white"
      >
        {/* Background Image Optimized for LCP */}
        <img
          src="/assets/img/hero-area-office.webp"
          alt="Leo Senderovsky Workspace"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width="1920"
          height="600"
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {/* Card 1 — Audiovisual */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FlipCard
                frontTitle="AUDIOVISUAL"
                frontIcon={faFilm}
                frontColor="#19D3FF"
                backSubtitles={["EDICIÓN", "GUIÓN", "DOCENCIA", "CRÍTICA"]}
                backImage="/assets/img/video-editor-fondo.webp"
              />
            </motion.div>

            {/* Card 2 — Web */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FlipCard
                frontTitle="WEB"
                frontIcon={faCode}
                frontColor="#1A74A0"
                backSubtitles={["FRONT END DEVELOPER"]}
                backImage="/assets/img/web-dev-fondo.webp"
              />
            </motion.div>

            {/* Card 3 — IA */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <FlipCard
                frontTitle="IA"
                frontIcon={faBrain}
                frontColor="#1B1440"
                backSubtitles={["AUDIOVISUAL", "WEB"]}
                backImage="/assets/img/ia-fondo.webp"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MI BIO – Video + Ilustraciones
      ══════════════════════════════════════ */}
      <div
        className="py-10"
        style={{
          background: "linear-gradient(to right, #1B1440, #1A74A0, #19D3FF)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[4em] uppercase text-center text-white mb-8 px-4">
            Mi bio
          </h2>
          <div className="flex items-center justify-center gap-6">
            {/* Ilustración izquierda */}
            <motion.div
              className="hidden lg:block w-1/4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/img/dibujos/leo-chico-escribiendo.webp"
                alt="Ilustración chico escribiendo"
                className="w-full rounded-2xl"
                loading="lazy"
                width="400"
                height="400"
              />
            </motion.div>

            {/* Video con overlay */}
            <div className="w-full lg:w-1/2 bg-site-dark/20 rounded-xl overflow-hidden aspect-video">
              <a
                href="https://www.youtube.com/watch?v=r3JxSutQdv8"
                className="block relative group glightbox-home"
              >
                <img
                  src="/assets/img/video-portada.webp"
                  alt="Miniatura de video principal"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  fetchPriority="high"
                  width="800"
                  height="450"
                  style={{ aspectRatio: "16/9" }}
                />
                <div className="absolute inset-0 bg-site-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <img
                    src="/assets/img/hover.webp"
                    alt="Reproducir video"
                    width="80"
                    height="80"
                    className="w-20 h-auto"
                  />
                </div>
              </a>
            </div>

            {/* Ilustración derecha */}
            <motion.div
              className="hidden lg:block w-1/4 "
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/assets/img/dibujos/leo-grande-editando.webp"
                alt="Ilustración hombre editando"
                className="w-full rounded-2xl"
                loading="lazy"
                width="400"
                height="400"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ACERCA DE MÍ
      ══════════════════════════════════════ */}
      <section id="about" className="py-16" style={{ background: "#0D0B2E" }}>
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[4em] uppercase text-center text-white mb-8 px-4">
            Acerca de mí
          </h2>
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Foto */}
            <div className="lg:w-1/4">
              <motion.img
                src="/assets/img/about/about-1.webp"
                alt="Foto de Leo Senderovsky"
                className="w-full rounded shadow-lg border border-white"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                loading="lazy"
                width="350"
                height="450"
              />
            </div>

            {/* Texto literal del legacy */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-white text-sm leading-relaxed"
                style={{ fontFamily: '"Libre Franklin", sans-serif' }}
              >
                <p>
                  Me llamo Leo Aquiba Senderovsky (Aquiba es mi segundo nombre).
                  Soy argentino (nacido en Bahía Blanca, vivo en Buenos Aires),
                  soy judío, pisciano, estoy casado con Giselle y tenemos dos
                  príncipes llamados Ezequiel y Uriel.
                </p>
                <p>
                  En los papeles soy director cinematográfico y profesor en
                  cinematografia (Universidad del Cine 2003-2008). En la
                  práctica cotidiana soy editor de video, guionista y consultor
                  de guión, y docente y crítico de cine. Además, en los últimos
                  años, enfoqué mi capacitación en desarrollo web y,
                  previamente, desarrollé varios sitios.
                </p>
                <p>Me encanta escribir y hablar de cine y tv.</p>
                <p>Me apasiona contar historias.</p>
                <p>Me entusiasma desarrollar sitios web.</p>
                <p>Me fascina potenciar proyectos con la ayuda de la IA.</p>
                <p>
                  Me motiva incorporar herramientas nuevas para comunicar ideas
                  de la mejor manera posible, ya sea en soporte audiovisual como
                  en la web.
                </p>
                <p>
                  Ahora que sabés quién soy, te invito a conocer un poco más de
                  los servicios que brindo.
                </p>
                <p>Gracias por entrar y estoy para lo que necesites.</p>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-end gap-3">
              <div className="flex flex-col gap-3 max-w-[280px] w-full mx-auto lg:mx-0">
                <div className="flex gap-2">
                  <a
                    href="/audiovisual/cv/castellano"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-3 border border-white text-white hover:bg-[#1A74A0] hover:border-[#1A74A0] hover:text-white transition-all rounded"
                    style={{
                      fontFamily: '"Yanone Kaffeesatz",sans-serif',
                      fontSize: "1.1em",
                      textTransform: "uppercase",
                      minHeight: "54px",
                    }}
                  >
                    CV Audiovisual <span className="fi fi-es shadow-sm" />
                  </a>
                  <a
                    href="/audiovisual/cv/ingles"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-3 border border-white text-white hover:bg-[#1A74A0] hover:border-[#1A74A0] hover:text-white transition-all rounded"
                    style={{
                      fontFamily: '"Yanone Kaffeesatz",sans-serif',
                      fontSize: "1.1em",
                      textTransform: "uppercase",
                      minHeight: "54px",
                    }}
                  >
                    CV Audiovisual <span className="fi fi-gb shadow-sm" />
                  </a>
                </div>
                <a
                  href="/web/cv"
                  className="flex items-center justify-center gap-2 text-center px-5 py-3 border border-white text-white hover:bg-[#1A74A0] hover:border-[#1A74A0] hover:text-white transition-all rounded w-full"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.1em",
                    textTransform: "uppercase",
                    minHeight: "54px",
                  }}
                >
                  CV Web <span className="fi fi-gb shadow-sm ml-1" />
                </a>
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-2 text-center px-5 py-3 border border-white text-white hover:bg-[#1A74A0] hover:border-[#1A74A0] hover:text-white transition-all rounded w-full"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.1em",
                    textTransform: "uppercase",
                    minHeight: "54px",
                  }}
                >
                  Contactame{" "}
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="text-sm ml-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra social - Fuera de la sección about */}
      <section
        id="follow"
        className="shadow-lg w-full py-8"
        style={{
          background: "#19D3FF",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <span
              className="text-[#1B1440] whitespace-nowrap"
              style={{
                fontFamily: '"Yanone Kaffeesatz",sans-serif',
                fontSize: "2em",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Seguime en
            </span>
            <ul className="flex flex-wrap justify-center gap-4 max-w-[300px] md:max-w-none mx-auto md:mx-0">
              {socialLinks.map((s) => (
                <li key={s.cls}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-[#1B1440] flex items-center justify-center text-xl text-[#1B1440] hover:bg-[#1B1440] hover:border-[#1B1440] hover:text-white transition-all duration-300"
                    title={s.label}
                  >
                    <FontAwesomeIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICIOS AUDIOVISUAL
      ══════════════════════════════════════ */}
      <section
        id="services"
        className="py-12"
        style={{ backgroundColor: "#1B1440" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[4em] uppercase text-center text-white mb-8 px-4">
            Audiovisual
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiovisualCards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICIOS WEB & IA
      ══════════════════════════════════════ */}
      <section className="py-12" style={{ backgroundColor: "#0D0B2E" }}>
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl lg:text-[4em] uppercase text-center text-white mb-8 px-4">
            Web & IA
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ServiceCard {...webCard} />
            <ServiceCard {...iaCard} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACTO
      ══════════════════════════════════════ */}
      <ContactSection />
    </>
  );
}
