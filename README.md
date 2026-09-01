# Maison Flatlay — version locale

Reproduction statique du site Lovable `all-your-wants.lovable.app`, sans dépendance ni abonnement.
Tout est en HTML/CSS/JS pur : aucun build, aucune installation de paquets.

## Lancer le site

```bash
node server.js
```

Puis ouvrir http://localhost:5173

(Ouvrir `index.html` directement en double-clic fonctionne aussi, mais un serveur local
évite les restrictions du navigateur sur les fichiers `file://`.)

## Fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure de la page (barre d'annonce, en-tête, pied de page, conteneur) |
| `styles.css` | Tout le style, repris des variables de design du site d'origine |
| `data.js` | Les 64 silhouettes : nom, slug, prix, couleur, description, pièces, image |
| `i18n.js` | Textes de l'interface en 5 langues + couleurs + formats de prix |
| `i18n-catalog*.js` | Traductions du catalogue (descriptions et pièces) : EN, ES, DE, IT |
| `app.js` | Routeur par ancre (`#/`) + rendu des pages + panier + détection de langue |
| `images/` | Les 95 photos du pack, renommées pour correspondre aux références |
| `server.js` | Serveur statique local minimal |
| `assets_src/` | Le pack photo d'origine décompressé — supprimable (les images sont copiées dans `images/`) |

## Pages

- `#/` — accueil (hero, grille complète, arguments)
- `#/looks` — collection complète
- `#/looks/<slug>` — fiche d'une silhouette (tailles, pièces incluses, autres silhouettes)
- `#/atelier` — page atelier
- `#/panier` — panier

## Langues

Le site s'affiche en **français, anglais, espagnol, allemand ou italien**. Tout est traduit :
menus, pages, boutons, messages de livraison, mais aussi les 64 descriptions produit et les
187 pièces incluses. Les noms de silhouettes (Ivoire Cavalier, Noir Absolu…) restent en
français, comme le nom d'une marque de mode.

La langue est choisie automatiquement, dans cet ordre :

1. la langue enregistrée si le visiteur en a déjà choisi une (`localStorage`) ;
2. la langue du navigateur (`fr`, `en`, `es`, `de`, `it`) ;
3. le pays présent dans sa locale — un visiteur en `en-FR` obtient le français ;
4. son fuseau horaire (`Europe/Madrid` → espagnol, `Europe/Rome` → italien…) ;
5. l'anglais par défaut pour le reste du monde.

Le sélecteur en haut à droite permet de forcer une langue ; le choix est mémorisé.

Pour ajouter une langue : ajouter un bloc dans `i18n.js` (interface + couleurs + locale de
prix) et un fichier `i18n-catalog-xx.js` sur le modèle des existants, puis l'appeler dans
`index.html`. Une traduction manquante retombe automatiquement sur le français.

## Livraison

La promesse commerciale est : **livraison offerte · livré en 7 jours · retours sous 14 jours**.

Elle apparaît à cinq endroits, du plus visible au plus discret :

1. **barre d'annonce verte** en haut de toutes les pages, avec les trois arguments ;
2. **bandeau de réassurance** (icône + titre + phrase) juste sous le hero de l'accueil,
   sur fond sable pleine largeur ;
3. le même bandeau **en haut de la page Collection**, encadré de filets ;
4. un **encadré sur chaque fiche produit**, placé au-dessus du choix des tailles pour être
   vu avant l'achat ;
5. un **encadré dans le panier** (plein comme vide), juste avant le bouton de commande.

Le bandeau est un seul composant, `trustBar()` dans `app.js` : les textes viennent de la
clé `promo` de chaque langue dans `i18n.js`, donc une modification se répercute partout.

## Différences avec l'original

- Le routeur utilise des ancres (`#/looks/...`) au lieu de vraies URL, pour que le site
  fonctionne sur n'importe quel hébergement statique sans configuration de réécriture.
- Le panier est fonctionnel et persiste dans le `localStorage` du navigateur
  (sur l'original, il restait toujours à 0).
- Le site est multilingue et adapte sa langue au visiteur (l'original était en français seul).
- La livraison est annoncée offerte et en 7 jours, avec retours sous 14 jours (l'original
  disait « offerte dès 300 € », « expédition sous 48 h » et « retours sous 30 jours »).
- Le badge « Edit with Lovable » a été retiré.
- Les liens « Acheter » pointent vers la même URL d'affiliation que l'original.

## Héberger en ligne

Le dossier est entièrement statique : il suffit de déposer `index.html`, `styles.css`,
`data.js`, `i18n.js`, les `i18n-catalog*.js`, `app.js` et `images/` sur n'importe quel hébergeur gratuit
(Netlify, Cloudflare Pages, GitHub Pages, Vercel). `server.js`, `assets_src/` et ce README
ne sont pas nécessaires en production.
