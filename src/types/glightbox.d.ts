/**
 * GLightbox Type Definitions
 * Provides type safety for the GLightbox library used in portfolio galleries
 */

export interface GLightboxOptions {
  selector?: string;
  elements?: Array<HTMLElement | Record<string, unknown>>;
  descPosition?: 'bottom' | 'top';
  width?: string;
  height?: string;
  zindex?: number;
  openEffect?: string;
  closeEffect?: string;
  slideEffect?: string;
  scrollZoom?: boolean;
  preload?: boolean;
  loop?: boolean;
  plyr?: Record<string, unknown>;
  keyboard?: boolean;
  touchNavigation?: boolean;
  touchFollowAxis?: boolean;
  closeButton?: boolean;
  dotNavigation?: boolean;
  counter?: boolean;
  counterGenerator?: (current: number, total: number) => string;
  barColor?: string;
  backgroundColor?: string;
  descColor?: string;
}

export interface GLightboxInstance {
  destroy(): void;
  reload(): void;
  open(index?: number): void;
  close(): void;
  nextSlide(): void;
  prevSlide(): void;
  goToSlide(index: number): void;
  setElements(elements: HTMLElement[]): void;
}

declare global {
  interface Window {
    GLightbox?: (opts?: GLightboxOptions) => GLightboxInstance;
  }
}

export {};
