import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageSEO } from "../components/PageSEO";

export function NotFound() {
  return (
    <>
      <PageSEO 
        title="404 - Página no encontrada" 
        description="Lo sentimos, la página que buscas no existe."
        noindex={true}
      />
      <section className="min-h-[80vh] flex items-center justify-center bg-site-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 
              className="text-9xl font-heading mb-4 text-[#19D3FF]"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif' }}
            >
              404
            </h1>
            <h2 className="text-4xl font-heading uppercase mb-8 tracking-wider">
              Página no encontrada
            </h2>
            <p className="max-w-md mx-auto text-xl text-white/70 mb-10 font-body">
              Parece que la escena que buscas no está en el guión. 
              Tal vez se movió de lugar o el enlace es incorrecto.
            </p>
            <Link
              to="/"
              className="inline-block bg-[#19D3FF] text-[#1B1440] font-heading text-2xl uppercase px-10 py-4 rounded-full hover:bg-white transition-all transform hover:scale-105"
              style={{ fontFamily: '"Yanone Kaffeesatz",sans-serif' }}
            >
              Volver al inicio
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
