import { useState } from "react";
import ResponsiveBackground from "../components/ResponsiveBackground";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { PortfolioGrid } from "../components/PortfolioGrid";
import { TimelineSection } from "../components/TimelineSection";
import { portfolioGuion } from "../data/portfolio-guion";
import { educacionGuion } from "../data/educacion";
import { experienciaGuion } from "../data/experiencia-guion";

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
        title="Guión Cinematográfico y Script Doctoring"
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

      <ResponsiveBackground
        id="guion"
        src="/assets/img/guion/bg-guion.webp"
        srcSet="/assets/img/guion/bg-guion-480w.webp 480w,
                /assets/img/guion/bg-guion-768w.webp 768w,
                /assets/img/guion/bg-guion-1280w.webp 1280w,
                /assets/img/guion/bg-guion-1920w.webp 1920w"
        sizes="100vw"
        className="py-20 text-white text-center"
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="GUIÓN" subtitle="AUDIOVISUAL" theme="dark" />
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
              Escribo guiones desde hace más de veinte años. En los últimos años
              me he dedicado a la escritura de guiones de spots publicitarios,
              piezas documentales, videos y discursos corporativos e
              institucionales.
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
              Además de escribir guiones, trabajo como script doctor, brindando
              consultoría y asesoría narrativa para proyectos de terceros.
              Trabajo de manera freelance desde Buenos Aires para producciones
              de Argentina y el exterior.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#portfolio-guion"
                className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
              >
                Mi portfolio
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
      </ResponsiveBackground>

      <section
        id="consultoria"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/guion/bg-guion.webp')",
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
          <div className="flex flex-col lg:flex-row gap-10 items-center">
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
                La consultoría de guión está dedicada a proyectos que ya existen
                pero necesitan trabajo: una idea que no termina de tomar forma,
                un guión trabado en el desarrollo, una historia que funciona
                pero no encuentra su estructura o un guión terminado que
                necesita una revisión exhaustiva.
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
                Trabajo como script doctor — acompaño el proceso de escritura
                con foco en la narrativa y en lo que el proyecto necesita
                comunicar. Para más información sobre este servicio de asesoría
                de guión, podés visitar ConsultoriadeGuion.com.ar.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center text-center mt-10">
                <a
                  href="http://www.consultoriadeguion.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase text-center"
                >
                  Visitá mi sitio web de consultoría
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/assets/img/guion/consultoria-web.webp"
                alt="Consultoría"
                className="rounded-3xl shadow-xl w-full"
                loading="lazy"
                width="640"
                height="400"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="resume"
        className="py-20 bg-gradient-to-r from-[#19D3FF] to-[#1B1440]"
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
                ${activeTab === "experience" ? "bg-[#0D0B2E] text-white" : "border border-[#0D0B2E] text-[#0D0B2E] hover:bg-[#0D0B2E] hover:text-white transition-colors"}`}
            >
              Experiencia laboral
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] 
                ${activeTab === "education" ? "bg-[#0D0B2E] text-white" : "border border-[#0D0B2E] text-[#0D0B2E] hover:bg-[#0D0B2E] hover:text-white transition-colors"}`}
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

      <section id="portfolio-guion" className="py-20 text-white bg-[#19d3ff]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio" subtitle="Guión" theme="light" />
          <div className="mt-12">
            <PortfolioGrid
              items={portfolioGuion}
              initialVisible={9}
              theme="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
