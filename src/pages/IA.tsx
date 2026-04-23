import { useEffect } from "react";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioIA } from "../data/portfolio-ia";
import { VideoThumb } from "../components/PortfolioGrid";
import { ContactSection } from "../components/ContactSection";

export function IA() {
  useSectionScroll({ portfolio: "portfolio-ia" });

  useEffect(() => {
    const lightbox = window.GLightbox?.({
      selector: ".glightbox",
    });
    return () => lightbox?.destroy();
  }, []);

  return (
    <>
      <PageSEO
        title="sender.ia — IA Aplicada al Audiovisual"
        description="sender.ia: proyectos de inteligencia artificial aplicados al audiovisual y web por Leo Senderovsky. Herramientas IA para producción de contenido, automatización y edición de video."
        path="/ia"
        keywords="inteligencia artificial audiovisual, IA para video, sender.ia, automatizacion con IA, herramientas IA contenido"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          { name: "Tecnología & IA", url: "https://leosenderovsky.com.ar/ia" },
          { name: "sender.ia", url: "https://leosenderovsky.com.ar/ia" },
        ]}
      />

      {/* Intro Section */}
      <section
        id="servicios"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/ia/bg-ia.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="IA" subtitle="Audiovisual + Web" theme="dark" />
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Texto + subsecciones */}
            <div
              className="lg:w-1/2 text-white space-y-5"
              style={{
                fontFamily: '"Libre Franklin",sans-serif',
                fontSize: "14px",
                lineHeight: "25px",
              }}
            >
              <p>
                Todo lo que hacía por separado —audiovisual, web, contenido—
                ahora lo hago{" "}
                <strong>potenciado con inteligencia artificial</strong>.
              </p>
              <p>
                <strong>sender.ia</strong> es la marca bajo la que agrupo mis
                servicios y proyectos de IA: producción de video generado con
                IA, desarrollo de sitios y aplicaciones web construidas con IA,
                y herramientas digitales que automatizan procesos creativos y de
                comunicación.
              </p>
              <p>
                <strong>No es el futuro. Es lo que ya estoy haciendo.</strong>
              </p>

              {/* Subsecciones */}
              <div className="mt-6 bg-white/10 rounded-xl p-6 space-y-6">
                <div>
                  <p
                    className="text-white font-bold text-lg"
                    style={{
                      fontFamily: '"Yanone Kaffeesatz",sans-serif',
                      fontSize: "1.5em",
                      textTransform: "uppercase",
                    }}
                  >
                    <i className="fa-solid fa-clapperboard mr-2" /> Audiovisual
                  </p>
                  <p className="mt-2 text-white/90">
                    ¿Necesitás producción de video de alta calidad sin los
                    tiempos y los costos de una producción tradicional? Utilizo
                    herramientas de IA generativa —imagen, voz, movimiento— para
                    producir piezas audiovisuales que comunican con impacto.
                    Todo el criterio narrativo y editorial de siempre, con las
                    posibilidades que abre la IA.
                  </p>
                </div>
                <div>
                  <p
                    className="text-white font-bold text-lg"
                    style={{
                      fontFamily: '"Yanone Kaffeesatz",sans-serif',
                      fontSize: "1.5em",
                      textTransform: "uppercase",
                    }}
                  >
                    <i className="fa-solid fa-desktop mr-2" /> Web
                  </p>
                  <p className="mt-2 text-white/90">
                    ¿Querés un sitio web o una landing de alto impacto,
                    desarrollado a medida y en tiempo récord? Construyo sitios y
                    experiencias web combinando desarrollo frontend con flujos
                    de trabajo asistidos por IA. Resultados profesionales, con
                    la solidez técnica que le exijo a cualquier proyecto.
                  </p>
                </div>
                <div>
                  <p
                    className="text-white font-bold text-lg"
                    style={{
                      fontFamily: '"Yanone Kaffeesatz",sans-serif',
                      fontSize: "1.5em",
                      textTransform: "uppercase",
                    }}
                  >
                    <i className="fa-solid fa-laptop-code mr-2" /> Apps
                  </p>
                  <p className="mt-2 text-white/90">
                    ¿Tenés una idea de herramienta digital y no sabés por dónde
                    empezar? Desarrollo aplicaciones web funcionales
                    —herramientas, generadores, trackers, automatizaciones—
                    utilizando IA como motor de desarrollo. Desde la idea hasta
                    el deploy.
                  </p>
                </div>
              </div>

              <p>
                <strong>sender.ia</strong> condensa todo lo que hice hasta acá:
                el ojo audiovisual, la solidez en el desarrollo web y la
                capacidad de incorporar lo nuevo sin perder lo mejor de lo
                anterior. Si tenés un proyecto que necesite comunicar con
                fuerza, ya sea en video, en la web o en una app, hablemos.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#portfolio-ia"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1A74A0] transition-all rounded-full font-heading text-xl uppercase"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Mirá mis trabajos{" "}
                  <i className="fa-solid fa-arrow-down text-sm" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1A74A0] transition-all rounded-full font-heading text-xl uppercase"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.3em",
                    textTransform: "uppercase",
                  }}
                >
                  Contactame <i className="fa-solid fa-arrow-down text-sm" />
                </a>
              </div>
            </div>

            {/* Logo sender.ia */}
            <div className="lg:w-1/2 flex justify-center items-start">
              <img
                src="/assets/img/ia/logo-senderia-negativo-web.png"
                alt="sender.ia"
                className="max-w-sm lg:max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio IA */}
      <section
        id="portfolio-ia"
        className="py-20 text-white"
        style={{ backgroundColor: "#0D0B2E" }}
      >
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Portfolio" subtitle="IA" theme="dark" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioIA.map((item) => (
              <VideoThumb
                key={item.id}
                item={{
                  ...item,
                  subtitle: item.description,
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
