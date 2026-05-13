import { motion } from 'framer-motion';

interface CookieBannerProps {
  onAccept: () => void;
  onReject: () => void;
}

export function CookieBanner({ onAccept, onReject }: CookieBannerProps) {

  return (
    <motion.div
      role="dialog"
      aria-label="Consentimiento de Cookies"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 flex justify-center pointer-events-none"
    >
      <div className="w-full max-w-lg bg-[#0D0B2E]/95 backdrop-blur-sm border-t-2 border-[--color-secondary] shadow-2xl rounded-t-xl p-5 md:p-6 pointer-events-auto">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-heading text-white uppercase tracking-wider m-0">
            Cookies & Privacidad
          </h2>
          
          <p className="font-body text-white text-sm leading-relaxed">
            Utilizo Google Analytics 4 para entender cómo interactuás con el sitio y mejorar tu experiencia. 
            También uso Google Fonts, que puede transferir datos a servidores de Google. 
            Al aceptar, permitís el uso de estas tecnologías.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={onAccept}
              className="flex-1 px-6 py-2.5 bg-[#1A74A0] text-white font-heading uppercase tracking-wide rounded-md hover:brightness-110 transition-all shadow-[0_0_15px_rgba(26,116,160,0.3)] active:scale-95 cursor-pointer"
            >
              Aceptar
            </button>
            <button
              onClick={onReject}
              className="flex-1 px-6 py-2.5 border border-[#19D3FF] text-[#19D3FF] font-heading uppercase tracking-wide rounded-md hover:bg-[#19D3FF]/10 transition-all active:scale-95 cursor-pointer"
            >
              Rechazar
            </button>
          </div>

          <div className="text-center">
            <a 
              href="/politica-de-cookies" 
              className="text-[--color-text-light]/60 hover:text-[--color-secondary] text-xs font-body transition-colors underline underline-offset-4"
            >
              Política de cookies
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
