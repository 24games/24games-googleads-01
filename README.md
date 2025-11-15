# Embajadores - Website Estático

Website de presentación para embajadores del proyecto. Desarrollado con HTML, CSS y JavaScript vanilla (sin frameworks).

## 📁 Estructura del Proyecto

```
embajadores/
├── index.html          # Página principal
├── styles.css          # Estilos globales
├── script.js           # JavaScript (carrusel, parallax, accesibilidad)
├── assets/             # Imágenes y recursos
│   ├── favicon.ico
│   ├── banner-1-placeholder.jpg
│   ├── banner-2-placeholder.jpg
│   ├── banner-3-placeholder.jpg
│   ├── expert-vicente-placeholder.jpg
│   ├── expert-rodrigo-placeholder.jpg
│   ├── expert-elian-placeholder.jpg
│   ├── parallax-bg-placeholder.jpg
│   └── og-image.jpg
└── README.md
```

## 🚀 Instalación en HostGator

1. **Sube toda la carpeta `embajadores/` al directorio `public_html/` de tu HostGator**
2. **Accede a tu dominio**: `https://tudominio.com/embajadores/`
3. **¡Listo!** El sitio funcionará inmediatamente sin configuración adicional.

### Alternativa: Instalación en la raíz del dominio

Si prefieres que el sitio esté en la raíz (ej: `https://tudominio.com/`):
1. Sube el **contenido** de la carpeta `embajadores/` directamente a `public_html/`
2. No subas la carpeta `embajadores/` en sí, solo su contenido

## 🖼️ Reemplazar Imágenes Placeholder

### Banners del Carrusel (Sección Hero)
Reemplaza estos 3 archivos en `assets/`:
- `banner-1-placeholder.jpg` → Proporción recomendada: 2.5:1 (ej: 900x360px)
- `banner-2-placeholder.jpg` → Proporción recomendada: 2.5:1 (ej: 900x360px)
- `banner-3-placeholder.jpg` → Proporción recomendada: 2.5:1 (ej: 900x360px)

**Nota**: Los archivos deben tener el mismo nombre o actualizar las rutas en `index.html` líneas 59-78.

### Fotos de Expertos
Reemplaza estos archivos en `assets/`:
- `expert-vicente-placeholder.jpg` → Proporción recomendada: 3:4 (ej: 400x533px)
- `expert-rodrigo-placeholder.jpg` → Proporción recomendada: 3:4 (ej: 400x533px)
- `expert-elian-placeholder.jpg` → Proporción recomendada: 3:4 (ej: 400x533px)

### Imagen de Fondo Parallax (Sección Fútbol Chileno)
Reemplaza este archivo en `assets/`:
- `parallax-bg-placeholder.jpg` → Resolución recomendada: 1920x1080px o superior
- **Importante**: Usa una imagen oscura o con contraste bajo para mantener legibilidad del texto

### Open Graph (Redes Sociales)
Reemplaza este archivo en `assets/`:
- `og-image.jpg` → Tamaño: 1200x630px (formato estándar para Facebook, Twitter, etc.)

## 🎨 Personalización de Colores

Edita las variables CSS en `styles.css` (líneas 13-19):

```css
:root {
    --color-black: #0A0B0D;           /* Fondo principal */
    --color-dark-gray: #0F1216;       /* Fondo de tarjetas */
    --color-neon-green: #00FF7F;      /* Verde neon principal */
    --color-green-alt-1: #10B981;     /* Verde alternativo 1 */
    --color-green-alt-2: #00E676;     /* Verde alternativo 2 */
    --color-text-primary: #FFFFFF;    /* Texto principal */
    --color-text-secondary: #C9D1D9;  /* Texto secundario */
}
```

## 🔧 Características

### ✅ Implementado
- ✅ Carrusel infinito con fade en bordes
- ✅ Efecto glow verde en todos los elementos (excepto botón "Conocer")
- ✅ Parallax en sección de fútbol chileno
- ✅ Diseño responsive (mobile-first)
- ✅ Accesibilidad (ARIA labels, contraste, teclado)
- ✅ SEO básico (meta tags, Open Graph)
- ✅ Respeto a `prefers-reduced-motion`
- ✅ Lazy loading de imágenes
- ✅ Sin dependencias externas

### 🎮 Controles Interactivos
- **Carrusel**: Se pausa automáticamente al pasar el mouse
- **Botón Play/Pause**: Control manual del carrusel
- **Parallax**: Se desactiva automáticamente en mobile y si el usuario prefiere reducir movimiento

## 🌐 Navegadores Soportados
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Contenido en Español Chileno
Todo el contenido está escrito en español chileno neutro y profesional. Para modificar textos:
1. Abre `index.html`
2. Busca el texto que deseas cambiar
3. Edita directamente manteniendo las etiquetas HTML

## 📱 Responsive Breakpoints
- **Mobile**: 360px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px+

## ⚡ Rendimiento
- Todos los archivos están minificados manualmente
- Lazy loading en imágenes
- Animaciones con `will-change` para mejor rendimiento
- Sin JavaScript bloqueante

## 🔒 Seguridad
- Enlaces externos con `rel="noopener noreferrer"`
- Sin dependencias de terceros (excepto Google Fonts)
- Sin vulnerabilidades conocidas

## 📞 Soporte
Para modificar el contenido o agregar más expertos, edita directamente los archivos HTML/CSS/JS.
Todos los archivos están comentados para facilitar futuras modificaciones.

---

**Desarrollado con ❤️ usando tecnología web estándar**


