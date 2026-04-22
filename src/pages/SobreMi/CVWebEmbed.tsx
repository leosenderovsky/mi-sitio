import { PageSEO } from "../../components/PageSEO";
import PdfViewer from "../../components/PdfViewer";

export default function CVWebEmbed() {
  return (
    <>
      <PageSEO
        title="CV Desarrollo Web | Leo Aquiba Senderovsky"
        description="CV Desarrollo Web de Leo Senderovsky - Frontend Developer."
        path="/web/cv"
      />

      <main className="min-h-screen bg-[#00052e] pt-24 pb-20 flex flex-col items-center">
        <div className="w-full max-w-4xl px-4">
          <div className="h-8 mb-10" />
          <h1 className="text-4xl font-['Yanone_Kaffeesatz'] text-white mb-1 tracking-wide">
            Resume
          </h1>
          <p className="text-white/40 mb-10 text-sm tracking-widest uppercase">
            Frontend Developer
          </p>
          <PdfViewer
            url="/assets/docs/cv/leo-senderovsky-resume-web.pdf"
            filename="Leo-Senderovsky-CV-Web.pdf"
          />
        </div>
      </main>
    </>
  );
}
