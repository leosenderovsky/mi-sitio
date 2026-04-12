import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export type SectionMap = Record<string, string>;

export function useSectionScroll(sectionMap: SectionMap = {}) {
  const { pathname, hash } = useLocation();
  const params = useParams<{ section?: string }>();

  useEffect(() => {
    const target = params.section ? sectionMap[params.section] : hash;
    const anchor = target ? (target.startsWith('#') ? target : `#${target}`) : undefined;

    const scrollToTarget = () => {
      if (anchor) {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timer = window.setTimeout(scrollToTarget, 100);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, params.section, sectionMap]);
}
