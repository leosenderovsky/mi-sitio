import ResponsiveBackground from "../components/ResponsiveBackground";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { portfolioIA } from "../data/portfolio-ia";
import { VideoThumb } from "../components/PortfolioGrid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClapperboard,
  faDesktop,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const SECTION_MAP = { portfolio: "portfolio-ia" };

export function IA() {
  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="IA para Video, Sitios Web y Apps — sender.ia"
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
      <ResponsiveBackground
        id="servicios"
        src="/assets/img/ia/bg-ia.webp"
        srcSet="/assets/img/ia/bg-ia-480w.webp 480w,
                /assets/img/ia/bg-ia-768w.webp 768w,
                /assets/img/ia/bg-ia-1280w.webp 1280w,
                /assets/img/ia/bg-ia-1920w.webp 1920w"
        sizes="100vw"
        className="py-20 text-white"
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="IA" subtitle="Audiovisual + Web" theme="dark" />
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
            {/* Texto + subsecciones */}
            <div className="space-y-4 text-center text-white leading-relaxed">
              <p
                style={{
                  textAlign: "justify",
                  fontFamily: '"Libre Franklin", sans-serif',
                  fontSize: "1.1em",
                  fontWeight: 300,
                  width: "80%",
                  margin: "0 auto 20px",
                }}
              >
                Todo lo que hacía por separado —audiovisual, web, contenido—
                ahora lo hago{" "}
                <span style={{ fontWeight: "bold" }}>
                  potenciado con inteligencia artificial
                </span>
                .
              </p>
              <p
                style={{
                  textAlign: "justify",
                  fontFamily: '"Libre Franklin", sans-serif',
                  fontSize: "1.1em",
                  fontWeight: 300,
                  width: "80%",
                  margin: "0 auto 20px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>sender.ia</span> es la
                marca bajo la que agrupo mis servicios y proyectos de IA:
                producción de video generado con IA, desarrollo de sitios y
                aplicaciones web construidas con IA, y herramientas digitales
                que automatizan procesos creativos y de comunicación.
              </p>
              <p
                style={{
                  textAlign: "justify",
                  fontFamily: '"Libre Franklin", sans-serif',
                  fontSize: "1.1em",
                  fontWeight: 300,
                  width: "80%",
                  margin: "0 auto 20px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  No es el futuro. Es lo que ya estoy haciendo.
                </span>
              </p>

              {/* Logo sender.ia (Mobile) */}
              <div className="flex lg:hidden justify-center items-center py-4">
                <img
                  src="/assets/img/ia/logo-senderia-negativo-web.webp"
                  alt="sender.ia"
                  className="max-w-sm w-full"
                  loading="lazy"
                  width="448"
                  height="288"
                />
              </div>
            </div>

            {/* Logo sender.ia (Desktop) */}
            <div className="hidden lg:flex lg:w-1/2 justify-center items-center">
              <img
                src="/assets/img/ia/logo-senderia-negativo-web.webp"
                alt="sender.ia"
                className="lg:max-w-md w-full"
                loading="lazy"
                width="448"
                height="288"
              />
            </div>
          </div>

          {/* Sección Inferior (Columna Central) */}
          <div
            className="mt-12 text-white space-y-8 max-w-4xl mx-auto"
            style={{
              fontFamily: '"Libre Franklin",sans-serif',
              fontSize: "14px",
              lineHeight: "25px",
            }}
          >
            {/* Subsecciones */}
            <div className="bg-white/10 rounded-xl p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:text-center">
              <div>
                <p
                  className="text-white text-center font-bold text-lg"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.5em",
                    textTransform: "uppercase",
                  }}
                >
                  <FontAwesomeIcon icon={faClapperboard} className="mr-2" />{" "}
                  Audiovisual
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  ¿Necesitás producción de video de alta calidad sin los tiempos
                  y los costos de una producción tradicional?
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  Utilizo herramientas de IA generativa —imagen, voz,
                  movimiento— para producir piezas audiovisuales que comunican
                  con impacto.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  Todo el criterio narrativo y editorial de siempre, con las
                  posibilidades que abre la IA.
                </p>
              </div>
              <div>
                <p
                  className="text-white text-center font-bold text-lg"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.5em",
                    textTransform: "uppercase",
                  }}
                >
                  <FontAwesomeIcon icon={faDesktop} className="mr-2" /> Web
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  ¿Querés un sitio web o una landing de alto impacto,
                  desarrollado a medida y en tiempo récord?
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  Construyo sitios y experiencias web combinando desarrollo
                  frontend con flujos de trabajo asistidos por IA.
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  Resultados profesionales, con la solidez técnica que le exijo
                  a cualquier proyecto.
                </p>
              </div>
              <div>
                <p
                  className="text-white text-center font-bold text-lg"
                  style={{
                    fontFamily: '"Yanone Kaffeesatz",sans-serif',
                    fontSize: "1.5em",
                    textTransform: "uppercase",
                  }}
                >
                  <FontAwesomeIcon icon={faLaptopCode} className="mr-2" /> Apps
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  ¿Tenés una idea de herramienta digital y no sabés por dónde
                  empezar?
                </p>
                <p
                  style={{
                    textAlign: "justify",
                    fontFamily: '"Libre Franklin", sans-serif',
                    fontSize: "1.1em",
                    fontWeight: 300,
                    width: "80%",
                    margin: "0 auto 10px",
                  }}
                >
                  Desarrollo aplicaciones web funcionales —herramientas,
                  generadores, trackers, automatizaciones— utilizando IA como
                  motor de desarrollo. Desde la idea hasta el deploy.
                </p>
              </div>
            </div>

            <p
              style={{
                textAlign: "justify",
                fontFamily: '"Libre Franklin", sans-serif',
                fontSize: "1.1em",
                fontWeight: 300,
                width: "80%",
                margin: "20px auto 20px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>sender.ia</span> condensa
              todo lo que hice hasta acá: el ojo audiovisual, la solidez en el
              desarrollo web y la capacidad de incorporar lo nuevo sin perder lo
              mejor de lo anterior. Si tenés un proyecto que necesite comunicar
              con fuerza, ya sea en video, en la web o en una app, hablemos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-center mt-10">
              <a
                href="#portfolio-ia"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
                style={{
                  fontFamily: '"Yanone Kaffeesatz",sans-serif',
                  fontSize: "1.3em",
                  textTransform: "uppercase",
                }}
              >
                Mirá mis trabajos
              </a>
              <a
                href="#contacto"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
                style={{
                  fontFamily: '"Yanone Kaffeesatz",sans-serif',
                  fontSize: "1.3em",
                  textTransform: "uppercase",
                }}
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </ResponsiveBackground>

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
    </>
  );
}
