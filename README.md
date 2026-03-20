# 🚀 Leo Aquiba Senderovsky - Portfolio Personal

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_4-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

Este repositorio contiene el código fuente del sitio web personal y portfolio profesional de **Leo Aquiba Senderovsky**. El sitio está diseñado para exhibir su trayectoria, servicios y proyectos en tres áreas principales: **Audiovisual**, **Desarrollo Web** e **Inteligencia Artificial (IA)**.

🌐 **Sitio en vivo:** [leosenderovsky.com.ar](https://leosenderovsky.com.ar/)

---

## ✨ Características Principales

- 📱 **Diseño Responsivo:** Completamente adaptable a dispositivos móviles, tablets y escritorio (gracias a Bootstrap 4 y media queries personalizadas).
- 🎴 **Hero Section Dinámica:** Tarjetas animadas con efecto 3D (Flip Cards) que presentan las tres áreas de especialidad: Audiovisual, Web e IA, integrando cajas estilizadas para optimizar la legibilidad.
- 🎬 **Galerías y Videos Optimizados:** Visualización imponente del *showreel* y proyectos usando GLightbox (reemplazando NivoLightbox para una máxima compatibilidad técnica y un mejor rendimiento), y enlaces directos eficientes que resuelven bloqueos de iframe.
- 📜 **Línea de Tiempo Interactiva:** Un currículum cronológico fluido, impulsado por Waypoints v4.x, documentando experiencia laboral (Infobae, LN+, NBA Latam, etc.) y formación académica de manera elegante y sin errores de animación.
- 🔗 **Rutas Limpias y Scroll Automático:** URLs amigables (ej. `/ia`, `/audiovisual`, `/web`) implementadas vía `.htaccess` y Vanilla JS para optimizar el acceso directo a las secciones y mejorar sustancialmente el SEO de la página.
- 📄 **Gestión de CVs:** Posibilidad de visualizar o descargar versiones en formato PDF de su currículum en diferentes idiomas y perfiles.
- ✉️ **Contacto Seguro y Ágil:** Formulario sin necesidad de backend, gestionado con Web3Forms e integrado transparentemente con protección antispam hCaptcha.

---

## 🛠️ Tecnologías y Librerías

El ecosistema tecnológico del portfolio ha sido depurado priorizando estabilidad, compatibilidad moderna y fluidez visual:

### 🎨 Frontend & UI Layout
- **HTML5 Semántico** & **CSS3**
- Framework **[Bootstrap 4.x](https://getbootstrap.com/)**

### ⚡ JavaScript & Controladores
- **Vanilla JS** y **[jQuery 3.x](https://jquery.com/)**
- **[Waypoints 4.x](http://imakewebthings.com/waypoints/)** para el control de eventos complejos e hitos de renderizado al hacer scroll.

### 🎭 Efectos Visuales & Animaciones
- **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)** para el diseño de aparición secuencial.
- **[GLightbox](https://biati-digital.github.io/glightbox/)** para pop-ups de video y galerías limpias y eficientes (Lightboxes puros y sin fallos CSP).
- **[MixItUp](https://www.kunkalabs.com/mixitup/)** para el filtrado multidimensional del material de exhibición en el portfolio.

### ✒️ Tipografías e Iconografía
- **[Google Fonts](https://fonts.google.com/)** (Familias de fuentes: Yanone Kaffeesatz, Libre Franklin, etc.)
- Sets enriquecidos de iconos: **[FontAwesome](https://fontawesome.com/)**, **[LineIcons](https://lineicons.com/)** y **[Flaticon Uicons](https://www.flaticon.com/uicons)**
- **[Flag Icons](https://github.com/lipis/flag-icons)**

### 🔌 Integración de Terceros
- **[Web3Forms](https://web3forms.com/)** como puente API liviano para la mensajería de contacto.

---

## 📂 Estructura del Proyecto

```text
/
├── assets/
│   ├── css/          # Hojas de estilo core, layouts responsivos y módulos externos.
│   ├── docs/         # Reservorio de currículums en formato PDF descargables.
│   ├── fonts/        # Familias tipográficas locales y paquetes vectoriales (iconos).
│   ├── img/          # Asset visual general, fondos, logos corporativos y capturas.
│   └── js/           # Scripts principales (main.js, handlers), animaciones y vendors.
├── index.html        # Estructura del portal (Single Page Architecture).
├── gracias-contacto.html  # View de retorno y agradecimiento tras la comunicación.
├── .htaccess         # Reglas directivas de servidor (Apache) para el router amigable.
└── README.md         # Documentación de fuente.
```

---

## 🚀 Guía de Despliegue Local

Al tratarse de una arquitectura **Front-End Serverless**, el entorno se levanta al instante:

1. Clona o descarga el zip de este repositorio a tu entorno de trabajo.
2. Abre la raíz del directorio recién posicionado.
3. Para una simple visita visual, interactúa con el archivo `index.html`.
4. Para un test real, especialmente de las **Rutas Limpias (Clean URLs)**, usa servidores que integren y emulen el sistema de Apache `mod_rewrite` (por ejemplo: levantándolo a través de **XAMPP**, **MAMP** o **Laragon**). También puedes previsualizar en puro devmode usando en VS Code la extensión ["Live Server"](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

---

## 🗺️ Mapa de Referencias (Rutas Limpias)

Sistema de redirecciones activas preparadas para apuntar a cada ancla de la página:

| Path Configurada | Bloque Destino |
|:---:|:---|
| `/about` | Panel Biográfico y Reel |
| `/audiovisual` | Servicios Área Audiovisual |
| `/guion` | Portafolio de Casos: Guión |
| `/edicion` | Portafolio de Casos: Edición |
| `/docencia` | Bloque Académico / Docencia |
| `/critica` | Publicaciones y Crítica de Cine |
| `/web` | Servicios de Desarrollo Web |
| `/ia` | Soluciones de Inteligencia Artificial |
| `/contacto` | Bloque de Comunicación de Cierre |

---

<p align="center">
  <br>
  <i>Diseñado y Programado con ❤️ por <b>Leo Aquiba Senderovsky</b>.</i>
</p>
