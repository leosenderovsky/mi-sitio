import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/PageSEO';
import { SectionHeader } from '../../components/SectionHeader';
import { TimelineSection } from '../../components/TimelineSection';
import { experienciaWeb } from '../../data/experiencia-web';
import { educacionWeb } from '../../data/educacion';

export default function CVWeb() {
  return (
    <>
      <PageSEO
        title="CV Desarrollo Web | Leo Aquiba Senderovsky — Frontend Developer"
        description="Currículum web de Leo Senderovsky: formación, proyectos y experiencia en desarrollo frontend."
        path="/sobre-mi/cv-web"
      />

      <section className="py-20 bg-white text-site-dark min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-site-blue font-bold hover:text-site-teal transition-colors">
              ← Volver al inicio
            </Link>
          </div>
          <SectionHeader title="CV Web" subtitle="Desarrollo Frontend" theme="light" />
          <div className="mt-8 text-site-text max-w-3xl">
            <p className="text-lg leading-relaxed">
              Desarrollo experiencias web, sitios corporativos y soluciones Frontend con foco en accesibilidad, performance y diseño responsivo.
            </p>
          </div>
          <div className="mt-16">
            <TimelineSection
              experiences={experienciaWeb}
              educations={educacionWeb}
              theme="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
