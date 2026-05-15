import { useState, useEffect } from "react";
import { PageSEO } from "../components/PageSEO";
import { SchemaBreadcrumb } from "../components/SchemaMarkup";
import { useSectionScroll } from "../hooks/useSectionScroll";
import { SectionHeader } from "../components/SectionHeader";
import { TimelineSection } from "../components/TimelineSection";
import { DocenciaCard } from "../components/DocenciaCard";
import { docenciaCiclos } from "../data/docencia-ciclos";
import { entrevistas } from "../data/entrevistas";
import { experienciaDocencia } from "../data/experiencia-docencia";
import { educacionFUC } from "../data/educacion";
import { VideoThumb } from "../components/PortfolioGrid";
import { SchemaCourse } from "../components/SchemaMarkup";

const SECTION_MAP = {
  experiencia: "resume2",
  entrevistas: "entrevistas",
};

export function Docencia() {
  const [openCiclo, setOpenCiclo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience",
  );

  useEffect(() => {
    const lightbox = window.GLightbox?.({
      selector: ".glightbox",
    });
    return () => lightbox?.destroy();
  }, []);

  const ciclosJudaismo = docenciaCiclos.filter((c) => c.grupo === "judaismo");
  const ciclosCineArg = docenciaCiclos.filter(
    (c) => c.grupo === "cine-argentino",
  );

  const toggleCiclo = (id: string) => {
    setOpenCiclo((prev) => (prev === id ? null : id));
  };

  useSectionScroll(SECTION_MAP);

  return (
    <>
      <PageSEO
        title="Docencia de Cine — Charlas y Ciclos"
        description="Charlas y ciclos de cine por Leo Senderovsky. Docencia en cine argentino, cine judío, cine en dictadura, humor judío en el cine. Para instituciones y grupos privados en Buenos Aires."
        path="/audiovisual/docencia"
        keywords="docente de cine Buenos Aires, charlas de cine, ciclos de cine, cine judio Argentina, cine argentino dictadura, humor judio cine"
      />
      <SchemaBreadcrumb
        items={[
          { name: "Inicio", url: "https://leosenderovsky.com.ar/" },
          {
            name: "Audiovisual",
            url: "https://leosenderovsky.com.ar/#audiovisual",
          },
          {
            name: "Docencia de Cine",
            url: "https://leosenderovsky.com.ar/audiovisual/docencia",
          },
        ]}
      />
      <SchemaCourse
        name="Judaísmo en el cine"
        description="Ciclos de charlas sobre la representación del judaísmo y la cultura judía en el cine argentino, israelí y mundial."
        url="https://leosenderovsky.com.ar/audiovisual/docencia"
      />

      <section
        id="docencia-intro"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/img/docencia/bg-docencia-charlas2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#0D0B2E] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader
            title="Mis encuentros de cine"
            subtitle="Docencia"
            theme="dark"
          />
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
              Desde 2011 doy charlas, ciclos y encuentros de cine debate para
              instituciones y grupos privados en Argentina y Latinoamérica,
              tanto de manera presencial, como virtual.
              <br />
              Mis dos grandes líneas de trabajo son el judaísmo en el cine y la
              televisión, y la historia del cine argentino — aunque a veces los
              caminos se cruzan.
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
              Si formás parte de una institución, si tenés un grupo con ganas de
              adentrarse en estas temáticas, o si simplemente te interesa
              participar de este tipo de encuentros en Buenos Aires o de manera
              virtual, escribime y lo charlamos.
            </p>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center text-center mt-10">
            <a
              href="#resume2"
              className="mb-4 border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
            >
              Mi experiencia
            </a>
            <a
              href="#entrevistas"
              className="mb-4 border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
            >
              Entrevistas
            </a>
            <a
              href="#contacto"
              className="mb-4 border border-white/60 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#1B1440] transition-colors font-heading text-xl uppercase"
            >
              Contactame
            </a>
          </div>
        </div>
      </section>

      <section
        id="encuentros-de-cine"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/img/docencia/bg-docencia-judaismocine.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1a74a0] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          <h3
            className="text-center text-[#1B1440] mb-10"
            style={{
              fontFamily: '"Yanone Kaffeesatz",sans-serif',
              fontSize: "3em",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            JUDAÍSMO EN CINE Y TV
          </h3>

          {/* Grid de 7 cards — Judaísmo */}
          {/* Fila 1: ciclos 1-3 (con múltiples documentos) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {ciclosJudaismo.slice(0, 3).map((ciclo) => (
              <DocenciaCard
                key={ciclo.id}
                ciclo={ciclo}
                isOpen={openCiclo === ciclo.id}
                onToggle={() => toggleCiclo(ciclo.id)}
              />
            ))}
          </div>

          {/* Fila 2: ciclos 4-7 (con un solo documento) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ciclosJudaismo.slice(3).map((ciclo) => (
              <DocenciaCard
                key={ciclo.id}
                ciclo={ciclo}
                isOpen={openCiclo === ciclo.id}
                onToggle={() => toggleCiclo(ciclo.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="ciclos"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/img/docencia/bg-docencia-cineargentino.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#1a74a0] opacity-90" />
        <div className="relative z-10 container mx-auto px-4">
          {/* Título temático */}
          <h3
            className="text-center text-[#1B1440] mb-10"
            style={{
              fontFamily: '"Yanone Kaffeesatz",sans-serif',
              fontSize: "3em",
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            CINE ARGENTINO
          </h3>

          {/* Grid de 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ciclosCineArg.map((ciclo) => (
              <DocenciaCard
                key={ciclo.id}
                ciclo={ciclo}
                isOpen={openCiclo === ciclo.id}
                onToggle={() => toggleCiclo(ciclo.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="resume2"
        className="py-20 bg-gradient-to-r from-[#19D3FF] to-[#1B1440]"
      >
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Mi experiencia"
            subtitle="Docencia"
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
              experiences={experienciaDocencia}
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

      <section
        id="entrevistas"
        className="py-20 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#19d3ff] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader
            title="Entrevistas"
            subtitle="Docencia"
            theme="light"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrevistas.map((item) => {
              const videoId = item.link.includes("youtube.com/watch?v=")
                ? new URL(item.link).searchParams.get("v")
                : null;
              const thumbUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                : item.image;

              if (!thumbUrl) {
                return null;
              }

              return (
                <VideoThumb
                  key={item.id}
                  item={{
                    id: item.id,
                    title: item.title,
                    category: item.medium,
                    image: thumbUrl,
                    link: item.link,
                  }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
