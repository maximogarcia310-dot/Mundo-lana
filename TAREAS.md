# Tareas: sitio MundoLana Hilados

Prioridad: **Etapa 1 completa → 2.1 → 2.2**. El resto viene después.
Cada tarea tiene un criterio de "listo" para saber cuándo está terminada.

---

## Etapa 1: arreglos rápidos

### [x] 1.1 Completar datos de la tienda y publicar
- **Pendiente de Máximo:** pasar el link exacto de Google Maps (hoy hay uno provisorio que busca la dirección) y confirmar que GitHub Pages está activado (los pasos están en el README).
- En `js/config.js`, poner `direccion: "Maipú 98"` y el `mapaUrl` de Google Maps del local. Si no lo encontrás, pedíselo a Máximo.
- Revisar que el sitio esté publicado en GitHub Pages. Si no lo está, explicarle a Máximo los pasos para activarlo.
- **Listo cuando:** la sección "Visitanos" muestra dirección, horarios, mapa e Instagram, y el sitio tiene una URL pública.

### [x] 1.2 Mensaje de WhatsApp completo
- En el catálogo, el mensaje tiene que incluir el **producto, el color elegido (con su nombre) y la cantidad**. Agregar un selector de cantidad simple.
- Todos los mensajes que salen de la web terminan con "(Vengo de la web)", para poder registrar de dónde vino el cliente.
- **Listo cuando:** elegir "Lana merino", color "Violeta uva" y 3 unidades abre WhatsApp con un texto como: "Hola MundoLana Hilados, quería consultar por: Lana merino, color Violeta uva, 3 unidades. (Vengo de la web)".

### [x] 1.3 Fotos reales y colores con nombre
- **Pendiente de Máximo:** las fotos de los productos y los nombres reales de los colores (hoy son provisorios, marcados `// COMPLETAR:` en `js/config.js`).
- Cambiar el formato de `PRODUCTOS` para que cada color tenga `{ nombre, hex }` y cada producto una `foto` opcional en `img/productos/`.
- Si un producto tiene foto, se muestra la foto. Si no, se sigue mostrando el ovillo dibujado.
- Optimizar las fotos (WebP, menos de 150 KB, `loading="lazy"`).
- Pedirle a Máximo las fotos y los nombres de los colores. Mientras tanto, dejar nombres provisorios marcados `// COMPLETAR:`.
- **Listo cuando:** los colores muestran su nombre al tocarlos y las fotos que haya se ven bien en el celular.

### [x] 1.4 Vista previa al compartir y Google
- **Pendiente de Máximo:** con el sitio ya publicado, pegar el link en un chat de WhatsApp y pasarlo por la prueba de Google para confirmar (no se puede probar antes de publicar).
- Agregar etiquetas Open Graph y de Twitter (título, descripción e imagen 1200×630 con la marca) en las dos páginas.
- Agregar datos estructurados `LocalBusiness` (JSON-LD) con dirección, horarios, teléfono e Instagram.
- Agregar un favicon con el ovillo del logo.
- **Listo cuando:** pegar el link en WhatsApp muestra una vista previa con imagen, y la [prueba de resultados enriquecidos de Google](https://search.google.com/test/rich-results) no da errores.

### [ ] 1.5 Estadísticas de visitas gratis
- Agregar **GoatCounter** (gratis, sin cookies). Contar también los clics en botones de WhatsApp como eventos.
- Explicarle a Máximo cómo crear la cuenta y dónde mirar los números.
- **Listo cuando:** se ven las visitas por página y los clics en WhatsApp.

---

## Etapa 2: que la web venda

### [ ] 2.1 Lista de pedido
- Botón "Agregar al pedido" en cada producto, con color y cantidad.
- Un resumen flotante ("Tu pedido: 3 productos") que abre la lista para editar o quitar productos, con un campo de provincia y ciudad.
- "Enviar pedido por WhatsApp" arma **un solo mensaje ordenado** con todo, la provincia y "(Vengo de la web)".
- Guardar el pedido en `localStorage` para que no se pierda si el cliente cierra la página.
- **Listo cuando:** se puede armar un pedido de varios productos en el celular y llega a WhatsApp como una lista clara.

### [ ] 2.2 Página de talleres
- Nueva página `talleres.html` con un enlace en el menú.
- Los talleres salen de `config.js` (lista `TALLERES`): nombre, descripción, días y horario, duración, cupos y foto opcional.
- Botón "Quiero anotarme" que abre WhatsApp con el taller elegido y "(Vengo de la web)".
- Agregar una sección de talleres en el inicio.
- No inventar fechas ni cupos: pedírselos a Máximo.
- **Listo cuando:** los talleres se ven en la web y cargar uno nuevo es solo editar `config.js`.

### [ ] 2.3 Catálogo editable desde Google Sheets
- Que los productos, los colores y los talleres se lean de una **planilla de Google publicada como CSV**. Así los papás de Máximo actualizan sin tocar código.
- Si la planilla no carga, usar los datos de `config.js` como respaldo.
- Escribir en el README una guía corta, para alguien que no programa, de cómo editar la planilla.
- **Listo cuando:** cambiar un producto en la planilla cambia la web sin hacer un commit.

### [ ] 2.4 "Consejos de Lampi"
- Sección o página con artículos cortos de Lampi: combinaciones de colores, qué lana usar para cada proyecto, tendencias. Cada artículo enlaza a los productos que menciona.
- Dibujar a Lampi en SVG, simpática y en la paleta violeta.
- Pedirle a Máximo los textos o reutilizar los guiones de los reels.
- **Listo cuando:** hay al menos 3 artículos publicados, cada uno con su vista previa al compartir.

---

## Etapa 3: más adelante, decidir antes de hacer

### [ ] 3.1 Pago online con Mercado Pago
- Antes de programar, escribir una comparación corta para Máximo: **función propia** (Cloudflare Workers o Netlify Functions con Checkout Pro de Mercado Pago) contra **Tiendanube**. Incluir costos, comisiones, trabajo de mantenimiento y qué conviene para su volumen.
- Hacerlo solo si Máximo elige la opción propia.

### [ ] 3.2 Registrar los pedidos de la web en el tablero
- Depende de la 3.1, porque la web necesita un servidor para escribir datos.
- Que cada pedido pagado se registre solo en el tablero de ventas con canal "web".
