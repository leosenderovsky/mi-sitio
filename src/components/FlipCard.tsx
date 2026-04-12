import { useState } from 'react';
import { motion } from 'framer-motion';

interface FlipCardProps {
  /** Texto grande del frente (ej: "AUDIOVISUAL") */
  frontTitle: string;
  /** Clase del ícono FA para el frente (ej: "fa-solid fa-film") */
  frontIcon: string;
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
          <i className={`${frontIcon} text-5xl md:text-6xl`} />
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
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-lg border-2 border-white flex flex-col items-center justify-center text-white gap-1"
          style={
            backImage
              ? { backgroundImage: `url(${backImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : { backgroundColor: frontColor }
          }
        >
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
      </motion.div>
    </div>
  );
}
