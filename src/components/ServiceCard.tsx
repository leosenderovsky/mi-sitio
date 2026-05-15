import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  icon?: IconDefinition;
  icons?: IconDefinition[];
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

  // Helper interno para imágenes responsive
  const buildSrcSet = (src: string): string | undefined => {
    const RESPONSIVE = [
      "/assets/img/dibujos/edicion.webp",
      "/assets/img/dibujos/critica.webp",
      "/assets/img/dibujos/ia.webp",
      "/assets/img/dibujos/web.webp",
      "/assets/img/dibujos/guion.webp",
      "/assets/img/dibujos/docencia-1.webp",
    ];
    if (!RESPONSIVE.includes(src)) return undefined;

    const base = src.replace(".webp", "");
    return `${base}-400w.webp 400w, ${base}-700w.webp 700w, ${base}-1024w.webp 1024w, ${src} 1376w`;
  };

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
        <div className="overflow-hidden aspect-video">
          <img
            src={image}
            srcSet={buildSrcSet(image)}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            alt={title}
            width="400"
            height="225"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      )}

      {/* Ícono FA alternativo (sin imagen) */}
      {!image && (icon || icons) && (
        <div
          className={`flex justify-center pt-8 ${isDark ? "text-[#1B1440]" : "text-site-dark"}`}
        >
          {icon && <FontAwesomeIcon icon={icon} className="text-4xl" />}
          {icons && (
            <div className="flex gap-4">
              {icons.map((ic, idx) => (
                <FontAwesomeIcon key={idx} icon={ic} className="text-4xl" />
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
                {cta.label} <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
              </a>
            ) : (
              <Link key={index} to={cta.href} className={btnClass}>
                {cta.label} <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.article>
  );
}
