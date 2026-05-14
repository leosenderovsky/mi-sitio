import { useState } from 'react';

type ConsentStatus = 'accepted' | 'rejected' | null;

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<ConsentStatus>(() => {
    return localStorage.getItem('cookie_consent') as ConsentStatus;
  });

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsent('accepted');
    window.__enableGA?.();
  };

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setConsent('rejected');
  };

  return { consent, accept, reject };
};
