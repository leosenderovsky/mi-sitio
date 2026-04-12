import { PageSEO } from '../../components/PageSEO';

export default function CVAudiovisualEmbed() {
  return (
    <>
      <PageSEO
        title="CV Audiovisual | Leo Aquiba Senderovsky"
        description="CV Audiovisual de Leo Senderovsky - Editor de video, guionista y docente."
        path="/audiovisual/cv"
      />

      <main className="bg-white py-8">
        <div className="container mx-auto px-4 space-y-10">
          <section id="castellano" className="space-y-6">
            <h1 className="text-3xl font-heading uppercase text-[#000b77]">CV Audiovisual — Español</h1>
            <div className="w-full bg-gray-100">
              <iframe
                src="/assets/docs/cv/leo-senderovsky-cv-edicion-guion.pdf"
                className="min-h-[85vh] w-full border-0"
                title="CV Audiovisual Español"
              />
            </div>
          </section>

          <section id="ingles" className="space-y-6">
            <h1 className="text-3xl font-heading uppercase text-[#000b77]">CV Audiovisual — English</h1>
            <div className="w-full bg-gray-100">
              <iframe
                src="/assets/docs/cv/leo-senderovsky-resume-editor.pdf"
                className="min-h-[85vh] w-full border-0"
                title="CV Audiovisual English"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}