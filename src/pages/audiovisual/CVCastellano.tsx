import { Link } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer";
import { PageSEO } from "../../components/PageSEO";

export default function CVCastellano() {
  return (
    <main className="min-h-screen bg-[#00052e] pt-24 pb-20 flex flex-col items-center">
      <PageSEO
        title="CV Audiovisual"
        description="CV Audiovisual de Leo Senderovsky - Editor de video, guionista y docente."
        path="/audiovisual/cv/castellano"
        noindex={true}
      />
      <div className="w-full max-w-4xl px-4">
        <div className="flex items-center gap-4 mb-10">
          <Link
            to="/audiovisual/cv/ingles"
            className="text-xs text-white/40 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-1"
          >
            Ver en inglés →
          </Link>
        </div>
        <h1 className="text-4xl font-['Yanone_Kaffeesatz'] text-white mb-1 tracking-wide">
          Currículum Vitae
        </h1>
        <p className="text-white/40 mb-10 text-sm tracking-widest uppercase">
          Edición · Guión · Audiovisual
        </p>
        <PdfViewer
          url="/assets/docs/cv/leo-senderovsky-cv-edicion-guion.pdf"
          filename="Leo-Senderovsky-CV-ES.pdf"
        />
      </div>
    </main>
  );
}
