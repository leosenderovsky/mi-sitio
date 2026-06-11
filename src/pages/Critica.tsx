import { useState } from "react";
import ResponsiveBackground from "../components/ResponsiveBackground";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineSection } from "../components/TimelineSection";
import { experienciaCritica } from "../data/experiencia-critica";
import { educacionFUC } from "../data/educacion";

const SECTION_MAP = { experiencia: "resume2" };

export function Critica() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );
  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="Crítica de Cine — Análisis y Reseñas Cinematográficas"
        description="Críticas cinematográficas y colaboraciones en medios por Leo Senderovsky. Análisis de cine argentino, cine mundial. Colaboraciones en radio, medios gráficos y online."
        path="/audiovisual/critica"
        image="https://leosenderovsky.com.ar/assets/img/dibujos/critica-1024w.webp"
        imageWidth={1024}
        imageHeight={572}
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
      <ResponsiveBackground
        src="/assets/img/critica/bg-critica.webp"
        srcSet="/assets/img/critica/bg-critica-480w.webp 480w,
                /assets/img/critica/bg-critica-768w.webp 768w,
                /assets/img/critica/bg-critica-1280w.webp 1280w,
                /assets/img/critica/bg-critica-1920w.webp 1920w"
        sizes="100vw"
        className="py-20"
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Crítica" subtitle="Audiovisual" theme="dark" />
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Texto literal del legacy */}
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
                La crítica fue mi primer trabajo profesional en el mundo del
                cine.
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
                Durante varios años colaboré como columnista y
                corresponsal de cine en programas de radio y medios gráficos, y
                entre 2007 y 2010 trabajé como crítico de cine para Cine.com, un
                portal español de cine con cobertura internacional.
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
                Hoy ese archivo vive en mi blog, junto con artículos y textos de
                cine que sigo publicando.
              </p>
              <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center text-center mt-10">
                <a
                  href="https://blog.leosenderovsky.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
                >
                  Visitá mi blog
                </a>
                <a
                  href="#contacto"
                  className="border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
                >
                  Contactame
                </a>
              </div>
            </div>

            {/* Imagen critic.png */}
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/assets/img/critica/critic.webp"
                alt="Ilustración crítica de cine"
                className="max-w-xs"
                style={{
                  width: "50%",
                  margin: "0 auto",
                }}
                loading="lazy"
                width="320"
                height="320"
              />
            </div>
          </div>
        </div>
      </ResponsiveBackground>

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
    </>
  );
}
