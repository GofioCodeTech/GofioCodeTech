# Landing de automatización e IA - GofioCodeTech

Landing page estática y responsive tipo startup tecnológica / SaaS, enfocada en **automatización de procesos e inteligencia artificial**. Está pensada para desplegarse fácilmente en **GitHub Pages**.

## Estructura del proyecto

```text
/project
 ├── index.html   # Página principal
 ├── style.css    # Estilos principales (responsive + animaciones)
 ├── script.js    # Navegación móvil + animaciones de scroll
 └── README.md    # Este archivo
```

## Características

- **Diseño** moderno, minimalista y profesional tipo SaaS.
- **Paleta de colores** fija: `#1A1C20` (fondo), `#D4A373` (acento), `#8D99AE` (texto secundario), `#FEFAE0` (texto claro).
- **Tipografía**: `Inter` desde Google Fonts.
- **100% responsive**: optimizada para móvil, tablet y escritorio.
- **Navbar sticky** con botón de llamada a la acción “Solicitar demo”.
- **Secciones**:
  - Hero principal
  - Sobre nosotros
  - Servicios (4 tarjetas)
  - Call To Action
  - Contacto
  - Footer
- **Animaciones suaves**:
  - Aparición con `fade-in` al hacer scroll (IntersectionObserver).
  - Hover elegante en botones y tarjetas.
- **SEO básico**:
  - `meta description`
  - `meta viewport`
  - título optimizado.

## Cómo usar el proyecto

1. Copia la carpeta `project` dentro de tu repositorio de GitHub (o convierte esta carpeta en el propio repositorio).
2. Asegúrate de que la estructura de archivos sea exactamente:

   ```text
   / (raíz del repo)
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
   ```

   Si estás usando esta carpeta tal cual, puedes mover el contenido de `project` a la raíz del repositorio.

3. Abre `index.html` en tu navegador para previsualizar la landing.


## Personalización rápida

- **Nombre de empresa**: busca `GofioCodeTech` en `index.html` y cámbialo por el nombre de tu proyecto.
- **Datos de contacto** (sección Contacto):
  - Email: edita `contacto@empresa.com`.
  - Instagram: edita `@empresa` y la URL.
  - Teléfono / WhatsApp: edita `+34 XXX XXX XXX` y el enlace de `wa.me`.
- **Textos de secciones**: puedes modificar los textos de Hero, Sobre nosotros, Servicios y CTA directamente en `index.html`.

## Tecnologías utilizadas

- **HTML5** (estructura semántica).
- **CSS3** con Flexbox y CSS Grid.
- **JavaScript** vanilla para:
  - Menú móvil.
  - Animaciones de scroll con IntersectionObserver.

No se utilizan frameworks pesados, lo que hace la landing ligera y rápida de cargar.

