import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function NewsletterBar() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !import.meta.env.VITE_BREVO_FORM_URL) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      // Usamos FormData con los campos exactos del formulario de Brevo
      const formData = new FormData();
      formData.append("EMAIL", email.trim());
      formData.append("email_address_check", "");
      formData.append("locale", "es");

      await fetch(import.meta.env.VITE_BREVO_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", 
      });

      // Éxito: Redirigimos a la página de instrucciones
      setEmail("");
      navigate("/newsletter/check-email");
      
      if (window.gtag) {
        window.gtag("event", "newsletter_subscribe", {
          event_category: "Newsletter",
          event_label: "Newsletter Bar Subscribe",
        });
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMsg("Error al conectar. Intentá de nuevo.");
    }
  };

  return (
    <section
      className="shadow-lg w-full py-8"
      style={{
        background: "linear-gradient(to right, #1B1440, #1A74A0)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Título — izquierda en desktop */}
          <span
            className="text-white whitespace-nowrap"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: "2em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Suscribite a mis novedades
          </span>

          {/* Contenido — derecha en desktop */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-1 max-w-2xl">
            {/* Descripción */}
            <p
              className="text-white whitespace-nowrap"
              style={{
                fontFamily: '"Yanone Kaffeesatz", sans-serif',
                fontSize: "1.6em",
                fontWeight: 600,
                textTransform: "uppercase",
              }}
            >
              Prometo no spamear.
            </p>

            {/* Formulario o feedback */}
            {status === "success" ? (
              <p
                className="text-[#19D3FF] font-semibold"
                style={{
                  fontFamily: '"Yanone Kaffeesatz", sans-serif',
                  fontSize: "1.2em",
                }}
              >
                ¡Suscripción confirmada! 🎬
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
              >
                <div className="flex gap-2 w-full sm:w-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    aria-label="Tu dirección de email para suscribirte al newsletter"
                    className="w-full sm:w-64 border border-white/30 rounded px-3 py-2 text-sm bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-[#19D3FF]/60"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-2 rounded font-semibold text-sm transition-all duration-200 cursor-pointer disabled:opacity-60"
                    style={{
                      background: "#19D3FF",
                      color: "#1B1440",
                      fontFamily: '"Yanone Kaffeesatz", sans-serif',
                      fontSize: "1.1em",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {status === "loading" ? "Enviando…" : "Suscribirme"}
                  </button>
                </div>
                {status === "error" && (
                  <p className="text-red-300 text-xs">{errorMsg}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Legal */}
        <p className="text-white/30 text-xs text-center mt-4 md:text-c md:mt-2">
          Podés darte de baja cuando quieras.
        </p>
      </div>
    </section>
  );
}
