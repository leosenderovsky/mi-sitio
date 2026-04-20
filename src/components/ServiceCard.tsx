import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface Cta {
  label: string;
  href: string;
  external?: boolean;
}

interface ServiceCardProps {
  id?: string;
  title: string;
  description: string;
  image?: string;
  icon?: string; // Clase FA, ej: "fa-solid fa-scissors"
  icons?: string[]; // Array de clases FA para múltiples íconos
  bgColor?: string; // Color de fondo hex, ej: "#3844BE"
  ctas: Cta[];
}

export function ServiceCard({
  title,
  description,
  image,
  icon,
  icons,
  bgColor,
  ctas,
}: ServiceCardProps) {
  const isDark = !!bgColor;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-shadow flex flex-col"
      style={
        isDark ? { backgroundColor: bgColor } : { backgroundColor: "white" }
      }
    >
      {/* Imagen de la tarjeta */}
      {image && (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full object-cover"
            style={{ maxHeight: "180px", objectPosition: "center top" }}
          />
        </div>
      )}

      {/* Ícono FA alternativo (sin imagen) */}
      {!image && (icon || icons) && (
        <div
          className={`flex justify-center pt-8 ${isDark ? "text-[#1B1440]" : "text-site-dark"}`}
        >
          {icon && <i className={`${icon} text-4xl`} />}
          {icons && (
            <div className="flex gap-4">
              {icons.map((ic, idx) => (
                <i key={idx} className={`${ic} text-4xl`} />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="mb-3"
          style={{
            fontFamily: '"Yanone Kaffeesatz", sans-serif',
            fontSize: "1.9em",
            fontWeight: 600,
            textTransform: "uppercase",
            color: isDark ? "#1B1440" : "#1B1440",
          }}
        >
          {title}
        </h3>
        <p
          className="leading-relaxed mb-5"
          style={{
            fontFamily: '"Libre Franklin", sans-serif',
            fontSize: "14px",
            color: isDark ? "#1B1440" : "#666",
          }}
        >
          {description}
        </p>
        <div className="flex flex-col gap-2 mt-auto">
          {ctas.map((cta, index) => {
            const isExternal =
              cta.external === true || cta.href.startsWith("http");
            const btnClass = `inline-flex items-center gap-1 font-heading text-lg uppercase transition-all ${
              isDark
                ? "text-[#1B1440] border border-[#1B1440] rounded px-3 py-1 hover:bg-[#1B1440] hover:text-white"
                : "text-[#0D0B2E] border border-[#0D0B2E] rounded px-3 py-1 hover:bg-[#0D0B2E] hover:text-white"
            }`;
            return isExternal ? (
              <a
                key={index}
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
              >
                {cta.label} <i className="fa-solid fa-arrow-right text-xs" />
              </a>
            ) : (
              <Link key={index} to={cta.href} className={btnClass}>
                {cta.label} <i className="fa-solid fa-arrow-right text-xs" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
