/*
 * DATOS DE LA TIENDA
 * Completá estos datos y se actualizan solos en toda la web.
 * Si un dato queda vacío (""), esa parte no se muestra.
 */
const TIENDA = {
  nombre: "MundoLana Hilados",
  ciudad: "Villa Carlos Paz, Córdoba",
  direccion: "Maipú 98",
  horarios: "Lunes a viernes de 9 a 13 hs y de 17 a 20 hs. Sábados de 10 a 13 hs.",
  // Los mismos horarios, escritos para Google. Si cambian los de arriba, cambiar también estos.
  horariosGoogle: [
    { dias: ["lunes", "martes", "miércoles", "jueves", "viernes"], abre: "09:00", cierra: "13:00" },
    { dias: ["lunes", "martes", "miércoles", "jueves", "viernes"], abre: "17:00", cierra: "20:00" },
    { dias: ["sábado"], abre: "10:00", cierra: "13:00" }
  ],
  whatsapp: "5493541583422", // 3541 583422 con código de país (54 9)
  instagram: "mundolanahilados",
  // Dirección pública de la web. COMPLETAR: cambiarla si se publica en otra dirección
  // (y cambiarla también en las etiquetas "og:" de index.html y catalogo.html).
  url: "https://maximogarcia310-dot.github.io/Mundo-lana/",
  // COMPLETAR: este link busca la dirección en Google Maps. Cambiarlo por el link exacto
  // del local (en Google Maps: abrir la ficha de la tienda → Compartir → Copiar vínculo).
  mapaUrl: "https://www.google.com/maps/search/?api=1&query=MundoLana+Hilados%2C+Maip%C3%BA+98%2C+Villa+Carlos+Paz%2C+C%C3%B3rdoba"
};

/*
 * CATÁLOGO
 * Cada producto tiene:
 *   nombre, categoria, descripcion
 *   foto:    nombre del archivo en la carpeta img/productos/ (ej: "lana-merino.webp").
 *            Si queda vacío (""), se muestra el ovillo dibujado.
 *   colores: lista de { nombre, hex }. El nombre es el que ve el cliente y el que
 *            llega en el mensaje de WhatsApp. El hex es el código del color.
 * Las categorías posibles se toman automáticamente de esta lista.
 *
 * COMPLETAR: los nombres y códigos de los colores son provisorios (describen el
 * color de muestra). Cambiarlos por los colores reales de cada producto.
 * COMPLETAR: faltan las fotos de todos los productos.
 */
const PRODUCTOS = [
  {
    nombre: "Lana merino", categoria: "Lanas",
    descripcion: "Suave y abrigada, ideal para prendas de bebé y bufandas.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Crema", hex: "#e8d5c4" },
      { nombre: "Terracota", hex: "#c97b63" },
      { nombre: "Verde", hex: "#6b8f71" },
      { nombre: "Azul", hex: "#3e5c76" }
    ]
  },
  {
    nombre: "Lana gruesa", categoria: "Lanas",
    descripcion: "Para tejidos rápidos con agujas o tejido XXL.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Natural", hex: "#f2e9dc" },
      { nombre: "Rosa viejo", hex: "#b5838d" },
      { nombre: "Gris oscuro", hex: "#495057" },
      { nombre: "Camel", hex: "#d4a373" }
    ]
  },
  {
    nombre: "Lana acrílica", categoria: "Lanas",
    descripcion: "Resistente, fácil de lavar y con gran variedad de colores.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Rojo", hex: "#e63946" },
      { nombre: "Naranja", hex: "#f4a261" },
      { nombre: "Verde agua", hex: "#2a9d8f" },
      { nombre: "Azul petróleo", hex: "#264653" },
      { nombre: "Amarillo", hex: "#e9c46a" }
    ]
  },
  {
    nombre: "Hilo de algodón", categoria: "Hilos",
    descripcion: "Fresco y prolijo, perfecto para crochet y amigurumis.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Blanco", hex: "#ffffff" },
      { nombre: "Rosa", hex: "#ffb4a2" },
      { nombre: "Celeste", hex: "#a8dadc" },
      { nombre: "Lila", hex: "#cdb4db" }
    ]
  },
  {
    nombre: "Hilo para bordar", categoria: "Hilos",
    descripcion: "Madejas de colores para bordado y punto cruz.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Rojo", hex: "#d00000" },
      { nombre: "Amarillo", hex: "#ffba08" },
      { nombre: "Azul", hex: "#3a86ff" },
      { nombre: "Violeta", hex: "#8338ec" },
      { nombre: "Verde", hex: "#06d6a0" }
    ]
  },
  {
    nombre: "Agujas de tejer", categoria: "Accesorios",
    descripcion: "Pares de agujas rectas y circulares en distintos números.",
    foto: "", // COMPLETAR: foto
    // COMPLETAR: ¿se eligen por color, por material o por número? Si no hay nada para elegir, dejar colores: []
    colores: [
      { nombre: "Gris", hex: "#adb5bd" },
      { nombre: "Marrón", hex: "#8d6e63" }
    ]
  },
  {
    nombre: "Agujas de crochet", categoria: "Accesorios",
    descripcion: "Ganchillos de aluminio y bambú en varias medidas.",
    foto: "", // COMPLETAR: foto
    // COMPLETAR: ídem agujas de tejer
    colores: [
      { nombre: "Gris", hex: "#ced4da" },
      { nombre: "Marrón", hex: "#a1887f" }
    ]
  },
  {
    nombre: "Botones y mercería", categoria: "Accesorios",
    descripcion: "Botones, cierres, marcadores de punto y más.",
    foto: "", // COMPLETAR: foto
    colores: [ // COMPLETAR: colores reales
      { nombre: "Rosa claro", hex: "#f8edeb" },
      { nombre: "Violeta", hex: "#6d597a" },
      { nombre: "Rosa oscuro", hex: "#b56576" }
    ]
  }
];
