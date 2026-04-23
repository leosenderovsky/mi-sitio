# Leo Senderovsky - Portfolio Personal

Sitio web personal de Leo Senderovsky, un profesional multidisciplinario especializado en producción audiovisual, desarrollo web e inteligencia artificial.

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 19 con TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Routing**: React Router DOM
- **SEO**: React Helmet Async
- **Icons**: Font Awesome

## 📋 Secciones del Sitio

### Audiovisual
- **Edición**: Portfolio de videos editados, experiencia profesional y reels
- **Guión**: Servicios de escritura y consultoría de guiones
- **Docencia**: Charlas y ciclos de cine, entrevistas
- **Crítica**: Colaboraciones en medios y blog personal

### Desarrollo Web
- Servicios de desarrollo frontend
- Experiencia profesional
- Proyectos personales

### Inteligencia Artificial (sender.ia)
- Integración de IA en proyectos audiovisuales y web
- Portfolio de trabajos con IA

### Sobre Mí
- CV Audiovisual
- CV Desarrollo Web
- Información personal y contacto

## 🛠️ Instalación y Desarrollo Local

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/leosenderovsky/mi-sitio.git
cd mi-sitio

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```

### Build para Producción
```bash
# Crear build optimizado
npm run build

# Vista previa del build
npm run preview
```

### Linting
```bash
# Ejecutar ESLint
npm run lint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── pages/              # Páginas principales
├── data/               # Datos estáticos
├── hooks/              # Hooks personalizados
├── assets/             # Recursos estáticos
└── types.ts           # Definiciones de tipos TypeScript

public/                 # Archivos públicos
legacy/                 # Versión anterior del sitio (HTML)
```

## 🌐 Despliegue

El sitio está configurado para desplegarse en Netlify con las siguientes características:
- SPA routing con `_redirects`
- Configuración optimizada en `netlify.toml`
- Sitemap y robots.txt incluidos

## 🆕 Actualizaciones Recientes

### Refactorización de la sección Docencia (Abril 2026)
- **UI/UX Refactor**: Se actualizaron las `DocenciaCard` para alinearlas con la estética premium de `ServiceCard`.
- **Nuevas Animaciones**: Implementación de Framer Motion para entradas suaves (`fade-in` + `slide-up`) y animaciones de acordeón para el despliegue de contenido.
- **Sistema de Color**: Transición de fondos semitransparentes a colores sólidos (`#3844BE` y `#000b77`) para mejorar el contraste y la legibilidad.
- **Micro-interacciones**: Rotación de iconos chevron y estilos de botones CTA para links a documentos técnicos.

### Reorganización de Contenidos y Navegación (Abril 2026)
- **Modularización de Datos**: División de la data de experiencia en archivos específicos (`edicion`, `guion`, `critica`) para facilitar el mantenimiento.
- **Navegación Multinivel**: Actualización del `Navbar` con submenús más profundos para diferenciar claramente entre secciones de "Experiencia" y "Portfolio".
- **Mejoras en Componentes Core**:
    - `TimelineSection`: Ajustes de diseño y legibilidad para el historial profesional.
    - `PortfolioGrid`: Optimización de la visualización de proyectos audiovisuales y web.
- **Fixes de Layout**: Corrección global del solapamiento del Navbar mediante ajustes en scroll-padding y márgenes de sección.

### Modularización de la Sección de Contacto (Abril 2026)
- **Componentización**: Extracción de la sección de contacto (`ContactSection`) en un componente independiente reutilizable en todas las páginas del sitio.
- **Navegación Local Inteligente**: Mejora en la lógica del `Navbar` para detectar y desplazarse suavemente (`smooth scroll`) hacia la sección de contacto en la página actual, evitando redirecciones innecesarias a la Home.
- **Centralización de Datos**: Migración de la lista global de países a un archivo de datos dedicado (`countries.ts`).
- **Refinamiento de UI/UX**:
    - Unificación de etiquetas de navegación (ej. "Formación académica", "Experiencia laboral") para mayor profesionalismo.
    - Ajustes en el tamaño y estilo de los iconos de reproducción de video en los grids de portfolio.
    - Consistencia visual en los campos del formulario de contacto con un diseño más moderno y traslúcido.

### Integración de Lightbox y Refinamiento de Portfolio (Abril 2026)
- **Experiencia Multimedia**: Integración de `GLightbox` para una reproducción de video fluida y profesional. Las secciones de "Entrevistas" en Docencia y el spot principal en el Portfolio de IA ahora se reproducen en un overlay integrado sin salir del sitio.
- **Diferenciación de Contenidos (IA)**: Implementación de lógica visual para distinguir entre proyectos de video y sitios web. Los proyectos web ahora abren en pestañas nuevas con micro-interacciones específicas, eliminando el icono de reproducción para mayor claridad semántica.
- **Optimización de Tipado**: Creación de definiciones globales de TypeScript (`global.d.ts`) para gestionar librerías externas de terceros, eliminando advertencias de lint y mejorando la mantenibilidad del código.

## 📞 Contacto

- **LinkedIn**: [Leo Senderovsky](https://www.linkedin.com/in/lsender/)
- **YouTube**: [Leo Aquiba Senderovsky](https://www.youtube.com/c/LeoAquibaSenderovsky)
- **Behance**: [leosenderovsky](https://www.behance.net/leosenderovsky)
- **GitHub**: [leosenderovsky](https://github.com/leosenderovsky)
- **Blog**: [blog.leosenderovsky.com.ar](https://blog.leosenderovsky.com.ar)

## 📝 Licencia

Este proyecto es privado y personal.
