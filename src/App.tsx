import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SchemaGlobal } from './components/SchemaMarkup';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Edicion = lazy(() => import('./pages/Edicion').then(module => ({ default: module.Edicion })));
const Guion = lazy(() => import('./pages/Guion').then(module => ({ default: module.Guion })));
const Docencia = lazy(() => import('./pages/Docencia').then(module => ({ default: module.Docencia })));
const Critica = lazy(() => import('./pages/Critica').then(module => ({ default: module.Critica })));
const Web = lazy(() => import('./pages/Web').then(module => ({ default: module.Web })));
const IA = lazy(() => import('./pages/IA').then(module => ({ default: module.IA })));
const Gracias = lazy(() => import('./pages/Gracias').then(module => ({ default: module.Gracias })));
const CVAudiovisual = lazy(() => import('./pages/SobreMi/CVAudiovisual').then(module => ({ default: module.default })));
const CVWeb = lazy(() => import('./pages/SobreMi/CVWeb').then(module => ({ default: module.default })));
const CVAudiovisualEmbed = lazy(() => import('./pages/SobreMi/CVAudiovisualEmbed').then(module => ({ default: module.default })));
const CVWebEmbed = lazy(() => import('./pages/SobreMi/CVWebEmbed').then(module => ({ default: module.default })));

function App() {
  return (
    <HelmetProvider>
      <SchemaGlobal />
      <Router>
        <div className="flex flex-col min-h-screen bg-site-dark overflow-x-hidden">
          <Navbar />
          <main className="flex-grow pt-24">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-site-dark text-white">Cargando...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gracias" element={<Gracias />} />
                <Route path="/sobre-mi/cv-audiovisual" element={<CVAudiovisual />} />
                <Route path="/sobre-mi/cv-web" element={<CVWeb />} />
                <Route path="/audiovisual/cv" element={<CVAudiovisualEmbed />} />
                <Route path="/web/cv" element={<CVWebEmbed />} />
                <Route path="/audiovisual/edicion" element={<Edicion />} />
                <Route path="/audiovisual/edicion/portfolio/videos" element={<Edicion />} />
                <Route path="/audiovisual/edicion/portfolio/reels" element={<Edicion />} />
                <Route path="/audiovisual/edicion/:section" element={<Edicion />} />
                <Route path="/audiovisual/guion" element={<Guion />} />
                <Route path="/audiovisual/guion/:section" element={<Guion />} />
                <Route path="/audiovisual/docencia" element={<Docencia />} />
                <Route path="/audiovisual/docencia/:section" element={<Docencia />} />
                <Route path="/audiovisual/critica" element={<Critica />} />
                <Route path="/audiovisual/critica/:section" element={<Critica />} />
                <Route path="/web" element={<Web />} />
                <Route path="/web/:section" element={<Web />} />
                <Route path="/ia" element={<IA />} />
                <Route path="/ia/:section" element={<IA />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
