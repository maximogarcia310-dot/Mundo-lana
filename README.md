# MundoLana Hilados – Sitio web

Sitio web para **MundoLana Hilados**, una tienda de hilados de Villa Carlos Paz, Córdoba. Es un proyecto de portafolio de Máximo García.

## El problema que resuelve

La tienda necesitaba una web rápida y adaptada al celular. Ahí los clientes pueden ver el catálogo de lanas con sus colores, conocer los horarios y la ubicación, y hacer consultas o pedidos directamente por WhatsApp, sin depender solo de las redes sociales.

## Pantallas

- **Inicio (`index.html`):** presentación de la tienda, categorías de productos, datos de contacto y botón de WhatsApp.
- **Catálogo (`catalogo.html`):** productos filtrables por categoría, selector de colores y consulta por WhatsApp de cada producto.

## Tecnologías

- HTML5
- CSS3 (Flexbox, Grid, diseño responsive)
- JavaScript (sin librerías)

## Cómo editar los datos

Todos los datos de la tienda y del catálogo están en `js/config.js`:

- `TIENDA`: dirección, horarios, número de WhatsApp, Instagram y link de Google Maps. Si un dato queda vacío, esa parte no se muestra en la web.
- `PRODUCTOS`: lista de productos con nombre, categoría, descripción, foto y colores.

### Colores

Cada color se escribe con su nombre y su código:

```js
{ nombre: "Violeta uva", hex: "#5a2fa0" }
```

El nombre es el que ve el cliente al tocar el color, y el que nos llega en el mensaje de WhatsApp. Para sacar el código de un color se puede usar cualquier "selector de color" (buscando eso en Google aparece uno).

### Fotos de los productos

1. Sacá la foto **apaisada** (más ancha que alta), con buena luz y fondo liso.
2. Entrá a [squoosh.app](https://squoosh.app), subí la foto, elegí **Resize** con ancho 800 y formato **WebP**. Tiene que pesar menos de 150 KB (si pesa más, bajá un poco la calidad).
3. Guardala en la carpeta `img/productos/` con un nombre simple, sin espacios ni acentos. Por ejemplo `lana-merino.webp`.
4. En `js/config.js`, escribí ese nombre en el producto: `foto: "lana-merino.webp"`.

Si un producto no tiene foto (`foto: ""`), se muestra el ovillo dibujado.

### Vista previa al compartir y datos para Google

- Cuando alguien pega el link en WhatsApp o Instagram aparece la imagen `img/compartir.jpg` (1200×630). El título y la descripción de esa vista previa están en el `<head>` de `index.html` y `catalogo.html` (las etiquetas `og:`), porque WhatsApp no lee `config.js`.
- Google recibe la dirección, los horarios, el teléfono y el Instagram de la tienda, armados solos desde `TIENDA`. Si cambian los horarios, hay que cambiar `horarios` (el texto que se ve) y `horariosGoogle`.
- Si la web se muda a otra dirección, hay que cambiar `TIENDA.url` y las direcciones `https://...` de las etiquetas `og:` de las dos páginas.
- Para probarlo: [prueba de resultados enriquecidos de Google](https://search.google.com/test/rich-results) con la dirección de la web.

## Estadísticas de visitas (GoatCounter)

La web usa [GoatCounter](https://www.goatcounter.com): es gratis para sitios chicos, no usa cookies y no hace falta poner ningún cartel de aviso.

**Crear la cuenta (una sola vez):**

1. Entrá a [goatcounter.com/signup](https://www.goatcounter.com/signup).
2. En **Code** elegí un nombre corto, por ejemplo `mundolana`. Completá el mail y una contraseña.
3. En `js/config.js`, escribí ese nombre en `goatcounter: "mundolana"` y subí el cambio.

**Dónde mirar los números:** entrá a `https://ELCODIGO.goatcounter.com` (por ejemplo `https://mundolana.goatcounter.com`) con tu mail y contraseña.

- Las **visitas por página** aparecen en la lista principal (`/Mundo-lana/` es el inicio y `/Mundo-lana/catalogo.html` el catálogo).
- Los **clics en WhatsApp** aparecen en la misma lista como eventos que empiezan con `whatsapp/`. Por ejemplo `whatsapp/producto/Lana merino` (consultaron por ese producto) o `whatsapp/inicio/boton-flotante` (tocaron el botón verde flotante en el inicio).
- En **Referrers** se ve desde dónde llega la gente (Instagram, Google, etc.).

Las visitas hechas abriendo el archivo en tu compu no se cuentan: solo cuentan las de la web publicada.

## Cómo verla

Abrí `index.html` en el navegador. No hace falta instalar nada.

## Cómo publicarla (GitHub Pages)

Se hace una sola vez:

1. Entrá al repositorio en GitHub y andá a **Settings → Pages**.
2. En **Source** elegí **Deploy from a branch**.
3. En **Branch** elegí `main` y la carpeta `/ (root)`, y tocá **Save**.
4. Esperá un par de minutos. La web queda en `https://maximogarcia310-dot.github.io/Mundo-lana/`.

Después de eso, cada cambio que llega a `main` se publica solo.

## Capturas

![Inicio](capturas/inicio.png)

![Catálogo en celular](capturas/catalogo-celular.png)
