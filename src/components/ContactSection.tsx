import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { COUNTRIES } from "../data/countries";

export function ContactSection() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData(event.currentTarget);

      // Si hCaptcha está habilitado, el token se envía automáticamente si el componente está dentro del form
      // Pero para mayor seguridad y control en React, podemos asegurarnos de que el token esté presente.
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      await response.json();

      setSubmitted(true);
      event.currentTarget.reset();

      // Tracking GA4: Formulario de contacto exitoso
      if (window.gtag) {
        window.gtag("event", "generate_lead", {
          event_category: "Contact",
          event_label: "Contact Form Success",
        });
      }

      navigate("/gracias");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje. Intentá de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16" style={{ background: "#1B1440" }}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-[4em] uppercase text-center text-white mb-8">
          Contactame
        </h2>

        {submitted ? (
          <div className="text-center py-16">
            <p
              className="text-2xl text-white"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif' }}
            >
              ¡Gracias! Tu mensaje fue enviado correctamente.
            </p>
          </div>
        ) : (
          <form
            id="form"
            className="max-w-3xl mx-auto"
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="access_key"
              value={import.meta.env.VITE_WEB3FORMS_KEY}
            />
            <input
              type="hidden"
              name="redirect"
              value="https://leosenderovsky.com.ar/gracias"
            />
            {/* Honeypot Spam Protection */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            {submitError && (
              <div className="mb-4 rounded border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm text-white mb-1"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  autoComplete="given-name"
                  required
                  className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
              </div>
              {/* Apellido */}
              <div>
                <label
                  htmlFor="apellido"
                  className="block text-sm text-white mb-1"
                >
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="apellido"
                  name="apellido"
                  autoComplete="family-name"
                  required
                  className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-white mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
              </div>
              {/* País */}
              <div>
                <label htmlFor="pais" className="block text-sm text-white mb-1">
                  País
                </label>
                <input
                  list="pais-list"
                  id="pais"
                  name="pais"
                  className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
                />
                <datalist id="pais-list">
                  {COUNTRIES.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </div>
              {/* Servicio */}
              <div>
                <label
                  htmlFor="servicio"
                  className="block text-sm text-white mb-1"
                >
                  ¿En qué servicio estás interesado?
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-[#0D0B2E] text-white focus:outline-none focus:ring-1 focus:ring-white/50"
                >
                  <option value="edicion">Edición</option>
                  <option value="guion">Guión</option>
                  <option value="docencia">Docencia</option>
                  <option value="critica">Crítica</option>
                  <option value="web">Desarrollo web</option>
                  <option value="ia">IA / sender.ia</option>
                </select>
              </div>
              {/* Presupuesto */}
              <div>
                <p className="block text-sm text-white mb-1">
                  ¿Querés pedir un presupuesto de trabajo?
                </p>
                <label className="inline-flex items-center gap-1 mr-4 text-sm text-white">
                  <input type="radio" name="presupuesto" value="yes" /> Sí
                </label>
                <label className="inline-flex items-center gap-1 text-sm text-white">
                  <input type="radio" name="presupuesto" value="no" /> No
                </label>
              </div>
            </div>

            {/* Asunto */}
            <div className="mb-4">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Asunto *"
                required
                className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
            </div>

            {/* Mensaje */}
            <div className="mb-6">
              <textarea
                id="message"
                name="mensaje"
                placeholder="Mensaje *"
                rows={7}
                required
                className="w-full border border-white/40 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
            </div>


            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-2 border border-white/40 rounded bg-[#1B1440] text-white hover:bg-[#1A74A0] hover:text-white hover:border-[#1A74A0] transition-all cursor-pointer"
                style={{
                  fontFamily: '"Yanone Kaffeesatz",sans-serif',
                  fontSize: "1.4em",
                  textTransform: "uppercase",
                }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>
        )}

        {/* Datos de contacto directo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
              <i className="fa-solid fa-phone text-white text-xl" />
            </div>
            <a
              href="https://wa.me/5491130452585"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                if (window.gtag) {
                  window.gtag("event", "click_whatsapp", {
                    event_category: "Contact",
                    event_label: "WhatsApp Click",
                  });
                }
              }}
              className="text-white hover:text-[#19D3FF] transition-colors text-sm"
            >
              + (54 9 11) 3045-2585
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
              <i className="fa-solid fa-envelope text-white text-xl" />
            </div>
            <a
              href="mailto:l.a.senderovsky@gmail.com"
              onClick={() => {
                if (window.gtag) {
                  window.gtag("event", "click_email", {
                    event_category: "Contact",
                    event_label: "Email Click",
                  });
                }
              }}
              className="text-white hover:text-[#19D3FF] transition-colors text-sm"
            >
              l.a.senderovsky@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
              <i className="fa-solid fa-location-dot text-white text-xl" />
            </div>
            <p className="text-white text-sm">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </section>
  );
}
