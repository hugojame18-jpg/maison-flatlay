/* Maison Flatlay — routeur, rendu, panier, langue */

const app = document.getElementById("app");
const navEl = document.getElementById("nav");
const footerEl = document.getElementById("footer");
const announceEl = document.getElementById("announce");
const toastEl = document.getElementById("toast");

const BY_SLUG = Object.fromEntries(LOOKS.map((l) => [l.slug, l]));

/* ---------------- langue ---------------- */

const LANG_KEY = "maison-flatlay-lang";

/* Pays → langue, pour les visiteurs dont la langue du navigateur
   n'est pas une des nôtres mais dont le pays l'est. */
const COUNTRY_LANG = {
  FR: "fr", BE: "fr", CH: "fr", LU: "fr", MC: "fr", CA: "fr", SN: "fr", CI: "fr", MA: "fr", TN: "fr", DZ: "fr",
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", UY: "es", EC: "es",
  DE: "de", AT: "de",
  IT: "it", SM: "it",
};

/* Fuseau horaire → langue, dernier filet de sécurité. */
const TZ_LANG = {
  "Europe/Paris": "fr", "Europe/Brussels": "fr", "Europe/Zurich": "fr", "Europe/Luxembourg": "fr", "Europe/Monaco": "fr",
  "Europe/Madrid": "es", "Atlantic/Canary": "es", "America/Mexico_City": "es", "America/Argentina/Buenos_Aires": "es", "America/Bogota": "es", "America/Santiago": "es", "America/Lima": "es",
  "Europe/Berlin": "de", "Europe/Vienna": "de",
  "Europe/Rome": "it",
};

function detectLang() {
  let saved = null;
  try {
    saved = localStorage.getItem(LANG_KEY);
  } catch {
    /* stockage indisponible */
  }
  if (saved && UI[saved]) return saved;

  const tags = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];

  // 1. la langue du navigateur
  for (const tag of tags) {
    const base = String(tag).toLowerCase().split("-")[0];
    if (UI[base]) return base;
  }

  // 2. le pays présent dans la locale (ex. "en-FR")
  for (const tag of tags) {
    const region = String(tag).split("-")[1];
    if (region && COUNTRY_LANG[region.toUpperCase()]) return COUNTRY_LANG[region.toUpperCase()];
  }

  // 3. le fuseau horaire
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TZ_LANG[tz]) return TZ_LANG[tz];
  } catch {
    /* Intl indisponible */
  }

  // 4. anglais pour le reste du monde
  return "en";
}

let lang = detectLang();

function setLang(next) {
  if (!UI[next]) return;
  lang = next;
  try {
    localStorage.setItem(LANG_KEY, next);
  } catch {
    /* stockage indisponible */
  }
  renderAll();
}

const t = () => UI[lang];

/* Sur téléphone la barre ne peut pas porter « Français » en toutes lettres :
   le sélecteur passait à la ligne et faisait grandir le header. */
const NARROW = window.matchMedia("(max-width: 639px)");
const langLabel = (code, name) => (NARROW.matches ? code.toUpperCase() : name);

/* Champs traduits d'un look : le français est la source. */
function lookDesc(look) {
  const c = CATALOG[lang];
  return (c && c.desc[look.slug]) || look.description;
}
function lookPiece(piece) {
  const c = CATALOG[lang];
  return (c && c.pieces[piece]) || piece;
}
function lookColor(color) {
  return (COLORS[lang] && COLORS[lang][color]) || color;
}
/* La sacoche n'existe que sur certains looks et ne fait pas partie des
   3 pièces tarifées (haut / bas / chaussures) : c'est une préférence
   d'affichage, pas un palier de prix. */
function bagPiece(look) {
  return look.pieces.find((p) => /^Sacoche/i.test(p));
}

const euro = (n) =>
  new Intl.NumberFormat(LOCALES[lang] || "fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const img = (file) => "images/" + file;

/* ---------------- panier (localStorage) ---------------- */

const CART_KEY = "maison-flatlay-cart";

/* Une seule silhouette par commande : le panier ne contient jamais plus d'une ligne. */
const CART_MAX = 1;

/* La page d'accueil n'affiche qu'un aperçu : tout charger rendait la page
   interminable et lourde sur mobile. Le reste vit sur /looks. */
const HOME_LOOKS = 8;

/* La collection se charge par paliers : les 93 silhouettes d'un coup
   donnaient une page de 164 000 px sur téléphone. */
const LOOKS_PAGE = 12;
let looksShown = LOOKS_PAGE;

function readCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((i) => BY_SLUG[i.slug]).slice(0, CART_MAX) : [];
  } catch {
    return [];
  }
}

function writeCart(items) {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  } catch {
    /* stockage indisponible : le panier reste en mémoire de page */
  }
}

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toastEl.classList.remove("show"), 2200);
}

/* ---------------- chrome (barre, nav, pied de page) ---------------- */

/* Écrit une balise meta, en la créant si la page ne la porte pas encore. */
function setMeta(selector, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const m = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (!m) return;
    el.setAttribute(m[1], m[2]);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function renderChrome() {
  const T = t();
  document.documentElement.lang = T.htmlLang;
  announceEl.textContent = T.announce;

  /* Titre et métadonnées suivent la langue affichée. */
  document.title = T.meta.title;
  setMeta('meta[name="description"]', T.meta.description);
  setMeta('meta[property="og:title"]', T.meta.title);
  setMeta('meta[property="og:description"]', T.meta.description);
  setMeta('meta[property="og:locale"]', T.htmlLang);

  navEl.innerHTML = `
    <a href="#/looks" class="label-caps link">${esc(T.nav.collection)}</a>
    <a href="#/atelier" class="label-caps link nav-atelier">${esc(T.nav.atelier)}</a>
    <a href="#/panier" class="btn-outline btn-sm">${esc(T.nav.cart)} (${readCart().length})</a>
    <label class="lang-picker">
      <span class="sr-only">${esc(T.langLabel)}</span>
      <select id="lang-select" class="label-caps" aria-label="${esc(T.langLabel)}">
        ${Object.entries(LANGS)
          .map(([code, name]) => `<option value="${code}"${code === lang ? " selected" : ""}>${esc(langLabel(code, name))}</option>`)
          .join("")}
      </select>
    </label>`;

  footerEl.innerHTML = `
    <div class="wrap cols">
      <div>
        <p class="brand-line">Maison Flatlay</p>
        <p class="tag">${esc(T.footer.tagline)}</p>
      </div>
      <div>
        <p class="label-caps muted">${esc(T.footer.shop)}</p>
        <div class="links">
          <a href="#/looks">${esc(T.footer.collection)}</a>
          <a href="#/atelier">${esc(T.footer.atelier)}</a>
          <a href="#/panier">${esc(T.footer.cart)}</a>
        </div>
      </div>
      <div>
        <p class="label-caps muted">${esc(T.footer.service)}</p>
        <p class="service">${T.footer.serviceLines.map(esc).join("<br />")}</p>
      </div>
    </div>
    <div class="copy label-caps">${esc(T.footer.copy)}</div>`;
}

/* ---------------- fragments ---------------- */

function lookCard(look) {
  const T = t();
  return `
    <a href="#/looks/${esc(look.slug)}" class="look-card">
      <div class="frame">
        <img src="${img(look.images[0])}" alt="${esc(T.card.altPrefix)} ${esc(look.name)}" width="900" height="1612" loading="lazy" decoding="async" />
      </div>
      <div class="row">
        <h3>${esc(look.name)}</h3>
        <span class="price">${euro(look.price)}</span>
      </div>
      <p class="meta label-caps">${esc(T.card.meta)} · ${esc(lookColor(look.color))}</p>
      <span class="buy label-caps">${esc(T.card.buy)}</span>
    </a>`;
}

/* Icônes de la promesse commerciale */
const ICONS = {
  shipping: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.8"/><circle cx="17.5" cy="18" r="1.8"/></svg>`,
  delivery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  returns: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 1 3 6.7"/><path d="M3 6v6h6"/></svg>`,
};

/* Bandeau « livraison offerte · 7 jours · retours 14 jours ».
   variant "band" = pleine largeur, "box" = encadré compact (fiche produit, panier). */
function trustBar(variant = "band") {
  const P = t().promo;
  const items = [
    ["shipping", P.shipping],
    ["delivery", P.delivery],
    ["returns", P.returns],
  ];
  return `
    <div class="trust trust-${variant}">
      ${items
        .map(
          ([icon, item]) => `
        <div class="trust-item">
          <span class="trust-icon">${ICONS[icon]}</span>
          <div>
            <p class="trust-title">${esc(item.title)}</p>
            <p class="trust-text">${esc(item.text)}</p>
          </div>
        </div>`
        )
        .join("")}
    </div>`;
}

function sizeGroup(label, values, name, selected) {
  return `
    <div class="size-group">
      <p class="label-caps muted">${esc(label)}</p>
      <div class="size-options" data-size-group="${name}">
        ${values
          .map((v) => `<button type="button" data-value="${v}" aria-pressed="${v === selected}">${v}</button>`)
          .join("")}
      </div>
    </div>`;
}

/* ---------------- pages ---------------- */

function pageHome() {
  const T = t();
  const featured = BY_SLUG["ivoire-cavalier"] || LOOKS[0];
  return `
    <section class="wrap hero">
      <div>
        <p class="label-caps muted">${esc(T.home.eyebrow)}</p>
        <h1>${esc(T.home.title1)}<br /><em>${esc(T.home.title2)}</em></h1>
        <p class="lede">${esc(T.home.lede)}</p>
        <div class="actions">
          <a href="#/looks" class="btn-solid">${esc(T.home.ctaCollection)}</a>
          <a href="#/atelier" class="btn-outline">${esc(T.home.ctaAtelier)}</a>
        </div>
      </div>
      <a href="#/looks/${esc(featured.slug)}" class="hero-figure">
        <div class="frame">
          <img src="${img(featured.images[0])}" alt="${esc(featured.name)}" width="900" height="1612" fetchpriority="high" decoding="async" />
        </div>
        <p class="caption label-caps">${esc(T.home.featured)} · ${esc(featured.name)}</p>
      </a>
    </section>

    <section class="trust-band-wrap">
      <div class="wrap">${trustBar("band")}</div>
    </section>

    <section class="wrap section">
      <div class="section-head">
        <h2>${esc(T.home.sectionTitle)}</h2>
        <a href="#/looks" class="label-caps">${esc(T.home.seeAll)}</a>
      </div>
      <div class="grid-looks">${LOOKS.slice(0, HOME_LOOKS).map(lookCard).join("")}</div>
      <a href="#/looks" class="btn-outline btn-block home-more">${esc(T.home.seeAllLong)}</a>
    </section>

    <section class="features">
      <div class="wrap inner">
        ${T.features
          .map(
            (f) => `
        <div>
          <p class="label-caps muted">${esc(f.label)}</p>
          <h3>${esc(f.text)}</h3>
        </div>`
          )
          .join("")}
      </div>
    </section>`;
}

function pageLooks() {
  const T = t();
  return `
    <div class="wrap page-head" style="padding-bottom:4rem">
      <p class="label-caps muted">${esc(T.looks.eyebrow)}</p>
      <h1>${esc(T.looks.title)}</h1>
      <p>${esc(T.looks.lede)}</p>
      ${trustBar("band")}
      <div class="grid-looks roomy" data-grid>${LOOKS.slice(0, looksShown).map(lookCard).join("")}</div>
      ${
        looksShown < LOOKS.length
          ? `<button type="button" class="btn-outline btn-block load-more" data-load-more>${esc(
              T.looks.loadMore
            )} (${LOOKS.length - looksShown})</button>`
          : ""
      }
    </div>`;
}

function pageAtelier() {
  const T = t();
  const strip = LOOKS.slice(0, 3);
  return `
    <div class="wrap-5xl page-head" style="padding-bottom:4rem">
      <p class="label-caps muted">${esc(T.atelier.eyebrow)}</p>
      <h1 style="max-width:48rem">${esc(T.atelier.title)}</h1>
      <p>${esc(T.atelier.lede)}</p>

      <div class="steps">
        ${T.atelier.steps
          .map(
            (s, i) => `
        <div class="step">
          <p class="label-caps muted">0${i + 1}</p>
          <h2>${esc(s.title)}</h2>
          <p>${esc(s.text)}</p>
        </div>`
          )
          .join("")}
      </div>

      <div class="atelier-strip">
        ${strip
          .map(
            (l) =>
              `<img src="${img(l.images[0])}" alt="${esc(T.atelier.imageAlt)} ${esc(l.name)}" width="900" height="1612" loading="lazy" decoding="async" />`
          )
          .join("")}
      </div>

      <div class="cta-block">
        <h2>${esc(T.atelier.ctaTitle)}</h2>
        <a href="#/looks" class="btn-solid">${esc(T.atelier.ctaButton)}</a>
      </div>
    </div>`;
}

function pageLook(slug) {
  const look = BY_SLUG[slug];
  if (!look) return pageNotFound();

  const T = t();
  const others = LOOKS.filter((l) => l.slug !== slug).slice(0, 3);
  const bag = bagPiece(look);

  return `
    <div class="wrap detail" data-slug="${esc(look.slug)}">
      <a href="#/looks" class="label-caps muted">${esc(T.detail.back)}</a>
      <div class="detail-grid">
        <div class="detail-gallery">
          <div class="frame">
            <img src="${img(look.images[0])}" alt="${esc(look.name)}" width="900" height="1612" fetchpriority="high" decoding="async" />
          </div>
        </div>
        <div class="detail-info">
          <p class="label-caps muted">${esc(T.detail.silhouette)} · ${esc(lookColor(look.color))}</p>
          <h1>${esc(look.name)}</h1>
          <p class="price js-detail-price">${euro(PRICES[3])}</p>
          <p class="desc">${esc(lookDesc(look))}</p>

          ${trustBar("box")}

          <div class="piece-select">
            <p class="label-caps muted">${esc(T.detail.selectPieces)}</p>
            <div class="piece-btns">
              <button type="button" class="piece-btn" data-piece="haut" aria-pressed="true">${esc(T.cart.top)}</button>
              <button type="button" class="piece-btn" data-piece="bas" aria-pressed="true">${esc(T.cart.bottom)}</button>
              <button type="button" class="piece-btn" data-piece="chaussures" aria-pressed="true">${esc(T.cart.shoes)}</button>
            </div>
          </div>

          <div data-piece-group="haut">${sizeGroup(T.detail.sizeTop, SIZES_TOP, "haut", "M")}</div>
          <div data-piece-group="bas">${sizeGroup(T.detail.sizeBottom, SIZES_TOP, "bas", "M")}</div>
          <div data-piece-group="chaussures">${sizeGroup(T.detail.shoeSize, SIZES_SHOE, "chaussures", "42")}</div>

          ${
            bag
              ? `<label class="bag-toggle">
                  <input type="checkbox" data-bag-toggle checked />
                  ${esc(T.detail.withBag)} — ${esc(lookPiece(bag))}
                </label>`
              : ""
          }

          <a href="${BUY_URLS[3]}" target="_blank" rel="noopener noreferrer" class="btn-solid btn-block js-buy-link">${esc(T.detail.buyNow)}</a>
          <button type="button" class="btn-outline btn-block" data-add-to-cart>${esc(T.detail.addToCart)}</button>
          <p class="one-max label-caps">${esc(T.detail.oneMax)}</p>
          <a href="#/panier" class="view-cart label-caps">${esc(T.detail.viewCart)}</a>

          <div class="pieces">
            <p class="label-caps muted">${esc(T.detail.pieces)}</p>
            <ul>
              ${look.pieces
                .map(
                  (p) =>
                    `<li${p === bag ? ' data-bag-item' : ""}><span>—</span>${esc(lookPiece(p))}</li>`
                )
                .join("")}
            </ul>
          </div>

        </div>
      </div>

      <section class="related">
        <h2>${esc(T.detail.related)}</h2>
        <div class="grid-looks">${others.map(lookCard).join("")}</div>
      </section>

      <!-- Barre d'achat fixe : sur mobile le bouton d'origine se trouve à plus
           de deux écrans de scroll, on garde donc le prix et l'achat à portée. -->
      <div class="buybar">
        <div class="buybar-info">
          <span class="buybar-name">${esc(look.name)}</span>
          <span class="buybar-price js-detail-price">${euro(PRICES[3])}</span>
        </div>
        <a href="${BUY_URLS[3]}" target="_blank" rel="noopener noreferrer" class="btn-solid buybar-cta js-buy-link">${esc(T.detail.buyNow)}</a>
      </div>
    </div>`;
}

function pageCart() {
  const T = t();
  const items = readCart();

  if (!items.length) {
    return `
      <div class="cart-empty">
        <h1>${esc(T.cart.emptyTitle)}</h1>
        <p>${esc(T.cart.emptyText)}</p>
        <a href="#/looks" class="btn-solid">${esc(T.cart.emptyCta)}</a>
        ${trustBar("box")}
      </div>`;
  }

  const total = items.reduce((sum, i) => sum + (i.price || BY_SLUG[i.slug].price), 0);

  return `
    <div class="wrap cart">
      <h1>${esc(T.cart.title)}</h1>
      <div class="cart-list">
        ${items
          .map((item, index) => {
            const look = BY_SLUG[item.slug];
            return `
            <div class="cart-item">
              <img src="${img(look.images[0])}" alt="${esc(look.name)}" width="900" height="1612" loading="lazy" decoding="async" />
              <div>
                <h3>${esc(look.name)}</h3>
                <p class="opts label-caps">${[
                  item.haut ? `${esc(T.cart.top)} ${esc(item.haut)}` : "",
                  item.bas ? `${esc(T.cart.bottom)} ${esc(item.bas)}` : "",
                  item.chaussures ? `${esc(T.cart.shoes)} ${esc(item.chaussures)}` : "",
                  item.bag ? esc(T.cart.bag) : "",
                ].filter(Boolean).join(" · ")}</p>
              </div>
              <div class="right">
                <span>${euro(item.price || look.price)}</span>
                <button type="button" class="remove label-caps" data-remove="${index}">${esc(T.cart.remove)}</button>
              </div>
            </div>`;
          })
          .join("")}
      </div>
      <div class="cart-total">
        <span class="label-caps muted">${esc(T.cart.total)}</span>
        <span class="sum">${euro(total)}</span>
      </div>
      <p class="one-max label-caps">${esc(T.detail.oneMax)}</p>
      ${trustBar("box")}
      <div class="cart-actions">
        <a href="${items[0] && items[0].buyUrl ? items[0].buyUrl : BUY_URL}" target="_blank" rel="noopener noreferrer" class="btn-solid">${esc(T.cart.order)}</a>
        <a href="#/looks" class="btn-outline">${esc(T.cart.keepShopping)}</a>
      </div>
    </div>`;
}

function pageNotFound() {
  const T = t();
  return `
    <div class="cart-empty">
      <h1>${esc(T.notFound.title)}</h1>
      <p>${esc(T.notFound.text)}</p>
      <a href="#/looks" class="btn-solid">${esc(T.notFound.cta)}</a>
    </div>`;
}

/* ---------------- routeur ---------------- */

function renderPage() {
  const path = (location.hash.replace(/^#/, "") || "/").split("?")[0];
  const parts = path.split("/").filter(Boolean);

  if (parts.length === 0) return pageHome();
  if (parts[0] === "looks" && parts.length === 1) {
    looksShown = LOOKS_PAGE; // on repart d'un palier propre à chaque visite
    return pageLooks();
  }
  if (parts[0] === "looks") return pageLook(decodeURIComponent(parts[1]));
  if (parts[0] === "atelier") return pageAtelier();
  if (parts[0] === "panier") return pageCart();
  return pageNotFound();
}

function renderAll(scroll = true) {
  app.innerHTML = renderPage();
  renderChrome();
  if (scroll) window.scrollTo(0, 0);
}

/* ---------------- interactions ---------------- */

navEl.addEventListener("change", (event) => {
  if (event.target.id === "lang-select") setLang(event.target.value);
});

app.addEventListener("change", (event) => {
  // inclure ou non la sacoche : simple préférence d'affichage, sans effet sur le prix
  if (event.target.matches("[data-bag-toggle]")) {
    const item = app.querySelector("[data-bag-item]");
    if (item) item.hidden = !event.target.checked;
  }
});

app.addEventListener("click", (event) => {
  // « voir plus » sur la collection : on ajoute un palier sans re-rendre la page,
  // pour ne pas renvoyer le visiteur en haut de la grille.
  const more = event.target.closest("[data-load-more]");
  if (more) {
    const grid = app.querySelector("[data-grid]");
    const suite = LOOKS.slice(looksShown, looksShown + LOOKS_PAGE);
    grid.insertAdjacentHTML("beforeend", suite.map(lookCard).join(""));
    looksShown += suite.length;
    const reste = LOOKS.length - looksShown;
    if (reste > 0) more.textContent = `${t().looks.loadMore} (${reste})`;
    else more.remove();
    return;
  }

  // toggle pièce (haut / bas / chaussures)
  const pieceBtn = event.target.closest("[data-piece]");
  if (pieceBtn) {
    const root = app.querySelector(".detail");
    const allBtns = Array.from(root.querySelectorAll("[data-piece]"));
    const wasPressed = pieceBtn.getAttribute("aria-pressed") === "true";
    const pressedCount = allBtns.filter((b) => b.getAttribute("aria-pressed") === "true").length;
    if (wasPressed && pressedCount === 1) return; // au moins une pièce obligatoire
    pieceBtn.setAttribute("aria-pressed", String(!wasPressed));
    const group = root.querySelector(`[data-piece-group="${pieceBtn.dataset.piece}"]`);
    if (group) group.hidden = wasPressed;
    const n = allBtns.filter((b) => b.getAttribute("aria-pressed") === "true").length;
    // le prix et le lien existent en double : dans la fiche et dans la barre fixe
    root.querySelectorAll(".js-detail-price").forEach((el) => (el.textContent = euro(PRICES[n])));
    root.querySelectorAll(".js-buy-link").forEach((el) => (el.href = BUY_URLS[n]));
    return;
  }

  // sélection de taille
  const sizeBtn = event.target.closest("[data-size-group] button");
  if (sizeBtn) {
    sizeBtn.parentElement.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", "false"));
    sizeBtn.setAttribute("aria-pressed", "true");
    return;
  }

  // ajout au panier
  if (event.target.closest("[data-add-to-cart]")) {
    const root = app.querySelector(".detail");
    const allBtns = Array.from(root.querySelectorAll("[data-piece]"));
    const n = allBtns.filter((b) => b.getAttribute("aria-pressed") === "true").length;
    const pick = (name) => {
      const group = root.querySelector(`[data-piece-group="${name}"]`);
      if (group && group.hidden) return null;
      const el = root.querySelector(`[data-size-group="${name}"] button[aria-pressed="true"]`);
      return el ? el.dataset.value : null;
    };
    const bagToggle = root.querySelector("[data-bag-toggle]");
    const previous = readCart()[0];
    writeCart([{
      slug: root.dataset.slug,
      haut: pick("haut"),
      bas: pick("bas"),
      chaussures: pick("chaussures"),
      bag: bagToggle ? bagToggle.checked : null,
      price: PRICES[n] || 79.99,
      buyUrl: BUY_URLS[n] || BUY_URL,
    }]);
    renderChrome();
    toast(previous ? t().detail.replaced : t().detail.added);
    return;
  }

  // retrait du panier
  const remove = event.target.closest("[data-remove]");
  if (remove) {
    const items = readCart();
    items.splice(Number(remove.dataset.remove), 1);
    writeCart(items);
    renderAll(false);
  }
});

window.addEventListener("hashchange", () => renderAll());

/* Le libellé de langue change de forme au passage téléphone / écran large. */
NARROW.addEventListener("change", () => renderChrome());

if (!location.hash) location.replace("#/");
renderAll();
