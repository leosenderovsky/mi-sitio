import { useState, useCallback, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

interface PdfViewerProps {
  url: string;
  filename?: string;
}

export default function PdfViewer({ url, filename }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);

  // Dynamically load the PDF worker only when this component is mounted
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).toString();
  }, []);

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
      setPageNumber(1);
    },
    [],
  );

  const goToPrevPage = () => setPageNumber((p) => Math.max(p - 1, 1));
  const goToNextPage = () => setPageNumber((p) => Math.min(p + 1, numPages));
  const zoomIn = () => setScale((s) => Math.min(s + 0.2, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.2, 0.5));

  return (
    <div className="flex flex-col items-center w-full">
      {/* Barra de controles custom */}
      <div className="flex items-center gap-4 mb-6 px-6 py-3 rounded-full bg-[#00052e]/80 backdrop-blur border border-white/10 text-white text-sm sticky top-20 z-10">
        <button
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          className="disabled:opacity-30 hover:text-[#88f3ff] transition-colors cursor-pointer"
        >
          ← Anterior
        </button>
        <span className="text-white/50 tabular-nums">
          {pageNumber} / {numPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={pageNumber >= numPages}
          className="disabled:opacity-30 hover:text-[#88f3ff] transition-colors cursor-pointer"
        >
          Siguiente →
        </button>
        <div className="w-px h-4 bg-white/20" />
        <button
          onClick={zoomOut}
          className="hover:text-[#88f3ff] transition-colors cursor-pointer text-lg leading-none"
        >
          −
        </button>
        <span className="text-white/50 tabular-nums w-10 text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          className="hover:text-[#88f3ff] transition-colors cursor-pointer text-lg leading-none"
        >
          +
        </button>
        <div className="w-px h-4 bg-white/20" />
        <a
          href={url}
          download={filename ?? "cv.pdf"}
          className="hover:text-[#1A74A0] transition-colors"
        >
          ↓ Descargar
        </a>
      </div>

      {/* Render del PDF */}
      <div className="rounded-xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="w-[700px] h-[900px] flex items-center justify-center bg-white/5 text-white/30 text-sm tracking-widest uppercase">
              Cargando…
            </div>
          }
          error={
            <div className="w-[700px] h-[200px] flex items-center justify-center bg-white/5 text-[#1A74A0] text-sm">
              No se pudo cargar el documento.
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {/* Paginación inferior (redundante para documentos largos) */}
      {numPages > 1 && (
        <div className="flex gap-2 mt-6">
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPageNumber(i + 1)}
              className={`w-2 h-2 rounded-full transition-all ${
                pageNumber === i + 1
                  ? "bg-[#88f3ff] scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
