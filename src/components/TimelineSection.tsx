import { SectionHeader } from './SectionHeader';
import type { ExperienceItem, EducationItem } from '../types';

interface TimelineSectionProps {
  id: string;
  title: string;
  subtitle: string;
  experiences: ExperienceItem[];
  educations: EducationItem[];
  theme: 'light' | 'dark';
}

export function TimelineSection({ id, title, subtitle, experiences, educations, theme }: TimelineSectionProps) {
  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-site-dark' : 'bg-white';
  const textColor = isDark ? 'text-white' : 'text-site-dark';
  const cardBg = isDark ? 'bg-gray-900/70 border border-gray-700' : 'bg-[#f2f2f2] border border-transparent';
  const lineColor = isDark ? 'border-site-teal' : 'border-gray-200';

  return (
    <section id={id} className={`py-20 ${bgColor} ${textColor}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeader title={title} subtitle={subtitle} theme={theme} />
        
        {/* Experience Timeline */}
        {experiences.length > 0 && (
          <div className="mt-16">
             <h3 className="text-3xl font-heading uppercase text-site-teal mb-8 flex items-center">
                <i className="fa-solid fa-briefcase mr-4"></i> Experiencia Laboral
             </h3>
             <div className={`relative border-l-2 ${lineColor} ml-4 pl-8 space-y-12`}>
                {experiences.map((exp) => (
                   <div key={exp.id} className="relative">
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-site-teal shadow"></div>
                      <div className={`${cardBg} p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow`}>
                         {exp.logo && (
                            <div className="mb-4 bg-white inline-block p-2 rounded">
                              <img src={exp.logo} alt={exp.title} className="h-10 object-contain" />
                            </div>
                         )}
                         <h4 className="font-heading text-[1.6em] mb-1">{exp.title}</h4>
                         <span className="text-site-teal font-bold text-base uppercase tracking-wider block mb-4">{exp.period}</span>
                         <p className={`${isDark ? 'text-gray-300' : 'text-black'}`}>{exp.description}</p>
                         {exp.link && (
                            <a href={exp.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-site-teal font-bold hover:underline">
                              Ver sitio <i className="fa-solid fa-arrow-right ml-1"></i>
                            </a>
                         )}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}

        {/* Education Timeline */}
        {educations.length > 0 && (
          <div className="mt-20">
             <h3 className="text-3xl font-heading uppercase text-site-teal mb-8 flex items-center">
                <i className="fa-solid fa-graduation-cap mr-4"></i> Formación
             </h3>
             <div className={`relative border-l-2 ${lineColor} ml-4 pl-8 space-y-12`}>
                {educations.map((edu) => (
                   <div key={edu.id} className="relative">
                      <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-site-teal shadow"></div>
                      <div className={`${cardBg} p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow`}>
                         {edu.logo && (
                            <div className="mb-4 bg-white inline-block p-2 rounded">
                              <img src={edu.logo} alt={edu.institution} className="h-10 object-contain" />
                            </div>
                         )}
                         <h4 className="font-heading text-[1.6em] mb-1">{edu.title}</h4>
                         <div className="text-xl font-bold mb-1">{edu.institution}</div>
                         <span className="text-site-teal font-bold text-base uppercase tracking-wider block mb-4">{edu.period}</span>
                         {edu.link && (
                            <a href={edu.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-site-teal font-bold hover:underline">
                              Ver certificado <i className="fa-solid fa-arrow-right ml-1"></i>
                            </a>
                         )}
                      </div>
                   </div>
                ))}
             </div>
          </div>
        )}

      </div>
    </section>
  );
}
