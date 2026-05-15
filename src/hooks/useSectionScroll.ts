import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export type SectionMap = Record<string, string>;

export function useSectionScroll(sectionMap: SectionMap = {}) {
  const { pathname, hash } = useLocation();
  const params = useParams();
  const section = params.section;
  const splat = params['*'];

  useEffect(() => {
    const sectionParam = section || splat;
    const target = sectionParam ? sectionMap[sectionParam] : hash;
    const anchor = target ? (target.startsWith('#') ? target : `#${target}`) : undefined;

    const scrollToTarget = () => {
      if (anchor) {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        // Retry: el elemento puede no estar en el DOM aún (lazy load / startTransition)
        const retryTimer = window.setTimeout(() => {
          const retryEl = document.querySelector(anchor);
          if (retryEl) retryEl.scrollIntoView({ behavior: 'smooth' });
        }, 400);
        return () => window.clearTimeout(retryTimer);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 150ms en lugar de 100ms para dar margen a startTransition en mobile
    const timer = window.setTimeout(scrollToTarget, 150);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, section, splat, sectionMap]);
}
