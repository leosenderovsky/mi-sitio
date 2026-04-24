import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { PortfolioItem } from "../types";

interface VideoThumbProps {
  item: PortfolioItem;
  square?: boolean;
}

const HOVER_IMAGES: Record<string, string> = {
  "16:9": "/assets/img/hover.png",
  "1:1": "/assets/img/hover.png",
  web: "/assets/img/hover.png",
};

export function VideoThumb({ item, square }: VideoThumbProps) {
  const isWeb = item.format === "web";
  const hoverImage =
    HOVER_IMAGES[item.format ?? "16:9"] || HOVER_IMAGES["16:9"];

  return (
    <motion.a
      href={item.link}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group block overflow-hidden rounded-3xl shadow-xl bg-white ${!isWeb ? "glightbox" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${square ? "aspect-square" : "aspect-video"} bg-black`}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!isWeb && (
          <div className="absolute inset-0 bg-site-teal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <img
              src={hoverImage}
              alt="Play"
              className="w-20 h-20 object-contain"
            />
          </div>
        )}
      </div>
      <div className="p-5 bg-[#1a74a0]">
        <div className="text-lg font-heading uppercase text-white mb-1">
          {item.title}
        </div>
        <div className="text-lg font-heading uppercase text-white mb-1">
          {item.subtitle}
        </div>
        <div className="text-white font-heading uppercase tracking-[2px] text-sm">
          {item.category}
        </div>
      </div>
    </motion.a>
  );
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  initialVisible?: number;
  square?: boolean;
  theme?: "light" | "dark";
}

export function PortfolioGrid({
  items,
  initialVisible = 9,
  square,
  theme = "dark",
}: PortfolioGridProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = useMemo(
    () => (showAll ? items : items.slice(0, initialVisible)),
    [items, initialVisible, showAll],
  );

  useEffect(() => {
    // Re-initialize GLightbox to catch new elements
    const lightbox = window.GLightbox?.({
      selector: ".glightbox",
    });
    return () => lightbox?.destroy();
  }, [visibleItems]);

  const buttonClasses = theme === "light" 
    ? "bg-[#1B1440] text-white hover:bg-[#1a74a0] hover:text-white" 
    : "bg-[#19d3ff] text-[#1B1440] hover:bg-[#1a74a0] hover:text-white";

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item) => (
          <VideoThumb key={item.id} item={item} square={square} />
        ))}
      </div>
      {items.length > initialVisible && !showAll && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className={`${buttonClasses} uppercase font-heading tracking-[2px] px-8 py-4 rounded-full transition-colors`}
          >
            Ver más
          </button>
        </div>
      )}
    </>
  );
}
