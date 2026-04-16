
import { PageSEO } from '../components/PageSEO';
import { SchemaBreadcrumb } from '../components/SchemaMarkup';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioIA } from '../data/portfolio-ia';


export function IA() {
  useSectionScroll({ portfolio: 'portfolio-ia' });

  return (
    <>
      <PageSEO 
        title="sender.ia — IA Aplicada al Audiovisual" 
        description="sender.ia: proyectos de inteligencia artificial aplicados al audiovisual y web por Leo Senderovsky. Herramientas IA para producción de contenido, automatización y edición de video."
        path="/ia"
        keywords="inteligencia artificial audiovisual, IA para video, sender.ia, automatizacion con IA, herramientas IA contenido"
      />
      <SchemaBreadcrumb items={[
        { name: 'Inicio', url: 'https://leosenderovsky.com.ar/' },
        { name: 'Tecnología & IA', url: 'https://leosenderovsky.com.ar/ia' },
        { name: 'sender.ia', url: 'https://leosenderovsky.com.ar/ia' },
      ]} />
      
      {/* Intro Section */}
      <section id="ia" className="py-20 text-white relative overflow-hidden"  style={{backgroundImage: "url('/assets/img/ia/bg-ia.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',}}>
        <div className="absolute inset-0 bg-[#1c289b] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="sender.ia" subtitle="IA" theme="dark" />
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Texto + subsecciones */}
            <div className="lg:w-1/2 text-white space-y-5" style={{ fontFamily: '"Libre Franklin",sans-serif', fontSize: '14px', lineHeight: '25px' }}>
              <p>Todo lo que hacía por separado —audiovisual, web, contenido— ahora lo hago <strong>potenciado con inteligencia artificial</strong>.</p>
              <p><strong>sender.ia</strong> es la marca bajo la que agrupo mis servicios y proyectos de IA: producción de video generado con IA, desarrollo de sitios y aplicaciones web construidas con IA, y herramientas digitales que automatizan procesos creativos y de comunicación.</p>
              <p><strong>No es el futuro. Es lo que ya estoy haciendo.</strong></p>

              {/* Subsecciones */}
              <div className="mt-6 bg-white/10 rounded-xl p-6 space-y-6">
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.5em', textTransform: 'uppercase' }}>
                    <i className="fa-solid fa-clapperboard mr-2" /> Audiovisual
                  </p>
                  <p className="mt-2 text-white/90">¿Necesitás producción de video de alta calidad sin los tiempos y los costos de una producción tradicional? Utilizo herramientas de IA generativa —imagen, voz, movimiento— para producir piezas audiovisuales que comunican con impacto. Todo el criterio narrativo y editorial de siempre, con las posibilidades que abre la IA.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.5em', textTransform: 'uppercase' }}>
                    <i className="fa-solid fa-desktop mr-2" /> Web
                  </p>
                  <p className="mt-2 text-white/90">¿Querés un sitio web o una landing de alto impacto, desarrollado a medida y en tiempo récord? Construyo sitios y experiencias web combinando desarrollo frontend con flujos de trabajo asistidos por IA. Resultados profesionales, con la solidez técnica que le exijo a cualquier proyecto.</p>
                </div>
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.5em', textTransform: 'uppercase' }}>
                    <i className="fa-solid fa-laptop-code mr-2" /> Apps
                  </p>
                  <p className="mt-2 text-white/90">¿Tenés una idea de herramienta digital y no sabés por dónde empezar? Desarrollo aplicaciones web funcionales —herramientas, generadores, trackers, automatizaciones— utilizando IA como motor de desarrollo. Desde la idea hasta el deploy.</p>
                </div>
              </div>

              <p><strong>sender.ia</strong> condensa todo lo que hice hasta acá: el ojo audiovisual, la solidez en el desarrollo web y la capacidad de incorporar lo nuevo sin perder lo mejor de lo anterior. Si tenés un proyecto que necesite comunicar con fuerza, ya sea en video, en la web o en una app, hablemos.</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#portfolio-ia" className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1c289b] transition-all rounded-full font-heading text-xl uppercase" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.3em', textTransform: 'uppercase' }}>
                  Mirá mis trabajos <i className="fa-solid fa-arrow-down text-sm" />
                </a>
                <a href="/#contacto" className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1c289b] transition-all rounded-full font-heading text-xl uppercase" style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.3em', textTransform: 'uppercase' }}>
                  Contactame <i className="fa-solid fa-arrow-down text-sm" />
                </a>
              </div>
            </div>

            {/* Logo sender.ia */}
            <div className="lg:w-1/2 flex justify-center items-start">
              <img src="/assets/img/ia/logo-senderia-negativo-web.png" alt="sender.ia" className="max-w-sm lg:max-w-md w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio IA */}
      <section
        id="portfolio-ia"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/ia/bg-ia.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Portfolio IA" subtitle="Experimentos y desarrollos" theme="dark" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioIA.map(item => (
                 <a 
                   key={item.id} 
                   href={item.link}
                   className="group relative overflow-hidden rounded-lg shadow-lg bg-black aspect-video cursor-pointer glightbox"
                 >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <div className="font-heading text-white text-sm font-bold uppercase tracking-widest mb-2">{item.category}</div>
                          <h3 className="font-heading text-2xl text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
                          <span className="inline-block bg-white text-site-dark px-6 py-2 rounded-full font-heading uppercase text-sm hover:bg-site-teal hover:text-white transition-colors">
                             {item.link.includes('youtube') ? 'Ver Video' : 'Visitar App'}
                          </span>
                       </div>
                    </div>
                 </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
