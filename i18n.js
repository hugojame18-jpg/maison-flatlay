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

    meta: {
      title: "Maison Flatlay — Silhouettes complètes prêtes à porter",
      description: "93 silhouettes composées à plat. L'ensemble complet à 79,99 €, deux pièces à 49,99 €, une seule à 20 €. Livraison offerte en 7 jours, retours sous 14 jours.",
    },

    promo: {
      shipping: { title: "Livraison offerte", text: "Sur toutes les commandes, sans minimum d'achat." },
      delivery: { title: "Livré en 7 jours", text: "Expédié sous 48 h, chez vous en une semaine." },
      returns: { title: "Retours sous 14 jours", text: "Échange ou remboursement, sans discuter." },
    },

    home: {
      eyebrow: "Collection Automne — 93 silhouettes",
      title1: "Le look entier,",
      title2: "pas juste la pièce.",
      lede: "Chaque silhouette est composée à plat, testée, puis proposée complète : haut, bas, chaussures et accessoires. Vous choisissez une taille, nous envoyons l'ensemble.",
      ctaCollection: "Voir la collection",
      ctaAtelier: "L'atelier",
      featured: "En vedette",
      sectionTitle: "Les 93 silhouettes",
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
      title: "Quatre-vingt-treize silhouettes, en ensemble ou à la pièce",
      lede: "Choisissez votre silhouette, puis le haut, le bas, les chaussures — ou l'ensemble complet.",
    },

    atelier: {
      eyebrow: "L'atelier",
      title: "Une silhouette n'est réussie que lorsqu'on ne peut plus rien enlever",
      lede: "Maison Flatlay compose des ensembles entiers, du haut aux chaussures, et les documente pièce par pièce. Prenez la silhouette complète, ou seulement ce qui vous manque.",
      steps: [
        { title: "Sélection", text: "Nous chinons les pièces une à une : matières, coupes, patine, provenance." },
        { title: "Mise à plat", text: "L'ensemble est composé au sol jusqu'à ce que les proportions tombent juste." },
        { title: "Photographie", text: "Chaque silhouette est photographiée à plat : coupe, matières, accessoires." },
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
      selectPieces: "Personnalisez votre commande",
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

    meta: {
      title: "Maison Flatlay — Complete outfits, ready to wear",
      description: "93 silhouettes laid out flat. The full outfit at €79.99, two pieces at €49.99, a single piece at €20. Free shipping in 7 days, 14-day returns.",
    },

    promo: {
      shipping: { title: "Free shipping", text: "On every order, no minimum spend." },
      delivery: { title: "Delivered in 7 days", text: "Dispatched within 48 h, with you in a week." },
      returns: { title: "14-day returns", text: "Exchange or refund, no questions asked." },
    },

    home: {
      eyebrow: "Autumn Collection — 93 silhouettes",
      title1: "The whole look,",
      title2: "not just the piece.",
      lede: "Every silhouette is laid out flat, tested, then offered complete: top, bottom, shoes and accessories. You pick a size, we ship the entire outfit.",
      ctaCollection: "View the collection",
      ctaAtelier: "The atelier",
      featured: "Featured",
      sectionTitle: "The 93 silhouettes",
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
      title: "Ninety-three silhouettes, as a full set or by the piece",
      lede: "Pick your silhouette, then the top, the bottom, the shoes — or the complete outfit.",
    },

    atelier: {
      eyebrow: "The atelier",
      title: "A silhouette is right only when nothing more can be taken away",
      lede: "Maison Flatlay composes entire outfits, from top to shoes, and documents them piece by piece. Take the complete silhouette, or only what you are missing.",
      steps: [
        { title: "Selection", text: "We source each piece one by one: fabric, cut, patina, provenance." },
        { title: "Flat lay", text: "The outfit is laid out on the floor until the proportions fall into place." },
        { title: "Photography", text: "Each silhouette is shot flat: cut, materials, accessories." },
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
      selectPieces: "Customise your order",
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

    meta: {
      title: "Maison Flatlay — Siluetas completas listas para llevar",
      description: "93 siluetas compuestas en plano. El conjunto completo por 79,99 €, dos piezas por 49,99 €, una sola por 20 €. Envío gratis en 7 días, devoluciones en 14 días.",
    },

    promo: {
      shipping: { title: "Envío gratuito", text: "En todos los pedidos, sin importe mínimo." },
      delivery: { title: "Entrega en 7 días", text: "Enviado en 48 h, en tu casa en una semana." },
      returns: { title: "Devoluciones en 14 días", text: "Cambio o reembolso, sin preguntas." },
    },

    home: {
      eyebrow: "Colección Otoño — 93 siluetas",
      title1: "El look entero,",
      title2: "no solo la prenda.",
      lede: "Cada silueta se compone en plano, se prueba y luego se ofrece completa: parte de arriba, parte de abajo, calzado y accesorios. Tú eliges una talla, nosotros enviamos el conjunto.",
      ctaCollection: "Ver la colección",
      ctaAtelier: "El taller",
      featured: "Destacado",
      sectionTitle: "Las 93 siluetas",
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
      title: "Noventa y tres siluetas, en conjunto o por piezas",
      lede: "Elige tu silueta y luego la parte de arriba, la de abajo, el calzado — o el conjunto completo.",
    },

    atelier: {
      eyebrow: "El taller",
      title: "Una silueta solo está lograda cuando ya no se le puede quitar nada",
      lede: "Maison Flatlay compone conjuntos enteros, de la parte de arriba al calzado, y los documenta pieza por pieza. Llévate la silueta completa, o solo lo que te falte.",
      steps: [
        { title: "Selección", text: "Buscamos las prendas una a una: materiales, cortes, pátina, procedencia." },
        { title: "Puesta en plano", text: "El conjunto se compone en el suelo hasta que las proporciones encajan." },
        { title: "Fotografía", text: "Cada silueta se fotografía en plano: corte, materiales, accesorios." },
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
      selectPieces: "Personaliza tu pedido",
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

    meta: {
      title: "Maison Flatlay — Komplette Outfits, sofort tragbar",
      description: "93 flach gelegte Silhouetten. Das komplette Outfit für 79,99 €, zwei Teile für 49,99 €, ein Einzelteil für 20 €. Kostenloser Versand in 7 Tagen, 14 Tage Rückgabe.",
    },

    promo: {
      shipping: { title: "Kostenloser Versand", text: "Bei jeder Bestellung, ohne Mindestbestellwert." },
      delivery: { title: "Lieferung in 7 Tagen", text: "Versand innerhalb von 48 h, in einer Woche bei Ihnen." },
      returns: { title: "14 Tage Rückgabe", text: "Umtausch oder Erstattung, ohne Diskussion." },
    },

    home: {
      eyebrow: "Herbstkollektion — 93 Silhouetten",
      title1: "Der ganze Look,",
      title2: "nicht nur das Teil.",
      lede: "Jede Silhouette wird flach gelegt, geprüft und dann komplett angeboten: Oberteil, Hose, Schuhe und Accessoires. Sie wählen eine Größe, wir schicken das gesamte Outfit.",
      ctaCollection: "Kollektion ansehen",
      ctaAtelier: "Das Atelier",
      featured: "Im Fokus",
      sectionTitle: "Die 93 Silhouetten",
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
      title: "Dreiundneunzig Silhouetten, komplett oder einzeln",
      lede: "Wählen Sie Ihre Silhouette, dann Oberteil, Hose, Schuhe — oder das komplette Outfit.",
    },

    atelier: {
      eyebrow: "Das Atelier",
      title: "Eine Silhouette ist erst gelungen, wenn man nichts mehr weglassen kann",
      lede: "Maison Flatlay stellt ganze Outfits zusammen, vom Oberteil bis zu den Schuhen, und dokumentiert sie Stück für Stück. Nehmen Sie die komplette Silhouette oder nur das, was Ihnen fehlt.",
      steps: [
        { title: "Auswahl", text: "Wir suchen jedes Teil einzeln aus: Material, Schnitt, Patina, Herkunft." },
        { title: "Flatlay", text: "Das Outfit wird am Boden gelegt, bis die Proportionen stimmen." },
        { title: "Fotografie", text: "Jede Silhouette wird flach fotografiert: Schnitt, Materialien, Accessoires." },
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
      selectPieces: "Bestellung anpassen",
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

    meta: {
      title: "Maison Flatlay — Silhouette complete, pronte da indossare",
      description: "93 silhouette composte in piano. L'insieme completo a 79,99 €, due capi a 49,99 €, un solo capo a 20 €. Spedizione gratuita in 7 giorni, resi entro 14 giorni.",
    },

    promo: {
      shipping: { title: "Spedizione gratuita", text: "Su tutti gli ordini, senza minimo di spesa." },
      delivery: { title: "Consegna in 7 giorni", text: "Spedito entro 48 h, da te in una settimana." },
      returns: { title: "Resi entro 14 giorni", text: "Cambio o rimborso, senza discutere." },
    },

    home: {
      eyebrow: "Collezione Autunno — 93 silhouette",
      title1: "Il look intero,",
      title2: "non solo il capo.",
      lede: "Ogni silhouette viene composta in piano, provata e poi proposta completa: sopra, sotto, scarpe e accessori. Tu scegli una taglia, noi spediamo l'insieme.",
      ctaCollection: "Vedi la collezione",
      ctaAtelier: "L'atelier",
      featured: "In evidenza",
      sectionTitle: "Le 93 silhouette",
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
      title: "Novantatré silhouette, complete o singole",
      lede: "Scegli la tua silhouette, poi il sopra, il sotto, le scarpe — o l'insieme completo.",
    },

    atelier: {
      eyebrow: "L'atelier",
      title: "Una silhouette è riuscita solo quando non si può più togliere nulla",
      lede: "Maison Flatlay compone insiemi interi, dal sopra alle scarpe, e li documenta capo per capo. Prendi la silhouette completa, o solo ciò che ti manca.",
      steps: [
        { title: "Selezione", text: "Cerchiamo i capi uno a uno: materiali, tagli, patina, provenienza." },
        { title: "Messa in piano", text: "L'insieme è composto a terra finché le proporzioni non tornano." },
        { title: "Fotografia", text: "Ogni silhouette è fotografata in piano: taglio, materiali, accessori." },
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
      selectPieces: "Personalizza il tuo ordine",
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
