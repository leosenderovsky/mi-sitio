import React from 'react';

// src/components/ResponsiveBackground.tsx
interface ResponsiveBackgroundProps {
  id?: string;
  src: string;
  srcSet: string;
  sizes?: string;
  alt?: string;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ResponsiveBackground({
  id,
  src,
  srcSet,
  sizes = '100vw',
  alt = '',
  className = '',
  children,
  style,
}: ResponsiveBackgroundProps) {
  return (
    <div id={id} className={`relative overflow-hidden ${className}`} style={style}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        fetchPriority="high"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
