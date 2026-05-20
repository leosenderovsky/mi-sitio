import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface CertificateModalProps {
  imageUrl: string;
  altText: string;
  onClose: () => void;
}

/**
 * Helper function to build srcSet for certificates with responsive variants
 * Infers variants by naming convention: name-{width}w.{format}
 * @param baseUrl - Base URL (e.g., "/assets/img/certificados/certificate.webp")
 * @param format - Image format: "webp" or "avif"
 * @returns srcSet string with responsive variants
 */
function buildCertSrcSet(baseUrl: string, format: "webp" | "avif"): string {
  // Extract base name and build srcSet with common breakpoints
  const parts = baseUrl.split("/");
  const filename = parts[parts.length - 1];
  const baseName = filename.replace(/\.webp$|\.avif$/, "");
  const dir = baseUrl.substring(0, baseUrl.lastIndexOf("/"));

  const widths = [480, 768, 1024];
  const ext = format === "avif" ? "avif" : "webp";

  return widths
    .map((width) => `${dir}/${baseName}-${width}w.${ext} ${width}w`)
    .join(", ");
}

export function CertificateModal({
  imageUrl,
  altText,
  onClose,
}: CertificateModalProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Handle body scroll lock
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsExiting(true);
        setTimeout(onClose, 200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Handle overlay click
  const handleOverlayClick = () => {
    setIsExiting(true);
    setTimeout(onClose, 200);
  };

  // Handle modal content click (prevent overlay close)
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // Handle close button click
  const handleCloseClick = () => {
    setIsExiting(true);
    setTimeout(onClose, 200);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: isExiting ? 0.92 : 1, opacity: isExiting ? 0 : 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto rounded-lg"
        onClick={handleContentClick}
      >
        {/* Close button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faTimes} className="text-lg" />
        </button>

        {/* Certificate image */}
        <picture>
          <source
            type="image/avif"
            srcSet={buildCertSrcSet(imageUrl, "avif")}
            sizes="(max-width: 768px) calc(100vw - 2rem), min(896px, 90vw)"
          />
          <img
            src={imageUrl}
            srcSet={buildCertSrcSet(imageUrl, "webp")}
            sizes="(max-width: 768px) calc(100vw - 2rem), min(896px, 90vw)"
            alt={altText}
            width="3240"
            height="2100"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-lg shadow-2xl object-contain"
          />
        </picture>
      </motion.div>
    </motion.div>
  );
}
