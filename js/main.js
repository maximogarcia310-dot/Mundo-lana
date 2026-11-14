// Dibujo de un ovillo de lana en SVG, del color que se le pase
function ovillo(color) {
  return `
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <circle cx="50" cy="50" r="40" fill="${color}" stroke="rgba(0,0,0,.15)" stroke-width="1.5"/>
    <g fill="none" stroke="rgba(0,0,0,.18)" stroke-width="3" stroke-linecap="round">
      <path d="M18 38 Q50 20 82 38"/>
      <path d="M12 52 Q50 32 88 52"/>
      <path d="M16 66 Q50 46 84 66"/>
      <path d="M30 18 Q60 50 34 86"/>
      <path d="M52 10 Q78 50 56 90"/>
    </g>
    <path d="M86 62 Q98 80 80 92" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

// Todos los mensajes que salen de la web terminan así,
// para poder anotar en el tablero de ventas de dónde vino el cliente
const FIRMA_WEB = "(Vengo de la web)";

// Arma el link de WhatsApp con un mensaje
function linkWhatsapp(mensaje) {
  if (!TIENDA.whatsapp) return "#contacto";
  return `https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent(`${mensaje} ${FIRMA_WEB}`)}`;
}

// Mensaje de consulta por un producto, con color (si tiene nombre) y cantidad.
// Ej: "Hola MundoLana Hilados, quería consultar por: Lana merino, color Violeta uva, 3 unidades."
function mensajeConsulta(producto, nombreColor, cantidad) {
  const partes = [producto];
  if (nombreColor) partes.push(`color ${nombreColor}`);
  partes.push(cantidad === 1 ? "1 unidad" : `${cantidad} unidades`);
  return `Hola ${TIENDA.nombre}, quería consultar por: ${partes.join(", ")}.`;
}

// Completa los datos de la tienda en la página
function cargarDatos() {
  document.querySelectorAll("[data-tienda]").forEach(el => {
    const valor = TIENDA[el.dataset.tienda];
    const contenedor = el.closest("[data-opcional]");
    if (!valor) {
      if (contenedor) contenedor.classList.add("oculto");
      return;
    }
    el.textContent = valor;
  });

  document.querySelectorAll("[data-wsp]").forEach(el => {
    el.href = linkWhatsapp(el.dataset.wsp || `Hola ${TIENDA.nombre}, quería hacer una consulta.`);
    if (TIENDA.whatsapp) el.target = "_blank";
    if (!TIENDA.whatsapp && el.classList.contains("wsp-flotante")) el.classList.add("oculto");
  });

  const mapa = document.getElementById("link-mapa");
  if (mapa) {
    if (TIENDA.mapaUrl) mapa.href = TIENDA.mapaUrl;
    else mapa.closest("[data-opcional]").classList.add("oculto");
  }

  const ig = document.getElementById("link-instagram");
  if (ig) {
    if (TIENDA.instagram) { ig.href = `https://instagram.com/${TIENDA.instagram}`; ig.textContent = "@" + TIENDA.instagram; }
    else ig.closest("[data-opcional]").classList.add("oculto");
  }

  // Si no hay ningún dato de contacto cargado, se oculta el bloque vacío
  document.querySelectorAll(".info").forEach(info => {
    if (!info.querySelector("[data-opcional]:not(.oculto)")) info.classList.add("oculto");
  });

  const anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
}

// Menú para celulares
function menuCelular() {
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const abierto = nav.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", abierto);
  });
}

// ---------- Catálogo ----------
function tarjetaProducto(prod) {
  const art = document.createElement("article");
  art.className = "producto";
  art.dataset.categoria = prod.categoria;

  let colorElegido = prod.colores[0];
  let cantidad = 1;
  const id = prod.nombre.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  art.innerHTML = `
    <div class="producto-arte" style="background:${colorElegido}22">${ovillo(colorElegido)}</div>
    <div class="producto-cuerpo">
      <span class="producto-cat">${prod.categoria}</span>
      <h3>${prod.nombre}</h3>
      <p>${prod.descripcion}</p>
      <div class="colores">
        ${prod.colores.map((c, i) => `<button class="color${i === 0 ? " elegido" : ""}" style="background:${c}" data-color="${c}" aria-label="Color ${i + 1}"></button>`).join("")}
      </div>
      <div class="cantidad">
        <span class="cantidad-titulo" id="cant-${id}">Cantidad</span>
        <div class="cantidad-control" role="group" aria-labelledby="cant-${id}">
          <button type="button" data-menos aria-label="Restar una unidad de ${prod.nombre}">−</button>
          <output data-cantidad aria-live="polite">1</output>
          <button type="button" data-mas aria-label="Sumar una unidad de ${prod.nombre}">+</button>
        </div>
      </div>
      <a class="btn btn-wsp" data-consulta rel="noopener">Consultar por WhatsApp</a>
    </div>`;

  const arte = art.querySelector(".producto-arte");
  const boton = art.querySelector("[data-consulta]");
  const actualizarLink = () => {
    boton.href = linkWhatsapp(mensajeConsulta(prod.nombre, colorElegido.nombre, cantidad));
    if (TIENDA.whatsapp) boton.target = "_blank";
  };
  actualizarLink();

  const salida = art.querySelector("[data-cantidad]");
  const menos = art.querySelector("[data-menos]");
  const cambiarCantidad = cambio => {
    cantidad = Math.min(99, Math.max(1, cantidad + cambio));
    salida.textContent = cantidad;
    menos.disabled = cantidad === 1;
    actualizarLink();
  };
  menos.addEventListener("click", () => cambiarCantidad(-1));
  art.querySelector("[data-mas]").addEventListener("click", () => cambiarCantidad(1));
  cambiarCantidad(0);

  art.querySelectorAll(".color").forEach(b => {
    b.addEventListener("click", () => {
      colorElegido = b.dataset.color;
      art.querySelectorAll(".color").forEach(x => x.classList.remove("elegido"));
      b.classList.add("elegido");
      arte.style.background = colorElegido + "22";
      arte.innerHTML = ovillo(colorElegido);
      actualizarLink();
    });
  });

  return art;
}

function cargarCatalogo() {
  const lista = document.getElementById("productos");
  const filtros = document.getElementById("filtros");
  if (!lista) return;

  PRODUCTOS.forEach(p => lista.appendChild(tarjetaProducto(p)));

  const categorias = ["Todos", ...new Set(PRODUCTOS.map(p => p.categoria))];
  categorias.forEach((cat, i) => {
    const b = document.createElement("button");
    b.className = "filtro" + (i === 0 ? " activo" : "");
    b.textContent = cat;
    b.addEventListener("click", () => {
      filtros.querySelectorAll(".filtro").forEach(x => x.classList.remove("activo"));
      b.classList.add("activo");
      lista.querySelectorAll(".producto").forEach(prod => {
        prod.classList.toggle("oculto", cat !== "Todos" && prod.dataset.categoria !== cat);
      });
    });
    filtros.appendChild(b);
  });
}

// Ovillos decorativos de la portada
function cargarHero() {
  const hero = document.getElementById("hero-arte");
  if (!hero) return;
  hero.innerHTML = `
    <svg viewBox="0 0 300 300" aria-hidden="true">
      <g transform="translate(20,40) scale(1.5)">${ovillo("#4b1f8f").replace(/<\/?svg[^>]*>/g, "")}</g>
      <g transform="translate(150,140) scale(1.25)">${ovillo("#9d86cf").replace(/<\/?svg[^>]*>/g, "")}</g>
      <g transform="translate(170,20) scale(.9)">${ovillo("#e6dccb").replace(/<\/?svg[^>]*>/g, "")}</g>
      <line x1="40" y1="270" x2="190" y2="40" stroke="#b9a37f" stroke-width="5" stroke-linecap="round"/>
      <line x1="70" y1="280" x2="230" y2="60" stroke="#b9a37f" stroke-width="5" stroke-linecap="round"/>
    </svg>`;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
  menuCelular();
  cargarHero();
  cargarCatalogo();
});
