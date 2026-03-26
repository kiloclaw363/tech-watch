# Tech Watch 🦊

Site de veille technologique IT — alimenté par [Astro](https://astro.build).

## Stack

- **Framework :** Astro 5 (site statique)
- **Contenu :** Markdown (Astro Content Collections)
- **Hébergement :** GitHub Pages (gratuit)
- **Mise à jour :** GitHub Actions (fetch RSS automatique)

## Lancer en local

```bash
npm install
npm run dev
```

## Récupérer les flux RSS

```bash
npm run fetch-feeds
```

## Déployer

Push sur `main` → GitHub Actions build et déploie automatiquement sur GitHub Pages.

## Ajouter une source

Édite `scripts/fetch-feeds.mjs` et ajoute une entrée dans le tableau `FEEDS` :

```js
{ url: 'https://example.com/feed.xml', category: 'Cloud', source: 'Example Blog' },
```
