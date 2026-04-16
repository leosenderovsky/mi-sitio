export interface PortfolioItem {
  id: string;
  title?: string;
  subtitle?: string;
  category: string;
  image: string;
  link: string;
  format?: '16:9' | '1:1' | 'web';
  description?: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company?: string;
  description: string;
  logo: string;
  link?: string;
}

export interface EducationItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  logo: string;
  link?: string;
  diplomaUrl?: string;
}

export interface DocenciaCicloDocumento {
  title: string;
  link: string;
}

export interface DocenciaCiclo {
  id: string;
  title: string;
  subtitle?: string;
  documents: DocenciaCicloDocumento[];
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  bgColor?: string;
  ctas: { label: string; href: string; external?: boolean }[];
}

export interface EntrevistaItem {
  id: string;
  title: string;
  medium: string;
  date?: string;
  link: string;
  image?: string;
}
