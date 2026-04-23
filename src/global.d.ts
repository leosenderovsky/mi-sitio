export {};

declare global {
  interface Window {
    GLightbox?: (options?: Record<string, unknown>) => {
      destroy: () => void;
    };
    gtag?: (command: string, ...args: any[]) => void;
  }
}
