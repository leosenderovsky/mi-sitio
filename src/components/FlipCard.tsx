import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface FlipCardProps {
  /** Texto grande del frente (ej: "AUDIOVISUAL") */
  frontTitle: string;
  /** Objeto IconDefinition de react-fontawesome para el frente */
  frontIcon: IconDefinition;
  /** Color de fondo del frente en HEX (ej: "#3844BE") */
  frontColor: string;
  /** Subtítulos que aparecen en el reverso */
  backSubtitles: string[];
  /** Ruta a imagen de fondo del reverso (opcional) */
  backImage?: string;
}

export function FlipCard({ frontTitle, frontIcon, frontColor, backSubtitles, backImage }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full [perspective:1000px] cursor-pointer aspect-[3/2]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(f => !f)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        {/* ── Cara FRONTAL ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] rounded-lg border-2 border-white flex flex-col items-center justify-center text-white gap-2"
          style={{ backgroundColor: frontColor }}
        >
          <FontAwesomeIcon icon={frontIcon} className="text-5xl md:text-6xl" />
          <div
            className="text-white text-center uppercase leading-tight"
            style={{
              fontFamily: '"Yanone Kaffeesatz", sans-serif',
              fontSize: '2.5em',
              fontWeight: 500,
              lineHeight: 1.5,
            }}
          >
            {frontTitle}
          </div>
        </div>

        {/* ── Cara TRASERA ── */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border-2 border-white flex flex-col items-center justify-center text-white gap-1 overflow-hidden"
          style={
            backImage
              ? { backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: frontColor }
          }
        >
          {/* Capa de color con opacidad para mejorar legibilidad sobre la imagen de fondo */}
          {backImage && (
            <div 
              className="absolute inset-0" 
              style={{ backgroundColor: 'rgba(13, 11, 46, 0.75)' }} 
            />
          )}

          <div className="relative z-10 flex flex-col items-center justify-center gap-1">
            {backSubtitles.map((sub, i) => (
              <div
                key={i}
                className="text-white text-center uppercase"
                style={{
                  fontFamily: '"Yanone Kaffeesatz", sans-serif',
                  fontSize: '2em',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {sub}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
