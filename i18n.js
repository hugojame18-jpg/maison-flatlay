/* Textes de l'interface — fr, en, es, de, it */

const LANGS = {
  fr: "Français",
  en: "English",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
};

const DEFAULT_LANG = "fr";

const UI = {
  fr: {
    htmlLang: "fr",
    announce: "Livraison offerte · Livré en 7 jours · Retours sous 14 jours",
    nav: { collection: "Collection", atelier: "Atelier", cart: "Panier" },
    langLabel: "Langue",

    promo: {
      shipping: { title: "Livraison offerte", text: "Sur toutes les commandes, sans minimum d'achat." },
      delivery: { title: "Livré en 7 jours", text: "Expédié sous 48 h, chez vous en une semaine." },
      returns: { title: "Retours sous 14 jours", text: "Échange ou remboursement, sans discuter." },
    },

    home: {
      eyebrow: "Collection Automne — 8 silhouettes",
      title1: "Le look entier,",
      title2: "pas juste la pièce.",
      lede: "Chaque silhouette est composée à plat, testée, puis proposée complète : haut, bas, chaussures et accessoires. Vous choisissez une taille, nous envoyons l'ensemble.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "L'atelier",
      featured: "En vedette",
      sectionTitle: "Les 8 silhouettes",
      seeAll: "Tout voir →",
    },

    features: [
      {
        label: "Composé à la main",
        text: "Chaque ensemble est assemblé et photographié pièce par pièce.",
      },
      {
        label: "Livré en 7 jours",
        text: "Un seul colis, une seule commande : la silhouette complète, livrée gratuitement sous 7 jours.",
      },
      {
        label: "Retours 14 jours",
        text: "Un doute sur une taille ? On échange sans discuter.",
      },
    ],

    looks: {
      eyebrow: "Collection complète",
      title: "Huit silhouettes, chacune vendue en ensemble",
      lede: "Faites défiler chaque look pour découvrir toutes ses vues avant de choisir votre taille.",
    },

    atelier: {
      eyebrow: "L'atelier",
      title: "Une silhouette n'est réussie que lorsqu'on ne peut plus rien enlever",
      lede: "Maison Flatlay ne vend pas des pièces isolées : nous composons des ensembles entiers, du haut aux chaussures, et nous les documentons vue par vue pour que rien ne soit une surprise à l'ouverture du colis.",
      steps: [
        { title: "Sélection", text: "Nous chinons les pièces une à une : matières, coupes, patine, provenance." },
        { title: "Mise à plat", text: "L'ensemble est composé au sol jusqu'à ce que les proportions tombent juste." },
        { title: "Photographie", text: "Sept vues par silhouette : d'ensemble, détails, textures, accessoires." },
        { title: "Expédition", text: "Chaque pièce est vérifiée, mesurée, emballée et livrée gratuitement sous 7 jours." },
      ],
      ctaTitle: "Prêt à choisir votre silhouette ?",
      ctaButton: "Voir la collection",
      imageAlt: "Détail de la silhouette",
    },

    card: { meta: "Silhouette complète", buy: "Acheter →", altPrefix: "Look" },

    detail: {
      back: "← Collection",
      silhouette: "Silhouette",
      sizeTop: "Taille haut",
      sizeBottom: "Taille bas",
      shoeSize: "Pointure chaussures",
      buyNow: "Acheter maintenant",
      addToCart: "Ajouter au panier",
      viewCart: "Voir le panier",
      pieces: "Pièces incluses",
      shipping: "Livraison gratuite · Livré en 7 jours · Retours sous 14 jours",
      related: "Autres silhouettes",
      added: "Silhouette ajoutée au panier",
      replaced: "Silhouette remplacée — une seule par commande",
      oneMax: "Une silhouette par commande",
    },

    cart: {
      emptyTitle: "Votre panier est vide",
      emptyText: "Parcourez la collection et ajoutez une silhouette complète.",
      emptyCta: "Voir la collection",
      title: "Votre panier",
      top: "Haut",
      bottom: "Bas",
      shoes: "Pointure",
      remove: "Retirer",
      total: "Total",
      shipping: "Livraison gratuite · Livré en 7 jours · Retours sous 14 jours",
      order: "Commander",
      keepShopping: "Continuer mes achats",
    },

    notFound: {
      title: "Page introuvable",
      text: "Cette silhouette n'existe pas ou a été retirée de la collection.",
      cta: "Voir la collection",
    },

    footer: {
      tagline: "Des silhouettes complètes, photographiées à plat, composées pièce par pièce.",
      shop: "Boutique",
      collection: "Collection",
      atelier: "Notre atelier",
      cart: "Panier",
      service: "Service",
      serviceLines: ["Livraison gratuite", "Livré en 7 jours", "Retours sous 14 jours", "bonjour@maisonflatlay.fr"],
      copy: "© 2026 Maison Flatlay",
    },
  },

  en: {
    htmlLang: "en",
    announce: "Free shipping · Delivered in 7 days · 14-day returns",
    nav: { collection: "Collection", atelier: "Atelier", cart: "Cart" },
    langLabel: "Language",

    promo: {
      shipping: { title: "Free shipping", text: "On every order, no minimum spend." },
      delivery: { title: "Delivered in 7 days", text: "Dispatched within 48 h, with you in a week." },
      returns: { title: "14-day returns", text: "Exchange or refund, no questions asked." },
    },

    home: {
      eyebrow: "Autumn Collection — 8 silhouettes",
      title1: "The whole look,",
      title2: "not just the piece.",
      lede: "Every silhouette is laid out flat, tested, then offered complete: top, bottom, shoes and accessories. You pick a size, we ship the entire outfit.",
      ctaCollection: "View the collection",
      ctaAtelier: "The atelier",
      featured: "Featured",
      sectionTitle: "The 8 silhouettes",
      seeAll: "See all →",
    },

    features: [
      { label: "Hand-composed", text: "Every outfit is assembled and photographed piece by piece." },
      {
        label: "Delivered in 7 days",
        text: "One parcel, one order: the complete silhouette, shipped free within 7 days.",
      },
      { label: "14-day returns", text: "Unsure about a size? We exchange it, no questions asked." },
    ],

    looks: {
      eyebrow: "Full collection",
      title: "Eight silhouettes, each sold as a complete outfit",
      lede: "Browse each look to see every view before choosing your size.",
    },

    atelier: {
      eyebrow: "The atelier",
      title: "A silhouette is right only when nothing more can be taken away",
      lede: "Maison Flatlay does not sell single pieces: we compose entire outfits, from top to shoes, and document them view by view so nothing is a surprise when the parcel is opened.",
      steps: [
        { title: "Selection", text: "We source each piece one by one: fabric, cut, patina, provenance." },
        { title: "Flat lay", text: "The outfit is laid out on the floor until the proportions fall into place." },
        { title: "Photography", text: "Seven views per silhouette: full outfit, details, textures, accessories." },
        { title: "Shipping", text: "Every piece is checked, measured, packed and delivered free within 7 days." },
      ],
      ctaTitle: "Ready to choose your silhouette?",
      ctaButton: "View the collection",
      imageAlt: "Detail of the silhouette",
    },

    card: { meta: "Complete silhouette", buy: "Buy →", altPrefix: "Look" },

    detail: {
      back: "← Collection",
      silhouette: "Silhouette",
      sizeTop: "Top size",
      sizeBottom: "Bottom size",
      shoeSize: "Shoe size",
      buyNow: "Buy now",
      addToCart: "Add to cart",
      viewCart: "View cart",
      pieces: "Pieces included",
      shipping: "Free shipping · Delivered in 7 days · 14-day returns",
      related: "Other silhouettes",
      added: "Silhouette added to cart",
      replaced: "Silhouette replaced — one per order",
      oneMax: "One silhouette per order",
    },

    cart: {
      emptyTitle: "Your cart is empty",
      emptyText: "Browse the collection and add a complete silhouette.",
      emptyCta: "View the collection",
      title: "Your cart",
      top: "Top",
      bottom: "Bottom",
      shoes: "Shoe size",
      remove: "Remove",
      total: "Total",
      shipping: "Free shipping · Delivered in 7 days · 14-day returns",
      order: "Check out",
      keepShopping: "Keep shopping",
    },

    notFound: {
      title: "Page not found",
      text: "This silhouette does not exist or has been withdrawn from the collection.",
      cta: "View the collection",
    },

    footer: {
      tagline: "Complete silhouettes, photographed flat, composed piece by piece.",
      shop: "Shop",
      collection: "Collection",
      atelier: "Our atelier",
      cart: "Cart",
      service: "Service",
      serviceLines: ["Free shipping", "Delivered in 7 days", "14-day returns", "bonjour@maisonflatlay.fr"],
      copy: "© 2026 Maison Flatlay",
    },
  },

  es: {
    htmlLang: "es",
    announce: "Envío gratuito · Entrega en 7 días · Devoluciones en 14 días",
    nav: { collection: "Colección", atelier: "Taller", cart: "Cesta" },
    langLabel: "Idioma",

    promo: {
      shipping: { title: "Envío gratuito", text: "En todos los pedidos, sin importe mínimo." },
      delivery: { title: "Entrega en 7 días", text: "Enviado en 48 h, en tu casa en una semana." },
      returns: { title: "Devoluciones en 14 días", text: "Cambio o reembolso, sin preguntas." },
    },

    home: {
      eyebrow: "Colección Otoño — 8 siluetas",
      title1: "El look entero,",
      title2: "no solo la prenda.",
      lede: "Cada silueta se compone en plano, se prueba y luego se ofrece completa: parte de arriba, parte de abajo, calzado y accesorios. Tú eliges una talla, nosotros enviamos el conjunto.",
      ctaCollection: "Ver la colección",
      ctaAtelier: "El taller",
      featured: "Destacado",
      sectionTitle: "Las 8 siluetas",
      seeAll: "Ver todo →",
    },

    features: [
      { label: "Compuesto a mano", text: "Cada conjunto se monta y se fotografía prenda por prenda." },
      {
        label: "Entrega en 7 días",
        text: "Un solo paquete, un solo pedido: la silueta completa, enviada gratis en 7 días.",
      },
      { label: "Devoluciones 14 días", text: "¿Dudas con la talla? La cambiamos sin preguntas." },
    ],

    looks: {
      eyebrow: "Colección completa",
      title: "Ocho siluetas, cada una vendida como conjunto",
      lede: "Recorre cada look para ver todas sus vistas antes de elegir tu talla.",
    },

    atelier: {
      eyebrow: "El taller",
      title: "Una silueta solo está lograda cuando ya no se le puede quitar nada",
      lede: "Maison Flatlay no vende prendas sueltas: componemos conjuntos enteros, de la parte de arriba al calzado, y los documentamos vista por vista para que nada sorprenda al abrir el paquete.",
      steps: [
        { title: "Selección", text: "Buscamos las prendas una a una: materiales, cortes, pátina, procedencia." },
        { title: "Puesta en plano", text: "El conjunto se compone en el suelo hasta que las proporciones encajan." },
        { title: "Fotografía", text: "Siete vistas por silueta: conjunto, detalles, texturas, accesorios." },
        { title: "Envío", text: "Cada prenda se revisa, se mide, se embala y se entrega gratis en 7 días." },
      ],
      ctaTitle: "¿Listo para elegir tu silueta?",
      ctaButton: "Ver la colección",
      imageAlt: "Detalle de la silueta",
    },

    card: { meta: "Silueta completa", buy: "Comprar →", altPrefix: "Look" },

    detail: {
      back: "← Colección",
      silhouette: "Silueta",
      sizeTop: "Talla superior",
      sizeBottom: "Talla inferior",
      shoeSize: "Número de calzado",
      buyNow: "Comprar ahora",
      addToCart: "Añadir a la cesta",
      viewCart: "Ver la cesta",
      pieces: "Prendas incluidas",
      shipping: "Envío gratuito · Entrega en 7 días · Devoluciones en 14 días",
      related: "Otras siluetas",
      added: "Silueta añadida a la cesta",
      replaced: "Silueta sustituida — una por pedido",
      oneMax: "Una silueta por pedido",
    },

    cart: {
      emptyTitle: "Tu cesta está vacía",
      emptyText: "Recorre la colección y añade una silueta completa.",
      emptyCta: "Ver la colección",
      title: "Tu cesta",
      top: "Arriba",
      bottom: "Abajo",
      shoes: "Calzado",
      remove: "Quitar",
      total: "Total",
      shipping: "Envío gratuito · Entrega en 7 días · Devoluciones en 14 días",
      order: "Finalizar compra",
      keepShopping: "Seguir comprando",
    },

    notFound: {
      title: "Página no encontrada",
      text: "Esta silueta no existe o se ha retirado de la colección.",
      cta: "Ver la colección",
    },

    footer: {
      tagline: "Siluetas completas, fotografiadas en plano, compuestas prenda por prenda.",
      shop: "Tienda",
      collection: "Colección",
      atelier: "Nuestro taller",
      cart: "Cesta",
      service: "Servicio",
      serviceLines: ["Envío gratuito", "Entrega en 7 días", "Devoluciones en 14 días", "bonjour@maisonflatlay.fr"],
      copy: "© 2026 Maison Flatlay",
    },
  },

  de: {
    htmlLang: "de",
    announce: "Kostenloser Versand · Lieferung in 7 Tagen · 14 Tage Rückgabe",
    nav: { collection: "Kollektion", atelier: "Atelier", cart: "Warenkorb" },
    langLabel: "Sprache",

    promo: {
      shipping: { title: "Kostenloser Versand", text: "Bei jeder Bestellung, ohne Mindestbestellwert." },
      delivery: { title: "Lieferung in 7 Tagen", text: "Versand innerhalb von 48 h, in einer Woche bei Ihnen." },
      returns: { title: "14 Tage Rückgabe", text: "Umtausch oder Erstattung, ohne Diskussion." },
    },

    home: {
      eyebrow: "Herbstkollektion — 8 Silhouetten",
      title1: "Der ganze Look,",
      title2: "nicht nur das Teil.",
      lede: "Jede Silhouette wird flach gelegt, geprüft und dann komplett angeboten: Oberteil, Hose, Schuhe und Accessoires. Sie wählen eine Größe, wir schicken das gesamte Outfit.",
      ctaCollection: "Kollektion ansehen",
      ctaAtelier: "Das Atelier",
      featured: "Im Fokus",
      sectionTitle: "Die 8 Silhouetten",
      seeAll: "Alle ansehen →",
    },

    features: [
      { label: "Von Hand komponiert", text: "Jedes Outfit wird Stück für Stück zusammengestellt und fotografiert." },
      {
        label: "Lieferung in 7 Tagen",
        text: "Ein Paket, eine Bestellung: die komplette Silhouette, kostenlos geliefert in 7 Tagen.",
      },
      { label: "14 Tage Rückgabe", text: "Unsicher bei der Größe? Wir tauschen ohne Diskussion." },
    ],

    looks: {
      eyebrow: "Gesamte Kollektion",
      title: "Acht Silhouetten, jede als komplettes Outfit",
      lede: "Sehen Sie sich jeden Look an, bevor Sie Ihre Größe wählen.",
    },

    atelier: {
      eyebrow: "Das Atelier",
      title: "Eine Silhouette ist erst gelungen, wenn man nichts mehr weglassen kann",
      lede: "Maison Flatlay verkauft keine Einzelteile: Wir stellen ganze Outfits zusammen, vom Oberteil bis zu den Schuhen, und dokumentieren sie Ansicht für Ansicht, damit beim Öffnen des Pakets nichts überrascht.",
      steps: [
        { title: "Auswahl", text: "Wir suchen jedes Teil einzeln aus: Material, Schnitt, Patina, Herkunft." },
        { title: "Flatlay", text: "Das Outfit wird am Boden gelegt, bis die Proportionen stimmen." },
        { title: "Fotografie", text: "Sieben Ansichten pro Silhouette: Gesamtbild, Details, Texturen, Accessoires." },
        { title: "Versand", text: "Jedes Teil wird geprüft, gemessen, verpackt und kostenlos in 7 Tagen geliefert." },
      ],
      ctaTitle: "Bereit für Ihre Silhouette?",
      ctaButton: "Kollektion ansehen",
      imageAlt: "Detail der Silhouette",
    },

    card: { meta: "Komplette Silhouette", buy: "Kaufen →", altPrefix: "Look" },

    detail: {
      back: "← Kollektion",
      silhouette: "Silhouette",
      sizeTop: "Oberteilgröße",
      sizeBottom: "Hosengröße",
      shoeSize: "Schuhgröße",
      buyNow: "Jetzt kaufen",
      addToCart: "In den Warenkorb",
      viewCart: "Warenkorb ansehen",
      pieces: "Enthaltene Teile",
      shipping: "Kostenloser Versand · Lieferung in 7 Tagen · 14 Tage Rückgabe",
      related: "Weitere Silhouetten",
      added: "Silhouette in den Warenkorb gelegt",
      replaced: "Silhouette ersetzt — eine pro Bestellung",
      oneMax: "Eine Silhouette pro Bestellung",
    },

    cart: {
      emptyTitle: "Ihr Warenkorb ist leer",
      emptyText: "Sehen Sie sich die Kollektion an und legen Sie eine komplette Silhouette hinein.",
      emptyCta: "Kollektion ansehen",
      title: "Ihr Warenkorb",
      top: "Oben",
      bottom: "Unten",
      shoes: "Schuhgröße",
      remove: "Entfernen",
      total: "Gesamt",
      shipping: "Kostenloser Versand · Lieferung in 7 Tagen · 14 Tage Rückgabe",
      order: "Zur Kasse",
      keepShopping: "Weiter einkaufen",
    },

    notFound: {
      title: "Seite nicht gefunden",
      text: "Diese Silhouette existiert nicht oder wurde aus der Kollektion genommen.",
      cta: "Kollektion ansehen",
    },

    footer: {
      tagline: "Komplette Silhouetten, flach fotografiert, Stück für Stück komponiert.",
      shop: "Shop",
      collection: "Kollektion",
      atelier: "Unser Atelier",
      cart: "Warenkorb",
      service: "Service",
      serviceLines: [
        "Kostenloser Versand",
        "Lieferung in 7 Tagen",
        "14 Tage Rückgabe",
        "bonjour@maisonflatlay.fr",
      ],
      copy: "© 2026 Maison Flatlay",
    },
  },

  it: {
    htmlLang: "it",
    announce: "Spedizione gratuita · Consegna in 7 giorni · Resi entro 14 giorni",
    nav: { collection: "Collezione", atelier: "Atelier", cart: "Carrello" },
    langLabel: "Lingua",

    promo: {
      shipping: { title: "Spedizione gratuita", text: "Su tutti gli ordini, senza minimo di spesa." },
      delivery: { title: "Consegna in 7 giorni", text: "Spedito entro 48 h, da te in una settimana." },
      returns: { title: "Resi entro 14 giorni", text: "Cambio o rimborso, senza discutere." },
    },

    home: {
      eyebrow: "Collezione Autunno — 8 silhouette",
      title1: "Il look intero,",
      title2: "non solo il capo.",
      lede: "Ogni silhouette viene composta in piano, provata e poi proposta completa: sopra, sotto, scarpe e accessori. Tu scegli una taglia, noi spediamo l'insieme.",
      ctaCollection: "Vedi la collezione",
      ctaAtelier: "L'atelier",
      featured: "In evidenza",
      sectionTitle: "Le 8 silhouette",
      seeAll: "Vedi tutto →",
    },

    features: [
      { label: "Composto a mano", text: "Ogni insieme è assemblato e fotografato capo per capo." },
      {
        label: "Consegna in 7 giorni",
        text: "Un solo pacco, un solo ordine: la silhouette completa, consegnata gratis in 7 giorni.",
      },
      { label: "Resi 14 giorni", text: "Dubbi sulla taglia? Cambiamo senza discutere." },
    ],

    looks: {
      eyebrow: "Collezione completa",
      title: "Otto silhouette, ognuna venduta come insieme",
      lede: "Scorri ogni look per vedere tutte le viste prima di scegliere la taglia.",
    },

    atelier: {
      eyebrow: "L'atelier",
      title: "Una silhouette è riuscita solo quando non si può più togliere nulla",
      lede: "Maison Flatlay non vende capi singoli: componiamo insiemi interi, dal sopra alle scarpe, e li documentiamo vista per vista perché nulla sia una sorpresa all'apertura del pacco.",
      steps: [
        { title: "Selezione", text: "Cerchiamo i capi uno a uno: materiali, tagli, patina, provenienza." },
        { title: "Messa in piano", text: "L'insieme è composto a terra finché le proporzioni non tornano." },
        { title: "Fotografia", text: "Sette viste per silhouette: insieme, dettagli, texture, accessori." },
        { title: "Spedizione", text: "Ogni capo è verificato, misurato, imballato e consegnato gratis in 7 giorni." },
      ],
      ctaTitle: "Pronto a scegliere la tua silhouette?",
      ctaButton: "Vedi la collezione",
      imageAlt: "Dettaglio della silhouette",
    },

    card: { meta: "Silhouette completa", buy: "Acquista →", altPrefix: "Look" },

    detail: {
      back: "← Collezione",
      silhouette: "Silhouette",
      sizeTop: "Taglia sopra",
      sizeBottom: "Taglia sotto",
      shoeSize: "Numero di scarpe",
      buyNow: "Acquista ora",
      addToCart: "Aggiungi al carrello",
      viewCart: "Vedi il carrello",
      pieces: "Capi inclusi",
      shipping: "Spedizione gratuita · Consegna in 7 giorni · Resi entro 14 giorni",
      related: "Altre silhouette",
      added: "Silhouette aggiunta al carrello",
      replaced: "Silhouette sostituita — una per ordine",
      oneMax: "Una silhouette per ordine",
    },

    cart: {
      emptyTitle: "Il tuo carrello è vuoto",
      emptyText: "Sfoglia la collezione e aggiungi una silhouette completa.",
      emptyCta: "Vedi la collezione",
      title: "Il tuo carrello",
      top: "Sopra",
      bottom: "Sotto",
      shoes: "Numero",
      remove: "Rimuovi",
      total: "Totale",
      shipping: "Spedizione gratuita · Consegna in 7 giorni · Resi entro 14 giorni",
      order: "Ordina",
      keepShopping: "Continua lo shopping",
    },

    notFound: {
      title: "Pagina non trovata",
      text: "Questa silhouette non esiste o è stata ritirata dalla collezione.",
      cta: "Vedi la collezione",
    },

    footer: {
      tagline: "Silhouette complete, fotografate in piano, composte capo per capo.",
      shop: "Negozio",
      collection: "Collezione",
      atelier: "Il nostro atelier",
      cart: "Carrello",
      service: "Servizio",
      serviceLines: [
        "Spedizione gratuita",
        "Consegna in 7 giorni",
        "Resi entro 14 giorni",
        "bonjour@maisonflatlay.fr",
      ],
      copy: "© 2026 Maison Flatlay",
    },
  },
};

/* Familles de couleurs */
const COLORS = {
  fr: { Neutres: "Neutres", Bleu: "Bleu", Vert: "Vert", Noir: "Noir", Camel: "Camel", Orange: "Orange", Rose: "Rose", Gris: "Gris", Rouge: "Rouge" },
  en: { Neutres: "Neutrals", Bleu: "Blue", Vert: "Green", Noir: "Black", Camel: "Camel", Orange: "Orange", Rose: "Pink", Gris: "Grey", Rouge: "Red" },
  es: { Neutres: "Neutros", Bleu: "Azul", Vert: "Verde", Noir: "Negro", Camel: "Camel", Orange: "Naranja", Rose: "Rosa", Gris: "Gris", Rouge: "Rojo" },
  de: { Neutres: "Neutral", Bleu: "Blau", Vert: "Grün", Noir: "Schwarz", Camel: "Camel", Orange: "Orange", Rose: "Rosa", Gris: "Grau", Rouge: "Rot" },
  it: { Neutres: "Neutri", Bleu: "Blu", Vert: "Verde", Noir: "Nero", Camel: "Cammello", Orange: "Arancione", Rose: "Rosa", Gris: "Grigio", Rouge: "Rosso" },
};

/* Devise et format de prix par langue */
const LOCALES = { fr: "fr-FR", en: "en-GB", es: "es-ES", de: "de-DE", it: "it-IT" };
