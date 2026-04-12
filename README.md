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

## 📞 Contacto

- **LinkedIn**: [Leo Senderovsky](https://www.linkedin.com/in/lsender/)
- **YouTube**: [Leo Aquiba Senderovsky](https://www.youtube.com/c/LeoAquibaSenderovsky)
- **Behance**: [leosenderovsky](https://www.behance.net/leosenderovsky)
- **GitHub**: [leosenderovsky](https://github.com/leosenderovsky)
- **Blog**: [blog.leosenderovsky.com.ar](https://blog.leosenderovsky.com.ar)

## 📝 Licencia

Este proyecto es privado y personal.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
