import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DocenciaCiclo } from '../data/docencia-ciclos';

interface DocenciaCardProps {
  ciclo: DocenciaCiclo;
  isOpen: boolean;
  onToggle: () => void;
}

export function DocenciaCard({ ciclo, isOpen, onToggle }: DocenciaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasMultipleDocs = ciclo.documents.length > 1;

  return (
    <div style={{ margin: '5px' }}>
      {/* ── Card clickeable ── */}
      <div
        onClick={onToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="transition-colors duration-300"
        style={{
          backgroundColor: isOpen
            ? 'rgba(0,0,0,0.6)'
            : isHovered
            ? 'rgba(0,0,0,0.6)'
            : 'rgba(255,255,255,0.6)',
          color: (isOpen || isHovered) ? '#fff' : '#000',
          padding: '30px',
          marginTop: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        <p
          className="text-center uppercase"
          style={{
            fontFamily: '"Yanone Kaffeesatz", sans-serif',
            fontSize: '2em',
            lineHeight: '120%',
          }}
        >
          {ciclo.title}
        </p>
        {ciclo.subtitle && (
          <p
            className="text-center mt-2"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: '1.2em',
              fontWeight: 300,
            }}
          >
            {ciclo.subtitle}
          </p>
        )}
      </div>

      {/* ── Panel colapsable ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: 'rgba(255,255,255,0.7)', color: '#000', overflow: 'hidden' }}
          >
            {hasMultipleDocs && (
              <p
                className="text-center pt-3"
                style={{
                  fontFamily: '"Yanone Kaffeesatz", sans-serif',
                  fontSize: '1.2em',
                  fontWeight: 300,
                  lineHeight: '150%',
                  padding: '10px',
                }}
              >
                Reseñas de los encuentros:
              </p>
            )}
            {ciclo.documents.map((doc, idx) => (
              <a
                key={idx}
                href={doc.link}
                target="_blank"
                rel="noreferrer"
                className="block transition-colors duration-200"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontFamily: '"Yanone Kaffeesatz", sans-serif',
                  color: '#000',
                  fontSize: '1.5em',
                  textTransform: 'uppercase',
                  fontWeight: 300,
                  textAlign: 'center',
                  padding: '10px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,0,0,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#fff';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '';
                  (e.currentTarget as HTMLElement).style.color = '#000';
                }}
              >
                <i className="fa-regular fa-file-lines" style={{ padding: '0 10px' }} />
                {doc.title}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}