# Portfolio — Etienne Pouille

Portfolio personnel d'Etienne Pouille, étudiant en 3ème année à EPITECH Lille,
orienté AI Engineer, MLOps, Edge AI et DevOps.

**En ligne :** [etienne-pouille.work](https://etienne-pouille.work)

## Stack

- [React 19](https://react.dev) + [Vite 6](https://vite.dev)
- [Framer Motion](https://motion.dev) pour les animations
- CSS natif (variables CSS, design « Bento Grid »), sans framework CSS
- ESLint

## Démarrage

Prérequis : Node.js 18 ou plus récent.

```bash
npm install
npm run dev       # serveur de développement
npm run build     # build de production dans dist/
npm run preview   # prévisualise le build
npm run lint      # vérifie le code avec ESLint
```

## Structure

```
├── index.html              # SEO : title, meta, Open Graph, Twitter Card, JSON-LD
├── public/                 # Fichiers servis tels quels
│   ├── favicon.svg
│   ├── og-image.svg        # Source de l'image de partage
│   ├── og-image.png        # Image de partage 1200×630
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── data/portfolio.js   # Source unique de tout le contenu du site
    ├── assets/             # CV, logos, drapeaux, images de projets
    ├── Components/         # Une section = un dossier (.jsx + .css)
    │   ├── Profil/         # Hero : bio, boutons, pastille stage
    │   ├── Stage/          # Recherche de stage
    │   ├── Parcours/       # Formation et expériences
    │   ├── About/          # Compétences, soft skills, langues
    │   ├── Projects/       # Projets principaux, autres projets, « Prochainement »
    │   ├── Contacts/
    │   └── Navbar/         # Barre latérale
    ├── App.jsx
    ├── main.jsx
    └── index.css           # Variables CSS (thèmes sombre et clair), styles globaux
```

## Mettre à jour le contenu

Tout le contenu se modifie dans `src/data/portfolio.js` :

| Export | Contenu |
| --- | --- |
| `profileData` | Nom, sous-titre, bio, centres d'intérêt, liens, CV |
| `stageAvailability` | Dates, région et télétravail du stage (repris par la carte Stage et la pastille du hero) |
| `stagesData` | Carte de recherche de stage |
| `parcoursData` | Formation et expériences |
| `skillLevels`, `skillsData` | Compétences par catégorie avec niveau (`maitrise`, `pratique`, `apprentissage`), soft skills, langues |
| `projectsData` | Projets ; `featured: true` les place dans « Projets principaux » |
| `roadmapData` | Liste « Prochainement » |
| `contactData` | Coordonnées de la section Contact |

Le CV est importé depuis `src/assets/CV/CV_Etienne_POUILLE.pdf` : remplacer ce
fichier en gardant le même nom suffit.

Si le titre ou la description du site changent, penser à mettre à jour
`index.html` (meta, Open Graph, JSON-LD) et `public/og-image.svg` / `og-image.png`.

## Palette

| Couleur | Hex | Variable CSS | Rôle |
| --- | --- | --- | --- |
| Gris Perle | `#F1F1F1` | `--pearl` | Texte sur fond sombre, fond en thème clair |
| Vert Sauge | `#6B967E` | `--accent` | Boutons, liens, titres |
| Vert Forêt | `#4A6958` | `--forest` | Sous-titres, éléments de design |
| Ardoise Foncé | `#435146` | `--slate` | Cartes, surfaces |
| Nuit Verte | `#1B2922` | `--night` | Fond principal en thème sombre |
| Anthracite | `#1C1C1C` | `--anthracite` | Fond le plus sombre (`--bg-darkest`), texte des boutons principaux |

## Licence

Tous droits réservés — voir [LICENCE.md](./LICENCE.md).
