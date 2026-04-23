import { useState } from "react";
import { COUNTRIES } from "../data/countries";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

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
            action="https://api.web3forms.com/submit"
            method="POST"
            className="max-w-3xl mx-auto"
            onSubmit={() => setSubmitted(true)}
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
                className="px-10 py-2 border border-white/40 rounded bg-[#1B1440] text-white hover:bg-[#1A74A0] hover:text-white hover:border-[#1A74A0] transition-all cursor-pointer"
                style={{
                  fontFamily: '"Yanone Kaffeesatz",sans-serif',
                  fontSize: "1.4em",
                  textTransform: "uppercase",
                }}
              >
                Enviar Mensaje
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
