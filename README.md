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
- `PRODUCTOS`: lista de productos con nombre, categoría, descripción y colores.

## Cómo verla

Abrí `index.html` en el navegador, o publicala con GitHub Pages desde **Settings → Pages**.

## Capturas

![Inicio](capturas/inicio.png)

![Catálogo en celular](capturas/catalogo-celular.png)
