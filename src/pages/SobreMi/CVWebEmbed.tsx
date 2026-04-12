import { PageSEO } from '../../components/PageSEO';

export default function CVWebEmbed() {
  return (
    <>
      <PageSEO
        title="CV Desarrollo Web | Leo Aquiba Senderovsky"
        description="CV Desarrollo Web de Leo Senderovsky - Frontend Developer."
        path="/web/cv"
      />

      <main className="bg-white py-8">
        <div className="container mx-auto px-4">
          <section className="space-y-6">
            <h1 className="text-3xl font-heading uppercase text-[#000b77]">CV Desarrollo Web</h1>
            <div className="w-full bg-gray-100">
              <iframe
                src="/assets/docs/cv/leo-senderovsky-resume-web.pdf"
                className="min-h-[85vh] w-full border-0"
                title="CV Desarrollo Web"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}