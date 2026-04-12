import { useState } from 'react';
import { PageSEO } from '../components/PageSEO';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { TimelineSection } from '../components/TimelineSection';
import { experienciaDocencia } from '../data/experiencia-docencia';
import { educacionFUC } from '../data/educacion';

export function Critica() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  useSectionScroll({ experiencia: 'resume2' });

  return (
    <>
      <PageSEO
        title="Crítica de Cine"
        description="Críticas de cine y colaboraciones en medios gráficos y online por Leo Senderovsky."
        path="/critica"
      />

      {/* ── Intro ── */}
      <section
        id="critica-top"
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/critica/bg-critica.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <h3
            className="text-center"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.6em', fontWeight: 300, color: 'white', letterSpacing: 1 }}
          >
            Audiovisual
          </h3>
          <h1
            className="text-center mb-10"
            style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '4em', fontWeight: 600, color: 'white', letterSpacing: 1 }}
          >
            Crítica
          </h1>
          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Texto literal del legacy */}
            <div className="lg:w-1/2 space-y-4 text-white" style={{ fontFamily: '"Libre Franklin",sans-serif', fontSize: '14px', lineHeight: '25px' }}>
              <p>En los inicios de mi vida profesional, me enfoqué en una de mis pasiones: La crítica y el análisis de cine.</p>
              <p>Colaboré como columnista y corresponsal de cine en programas de radio y medios gráficos y, durante tres años y medio, trabajé para Cine.com, un desaparecido sitio online de España.</p>
              <p>Actualmente, podés encontrar en mi blog mi archivo de críticas y otros artículos de cine.</p>
              <p>Vas a poder leer las críticas que publiqué para Cine.com entre 2007 y 2010, para otros medios y artículos exclusivamente publicados en mi blog.</p>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href="https://blog.leosenderovsky.com.ar/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white hover:bg-white hover:text-[#3844be] transition-all rounded"
                  style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.3em', textTransform: 'uppercase' }}
                >
                  Visitá mi blog <i className="fa-solid fa-arrow-right text-sm" />
                </a>
                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white hover:bg-white hover:text-[#3844be] transition-all rounded"
                  style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif', fontSize: '1.3em', textTransform: 'uppercase' }}
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
      <section id="resume2" className="py-20" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container mx-auto px-4">
          <h2
            className="text-center mb-12"
            style={{
              fontFamily: '"Yanone Kaffeesatz",sans-serif',
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
    </>
  );
}
