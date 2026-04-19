import { motion, AnimatePresence } from 'framer-motion';
import type { DocenciaCiclo } from '../data/docencia-ciclos';

interface DocenciaCardProps {
  ciclo: DocenciaCiclo;
  isOpen: boolean;
  onToggle: () => void;
}

export function DocenciaCard({ ciclo, isOpen, onToggle }: DocenciaCardProps) {
  const hasMultipleDocs = ciclo.documents.length > 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition-shadow"
      style={{ backgroundColor: '#1B1440' }}
    >
      {/* ── Header clickeable ── */}
      <div
        onClick={onToggle}
        className="p-6 cursor-pointer transition-colors duration-300"
        style={{
          backgroundColor: isOpen ? '#0D0B2E' : undefined,
        }}
      >
        <p
          className="text-center uppercase"
          style={{
            fontFamily: '"Yanone Kaffeesatz", sans-serif',
            fontSize: '1.9em',
            fontWeight: 600,
            color: '#fff',
            lineHeight: '120%',
          }}
        >
          {ciclo.title}
        </p>

        {ciclo.subtitle && (
          <p
            className="text-center mt-2"
            style={{
              fontFamily: '"Libre Franklin", sans-serif',
              fontSize: '13px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.80)',
              lineHeight: '1.5',
            }}
          >
            {ciclo.subtitle}
          </p>
        )}

        {/* Indicador de estado (chevron) */}
        <div className="flex justify-center mt-4">
          <i
            className={`fa-solid fa-chevron-down text-white/60 text-sm transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* ── Panel colapsable ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: '#0D0B2E', overflow: 'hidden' }}
          >
            {hasMultipleDocs && (
              <p
                className="text-center pt-4 px-6"
                style={{
                  fontFamily: '"Libre Franklin", sans-serif',
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.70)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
              >
                Reseñas de los encuentros:
              </p>
            )}

            <div className="flex flex-col gap-2 p-6 pt-3">
              {ciclo.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 font-heading text-base uppercase transition-all
                    text-white border border-white/50 rounded px-3 py-2
                    hover:bg-white hover:text-[#0D0B2E]`}
                  style={{
                    fontFamily: '"Yanone Kaffeesatz", sans-serif',
                    fontSize: '1.1em',
                    letterSpacing: '0.05em',
                  }}
                >
                  <i className="fa-regular fa-file-lines text-sm" />
                  {doc.title}
                  <i className="fa-solid fa-arrow-right text-xs ml-auto" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}