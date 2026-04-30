import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageSEO } from "../components/PageSEO";

export function NewsletterCheckEmail() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageSEO
        title="Casi listo - Confirmá tu suscripción"
        description="Por favor, revisá tu casilla de correo para confirmar tu suscripción al newsletter de Leo Senderovsky."
        path="/newsletter/check-email"
        noindex={true}
      />

      <section
        className="min-h-[80vh] flex flex-col items-center justify-center py-24 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B1440 0%, #1A74A0 60%, #0D0B2E 100%)" }}
      >
        <div className="container mx-auto px-4 relative z-10 text-center">
          
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center justify-center mb-8"
          >
            <span className="text-7xl" role="img" aria-label="Email sent">📬</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white uppercase mb-4"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
            }}
          >
            ¡Ya casi estamos!
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto mb-10 space-y-6"
            style={{ fontFamily: '"Libre Franklin", sans-serif', fontSize: "1.1rem", lineHeight: "1.8" }}
          >
            <p className="text-white/90 text-xl font-semibold">
              Te enviamos un email de confirmación a tu casilla.
            </p>
            
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-left space-y-4">
              <p>Para completar tu suscripción, seguí estos pasos:</p>
              <ul className="list-disc ml-6 space-y-2 text-white/80">
                <li>Abrí tu correo y buscá el mensaje de <strong>Leo Senderovsky</strong>.</li>
                <li>Hacé click en el botón <strong>"Confirmar suscripción"</strong>.</li>
                <li>Si no lo ves en unos minutos, por favor <strong>revisá tu carpeta de SPAM</strong> o Correo No Deseado.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              to="/"
              className="px-8 py-3 rounded-full font-semibold uppercase transition-all duration-200 inline-block"
              style={{
                background: "#19D3FF",
                color: "#1B1440",
                fontFamily: '"Yanone Kaffeesatz", sans-serif',
                fontSize: "1.2em",
                letterSpacing: "0.05em",
              }}
            >
              Volver al sitio
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}
