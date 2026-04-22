import { Link } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer";

export default function CVIngles() {
  return (
    <main className="min-h-screen bg-[#00052e] pt-24 pb-20 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4">
        <div className="flex items-center gap-4 mb-10">
          <Link
            to="/audiovisual/cv/castellano"
            className="text-xs text-white/40 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-1"
          >
            ← Ver en español
          </Link>
        </div>
        <h1 className="text-4xl font-['Yanone_Kaffeesatz'] text-white mb-1 tracking-wide">
          Resume
        </h1>
        <p className="text-white/40 mb-10 text-sm tracking-widest uppercase">
          Senior Video Editor - Post production coordinator
        </p>
        <PdfViewer
          url="/assets/docs/cv/leo-senderovsky-resume-editor.pdf"
          filename="Leo-Senderovsky-CV-EN.pdf"
        />
      </div>
    </main>
  );
}
