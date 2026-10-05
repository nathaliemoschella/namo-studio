/* ===== NaMo — render y navegación (sin dependencias) ===== */
const $ = (s, r = document) => r.querySelector(s);
const app = $("#app");
const B = new URL("./", document.baseURI).href; /* base absoluta para url() dentro de variables CSS */
const AR = { bean: "204/175", rasca: "178/174", tablas: "178/177", lampara: "119/192", entry: "205/188", skinny: "93/176", cross: "118/176", dh: "68/176" };

function img(name, alt = "", cls = "", eager = false) {
  const d = DIMS[name]; if (!d) { console.warn("Falta imagen:", name); return ""; }
  return `<img src="img/p/${d.f}" width="${d.w}" height="${d.h}" alt="${alt}" ${cls ? `class="${cls}"` : ""} decoding="async" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'}>`;
}
const P = (t, cls = "") => typeof t === "string" ? `<p${cls ? ` class="${cls}"` : ""}>${t}</p>` : `<p class="b">${t.b}</p>`;
const paras = a => (a || []).map(t => P(t)).join("");
const maskStyle = k => `--m:url(${B}img/ui/ic-${k}.png);--ar:${AR[k]}`;
const zoomImg = (n, alt, cls = "") => `<a href="img/p/${DIMS[n].f}" class="zoom">${img(n, alt, cls)}</a>`;

function iconStrip(cur) {
  return `<div class="strip"><div class="icons">${ICONS.map(i => {
    const p = PROJECTS.find(p => p.id === i.id);
    return `<a class="ic ${i.id === cur ? "cur" : ""}" href="#/p/${i.id}" aria-label="${p.label}" title="${p.label}" style="${maskStyle(i.k)}"></a>`;
  }).join("")}</div></div>`;
}
const foot = () => `<footer class="foot"><a href="${SITE.instagram}" target="_blank" rel="noopener">${SITE.handle}</a></footer>`;
const gallery = (names, alt, tight) => {
  const r = names.reduce((a, n) => a + DIMS[n].w / DIMS[n].h, 0) / names.length; /* mismo alto para todas las fotos de la fila */
  return `<div class="gal c${names.length} ${tight ? "tight" : ""}" style="--r:${r.toFixed(4)}">${names.map((n, i) =>
  `<a href="img/p/${DIMS[n].f}" class="zoom" aria-label="Ampliar foto ${i + 1}">${img(n, `${alt} — foto ${i + 1}`)}</a>`).join("")}</div>`;
};

/* ---------------- páginas ---------------- */
function home() {
  return `<section class="home" data-dark><div class="bgwrap">
    <img class="bgimg" src="img/p/home-bg.jpg" width="1672" height="941" alt="NaMo Design Studio" fetchpriority="high">
    <img class="star" src="img/ui/star.png" width="106" height="106" alt=""></div></section>`;
}

function catalog() {
  return `<section class="cat-menu" data-dark>
    <div class="car" id="car" aria-roledescription="carrusel" aria-label="Proyectos">
      <button class="nav prev" aria-label="Anterior" type="button"></button>
      <div class="track">${ICONS.map((i, n) => {
        const p = PROJECTS.find(p => p.id === i.id);
        return `<a class="it" data-n="${n}" href="#/p/${i.id}" aria-label="${p.label}" title="${p.label}"><span class="ic" style="${maskStyle(i.k)}"></span></a>`;
      }).join("")}</div>
      <button class="nav next" aria-label="Siguiente" type="button"></button>
    </div>
    <div class="cur" id="carLbl"></div><div class="hint">ELIGE UN PROYECTO</div></section>
  <section class="catalog"><h2 class="t-l">Proyectos</h2><div class="grid">${PROJECTS.map((p, i) => {
    const thumb = p.thumb || p.hero;
    return `<a class="card ${p.thumb ? "sk" : ""} rv" href="#/p/${p.id}"><div class="ph">${img(thumb, p.label)}</div><span class="n">0${i + 1}</span><h3>${p.label}</h3><p>${p.sub}</p></a>`;
  }).join("")}</div></section>${foot()}`;
}

function namo() {
  return `<section class="namo" data-dark>
    <div class="polaroid"><img src="img/p/namo-polaroid.jpg" width="${DIMS["namo-polaroid"].w}" height="${DIMS["namo-polaroid"].h}" alt="Nathalie Moschella Andrade" fetchpriority="high"></div>
    <div class="nmrow"><a class="iso" href="#/" aria-label="Volver al inicio" title="Inicio"><img src="img/ui/nm-iso.png" width="186" height="159" alt=""></a><img class="lt" src="img/ui/nm-letters.png" width="362" height="159" alt="nm"></div>
    <a class="hdl" href="${SITE.instagram}" target="_blank" rel="noopener">${SITE.handle}</a>
  </section>${foot()}`;
}

function historia() {
  return `<a class="isotop" href="#/" aria-label="Ir al inicio"><img src="img/ui/mascot.png" width="191" height="160" alt=""></a>
  <section class="about" data-light>
    <img class="collage rv" src="img/p/about-collage.jpg" width="${DIMS["about-collage"].w}" height="${DIMS["about-collage"].h}" alt="Collage: cédula, pasaporte, billetes y recuerdos de Venezuela" loading="lazy">
    <h2 class="tag rv">Espero que <b>NAMO</b> te recuerde algo que ya amabas.</h2>
    <div class="sect rv">
      <div class="hd"><img class="pin" src="img/ui/pin.png" width="498" height="503" alt=""><h2>Vivir<b>en Toronto</b></h2><img class="stamp" src="img/ui/stamp.png" width="780" height="900" alt="Estampilla de Toronto"></div>
      <p>Vine a Toronto a estudiar diseño industrial en OCAD University, y el contraste me golpeó de una manera que no esperaba. Aquí hay acceso a materiales, herramientas digitales y conversaciones sobre la circularidad. Algo que aprendí a lo largo de mi carrera observando mi entorno es que en Venezuela, sin todos esos recursos, la creatividad y la necesidad se apoyaban en la invención y lograban resultados similares, pero de manera instintiva, porque no había otra opción. Esa tensión entre los dos mundos es lo que más ha moldeado mi trabajo.</p>
    </div>
    <div class="sect rv">
      <div class="hd"><h2>Crecí en<b>Venezuela</b></h2><img class="map" src="img/ui/map.png" width="1231" height="807" alt="Mapa de Venezuela"></div>
      <p>Aunque nunca escuché mucho sobre reciclaje de manera formal, reutilizar las cosas era simplemente parte de nuestra vida. Uno de los recuerdos más universales de la infancia venezolana es abrir un tarro de helado en el congelador y descubrir que adentro había sopa o caraotas del día anterior. Nuestras mamás guardaban los envases de comida para llevar, los tarros de mantequilla, cualquier recipiente que sirviera para algo más. Sin saberlo, le estábamos dando una segunda vida a los materiales todo el tiempo. Solo que nunca le llamábamos “sostenibilidad.”</p>
    </div>
    <div class="thanks rv"><h2>gracias por<br>estar aquí</h2>
      <p>Soy diseñadora industrial multidisciplinaria y mi práctica vive en la intersección entre la memoria emocional, el confort del hogar y el diseño funcional. Diseño muebles, repienso empaques y exploro sistemas circulares, siempre buscando crear objetos que se sientan personales y cercanos.</p></div>
  </section>${iconStrip(null)}${foot()}`;
}

function hero(p) {
  const t = p.heroTitle ? `<div class="ht ${p.heroPos}"><h1>${p.heroTitle}</h1>${p.heroText ? `<p>${p.heroText}</p>` : ""}</div>` : "";
  return `<section class="hero" data-dark style="${p.fx ? `--fx:${p.fx}` : ""}">${img(p.hero, p.label, "", true)}${t}</section>`;
}

function project(p) {
  if (p.kind === "skinny") return skinny(p);
  if (p.kind === "sust") return sust(p);
  if (p.kind === "dh") return darkHorse(p);
  let h = hero(p) + `<div class="wrap"><section class="block rv">`;
  if (p.title) h += `<h2 class="t-l" style="margin-bottom:clamp(14px,2vw,34px)">${p.title}</h2>`; else h += `<div style="height:clamp(10px,3vw,50px)"></div>`;
  h += paras(p.intro);
  h += gallery(p.gallery, p.label, p.tight);
  if (p.pre) h += `<div class="${p.id === "entryway" ? "indent narrow" : ""}">${paras(p.pre)}</div><div style="height:clamp(20px,3vw,60px)"></div>`;
  if (p.mid) {
    const body = `<div>${paras(p.mid.text)}</div>`;
    const cls = p.mid.right ? "two with-icon icon-r" : "two with-icon";
    h += `<div class="${cls}"><span class="ico ${p.mid.red ? "red" : ""}" style="${maskStyle(p.mid.icon)}" aria-hidden="true"></span>${body}</div>`;
  }
  h += `</section></div>`;
  const b = p.big;
  if (b.pair) h += `<section class="big pair rv">${b.pair.map(n => zoomImg(n, p.label)).join("")}</section>`;
  else h += `<section class="big rv ${b.narrow ? "narrow" : ""}">${b.xl ? `<h2 class="xl t-xl">${b.xl}</h2>` : ""}<div class="figwrap"${b.ba ? ` data-ba='${JSON.stringify(b.ba)}' data-ar="${DIMS[b.img].w}/${DIMS[b.img].h}"` : ""}>${zoomImg(b.img, p.label)}${b.caption ? `<p class="cap">${b.caption}</p>` : ""}</div></section>`;
  return h + iconStrip(p.id) + foot();
}

function skinny(p) {
  return `<div class="wrap" style="padding-top:0">
    <img class="sp-logo" src="img/p/skinny-logo.png" width="${DIMS["skinny-logo"].w}" height="${DIMS["skinny-logo"].h}" alt="SkinnyPop" fetchpriority="high" style="margin-inline:calc(var(--pad)*-1);width:calc(100% + var(--pad)*2);max-width:none">
    <section class="sp-top rv"><div><h1 class="t-l">SKINNYPOP<br>PACKAGING REDESIGN</h1>
      <p class="b" style="margin-top:1.2em">Este proyecto partió de una pregunta simple: ¿qué pasa cuando el empaque de un producto no comunica lo que el producto realmente es?</p>
      <p>SkinnyPop es una marca de palomitas de maíz empacadas que ya tiene identidad propia, pero su empaque original se leía más como una bolsa de papas fritas que como una experiencia de cine. Eso fue lo que quise cambiar.</p></div>
      ${img("skinny-bag", "Empaque original de SkinnyPop", "bag")}</section>
    <p class="sp-hand rv">El resultado es un empaque que no solo se ve mejor, sino que crea una conexión<br class="d"> más clara entre el objeto, la experiencia y el usuario.</p>
    <section class="sp-bot rv">${img("skinny-sketch", "Boceto de la caja rediseñada")}<div><h2 class="t-l">EL REDISEÑO<br>ESTÁ INSPIRADO EN</h2>
      <p style="margin-top:1.2em">los contenedores clásicos de palomitas de los cines. La lógica era simple: si el producto son palomitas, el empaque debería sentirse como palomitas. Dentro de esta nueva forma, la bolsa original del producto permanece intacta, mientras que la caja exterior funciona como un contenedor reutilizable, algo que puedes llevar a tu próxima noche de película. Es una dirección más expresiva y atrevida, con ilustraciones propias que empujan los límites de la marca sin perder su esencia. Todos los elementos gráficos e ilustraciones fueron diseñados en Illustrator y Procreate, construyendo desde cero tanto el die-line estructural como el sistema visual encima de él.</p></div></section>
    ${zoomImg("skinny-dielines", "Die-lines y caja final en tres variantes", "sp-die")}
  </div>${iconStrip(p.id)}${foot()}`;
}

function sust(p) {
  return hero(p) + `<div class="wrap"><section class="block rv">
    <h2 class="t-l">SUSTAINMYSHOES 3×3×3<br>SERIE DE ZAPATEROS UPCYCLED</h2>
    <p class="b" style="margin-top:1.4em">Este proyecto fue el primero en el que trabajé con HDPE reciclado, y sin saberlo en ese momento, fue el que plantó la semilla de todo lo que vino después. La premisa era construir tres objetos idénticos de alta fidelidad usando únicamente materiales reutilizados. Diseñé y construí un zapatero modular hecho completamente de madera recuperada, acrílico reciclado y sujetadores personalizados fabricados a partir de tapas de botella fundidas. Para conseguir las tapas, instalé un punto de recolección en la universidad, invitando a la comunidad a participar en el proceso. El reciclaje no era solo una decisión de material, era parte del diseño.</p>
    <div class="sm-proc">${zoomImg("sust-process", "Varilla de madera con sujetador de HDPE reciclado")}
      <div><p class="lead" style="text-transform:none;font-size:clamp(20px,2.4vw,44px)">El proceso de fabricación de los sujetadores fue lo que más me marcó.</p>
      <ol class="steps"><li><span>01</span>Fundí las tapas recolectadas</li><li><span>02</span>Las vertí en un molde personalizado</li><li><span>03</span>Torneé el material resultante en un torno para crear una varilla sólida.</li></ol></div></div>
    ${gallery(["sust-g1", "sust-g2", "sust-g3"], "SustainMyShoes")}
    <p class="centerp">Fue la primera vez que entendí que el plástico reciclado no es solo un material alternativo, es un material con su propio proceso, su propio comportamiento y sus propias posibilidades. Ese aprendizaje fue directamente lo que me llevó, semestres después, a proponer el proyecto con Dark Horse Café, donde el ciclo circular dejó de ser un ejercicio académico y se convirtió en un sistema real dentro de un negocio local.</p>
  </section></div>${iconStrip(p.id)}${foot()}`;
}

function darkHorse(p) {
  return hero(p) + `<div class="wrap"><section class="block rv">
    <h2 class="t-l">TESIS CICLO CIRCULAR<br>DISEÑO CON HDPE RECICLADO</h2><p class="lead" style="margin-top:.9em">DARK HORSE CAFÉ · TORONTO · 2025-2026</p>
    ${gallery(["dh-g1", "dh-g2", "dh-g3", "dh-g4"], "Dark Horse")}
    <div class="indent"><p class="b">Dark Horse es una cadena de cafés con 13 sucursales en Toronto. Desde afuera se ve como un café más, pero tiene algo que me llamó la atención desde el principio: genera una cantidad constante de plástico que simplemente descarta. Tapas de botella, jarras de limpieza, botellas de jarabe. Todo termina en la basura.</p>
    <p>La pregunta que guió este proyecto fue simple: ¿qué pasaría si ese plástico nunca saliera del café? La propuesta fue crear un sistema donde el plástico descartado por el café se transforma en nuevos objetos de uso diario para el mismo espacio. Nada sale, nada se desperdicia.</p></div>
    <div class="dh-hand"><div><h2 class="t-m">EL MATERIAL VUELVE AL LUGAR DONDE EMPEZÓ, PERO CON UNA FUNCIÓN NUEVA.</h2><p class="lead" style="margin-top:1em">PARA LLEGAR A ESO, PRIMERO PASÉ TIEMPO OBSERVANDO CÓMO LA GENTE REALMENTE USA EL CAFÉ.</p></div>${img("dh-hand", "Mano sosteniendo un vaso con manga y porta-pastel de HDPE reciclado")}</div>
    <div class="dh-two"><div><p class="b">Vi clientes trabajando con laptops, bebidas mal posicionadas en mesas llenas y servilletas improvisadas como posavasos. Esos pequeños momentos de incomodidad me dieron las tres áreas de diseño en las que trabajé:</p>
      <p>una manga para los vasos de café para llevar con porta-pastel. La idea de combinar la manga para el vaso con un porta-pastel surgió al observar a los estudiantes que frecuentaban el café, normalmente cargando varias cosas a la vez. La propuesta busca concentrar el vaso y el pastel en una sola mano, dejando la otra libre para llevar sus pertenencias.</p></div>${img("dh-girl", "Estudiante cargando bebidas, comida y pertenencias")}</div>
    <div class="indent"><p class="b">Un posavasos con identidad del café, y un sistema de charms coleccionables que incentivaba el uso de termos reutilizables: por cada visita llevando su propio termo, el cliente recibía un charm y, al completar una colección de cinco, podía canjearla por un café gratis reduciendo el consumo de vasos desechables.</p>
    <p>Cuando presenté los prototipos finales en Dark Horse, su reacción fue que los colores mezclados del HDPE se veían “demasiado reciclados” y no encajaban con su identidad de marca. Eso me hizo pensar bastante.</p></div>
    ${gallery(["dh-h1", "dh-h2", "dh-h3", "dh-h4"], "Dark Horse prototipos")}
  </section></div>
  <div class="dh-end rv">${img("dh-big", "Mano sosteniendo vaso y caja de pastel Dark Horse")}
    <div><h2 class="t-m">ELLOS SABÍAN DESDE EL PRINCIPIO</h2><p class="lead" style="margin-top:.8em;text-transform:none">Que los objetos serían de plástico reciclado. Pero verlo en físico fue diferente.</p>
    <p>La reacción no es solo de ellos, es un patrón que encontré en varios estudios: los consumidores todavía asocian “reciclado” con menor calidad, sin importar la función real del objeto. No lo tomo como un fracaso del proyecto. Lo tomo como la parte más honesta de todo el proceso. El diseño sostenible no solo tiene que funcionar bien, todavía tiene que convencer a la gente de que puede verse bien.</p></div></div>
  ${iconStrip(p.id)}${foot()}`;
}

/* ---------------- antes / después ----------------
   Si existen las dos fotos completas (img/p/<left>.jpg y <right>.jpg) se activa el control deslizante.
   Si no existen, se queda la foto compuesta del PDF (sin romper nada). */
function upgradeBA() {
  document.querySelectorAll(".figwrap[data-ba]").forEach(fw => {
    const c = JSON.parse(fw.dataset.ba);
    const load = n => new Promise(res => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = `img/p/${n}.jpg`; });
    Promise.all([load(c.left), load(c.right)]).then(([L, R]) => {
      if (!L || !R || !fw.isConnected) return;
      const cap = fw.querySelector(".cap");
      const box = document.createElement("div");
      box.className = "bas"; box.style.aspectRatio = `${L.naturalWidth}/${L.naturalHeight}`;
      box.innerHTML = `<img class="r" src="${R.src}" alt="${c.rightLabel}" draggable="false"><img class="l" src="${L.src}" alt="${c.leftLabel}" draggable="false">
        <span class="lab ll">${c.leftLabel}</span><span class="lab lr">${c.rightLabel}</span>
        <div class="line"><span class="knob" aria-hidden="true"><i>‹</i><i>›</i></span></div>
        <input class="rng" type="range" min="0" max="100" value="50" aria-label="Comparar ${c.leftLabel} y ${c.rightLabel}">`;
      fw.replaceChildren(box); if (cap) fw.appendChild(cap);
      const set = v => { v = Math.max(0, Math.min(100, v)); box.style.setProperty("--p", v + "%"); box.querySelector(".rng").value = v; };
      set(50);
      const at = e => { const r = box.getBoundingClientRect(); set(((e.clientX - r.left) / r.width) * 100); };
      let down = false;
      box.addEventListener("pointerdown", e => { down = true; box.setPointerCapture(e.pointerId); box.classList.add("drag"); at(e); });
      box.addEventListener("pointermove", e => { if (down) at(e); });
      const up = () => { down = false; box.classList.remove("drag"); };
      box.addEventListener("pointerup", up); box.addEventListener("pointercancel", up);
      box.querySelector(".rng").addEventListener("input", e => set(+e.target.value));
    });
  });
}

/* carrusel del catálogo */
function setupCarousel() {
  const car = $("#car"); if (!car) return;
  const items = [...car.querySelectorAll(".it")], N = items.length, lbl = $("#carLbl");
  let cur = 0, drag = null, moved = false;
  function paint() {
    items.forEach((el, n) => {
      let o = n - cur; o = ((o + N / 2) % N + N) % N - N / 2; /* -4..3 */
      el.style.setProperty("--o", o);
      el.classList.toggle("on", o === 0);
      el.style.zIndex = 10 - Math.abs(o);
      el.tabIndex = Math.abs(o) <= 2 ? 0 : -1;
    });
    const p = PROJECTS.find(p => p.id === ICONS[cur].id); lbl.textContent = p.label;
  }
  const go = d => { cur = (cur + d + N) % N; paint(); };
  car.querySelector(".prev").onclick = () => go(-1);
  car.querySelector(".next").onclick = () => go(1);
  car.addEventListener("keydown", e => { if (e.key === "ArrowLeft") go(-1); if (e.key === "ArrowRight") go(1); });
  car.addEventListener("wheel", e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) { e.preventDefault(); go(e.deltaX > 0 ? 1 : -1); } }, { passive: false });
  car.addEventListener("pointerdown", e => { drag = { x: e.clientX, d: 0 }; moved = false; });
  addEventListener("pointermove", e => {
    if (!drag) return; const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 8) moved = true;
    const step = Math.max(60, car.offsetWidth / 9);
    while (dx - drag.d * step > step) { go(-1); drag.d++; }
    while (dx - drag.d * step < -step) { go(1); drag.d--; }
  });
  addEventListener("pointerup", () => { drag = null; });
  car.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  paint();
}

/* ---------------- router ---------------- */
const topbar = $("#topbar"), crumb = $("#crumb"), crumbNow = $("#crumbNow");
function route() {
  const h = (location.hash || "#/").replace(/^#/, "");
  let html, key = "home", label = "", title = "NaMo Design Studio — Nathalie Moschella Andrade";
  const m = h.match(/^\/p\/([\w-]+)/);
  if (m && PROJECTS.find(p => p.id === m[1])) {
    const p = PROJECTS.find(p => p.id === m[1]); html = project(p); key = "catalog"; label = p.label; title = `${p.label} — NaMo Design Studio`;
  } else if (h.startsWith("/catalog")) { html = catalog(); key = "catalog"; label = "CATALOG"; title = "Catalog — NaMo Design Studio"; }
  else if (h.startsWith("/namo")) { html = namo(); key = "namo"; label = "NAMO"; title = "NAMO — NaMo Design Studio"; }
  else if (h.startsWith("/historia")) { html = historia(); key = "home"; label = "HOME"; title = "Mi historia — NaMo Design Studio"; }
  else { html = home(); key = "landing"; label = ""; }
  app.innerHTML = html;
  document.title = title;
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("on", a.dataset.nav === key));
  crumb.hidden = !label; crumbNow.textContent = label.toUpperCase();
  window.scrollTo({ top: 0, behavior: "instant" });
  topbar.classList.toggle("center", key === "landing");
  setupReveal(); onScroll(); upgradeBA(); setupCarousel();
}
function onScroll() {
  const d = $("[data-dark]");
  topbar.classList.toggle("onlight", !d || window.scrollY > d.offsetHeight - 80);
}
function setupReveal() {
  const els = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
  els.forEach(e => io.observe(e));
}
addEventListener("hashchange", route);
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", onScroll);

/* lightbox */
const lb = $("#lb"), lbImg = $("img", lb);
document.addEventListener("click", e => {
  const a = e.target.closest("a.zoom");
  if (a) { e.preventDefault(); lbImg.src = a.getAttribute("href"); lb.hidden = false; return; }
  if (e.target.closest("#lb")) lb.hidden = true;
});
addEventListener("keydown", e => { if (e.key === "Escape") lb.hidden = true; });

route();
