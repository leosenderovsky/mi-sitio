import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'

const rootElement = document.getElementById('root')!

const render = (App: React.ComponentType) => {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(
      rootElement,
      <StrictMode>
        <App />
      </StrictMode>,
    )
  } else {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}

import('./App.tsx').then((module) => render(module.default))
