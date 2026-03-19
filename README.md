# Leo Aquiba Senderovsky - Portfolio Personal

Este repositorio contiene el código fuente del sitio web personal y portfolio profesional de **Leo Aquiba Senderovsky**. El sitio está diseñado para exhibir su trayectoria, servicios y proyectos en tres áreas principales: **Audiovisual**, **Desarrollo Web** e **Inteligencia Artificial (IA)**.

🌐 **Sitio en vivo:** [leosenderovsky.com.ar](https://leosenderovsky.com.ar/)

## 🚀 Características del Sitio

- **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tablets y escritorio (gracias a Bootstrap 4 y media queries personalizadas).
- **Hero Section Dinámica:** Tarjetas animadas con efecto 3D (Flip Cards) que presentan las tres áreas de especialidad: Audiovisual, Web e IA.
- **Sección de Biografía y Video:** Un apartado personal que enlaza a un *showreel* o video principal utilizando Nivo Lightbox.
- **Línea de Tiempo Interactiva:** Un currículum cronológico que documenta su extensa experiencia laboral (Infobae, LN+, NBA Latam, etc.) y formación académica (Universidad del Cine, Coderhouse, etc.).
- **Gestión de CVs:** Posibilidad de visualizar o descargar versiones en formato PDF de su currículum en diferentes idiomas (Español e Inglés) y para distintos perfiles (Editor/Guionista y Web Developer).
- **Formulario de Contacto Funcional:** Integrado con Web3Forms y protegido con hCaptcha, permitiendo recibir consultas directamente en su correo sin necesidad de backend propio.

## 🛠️ Tecnologías y Librerías Utilizadas

El sitio está construido principalmente con tecnologías Front-End clásicas y optimizado para una alta compatibilidad:

- **Estructura y Estilos:** HTML5 Semántico, CSS3, Framework [Bootstrap 4.x](https://getbootstrap.com/).
- **Interactividad (JavaScript):** Vanilla JS y [jQuery](https://jquery.com/).
- **Iconografía y Fuentes:** 
  - [Google Fonts](https://fonts.google.com/) (Yanone Kaffeesatz, Libre Franklin, etc.).
  - [FontAwesome](https://fontawesome.com/).
  - [LineIcons](https://lineicons.com/).
  - [Flaticon Uicons](https://www.flaticon.com/uicons).
  - [Flag Icons](https://github.com/lipis/flag-icons).
- **Animaciones y Efectos:** 
  - [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) para la aparición de elementos en pantalla.
  - [Nivo Lightbox](https://github.com/BjoernKL/nivo-lightbox) para la visualización de galerías y videos en pop-up.
  - [MixItUp](https://www.kunkalabs.com/mixitup/) para el filtrado animado de elementos en el portfolio.
- **Backend de Formularios:** [Web3Forms](https://web3forms.com/) para el procesamiento seguro de emails.

## 📂 Estructura del Proyecto

```text
/
├── assets/
│   ├── css/          # Hojas de estilo generales, responsive y de terceros.
│   ├── docs/         # Archivos PDF (CVs listos para descarga).
│   ├── fonts/        # Fuentes tipográficas y archivos de iconos empaquetados.
│   ├── img/          # Imágenes de la interfaz, logos de clientes, iconos y fondos.
│   └── js/           # Scripts personalizados (main.js, form.js, mostrar.js) y librerías de terceros (jQuery, Bootstrap, AOS, etc.).
├── index.html        # Archivo HTML principal o "Single Page" del sitio.
├── gracias-contacto.html  # Página de redirección para tras enviar el formulario.
├── package.json      # Dependencias y configuraciones de Node (si aplica).
└── README.md         # Documentación del proyecto.
```

## ⚙️ Cómo ejecutar el sitio localmente

Dado que el sitio es completamente estático (HTML/CSS/JS), **no requiere instalación de base de datos ni de un servidor complejo**.

1. Clona este repositorio o descárgalo en tu equipo.
2. Abre la carpeta del proyecto.
3. Puedes simplemente hacer doble clic sobre el archivo `index.html` para verlo en tu navegador.
   *(Recomendación: Si utilizas **Visual Studio Code**, la extensión "Live Server" te proporcionará una experiencia de desarrollo mucho más fluida con recarga automática).*

## 🔗 Rutas URL limpias

El sitio soporta **URLs amigables** para acceder directamente a cada sección. Esto se logra mediante una regla en `.htaccess` (Apache) que redirige cualquier ruta no existente a `index.html`, y un script de JavaScript que lee la URL y hace scroll automático a la sección correspondiente.

| URL Limpia | Sección |
|---|---|
| `/about` | Acerca de mí |
| `/audiovisual` | Audiovisual |
| `/guion` | Guión |
| `/edicion` | Edición |
| `/docencia` | Docencia |
| `/critica` | Crítica |
| `/web` | Desarrollo Web |
| `/ia` | Inteligencia Artificial |
| `/contacto` | Contacto |

> **Nota:** Esta funcionalidad requiere un servidor Apache con `mod_rewrite` habilitado (configuración estándar de la mayoría de hostings compartidos).

---

*Desarrollado y mantenido por Leo Aquiba Senderovsky.*
