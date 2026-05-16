import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export type SectionMap = Record<string, string>;

const HEADER_OFFSET = 96;

function getAnchorElement(anchor: string) {
  if (!anchor || anchor === '#') return null;

  const id = decodeURIComponent(anchor.replace(/^#/, ''));
  return document.getElementById(id);
}

function scrollToAnchor(anchor: string, behavior: ScrollBehavior = 'smooth') {
  const element = getAnchorElement(anchor);
  if (!element) return false;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
  return true;
}

export function useSectionScroll(sectionMap: SectionMap = {}) {
  const { pathname, hash } = useLocation();
  const params = useParams();
  const section = params.section;
  const splat = params['*'];

  useEffect(() => {
    const handleInPageAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const link = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.target || link.hasAttribute('download')) return;

      const anchor = link.hash;
      if (!anchor || anchor === '#') return;
      if (!getAnchorElement(anchor)) return;

      event.preventDefault();
      window.history.pushState(null, '', anchor);
      scrollToAnchor(anchor);
    };

    document.addEventListener('click', handleInPageAnchorClick, true);
    return () => {
      document.removeEventListener('click', handleInPageAnchorClick, true);
    };
  }, []);

  useEffect(() => {
    const sectionParam = section || splat;
    const target = sectionParam ? sectionMap[sectionParam] : hash;
    const anchor = target ? (target.startsWith('#') ? target : `#${target}`) : undefined;

    let retryTimer: number;

    const scrollToTarget = () => {
      if (anchor && anchor !== '#') {
        const success = scrollToAnchor(anchor);
        if (!success) {
          // Retry: el elemento puede no estar en el DOM aún (lazy load)
          retryTimer = window.setTimeout(() => {
            scrollToAnchor(anchor);
          }, 400);
        }
      } else if (!anchor || anchor === '#') {
        // Solo hacemos scroll to top si NO hay un anchor definido
        // y el pathname ha cambiado (evita scroll to top en clicks de anclas fallidos)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // 150ms para dar margen a startTransition y montado de componentes
    const timer = window.setTimeout(scrollToTarget, 150);
    
    return () => {
      window.clearTimeout(timer);
      if (retryTimer) window.clearTimeout(retryTimer);
    };
  }, [pathname, hash, section, splat, sectionMap]);
}
