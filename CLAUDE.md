# CLAUDE.md: MundoLana Hilados

Este archivo le da a Claude el contexto del proyecto. Leelo completo antes de cambiar algo.

## El negocio

- **MundoLana Hilados** es una tienda familiar de hilados en **Maipú 98, Villa Carlos Paz, Córdoba**. La atienden Máximo García (dueño de este repo) y sus papás.
- Venden lana por madeja y ovillo, hilos, accesorios y mercería. Hacen **envíos a todo el país**.
- Dan **talleres** de tejido, costura, macramé y otros.
- Instagram: `@mundolanahilados`. WhatsApp: el número que figura en `js/config.js`.
- **Hoy los clientes de afuera de Carlos Paz compran por WhatsApp**: consultan, se arma el pedido y se paga por transferencia o Mercado Pago. No hay tienda online con carrito ni pago automático.
- Entre los tres tienen **2 a 5 horas por semana** para redes y ventas. Todo lo que hagamos tiene que ahorrarles tiempo, no sumarles tareas.
- El presupuesto es muy chico: preferir servicios gratuitos.

## Objetivo del sitio

Que la web **traiga ventas online, gente al local e inscripciones a talleres**, y que se pueda medir de dónde vienen los clientes.

Hay un tablero aparte (un artifact de Claude, fuera de este repo) donde se cargan las ventas, con un campo "¿Cómo nos conoció?". Por eso los mensajes de WhatsApp que salen de la web tienen que decir que vienen de la web, para poder registrarlo.

## Marca

- **Paleta violeta.** Ya está definida en `css/styles.css`. Ojo: las variables se llaman `--terracota` y `--verde` pero son violetas. Se pueden renombrar a algo coherente (`--violeta`, `--violeta-osc`, etc.) si se actualizan todos los usos.
- **Tipografías:** Fraunces para títulos, Nunito para el texto y Great Vibes solo para el logo y la firma.
- **Mascota: Lampi**, una ovejita simpática que da consejos de tejido, combinaciones de colores y tendencias en Argentina. Aparece en los reels de Instagram. Si se la dibuja en la web, tiene que ser simpática y respetar la paleta violeta.
- **Tono:** cercano, argentino, con voseo ("mirá", "escribinos", "consultanos"). Nada de lenguaje corporativo.

## Cómo está hecho

- Sitio **estático**: HTML, CSS y JavaScript sin librerías ni build. Se publica con **GitHub Pages**.
- `index.html`: inicio, categorías, contacto y llamado a WhatsApp.
- `catalogo.html`: productos filtrables por categoría, con selector de colores.
- `js/config.js`: **todos los datos editables** (`TIENDA` y `PRODUCTOS`). Si un dato queda vacío, esa parte no se muestra.
- `js/main.js`: arma la página a partir de `config.js`.
- `capturas/`: capturas de pantalla para el README.

## Reglas para trabajar

1. **Mantenerlo simple.** Sin frameworks ni build salvo que una tarea lo pida explícitamente. Tiene que poder abrirse `index.html` y funcionar.
2. **Los datos que editan los dueños van en un solo lugar**, que hoy es `js/config.js` y más adelante será la planilla de Google (tarea 2.3). Nunca dejar datos de la tienda escritos sueltos en el HTML.
3. **Primero el celular.** La mayoría entra desde Instagram en el teléfono. Probar a 375px de ancho.
4. **Accesibilidad básica:** textos alternativos, foco visible, contraste suficiente, botones con nombre.
5. **No inventar datos del negocio** (precios, fechas de talleres, nombres de colores, stock). Si faltan, dejar un lugar marcado `// COMPLETAR:` y avisarle a Máximo.
6. **No publicar precios** salvo que Máximo lo confirme.
7. Al terminar cada tarea: actualizar el README si cambió algo de cómo se edita o se usa el sitio, y volver a sacar las capturas si cambió el diseño.
8. **Commits chicos, en español**, uno por tarea.

## Tareas

El plan está en `TAREAS.md`. Hacer las tareas en orden y marcar cada una como hecha (`[x]`) al terminarla.
