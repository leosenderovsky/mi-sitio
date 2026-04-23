import type { PortfolioItem } from '../types';

export interface PortfolioIAItem extends PortfolioItem {
  description: string;
}

export const portfolioIA: PortfolioIAItem[] = [
  {
    id: "ia-1", 
    category: "audiovisual", 
    title: "Spot \"Golden ticket Insurance\"", 
    image: "/assets/img/ia/spot-golden-ticket.jpg", 
    link: "https://www.youtube.com/watch?v=kFCZL7Kq9O8", 
    description: "Realizado integramente con herramientas IA"
  },
  {
    id: "ia-2", 
    category: "sitio web", 
    title: "Sitio web \"Franco Colapinto F1 Live Tracker\"", 
    image: "/assets/img/ia/franco-colapinto-f1-live-tracker.netlify.app.png", 
    link: "https://franco-colapinto-f1-live-tracker.netlify.app/", 
    description: "Con su historial de carreras y estadísticas",
    format: "web"
  },
  {
    id: "ia-3", 
    category: "web app", 
    title: "App web \"Social Screenshot Generator\"", 
    image: "/assets/img/ia/social-screenshot-generator.netlify.app.png", 
    link: "https://social-screenshot-generator.netlify.app/", 
    description: "Generador de imágenes de posteos de redes sociales",
    format: "web"
  },
  {
    id: "ia-4", 
    category: "web app", 
    title: "App web \"PDF to Image Generator\"", 
    image: "/assets/img/ia/pdf-to-image-generator.netlify.app.jpg", 
    link: "https://pdf-to-image-generator.netlify.app/", 
    description: "Generador de imágenes para redes sociales de documentos pdf",
    format: "web"
  }
];
