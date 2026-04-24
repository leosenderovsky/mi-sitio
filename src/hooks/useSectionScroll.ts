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
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const timer = window.setTimeout(scrollToTarget, 100);
    return () => window.clearTimeout(timer);
  }, [pathname, hash, section, splat, sectionMap]);
}
