import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageSEO } from "../components/PageSEO";

export function NewsletterConfirmado() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Pequeño delay para que la animación de entrada se note
    const t = setTimeout(() => setVisible(true), 100);
    // GA4 — conversion event
    if (window.gtag) {
      window.gtag("event", "newsletter_confirmed", {
        event_category: "Newsletter",
        event_label: "Double Opt-in Confirmed",
      });
    }
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageSEO
        title="¡Suscripción confirmada!"
        description="Tu suscripción al newsletter de Leo Senderovsky fue confirmada. Recibirás novedades sobre artículos, proyectos y ciclos de cine."
        path="/newsletter/confirmado"
        noindex={true}
      />

      <section
        className="min-h-[80vh] flex flex-col items-center justify-center py-24 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B1440 0%, #1A74A0 60%, #0D0B2E 100%)" }}
      >
        {/* Fondo decorativo */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #19D3FF 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1A74A0 0%, transparent 40%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Ícono animado */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="flex items-center justify-center mb-8"
          >
            <span
              className="text-7xl"
              role="img"
              aria-label="Confirmado"
            >
              🎬
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-white uppercase mb-4"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              letterSpacing: "0.02em",
            }}
          >
            ¡Suscripción confirmada!
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#19D3FF] uppercase mb-6"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "0.1em",
            }}
          >
            Newsletter · Leo Senderovsky
          </motion.p>

          {/* Separador */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={visible ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-20 h-px bg-[#19D3FF] mx-auto mb-8"
            style={{ transformOrigin: "center" }}
          />

          {/* Cuerpo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="max-w-lg mx-auto mb-10 space-y-3"
            style={{ fontFamily: '"Libre Franklin", sans-serif', fontSize: "1rem", lineHeight: "1.8" }}
          >
            <p className="text-white/80">
              Ya sos parte del newsletter. A partir de ahora vas a recibir
              novedades sobre artículos, proyectos y ciclos de cine
              directamente en tu email.
            </p>
            <p className="text-white/50 text-sm">
              Sin spam. Podés darte de baja cuando quieras desde cualquier email que recibas.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="px-8 py-3 rounded-full font-semibold uppercase transition-all duration-200 text-center"
              style={{
                background: "#19D3FF",
                color: "#1B1440",
                fontFamily: '"Yanone Kaffeesatz", sans-serif',
                fontSize: "1.2em",
                letterSpacing: "0.05em",
              }}
            >
              Ir al inicio
            </Link>
            <a
              href="https://blog.leosenderovsky.com.ar"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold uppercase border border-white/40 text-white hover:border-[#19D3FF] hover:text-[#19D3FF] transition-all duration-200 text-center"
              style={{
                fontFamily: '"Yanone Kaffeesatz", sans-serif',
                fontSize: "1.2em",
                letterSpacing: "0.05em",
              }}
            >
              Leer el blog
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}
