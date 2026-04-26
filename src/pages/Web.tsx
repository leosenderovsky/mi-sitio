import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { experienciaWeb } from "../data/experiencia-web";
import { ContactSection } from "../components/ContactSection";

export function Web() {
  useSectionScroll({ experiencia: "timeline-web" });

  return (
    <>
      <PageSEO
        title="Desarrollo Web Frontend"
        description="Desarrollo de sitios web y aplicaciones a medida por Leo Senderovsky. Frontend developer con React, HTML y CSS. Portfolio de proyectos web para pymes y proyectos personales."
        path="/web"
        keywords="desarrollador web Buenos Aires, frontend developer Argentina, desarrollo web React, sitios web a medida"
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
          alt="Fondo — proyectos web"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="DESARROLLO" subtitle="WEB" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl font-body leading-relaxed text-white/90">
            <p className="mb-4">
              Desde mis primeros trabajos, en empresas de desarrollo web, me
              tocó conjugar el audiovisual con los recursos del mundo de la
              programación.
            </p>
            <p className="mb-4">
              Allí empecé a conocer algunas herramientas de desarrollo y de seo
              que me permitieron encarar, los años siguientes, varios proyectos
              web en plataformas como Joomla y Wordpress y, más recientemente,
              hice cursos de desarrollo frontend para poder llevar estos
              conocimientos a otro nivel.
            </p>
            <p className="mb-8">
              Quiero seguir explorando el mundo del desarrollo web, realizando
              sitios personalizados para particulares y empresas. ¿Me acompañás?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#timeline-web"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#0D0B2E] transition-colors font-heading text-xl uppercase"
              >
                Mis proyectos
              </a>
              <a
                href="#contacto"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-site-teal transition-colors font-heading text-xl uppercase"
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
      <ContactSection />
    </>
  );
}
