import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PageSEO } from '../components/PageSEO';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { FlipCard } from '../components/FlipCard';
import { ServiceCard } from '../components/ServiceCard';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const audiovisualCards = [
  {
    id: 'edicion',
    title: 'Edición',
    icon: 'fa-solid fa-scissors',
    bgColor: '#3844BE',
    description: 'Editor de video senior con más de 15 años de experiencia. Documentales, spots publicitarios y contenido para medios como Infobae y LN+.',
    ctas: [
      { label: 'Ver mi experiencia', href: '/audiovisual/edicion/experiencia' },
      { label: 'Ver mi portfolio de videos', href: '/audiovisual/edicion/portfolio/videos' },
      { label: 'Ver portfolio de reels', href: '/audiovisual/edicion/portfolio/reels' },
    ],
  },
  {
    id: 'guion',
    title: 'Guión',
    icon: 'fa-solid fa-pencil',
    bgColor: '#3844BE',
    description: 'Guionista y consultor de guión freelance. Script doctoring, asesoría y redacción de guiones para cine, TV y publicidad.',
    ctas: [
      { label: 'Ver mi experiencia', href: '/audiovisual/guion/experiencia' },
      { label: 'Ver mi portfolio', href: '/audiovisual/guion/portfolio' },
      { label: 'Ver servicios de consultoría', href: '/audiovisual/guion/consultoria' },
    ],
  },
  {
    id: 'docencia',
    title: 'Docencia',
    icon: 'fa-solid fa-chalkboard-user',
    bgColor: '#3844BE',
    description: 'Charlas y ciclos de cine para instituciones y grupos privados.',
    ctas: [
      { label: 'Ver mis encuentros de cine', href: '/audiovisual/docencia' },
      { label: 'Ver mi experiencia', href: '/audiovisual/docencia/experiencia' },
      { label: 'Ver entrevistas', href: '/audiovisual/docencia/entrevistas' },
    ],
  },
  {
    id: 'critica',
    title: 'Crítica',
    icon: 'fa-solid fa-film',
    bgColor: '#3844BE',
    description: 'Colaboraciones en sitios web, radio y medios gráficos. Archivo completo en mi blog.',
    ctas: [
      { label: 'Ver más', href: '/audiovisual/critica' },
      { label: 'Ver mi experiencia', href: '/audiovisual/critica/experiencia' },
      { label: 'Ver mi blog', href: 'https://blog.leosenderovsky.com.ar', external: true },
    ],
  },
];

const webCard = {
  id: 'web',
  title: 'Desarrollo Web',
  icon: 'fa-solid fa-code',
  bgColor: '#000B77',
  description: 'Sitios y aplicaciones web a medida. Frontend developer con foco en proyectos personales y de pequeñas empresas.',
  ctas: [
    { label: 'Ver mis servicios', href: '/web' },
    { label: 'Ver mi experiencia', href: '/web/experiencia' },
  ],
};

const iaCard = {
  id: 'ia',
  title: 'sender.ia',
  icons: ['fa-solid fa-clapperboard', 'fa-solid fa-laptop-code'],
  bgColor: '#1C289B',
  description: 'Todo lo que hacía por separado —audiovisual y web— ahora potenciado con inteligencia artificial.',
  ctas: [
    { label: 'Ver sender.ia', href: '/ia' },
    { label: 'Ver mi portfolio IA', href: '/ia/portfolio' },
  ],
};

const socialLinks = [
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/lsender/',             icon: 'fa-brands fa-linkedin-in',  cls: 'linkedin'  },
  { label: 'YouTube',    href: 'https://www.youtube.com/c/LeoAquibaSenderovsky',    icon: 'fa-brands fa-youtube',       cls: 'youtube'   },
  { label: 'Behance',    href: 'https://www.behance.net/leosenderovsky',             icon: 'fa-brands fa-behance',       cls: 'behance'   },
  { label: 'Facebook',   href: 'https://www.facebook.com/Leo.Aquiba.Senderovsky',   icon: 'fa-brands fa-facebook-f',    cls: 'facebook'  },
  { label: 'Twitter/X',  href: 'https://twitter.com/leosenderovsky',                icon: 'fa-brands fa-x-twitter',     cls: 'twitter'   },
  { label: 'Instagram',  href: 'https://www.instagram.com/leo.senderovsky/',        icon: 'fa-brands fa-instagram',     cls: 'instagram' },
  { label: 'GitHub',     href: 'https://github.com/leosenderovsky',                 icon: 'fa-brands fa-github',        cls: 'github'    },
];

const COUNTRIES = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia','Australia','Austria',
  'Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Bolivia',
  'Bosnia and Herzegovina','Brazil','Bulgaria','Cambodia','Cameroon','Canada','Chile','China',
  'Colombia','Costa Rica','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Dominican Republic',
  'Ecuador','Egypt','El Salvador','Estonia','Ethiopia','Finland','France','Germany','Ghana','Greece',
  'Guatemala','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel',
  'Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Latvia','Lebanon','Lithuania','Luxembourg',
  'Malaysia','Mexico','Moldova','Monaco','Morocco','Netherlands','New Zealand','Nicaragua','Nigeria',
  'Norway','Pakistan','Panama','Paraguay','Peru','Philippines','Poland','Portugal','Romania',
  'Russian Federation','Saudi Arabia','Senegal','Serbia','Singapore','Slovakia','Slovenia',
  'South Africa','Spain','Sri Lanka','Sweden','Switzerland','Syria','Taiwan','Thailand','Tunisia',
  'Turkey','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan',
  'Venezuela','Viet Nam','Zimbabwe',
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */

export function Home() {
  useSectionScroll();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'GLightbox' in window) {
      const typedWindow = window as Window & {
        GLightbox?: (opts: { selector: string }) => { destroy(): void };
      };
      const lightbox = typedWindow.GLightbox?.({ selector: '.glightbox-home' });
      return () => lightbox?.destroy();
    }
  }, []);

  return (
    <>
      <PageSEO
        title="Inicio"
        description="Sitio de Leo A. Senderovsky, editor de video, consultor de guión, profesor de cine, desarrollador web y especialista en IA."
        path="/"
      />

      {/* ══════════════════════════════════════
          HERO – Flip Cards (igual al legacy)
      ══════════════════════════════════════ */}
      <div id="hero-area" className="hidden md:block" style={{ background: 'url(/assets/img/hero-area-office.jpg) center center no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed', position: 'relative', color: '#fff', overflow: 'hidden', padding: '175px 0 120px' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-3 gap-4 md:gap-6">

            {/* Card 1 — Audiovisual */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FlipCard
                frontTitle="AUDIOVISUAL"
                frontIcon="fa-solid fa-film"
                frontColor="#3844be"
                backSubtitles={['EDICIÓN', 'GUIÓN', 'DOCENCIA']}
                backImage="/assets/img/video-editor-fondo.jpg"
              />
            </motion.div>

            {/* Card 2 — Web */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <FlipCard
                frontTitle="WEB"
                frontIcon="fa-solid fa-code"
                frontColor="#000b77"
                backSubtitles={['FRONT END DEVELOPER']}
                backImage="/assets/img/web-dev-fondo.jpg"
              />
            </motion.div>

            {/* Card 3 — IA */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <FlipCard
                frontTitle="IA"
                frontIcon="fa-solid fa-brain"
                frontColor="#1c289b"
                backSubtitles={['AUDIOVISUAL', 'WEB']}
                backImage="/assets/img/ia-fondo.jpg"
              />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MI BIO – Video + Ilustraciones
      ══════════════════════════════════════ */}
      <div className="py-10" style={{ backgroundColor: '#3844be' }}>
        <div className="container mx-auto px-4">
          <h1
            className="text-center text-white mb-6"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '3.5em', fontWeight: 600, letterSpacing: 1 }}
          >
            Mi bio
          </h1>
          <div className="flex items-center justify-center gap-6">

            {/* Ilustración izquierda */}
            <motion.div
              className="hidden lg:block w-1/4"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/assets/img/dibujos/leo-chico-escribiendo.png" alt="Ilustración chico escribiendo" className="w-full" />
            </motion.div>

            {/* Video con overlay */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <a
                href="https://www.youtube.com/watch?v=r3JxSutQdv8"
                className="block relative group rounded-xl overflow-hidden shadow-2xl glightbox-home"
              >
                <img
                  src="/assets/img/video-portada-hover.jpg"
                  alt="Miniatura de video principal"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="/assets/img/hover.png" alt="Reproducir video" className="w-20 h-auto" />
                </div>
              </a>
            </motion.div>

            {/* Ilustración derecha */}
            <motion.div
              className="hidden lg:block w-1/4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/assets/img/dibujos/leo-grande-editando.png" alt="Ilustración hombre editando" className="w-full" />
            </motion.div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          ACERCA DE MÍ
      ══════════════════════════════════════ */}
      <section id="about" className="py-16" style={{ background: 'rgba(255,255,255,0.92)' }}>
        <div className="container mx-auto px-4">
          <h1
            className="text-center mb-8"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, color: '#000b77', letterSpacing: 1 }}
          >
            Acerca de mí
          </h1>
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Foto */}
            <div className="lg:w-1/4">
              <motion.img
                src="/assets/img/about/about-1.jpg"
                alt="Foto de Leo Senderovsky"
                className="w-full rounded shadow-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              />
            </div>

            {/* Texto literal del legacy */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 text-[#666] text-sm leading-relaxed"
                style={{ fontFamily: '"Libre Franklin", sans-serif' }}
              >
                <p>Me llamo Leo Aquiba Senderovsky (Aquiba es mi segundo nombre). Soy argentino (nacido en Bahía Blanca, vivo en Buenos Aires), soy judío, pisciano, estoy casado con Giselle y tenemos dos príncipes llamados Ezequiel y Uriel.</p>
                <p>En los papeles soy director cinematográfico y profesor en cinematografia (Universidad del Cine 2003-2008). En la práctica cotidiana soy editor de video, guionista y consultor de guión, y docente y crítico de cine. Además, en los últimos años, enfoqué mi capacitación en desarrollo web y, previamente, desarrollé varios sitios.</p>
                <p>Me encanta escribir y hablar de cine y tv.</p>
                <p>Me apasiona contar historias.</p>
                <p>Me entusiasma desarrollar sitios web.</p>
                <p>Me fascina potenciar proyectos con la ayuda de la IA.</p>
                <p>Me motiva incorporar herramientas nuevas para comunicar ideas de la mejor manera posible, ya sea en soporte audiovisual como en la web.</p>
                <p>Ahora que sabés quién soy, te invito a conocer un poco más de los servicios que brindo.</p>
                <p>Gracias por entrar y estoy para lo que necesites.</p>
              </motion.div>
            </div>

            <div className="lg:w-1/4 flex flex-col items-center gap-3">
              <div className="flex flex-col gap-3 max-w-[280px] w-full mx-auto lg:mx-0">
                <div className="flex gap-2">
                  <a
                    href="/audiovisual/cv/#castellano"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-3 border border-[#000b77] text-[#000b77] hover:bg-[#766dff] hover:border-[#766dff] hover:text-white transition-all rounded"
                    style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.1em', textTransform: 'uppercase', minHeight: '54px' }}
                  >
                    CV Audiovisual <span className="fi fi-es shadow-sm" />
                  </a>
                  <a
                    href="/audiovisual/cv/#ingles"
                    className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-3 border border-[#000b77] text-[#000b77] hover:bg-[#766dff] hover:border-[#766dff] hover:text-white transition-all rounded"
                    style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.1em', textTransform: 'uppercase', minHeight: '54px' }}
                  >
                    CV Audiovisual <span className="fi fi-gb shadow-sm" />
                  </a>
                </div>
                <a
                  href="/web/cv"
                  className="flex items-center justify-center gap-2 text-center px-5 py-3 border border-[#000b77] text-[#000b77] hover:bg-[#766dff] hover:border-[#766dff] hover:text-white transition-all rounded w-full"
                  style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.1em', textTransform: 'uppercase', minHeight: '54px' }}
                >
                  CV Web <span className="fi fi-gb shadow-sm ml-1" />
                </a>
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-2 text-center px-5 py-3 border border-[#000b77] text-[#000b77] hover:bg-[#766dff] hover:border-[#766dff] hover:text-white transition-all rounded w-full"
                  style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.1em', textTransform: 'uppercase', minHeight: '54px' }}
                >
                  Contactame <i className="fa-solid fa-arrow-down text-sm ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra social - Fuera de la sección about */}
      <section id="follow" className="w-full py-8" style={{ backgroundColor: '#000b77' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <span
              className="text-white whitespace-nowrap"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '2em', fontWeight: 600, textTransform: 'uppercase' }}
            >
              Seguime en
            </span>
            <ul className="flex flex-wrap justify-center gap-4">
              {socialLinks.map(s => (
                <li key={s.cls}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xl text-white hover:bg-[#766dff] hover:border-[#766dff] transition-all duration-300"
                    title={s.cls}
                  >
                    <i className={`fa-brands ${s.icon}`} />
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
      <section id="services" className="py-12" style={{ backgroundColor: '#3844BE' }}>
        <div className="container mx-auto px-4">
          <h1
            className="text-center text-white mb-8"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, letterSpacing: 1 }}
          >
            Audiovisual
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiovisualCards.map(card => (
              <ServiceCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICIOS WEB & IA
      ══════════════════════════════════════ */}
      <section className="py-12" style={{ backgroundColor: '#000B77' }}>
        <div className="container mx-auto px-4">
          <h1
            className="text-center text-white mb-8"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, letterSpacing: 1 }}
          >
            Web & IA
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ServiceCard {...webCard} />
            <ServiceCard {...iaCard} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACTO
      ══════════════════════════════════════ */}
      <section id="contacto" className="py-16" style={{ background: 'rgba(255,255,255,0.93)' }}>
        <div className="container mx-auto px-4">
          <h1
            className="text-center mb-10"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, color: '#000b77', letterSpacing: 1 }}
          >
            Contactame
          </h1>

          {submitted ? (
            <div className="text-center py-16">
              <p className="text-2xl text-[#000b77]" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif' }}>
                ¡Gracias! Tu mensaje fue enviado correctamente.
              </p>
            </div>
          ) : (
            <form
              id="form"
              action="https://api.web3forms.com/submit"
              method="POST"
              className="max-w-3xl mx-auto"
              onSubmit={() => setSubmitted(false)}
            >
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />
              <input type="hidden" name="redirect" value="https://leosenderovsky.com.ar/gracias" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm text-[#666] mb-1">Nombre <span className="text-red-500">*</span></label>
                  <input type="text" id="nombre" name="nombre" required className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                {/* Apellido */}
                <div>
                  <label htmlFor="apellido" className="block text-sm text-[#666] mb-1">Apellido <span className="text-red-500">*</span></label>
                  <input type="text" id="apellido" name="apellido" required className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm text-[#666] mb-1">Email <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                </div>
                {/* País */}
                <div>
                  <label htmlFor="pais" className="block text-sm text-[#666] mb-1">País</label>
                  <input list="pais-list" id="pais" name="pais" className="w-full border border-gray-300 rounded px-3 py-2 text-sm" />
                  <datalist id="pais-list">
                    {COUNTRIES.map(c => <option key={c} value={c} />)}
                  </datalist>
                </div>
                {/* Servicio */}
                <div>
                  <label htmlFor="servicio" className="block text-sm text-[#666] mb-1">¿En qué servicio estás interesado?</label>
                  <select id="servicio" name="servicio" className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white">
                    <option value="edicion">Edición</option>
                    <option value="guion">Guión</option>
                    <option value="docencia">Docencia</option>
                    <option value="critica">Crítica</option>
                    <option value="web">Desarrollo web</option>
                    <option value="ia">IA / sender.ia</option>
                  </select>
                </div>
                {/* Presupuesto */}
                <div>
                  <p className="block text-sm text-[#666] mb-1">¿Querés pedir un presupuesto de trabajo?</p>
                  <label className="inline-flex items-center gap-1 mr-4 text-sm text-[#666]">
                    <input type="radio" name="presupuesto" value="yes" /> Sí
                  </label>
                  <label className="inline-flex items-center gap-1 text-sm text-[#666]">
                    <input type="radio" name="presupuesto" value="no" /> No
                  </label>
                </div>
              </div>

              {/* Asunto */}
              <div className="mb-4">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Asunto *"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              {/* Mensaje */}
              <div className="mb-6">
                <textarea
                  id="message"
                  name="mensaje"
                  placeholder="Mensaje *"
                  rows={7}
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-10 py-2 border border-gray-300 rounded bg-gray-50 text-[#495057] hover:bg-[#766dff] hover:text-white hover:border-[#766dff] transition-all cursor-pointer"
                  style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.4em', textTransform: 'uppercase' }}
                >
                  Enviar
                </button>
              </div>
            </form>
          )}

          {/* Datos de contacto directo */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#000b77] flex items-center justify-center">
                <i className="fa-solid fa-phone text-white text-xl" />
              </div>
              <a
                href="https://wa.me/5491130452585"
                target="_blank"
                rel="noreferrer"
                className="text-[#000b77] hover:text-[#766dff] transition-colors text-sm"
              >
                + (54 9 11) 3045-2585
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#000b77] flex items-center justify-center">
                <i className="fa-solid fa-envelope text-white text-xl" />
              </div>
              <a
                href="mailto:l.a.senderovsky@gmail.com"
                className="text-[#000b77] hover:text-[#766dff] transition-colors text-sm"
              >
                l.a.senderovsky@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#000b77] flex items-center justify-center">
                <i className="fa-solid fa-location-dot text-white text-xl" />
              </div>
              <p className="text-[#666] text-sm">Buenos Aires, Argentina</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
