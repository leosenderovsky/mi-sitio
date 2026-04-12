import { useState } from 'react';
import { PageSEO } from '../components/PageSEO';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { SectionHeader } from '../components/SectionHeader';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { TimelineSection } from '../components/TimelineSection';
import { portfolioGuion } from '../data/portfolio-guion';
import { educacionAudiovisual } from '../data/educacion';
import { experienciaAudiovisual } from '../data/experiencia-audiovisual';

export function Guion() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  useSectionScroll({ experiencia: 'resume', portfolio: 'portfolio-guion', consultoria: 'consultoria' });

  return (
    <>
      <PageSEO title="Guión y Consultoría" description="Servicios de guión y consultoría audiovisual de Leo Senderovsky." path="/guion" />

      <section
        id="guion"
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/guion/bg-guion.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="GUIÓN" subtitle="AUDIOVISUAL" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl text-white/90 font-body leading-relaxed">
            <p className="mb-8">¿Estás buscando un guionista para tus proyectos?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#portfolio-guion" className="bg-white text-[#D1001E] px-8 py-3 rounded-full hover:bg-site-dark hover:text-white transition-colors font-heading text-xl uppercase">
                Mirá mis trabajos
              </a>
              <a href="/#contacto" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#D1001E] transition-colors font-heading text-xl uppercase">
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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="Consultoría de guión" subtitle="Audiovisual" theme="dark" />
          <div className="flex flex-wrap items-center mt-12 gap-y-8">
            <div className="w-full lg:w-1/2 p-4 text-white/90 text-lg space-y-4">
              <p>¿Tenés una idea o una historia, pero no sabés cómo desarrollarla o cómo llevarla a un lenguaje cinematográfico o televisivo?</p>
              <p>¿Escribiste un guión y necesitás reencauzarlo o corregirlo?</p>
              <p>¿Te trabaste en el medio de la escritura y no encontrás la forma de continuar?</p>
              <p>¿Necesitás un profesional para que te acompañe en el proceso de escritura?</p>
              <p>¿Precisás un guión para un video institucional o publicitario?</p>
              <p>Te presento mis servicios de script doctoring, asesoría en guión y redacción de guiones, adaptados a cada necesidad.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
                <a href="http://www.consultoriadeguion.com.ar/" target="_blank" rel="noreferrer" className="bg-white text-[#D1001E] px-8 py-3 rounded-full hover:bg-site-dark hover:text-white transition-colors font-heading text-xl uppercase text-center">
                  Visitá mi sitio web de consultoría
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <img src="/assets/img/guion/consultoria-web.jpg" alt="Consultoría" className="rounded-3xl shadow-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi experiencia" subtitle="Guión" theme="light" />
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
              id="resume"
              title="Experiencia"
              subtitle="Audiovisual"
              experiences={experienciaAudiovisual}
              educations={[]}
              theme="light"
            />
          ) : (
            <TimelineSection
              id="resume"
              title="Educación"
              subtitle="Formación"
              experiences={[]}
              educations={educacionAudiovisual}
              theme="light"
            />
          )}
        </div>
      </section>

      <section id="portfolio-guion" className="py-20 text-site-dark bg-[#f2f2f2]">
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio" subtitle="Guión" theme="light" />
          <div className="mt-12">
            <PortfolioGrid items={portfolioGuion} initialVisible={9} />
          </div>
        </div>
      </section>
    </>
  );
}
