import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { experienciaWeb } from "../data/experiencia-web";

const SECTION_MAP = { experiencia: "timeline-web" };

export function Web() {
  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="Desarrollo Web Frontend"
        description="Desarrollo de sitios web y aplicaciones a medida por Leo Senderovsky. Frontend developer con React, HTML y CSS. Portfolio de proyectos web para pymes y proyectos personales."
        path="/web"
        keywords="desarrollo web frontend Buenos Aires, sitios web React, frontend developer Argentina, diseño web a medida"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          { name: "Web", url: "https://leosenderovsky.com.ar/web" },
          {
            name: "Desarrollo Web Frontend",
            url: "https://leosenderovsky.com.ar/web",
          },
        ]}
      />

      <section
        id="servicios"
        className="py-20 text-white text-center relative overflow-hidden min-h-[400px] flex items-center"
      >
        <img
          src="/assets/img/web/bg-web.webp"
          srcSet="/assets/img/web/bg-web-480w.webp 480w,
                  /assets/img/web/bg-web-768w.webp 768w,
                  /assets/img/web/bg-web-1280w.webp 1280w,
                  /assets/img/web/bg-web-1920w.webp 1920w"
          sizes="100vw"
          alt="Fondo — proyectos web"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="DESARROLLO" subtitle="WEB" theme="dark" />
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
              Vengo del audiovisual, pero el desarrollo web estuvo cerca desde
              mis primeros trabajos.
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
              Años trabajando en producción digital me llevaron a entender que
              una buena presencia online requiere el mismo criterio que un buen
              video: Estructura clara, jerarquía visual y comunicar de manera
              efectiva.
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
              Desarrolllo sitios web a medida con React, HTML y CSS — desde
              portfolios y landings hasta sitios institucionales. Trabajo de
              manera freelance desde Buenos Aires, para clientes de Argentina y
              Latinoamérica.
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
              Si tenés un proyecto web en mente —sitio personal, institucional,
              portfolio, landing— hablemos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#timeline-web"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Mis proyectos
              </a>
              <a
                href="#contacto"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="timeline-web"
        className="py-20 text-white"
        style={{ backgroundColor: "#1A74A0" }}
      >
        <div className="container mx-auto px-4">
          <SectionHeader title="Mis proyectos" subtitle="Web" theme="dark" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienciaWeb.map((item) => (
              <div
                key={item.id}
                className="bg-[#1B1440] rounded-3xl shadow-lg overflow-hidden border border-transparent hover:shadow-2xl transition-shadow group"
              >
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100 relative overflow-hidden">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="font-heading text-2xl text-white">
                      {item.title}
                    </div>
                  )}
                  {item.link && (
                    <div className="absolute inset-0 bg-site-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-site-teal px-6 py-2 rounded-full font-heading uppercase text-sm hover:bg-site-dark hover:text-white transition-colors"
                      >
                        Visitar sitio
                      </a>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="font-heading uppercase text-white font-bold text-sm mb-3">
                    {item.period}
                  </div>
                  <p className="text-white">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
