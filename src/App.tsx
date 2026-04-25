import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SchemaGlobal } from './components/SchemaMarkup';
import { ErrorBoundary } from './components/ErrorBoundary';

import { Home } from './pages/Home';
const Edicion = lazy(() => import('./pages/Edicion').then(module => ({ default: module.Edicion })));
const Guion = lazy(() => import('./pages/Guion').then(module => ({ default: module.Guion })));
const Docencia = lazy(() => import('./pages/Docencia').then(module => ({ default: module.Docencia })));
const Critica = lazy(() => import('./pages/Critica').then(module => ({ default: module.Critica })));
const Web = lazy(() => import('./pages/Web').then(module => ({ default: module.Web })));
const IA = lazy(() => import('./pages/IA').then(module => ({ default: module.IA })));
const Gracias = lazy(() => import('./pages/Gracias').then(module => ({ default: module.Gracias })));
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));
const CVAudiovisual = lazy(() => import('./pages/SobreMi/CVAudiovisual').then(module => ({ default: module.default })));
const CVWeb = lazy(() => import('./pages/SobreMi/CVWeb').then(module => ({ default: module.default })));
const CVCastellano = lazy(() => import('./pages/audiovisual/CVCastellano').then(module => ({ default: module.default })));
const CVIngles = lazy(() => import('./pages/audiovisual/CVIngles').then(module => ({ default: module.default })));
const CVWebEmbed = lazy(() => import('./pages/SobreMi/CVWebEmbed').then(module => ({ default: module.default })));
const DocenciaDocEmbed = lazy(() => import('./pages/audiovisual/DocenciaDocEmbed').then(module => ({ default: module.default })));

// Componente para trackear cambios de ruta en GA4
function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-5R825ZYTN5', {
        page_path: location.pathname + location.search
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <SchemaGlobal />
        <Router>
          <Analytics />
          <div className="flex flex-col min-h-screen bg-site-dark overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-24">
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-site-dark text-white">Cargando...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/gracias" element={<Gracias />} />
                  <Route path="/sobre-mi/cv-audiovisual" element={<CVAudiovisual />} />
                  <Route path="/sobre-mi/cv-web" element={<CVWeb />} />
                  <Route path="/audiovisual/cv/castellano" element={<CVCastellano />} />
                  <Route path="/audiovisual/cv/ingles" element={<CVIngles />} />
                  <Route path="/audiovisual/cv" element={<Navigate to="/audiovisual/cv/castellano" replace />} />
                  <Route path="/web/cv" element={<CVWebEmbed />} />
                  <Route path="/audiovisual/edicion" element={<Edicion />} />
                  <Route path="/audiovisual/edicion/*" element={<Edicion />} />
                  <Route path="/audiovisual/guion" element={<Guion />} />
                  <Route path="/audiovisual/guion/:section" element={<Guion />} />
                  <Route path="/audiovisual/docencia" element={<Docencia />} />
                  <Route path="/audiovisual/docencia/leer/:filename" element={<DocenciaDocEmbed />} />
                  <Route path="/audiovisual/docencia/:section" element={<Docencia />} />
                  <Route path="/audiovisual/critica" element={<Critica />} />
                  <Route path="/audiovisual/critica/:section" element={<Critica />} />
                  <Route path="/web" element={<Web />} />
                  <Route path="/web/:section" element={<Web />} />
                  <Route path="/ia" element={<IA />} />
                  <Route path="/ia/:section" element={<IA />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
