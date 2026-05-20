import { Link } from 'react-router-dom';
import { PageSEO } from '../../components/PageSEO';
import { SectionHeader } from '../../components/SectionHeader';
import { TimelineSection } from '../../components/TimelineSection';
import { experienciaEdicion } from '../../data/experiencia-edicion';
import { educacionEdicion } from '../../data/educacion';
import { SchemaProfilePage } from '../../components/SchemaMarkup';


export default function CVAudiovisual() {
  return (
    <>
      <PageSEO
        title="CV Audiovisual — Editor de Video y Guionista"
        description="Currículum audiovisual de Leo Senderovsky: educación, experiencia y proyectos en edición y guión."
        path="/sobre-mi/cv-audiovisual"
      />
      <SchemaProfilePage />

      <section className="py-20 bg-site-dark text-white min-h-screen">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <Link to="/" className="inline-flex items-center text-site-teal font-bold hover:text-white transition-colors">
              ← Volver al inicio
            </Link>
          </div>
          <SectionHeader title="CV Audiovisual" subtitle="Perfil profesional" theme="dark" />
          <div className="mt-8 text-site-muted max-w-3xl">
            <p className="text-lg leading-relaxed">
              Soy editor de video, guionista y docente con más de quince años de experiencia en contenidos audiovisuales para TV, medios digitales y proyectos corporativos.
            </p>
          </div>
          <div className="mt-16">
            <TimelineSection
              experiences={experienciaEdicion}
              educations={educacionEdicion}
              theme="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
