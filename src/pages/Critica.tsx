import { useState } from "react";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineSection } from "../components/TimelineSection";
import { experienciaCritica } from "../data/experiencia-critica";
import { educacionFUC } from "../data/educacion";
import { ContactSection } from "../components/ContactSection";

const SECTION_MAP = { experiencia: "resume2" };

export function Critica() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="Crítica de Cine"
        description="Críticas cinematográficas y colaboraciones en medios por Leo Senderovsky. Análisis de cine argentino, cine mundial. Colaboraciones en radio, medios gráficos y online."
        path="/audiovisual/critica"
        keywords="critica de cine, resenas de peliculas, Leo Senderovsky critica, analisis cinematografico Argentina"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          {
            name: "Audiovisual",
            url: "https://leosenderovsky.com.ar/#audiovisual",
          },
          {
            name: "Crítica de Cine",
            url: "https://leosenderovsky.com.ar/audiovisual/critica",
          },
        ]}
      />

      {/* ── Intro ── */}
      <section
        id="servicios"
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/critica/bg-critica.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Crítica" subtitle="Audiovisual" theme="dark" />
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Texto literal del legacy */}
            <div
              className="lg:w-1/2 space-y-4 text-white"
              style={{
                fontFamily: '"Libre Franklin",sans-serif',
                fontSize: "14px",
                lineHeight: "25px",
              }}
            >
              <p>
                En los inicios de mi vida profesional, me enfoqué en una de mis
                pasiones: La crítica y el análisis de cine.
              </p>
              <p>
                Colaboré como columnista y corresponsal de cine en programas de
                radio y medios gráficos y, durante tres años y medio, trabajé
                para Cine.com, un desaparecido sitio online de España.
              </p>
              <p>
                Actualmente, podés encontrar en mi blog mi archivo de críticas y
                otros artículos de cine.
              </p>
              <p>
                Vas a poder leer las críticas que publiqué para Cine.com entre
                2007 y 2010, para otros medios y artículos exclusivamente
                publicados en mi blog.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://blog.leosenderovsky.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1B1440] transition-all rounded-full font-heading text-xl uppercase"
                >
                  Visitá mi blog{" "}
                  <i className="fa-solid fa-arrow-right text-sm" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-white text-white hover:bg-white hover:text-[#1B1440] transition-all rounded-full font-heading text-xl uppercase"
                >
                  Contactame <i className="fa-solid fa-arrow-down text-sm" />
                </a>
              </div>
            </div>

            {/* Imagen critic.png */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/assets/img/critica/critic.png"
                alt="Ilustración crítica de cine"
                className="max-w-xs w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Experiencia (resume2 — datos reales de Cine.com) ── */}
      <section
        id="resume2"
        className="py-20 bg-gradient-to-r from-[#19D3FF] to-[#1B1440]"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Mi experiencia"
            subtitle="Crítica"
            theme="light"
          />
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setActiveTab("experience")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] ${
                activeTab === "experience"
                  ? "bg-[#0D0B2E] text-white"
                  : "border border-[#0D0B2E] text-[#0D0B2E] hover:bg-[#0D0B2E] hover:text-white transition-colors"
              }`}
            >
              Experiencia laboral
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("education")}
              className={`rounded-full px-8 py-3 text-xl uppercase font-heading tracking-[2px] ${
                activeTab === "education"
                  ? "bg-[#0D0B2E] text-white"
                  : "border border-[#0D0B2E] text-[#0D0B2E] hover:bg-[#0D0B2E] hover:text-white transition-colors"
              }`}
            >
              Formación académica
            </button>
          </div>
          {activeTab === "experience" ? (
            <TimelineSection
              experiences={experienciaCritica}
              educations={[]}
              theme="light"
            />
          ) : (
            <TimelineSection
              experiences={[]}
              educations={educacionFUC}
              theme="light"
            />
          )}
        </div>
      </section>
      <ContactSection />
    </>
  );
}
