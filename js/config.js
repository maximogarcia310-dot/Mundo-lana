/*
 * DATOS DE LA TIENDA
 * Completá estos datos y se actualizan solos en toda la web.
 * Si un dato queda vacío (""), esa parte no se muestra.
 */
const TIENDA = {
  nombre: "MundoLana Hilados",
  ciudad: "Villa Carlos Paz, Córdoba",
  direccion: "",          // ej: "Av. Ejemplo 123"
  horarios: "Lunes a viernes de 9 a 13 hs y de 17 a 20 hs. Sábados de 10 a 13 hs.",
  whatsapp: "5493541583422", // 3541 583422 con código de país (54 9)
  instagram: "mundolanahilados",
  mapaUrl: ""             // link de Google Maps de la tienda
};

/*
 * CATÁLOGO
 * Cada producto tiene: nombre, categoria, descripcion y colores (códigos de color).
 * Las categorías posibles se toman automáticamente de esta lista.
 */
const PRODUCTOS = [
  { nombre: "Lana merino", categoria: "Lanas", descripcion: "Suave y abrigada, ideal para prendas de bebé y bufandas.", colores: ["#e8d5c4", "#c97b63", "#6b8f71", "#3e5c76"] },
  { nombre: "Lana gruesa", categoria: "Lanas", descripcion: "Para tejidos rápidos con agujas o tejido XXL.", colores: ["#f2e9dc", "#b5838d", "#495057", "#d4a373"] },
  { nombre: "Lana acrílica", categoria: "Lanas", descripcion: "Resistente, fácil de lavar y con gran variedad de colores.", colores: ["#e63946", "#f4a261", "#2a9d8f", "#264653", "#e9c46a"] },
  { nombre: "Hilo de algodón", categoria: "Hilos", descripcion: "Fresco y prolijo, perfecto para crochet y amigurumis.", colores: ["#ffffff", "#ffb4a2", "#a8dadc", "#cdb4db"] },
  { nombre: "Hilo para bordar", categoria: "Hilos", descripcion: "Madejas de colores para bordado y punto cruz.", colores: ["#d00000", "#ffba08", "#3a86ff", "#8338ec", "#06d6a0"] },
  { nombre: "Agujas de tejer", categoria: "Accesorios", descripcion: "Pares de agujas rectas y circulares en distintos números.", colores: ["#adb5bd", "#8d6e63"] },
  { nombre: "Agujas de crochet", categoria: "Accesorios", descripcion: "Ganchillos de aluminio y bambú en varias medidas.", colores: ["#ced4da", "#a1887f"] },
  { nombre: "Botones y mercería", categoria: "Accesorios", descripcion: "Botones, cierres, marcadores de punto y más.", colores: ["#f8edeb", "#6d597a", "#b56576"] }
];
