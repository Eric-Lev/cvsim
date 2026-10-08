# Site CVSim — mise en ligne sur GitHub Pages

## Contenu
- `index.html` : page anglaise (page d'accueil du site)
- `fr/index.html` : page française
- `assets/` : feuille de style, script, icône
- `images/` : illustrations

## Trois images à ajouter dans `images/`
Tant qu'elles manquent, le site affiche à leur place un cadre avec le nom attendu.
- `fig1-scan-rates.png` : Figure 1 de la plaquette (cinq vitesses + droites Ip = f(v^1/2))
- `fig2-stagnant-layer.png` : Figure 2 de la plaquette (couche stagnante, dérivées)
- `cvsim-window.png` : une capture de la fenêtre principale de CVSim

PNG, 1200 à 1600 px de large conviennent.

## Mise en ligne
1. Sur GitHub : **New repository**, nom `cvsim`, **Public**, puis *Create repository*.
2. *uploading an existing file* : glisser **le contenu** du dossier (pas le dossier lui-même), en gardant `fr/`, `assets/` et `images/`. *Commit changes*.
3. **Settings > Pages** : *Source* = *Deploy from a branch*, branche `main`, dossier `/ (root)`, *Save*.
4. Après une à deux minutes, le site est à l'adresse `https://<votre-compte>.github.io/cvsim/` (version française : `.../cvsim/fr/`).

Mise à jour : déposer le fichier modifié au même endroit (*Add file > Upload files*), le site se met à jour seul.
