export {};

declare global {
  interface Window {
    GLightbox?: (options?: Record<string, unknown>) => {
      destroy: () => void;
    };
    __enableGA?: () => void;
    __gaLoaded?: boolean;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
