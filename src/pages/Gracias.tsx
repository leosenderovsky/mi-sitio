import { Link } from 'react-router-dom';
import { PageSEO } from '../components/PageSEO';
import { SectionHeader } from '../components/SectionHeader';

export function Gracias() {
  return (
    <>
      <PageSEO title="Gracias por tu mensaje" description="He recibido tu mensaje correctamente." path="/gracias" />
      <section className="py-32 bg-site-dark text-white text-center min-h-[70vh] flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <SectionHeader title="¡Gracias!" subtitle="Mensaje Enviado" theme="dark" />
          <div className="max-w-xl mx-auto mt-8 text-xl text-site-muted font-body leading-relaxed">
            <p className="mb-8">He recibido tu mensaje correctamente. Me pondré en contacto contigo a la brevedad.</p>
            <Link to="/" className="bg-site-teal text-white px-8 py-3 rounded-full hover:bg-site-blue transition-colors font-heading text-xl uppercase inline-block">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
