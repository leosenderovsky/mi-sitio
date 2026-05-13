import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export function PoliticaDeCookies() {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | Leo Senderovsky</title>
        <meta name="description" content="Información detallada sobre el uso de cookies en leosenderovsky.com.ar" />
      </Helmet>

      <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-site-dark">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading text-[--color-secondary] uppercase tracking-tighter mb-12">
              Política de Cookies
            </h1>

            <div className="space-y-8 font-body text-[--color-text-light]/80 leading-relaxed text-lg">
              <section>
                <h2 className="text-2xl font-heading text-white uppercase mb-4">¿Qué son las cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo para recordar información sobre tu visita.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-white uppercase mb-4">Uso de Google Analytics</h2>
                <p>
                  Este sitio utiliza Google Analytics 4 (GA4) para analizar el tráfico y el comportamiento de los usuarios. 
                  Esto me ayuda a entender qué contenidos son más relevantes y cómo mejorar la experiencia de navegación. 
                  GA4 utiliza cookies para recopilar datos de forma anónima, como el tiempo de estancia en el sitio, las páginas visitadas y el tipo de dispositivo.
                </p>
                <p className="mt-2 italic">
                  Importante: Google Analytics solo se activa si otorgás tu consentimiento explícito a través del banner de privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-white uppercase mb-4">Google Fonts</h2>
                <p>
                  Utilizo Google Fonts para la tipografía del sitio. Al cargar estas fuentes, tu navegador puede realizar peticiones a los servidores de Google, lo que implica la transferencia de ciertos datos técnicos (como la dirección IP) a Google.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading text-white uppercase mb-4">Cómo gestionar las cookies</h2>
                <p>
                  Podés cambiar tu elección en cualquier momento borrando las cookies de tu navegador o limpiando el almacenamiento local (Local Storage) de este sitio. Al recargar la página, el banner de consentimiento volverá a aparecer.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
