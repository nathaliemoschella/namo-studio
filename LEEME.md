# NaMo Design Studio — sitio web (v2, desde el PDF 2026 final)

Sitio estático: solo HTML + CSS + JS, sin instalar nada.

## Probarlo en Visual Studio Code
1. Abre esta carpeta en VS Code (File > Open Folder).
2. Instala la extensión **Live Server** y haz clic en "Go Live" (abajo a la derecha).
3. Para verlo como teléfono: en Chrome, F12 > icono de celular.

## Subirlo a Cloudflare (tu repo namo-studio)
1. Borra en el repo los archivos viejos del sitio (index.html y carpetas viejas de imágenes).
2. Copia el CONTENIDO de esta carpeta (index.html, css/, js/, img/, fonts/) a la raíz del repo.
3. Commit y push a `main` → Cloudflare redespliega solo.
4. Si ves la versión vieja: recarga forzada (Ctrl/Cmd + Shift + R) o prueba en ventana privada.

## Dónde editar
- `js/data.js` → textos, orden y fotos de cada proyecto.
- `js/app.js` → estructura de cada página.
- `css/style.css` → colores (arriba, `:root`), tamaños y el breakpoint de 900 px.
- `img/p/` → fotos de proyectos. `img/ui/` → mascota, íconos, logo nm.
- Después de cambiar o agregar fotos, `js/dims.js` guarda el tamaño de cada una (si agregas una nueva, añade su entrada o pídele a Claude que lo regenere).

## Calidad de imágenes
Las fotos vienen directo de las imágenes originales dentro de tu PDF (JPEG calidad 90, sin reducir salvo las gigantes a 2000–2600 px). Haz clic en una foto para verla ampliada.

## Cambios de la versión 3
- Inicio (`#/`): HOME · CATALOG · NAMO centrados arriba. El botón HOME lleva a tu historia (`#/historia`: Toronto / Venezuela); el isotipo (círculo rojo) vuelve al inicio.
- Catálogo: carrusel que gira de lado (flechas, arrastrar/deslizar, teclado ← →). Clic en un icono abre el proyecto.
- NAMO: el isotipo del logo "nm" desaparece al pasar el cursor y al hacer clic vuelve al inicio.
- Antes/después (línea que se arrastra) en la última imagen de Bean y de Lámpara, con tus fotos `bean-before/after.jpg` y `lampara-before/after.jpg` en `img/p/`.
- Foto del collage de la historia restaurada tal como está en el PDF.
- Tipografía: "gracias por estar aquí" (MaronBlack) y la frase de SkinnyPop (SalmonBake) usan las fuentes reales incrustadas en tu PDF (`fonts/maron-black.woff2`, `fonts/salmon-bake.woff2`; solo contienen las letras de esos textos). Tamaños de texto en laptop escalados como en el PDF (1920 px = 100%).
