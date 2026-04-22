import { useParams, Link, useLocation } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer";
import { PageSEO } from "../../components/PageSEO";

export default function DocenciaDocEmbed() {
  const { filename } = useParams();
  const location = useLocation();
  const { title, category } =
    (location.state as { title?: string; category?: string }) || {};

  const pdfUrl = `/assets/docs/${filename}`;
  const displayTitle =
    title || filename?.replace(/-/g, " ").replace(".pdf", "") || "Documento";

  return (
    <>
      <PageSEO
        title={`${displayTitle} | Docencia | Leo Senderovsky`}
        description={`Documento de docencia: ${displayTitle}`}
        path={`/audiovisual/docencia/leer/${filename}`}
      />

      <main className="min-h-screen bg-[#00052e] pt-24 pb-20 flex flex-col items-center">
        <div className="w-full max-w-4xl px-4">
          <div className="flex items-center gap-4 mb-10">
            <Link
              to="/audiovisual/docencia"
              className="text-xs text-white/40 hover:text-white/70 transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-1"
            >
              ← Volver a Docencia
            </Link>
          </div>
          <h1 className="text-4xl font-['Yanone_Kaffeesatz'] text-white mb-1 tracking-wide uppercase">
            {displayTitle}
          </h1>
          {category && (
            <p className="text-white/40 mb-10 text-sm tracking-widest uppercase">
              {category}
            </p>
          )}
          <PdfViewer url={pdfUrl} filename={filename} />
        </div>
      </main>
    </>
  );
}
