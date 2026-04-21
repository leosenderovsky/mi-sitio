import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineSection } from "../components/TimelineSection";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { portfolioEdicion } from "../data/portfolio-edicion";
import { portfolioReels } from "../data/portfolio-reels";
import { experienciaEdicion } from "../data/experiencia-edicion";
import { educacionEdicion } from "../data/educacion";
import { ContactSection } from "../components/ContactSection";

export function Edicion() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let targetId: string | null = null;
    if (path.endsWith("/experiencia")) targetId = "resume";
    else if (path.endsWith("/portfolio/videos") || path.endsWith("/portfolio"))
      targetId = "portfolio-edicion";
    else if (path.endsWith("/portfolio/reels"))
      targetId = "portfolio-edicion-reels";

    if (targetId) {
      setTimeout(() => {
        document
          .getElementById(targetId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <PageSEO
        title="Edición de Video"
        description="Portfolio de edición de video de Leo Senderovsky. Editor audiovisual senior con más de 15 años de experiencia en documentales, spots publicitarios y contenido para medios como Infobae, LN+ y NBA. Buenos Aires, Argentina."
        path="/audiovisual/edicion"
        keywords="editor de video Buenos Aires, edicion audiovisual, edicion de documentales, postproduccion Argentina, editor freelance"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          {
            name: "Audiovisual",
            url: "https://leosenderovsky.com.ar/#audiovisual",
          },
          {
            name: "Edición de Video",
            url: "https://leosenderovsky.com.ar/audiovisual/edicion",
          },
        ]}
      />

      <section
        id="edicion"
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/edicion/bg-edicion.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="EDICIÓN" subtitle="AUDIOVISUAL" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl text-site-muted font-body leading-relaxed">
            <p className="mb-8">
              ¿Estás buscando un editor para tus proyectos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#resume"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Mi experiencia
              </a>
              <a
                href="#portfolio-edicion"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Mi portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resume"
        className="py-20 bg-gradient-to-r from-[#1A74C0] to-[#19D3FF]"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Mi experiencia"
            subtitle="Edición"
            theme="light"
          />
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] 
                ${
                  activeTab === "experience"
                    ? "bg-[#1B1440] text-white"
                    : "border border-[#1B1440] text-[#1B1440] hover:bg-[#1B1440] hover:text-white transition-colors"
                }`}
            >
              Experiencia laboral
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] ${activeTab === "education" ? "bg-[#1B1440] text-white" : "border border-[#1B1440] text-[#1B1440] hover:bg-[#1B1440] hover:text-white transition-colors"}`}
            >
              Formación académica
            </button>
          </div>
          {activeTab === "experience" ? (
            <TimelineSection
              experiences={experienciaEdicion}
              educations={[]}
              theme="light"
            />
          ) : (
            <TimelineSection
              experiences={[]}
              educations={educacionEdicion}
              theme="light"
            />
          )}
        </div>
      </section>

      <section id="portfolio-edicion" className="py-20 text-white bg-[#1B1440]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio" subtitle="Edición" theme="dark" />
          <div className="mt-12">
            <PortfolioGrid items={portfolioEdicion} initialVisible={9} />
          </div>
        </div>
      </section>

      <section
        id="portfolio-edicion-reels"
        className="py-20 text-white"
        style={{ backgroundColor: "#0d0b2e" }}
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Mi portfolio — Reels"
            subtitle="Edición"
            theme="dark"
          />
          <div className="mt-12">
            <PortfolioGrid items={portfolioReels} initialVisible={9} square />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
