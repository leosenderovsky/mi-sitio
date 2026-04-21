import { useState } from "react";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { TimelineSection } from "../components/TimelineSection";
import { portfolioGuion } from "../data/portfolio-guion";
import { educacionGuion } from "../data/educacion";
import { experienciaGuion } from "../data/experiencia-guion";
import { ContactSection } from "../components/ContactSection";

const SECTION_MAP = {
  experiencia: "resume",
  portfolio: "portfolio-guion",
  consultoria: "consultoria",
};

export function Guion() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="Guión y Consultoría de Guión"
        description="Servicios de guión cinematográfico y consultoría narrativa (script doctoring) por Leo Senderovsky. Asesoría de guiones para cine, televisión y publicidad. Freelance, Buenos Aires, Argentina."
        path="/audiovisual/guion"
        keywords="guionista freelance Argentina, consultor de guion, script doctor Buenos Aires, asesor de guion, guion cinematografico, script doctoring"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          {
            name: "Audiovisual",
            url: "https://leosenderovsky.com.ar/#audiovisual",
          },
          {
            name: "Guión y Consultoría",
            url: "https://leosenderovsky.com.ar/audiovisual/guion",
          },
        ]}
      />

      <section
        id="guion"
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/guion/bg-guion.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-70" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="GUIÓN" subtitle="AUDIOVISUAL" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl text-white font-body leading-relaxed">
            <p className="mb-8">
              ¿Estás buscando un guionista para tus proyectos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio-guion"
                className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Mis trabajos
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
        id="consultoria"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/guion/bg-guion.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1B1440]" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader
            title="Consultoría de guión"
            subtitle="Guión"
            theme="dark"
          />
          <div className="flex flex-wrap items-center mt-12 gap-y-8">
            <div className="w-full lg:w-1/2 p-4 text-white text-lg space-y-4">
              <p>
                ¿Tenés una idea o una historia, pero no sabés cómo desarrollarla
                o cómo llevarla a un lenguaje cinematográfico o televisivo?
              </p>
              <p>¿Escribiste un guión y necesitás reencauzarlo o corregirlo?</p>
              <p>
                ¿Te trabaste en el medio de la escritura y no encontrás la forma
                de continuar?
              </p>
              <p>
                ¿Necesitás un profesional para que te acompañe en el proceso de
                escritura?
              </p>
              <p>
                ¿Precisás un guión para un video institucional o publicitario?
              </p>
              <p>
                Te presento mis servicios de script doctoring, asesoría en guión
                y redacción de guiones, adaptados a cada necesidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
                <a
                  href="http://www.consultoriadeguion.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase text-center"
                >
                  Visitá mi sitio web de consultoría
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img
                src="/assets/img/guion/consultoria-web.jpg"
                alt="Consultoría"
                className="rounded-3xl shadow-xl w-full"
              />
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
            subtitle="Guión"
            theme="light"
          />
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] 
                ${activeTab === "experience" ? "bg-[#1B1440] text-white" : "border border-[#1B1440] text-[#1B1440] hover:bg-[#1B1440] hover:text-white transition-colors"}`}
            >
              Experiencia laboral
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] 
                ${activeTab === "education" ? "bg-[#1B1440] text-white" : "border border-[#1B1440] text-[#1B1440] hover:bg-[#1B1440] hover:text-white transition-colors"}`}
            >
              Formación académica
            </button>
          </div>
          {activeTab === "experience" ? (
            <TimelineSection
              experiences={experienciaGuion}
              educations={[]}
              theme="light"
            />
          ) : (
            <TimelineSection
              experiences={[]}
              educations={educacionGuion}
              theme="light"
            />
          )}
        </div>
      </section>

      <section id="portfolio-guion" className="py-20 text-white bg-[#0d0b2e]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio" subtitle="Guión" theme="dark" />
          <div className="mt-12">
            <PortfolioGrid items={portfolioGuion} initialVisible={9} />
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
