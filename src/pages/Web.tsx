import { PageSEO } from '../components/PageSEO';
import { useSectionScroll } from '../hooks/useSectionScroll';
import { SectionHeader } from '../components/SectionHeader';
import { experienciaWeb } from '../data/experiencia-web';

export function Web() {
  useSectionScroll({ experiencia: 'timeline-web' });

  return (
    <>
      <PageSEO title="Desarrollo Web" description="Proyectos de desarrollo web, Frontend y Wordpress de Leo Senderovsky." path="/web" />

      <section
        id="web-top"
        className="py-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/assets/img/web/bg-web.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#00052e] opacity-80" />
        <div className="relative z-10 container mx-auto px-4">
          <SectionHeader title="DESARROLLO" subtitle="WEB" theme="dark" />
          <div className="max-w-3xl mx-auto mt-8 text-xl font-body leading-relaxed text-white/90">
            <p className="mb-4">Desde mis primeros trabajos, en empresas de desarrollo web, me tocó conjugar el audiovisual con los recursos del mundo de la programación.</p>
            <p className="mb-4">Allí empecé a conocer algunas herramientas de desarrollo y de seo que me permitieron encarar, los años siguientes, varios proyectos web en plataformas como Joomla y Wordpress y, más recientemente, hice cursos de desarrollo frontend para poder llevar estos conocimientos a otro nivel.</p>
            <p className="mb-8">Quiero seguir explorando el mundo del desarrollo web, realizando sitios personalizados para particulares y empresas. ¿Me acompañás?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#timeline-web" className="bg-site-dark px-8 py-3 rounded-full hover:bg-white hover:text-site-dark transition-colors font-heading text-xl uppercase">
                Mirá mis proyectos
              </a>
              <a href="/#contacto" className="border border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-site-teal transition-colors font-heading text-xl uppercase">
                Contactame
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline-web" className="py-20 text-white" style={{ backgroundColor: '#000B77' }}>
        <div className="container mx-auto px-4">
          <SectionHeader title="Mis proyectos" subtitle="Web" theme="dark" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienciaWeb.map(item => (
              <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow group">
                <div className="h-48 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100 relative overflow-hidden">
                  {item.logo ? (
                    <img src={item.logo} alt={item.title} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="font-heading text-2xl text-site-dark">{item.title}</div>
                  )}
                  {item.link && (
                    <div className="absolute inset-0 bg-site-teal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a href={item.link} target="_blank" rel="noreferrer" className="bg-white text-site-teal px-6 py-2 rounded-full font-heading uppercase text-sm hover:bg-site-dark hover:text-white transition-colors">
                        Visitar sitio
                      </a>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl text-site-dark mb-2">{item.title}</h3>
                  <div className="text-site-teal font-bold text-sm mb-3">{item.period}</div>
                  <p className="text-site-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
