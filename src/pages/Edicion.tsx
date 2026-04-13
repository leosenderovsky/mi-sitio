import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageSEO } from '../components/PageSEO';
import { SchemaBreadcrumb } from '../components/SchemaMarkup';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineSection } from '../components/TimelineSection';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { portfolioEdicion } from '../data/portfolio-edicion';
import { portfolioReels } from '../data/portfolio-reels';
import { experienciaAudiovisual } from '../data/experiencia-audiovisual';
import { educacionAudiovisual } from '../data/educacion';

export function Edicion() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let targetId: string | null = null;
    if (path.endsWith('/experiencia')) targetId = 'resume';
    else if (path.endsWith('/portfolio/videos')) targetId = 'portfolio-edicion';
    else if (path.endsWith('/portfolio/reels')) targetId = 'portfolio-edicion-reels';

    if (targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <SchemaBreadcrumb items={[
        { name: 'Inicio', url: 'https://leosenderovsky.com.ar/' },
        { name: 'Audiovisual', url: 'https://leosenderovsky.com.ar/audiovisual/edicion' },
        { name: 'Edición de Video', url: 'https://leosenderovsky.com.ar/audiovisual/edicion' },
      ]} />

      <section
        id="edicion"
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/edicion/bg-edicion.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="EDICIÓN" subtitle="AUDIOVISUAL" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl text-site-muted font-body leading-relaxed">
            <p className="mb-8">¿Estás buscando un editor para tus proyectos?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#resume" className="bg-site-teal px-8 py-3 rounded-full hover:bg-white hover:text-site-teal transition-colors font-heading text-xl uppercase">
                Mi experiencia
              </a>
              <a href="#portfolio-edicion" className="border border-site-teal text-site-teal px-8 py-3 rounded-full hover:bg-site-teal hover:text-white transition-colors font-heading text-xl uppercase">
                Ver portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-20" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi experiencia" subtitle="Edición" theme="light" />
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button
              type="button"
              onClick={() => setActiveTab('experience')}
              className={`rounded-full px-8 py-3 uppercase font-heading tracking-[2px] ${activeTab === 'experience' ? 'bg-white text-site-dark' : 'bg-gray-700 text-white hover:bg-white hover:text-site-dark transition-colors'}`}
            >
              Experiencia
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('education')}
              className={`rounded-full px-8 py-3 uppercase font-heading tracking-[2px] ${activeTab === 'education' ? 'bg-white text-site-dark' : 'bg-gray-700 text-white hover:bg-white hover:text-site-dark transition-colors'}`}
            >
              Educación
            </button>
          </div>
          {activeTab === 'experience' ? (
            <TimelineSection id="resume" title="Experiencia" subtitle="Audiovisual" experiences={experienciaAudiovisual} educations={[]} theme="light" />
          ) : (
            <TimelineSection id="resume" title="Educación" subtitle="Formación" experiences={[]} educations={educacionAudiovisual} theme="light" />
          )}
        </div>
      </section>

      <section id="portfolio-edicion" className="py-20 text-site-dark" style={{ backgroundColor: '#f2f2f2' }}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio" subtitle="Edición" theme="light" />
          <div className="mt-12">
            <PortfolioGrid items={portfolioEdicion} initialVisible={9} />
          </div>
        </div>
      </section>

      <section id="portfolio-edicion-reels" className="py-20 text-white" style={{ backgroundColor: '#3844BE' }}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Mi portfolio — Reels" subtitle="Edición" theme="dark" />
          <div className="mt-12">
            <PortfolioGrid items={portfolioReels} initialVisible={9} />
          </div>
        </div>
      </section>
    </>
  );
}
