import { useState } from 'react';
import { PageSEO } from '../components/PageSEO';
import { SchemaBreadcrumb } from '../components/SchemaMarkup';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineSection } from '../components/TimelineSection';
import { DocenciaCard } from '../components/DocenciaCard';
import { docenciaCiclos } from '../data/docencia-ciclos';
import { entrevistas } from '../data/entrevistas';
import { experienciaDocencia } from '../data/experiencia-docencia';
import { educacionFUC } from '../data/educacion';

export function Docencia() {
  const [openCiclo, setOpenCiclo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const ciclosJudaismo = docenciaCiclos.filter(c => c.grupo === 'judaismo');
  const ciclosCineArg = docenciaCiclos.filter(c => c.grupo === 'cine-argentino');

  const toggleCiclo = (id: string) => {
    setOpenCiclo(prev => (prev === id ? null : id));
  };

  useSectionScroll({ experiencia: 'resume2', entrevistas: 'docencia-section-3' });

  return (
    <>
      <PageSEO 
        title="Docencia de Cine — Charlas y Ciclos" 
        description="Charlas y ciclos de cine por Leo Senderovsky. Docencia en cine argentino, cine judío, cine en dictadura, humor judío en el cine. Para instituciones y grupos privados en Buenos Aires."
        path="/audiovisual/docencia"
        keywords="docente de cine Buenos Aires, charlas de cine, ciclos de cine, cine judio Argentina, cine argentino dictadura, humor judio cine"
      />
      <SchemaBreadcrumb items={[
        { name: 'Inicio', url: 'https://leosenderovsky.com.ar/' },
        { name: 'Audiovisual', url: 'https://leosenderovsky.com.ar/audiovisual/docencia' },
        { name: 'Docencia de Cine', url: 'https://leosenderovsky.com.ar/audiovisual/docencia' },
      ]} />

      <section
        id="docencia-top"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/docencia/bg-docencia-judaismocine.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">

          {/* Encabezado */}
          <p className="text-center text-white"
             style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '20px', fontWeight: 300, letterSpacing: 1 }}>
            Docencia
          </p>
          <h1 className="text-center text-white"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, letterSpacing: 1, lineHeight: 1, marginBottom: '10px' }}>
            Encuentros de cine
          </h1>
          <h3 className="text-center text-white mb-4"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '3.5em', fontWeight: 300, letterSpacing: 1 }}>
            JUDAÍSMO EN CINE Y TV
          </h3>

          {/* Intro */}
          <p className="text-center text-white mb-10"
             style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.5em', fontWeight: 300, width: '80%', margin: '0 auto 40px' }}>
            Desde 2011, doy charlas y encuentros de cine para instituciones y grupos privados, sobre distintas temáticas ligadas al judaísmo en el cine y la TV.
          </p>

          {/* Grid de 7 cards — Judaísmo */}
          {/* Fila 1: ciclos 1-3 (con múltiples documentos) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {ciclosJudaismo.slice(0, 3).map(ciclo => (
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
            {ciclosJudaismo.slice(3).map(ciclo => (
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
          backgroundImage: "url('/assets/img/docencia/bg-docencia-cineargentino.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">

          {/* Título temático */}
          <h3 className="text-center text-white mb-10"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '3.5em', fontWeight: 300, letterSpacing: 1 }}>
            CINE ARGENTINO
          </h3>

          {/* Grid de 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ciclosCineArg.map(ciclo => (
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

      <section id="resume2" className="py-20" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container mx-auto px-4">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: '4em',
              fontWeight: 600,
              color: '#000b77',
              textTransform: 'uppercase',
              letterSpacing: 1,
            }}
          >
            Docencia y crítica
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`rounded-full px-8 py-3 uppercase font-heading tracking-[2px] ${
                activeTab === 'experience'
                  ? 'bg-white text-site-dark'
                  : 'bg-gray-700 text-white hover:bg-white hover:text-site-dark transition-colors'
              }`}
            >
              Experiencia
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`rounded-full px-8 py-3 uppercase font-heading tracking-[2px] ${
                activeTab === 'education'
                  ? 'bg-white text-site-dark'
                  : 'bg-gray-700 text-white hover:bg-white hover:text-site-dark transition-colors'
              }`}
            >
              Educación
            </button>
          </div>
          {activeTab === 'experience' ? (
            <TimelineSection
              id="resume2"
              title="Experiencia"
              subtitle="Docencia y crítica"
              experiences={experienciaDocencia}
              educations={[]}
              theme="light"
            />
          ) : (
            <TimelineSection
              id="resume2"
              title="Educación"
              subtitle="Docencia y crítica"
              experiences={[]}
              educations={educacionFUC}
              theme="light"
            />
          )}
        </div>
      </section>

      <section
        id="docencia-section-3"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/docencia/bg-docencia-charlas2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Entrevistas" subtitle="Medios y charlas" theme="dark" />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entrevistas.map(item => {
              const videoId = item.link.includes('youtube.com/watch?v=')
                ? new URL(item.link).searchParams.get('v')
                : null;
              const thumbUrl = videoId 
                ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                : '/assets/img/video-placeholder.jpg';
              
              return (
                <a 
                  key={item.id} 
                  href={item.link}
                  className="group relative overflow-hidden rounded-3xl shadow-xl bg-black aspect-video glightbox"
                >
                   <img 
                    src={thumbUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/assets/img/hover.png" alt="Play" className="w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h4 className="font-heading text-xl text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
