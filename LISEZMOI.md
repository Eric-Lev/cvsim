# Site CVSim — mise en ligne sur GitHub Pages

## Contenu
- `index.html` : page anglaise (page d'accueil du site)
- `fr/index.html` : page française
- `assets/` : feuille de style, polices, script, icône
- `docs/` : licence et plaquettes (PDF)
- `images/` : illustrations

## Ce que le site contient de lui-même
- `assets/fonts.css` et `assets/fonts/` : les deux polices (Source Sans 3, Source Serif 4, licence SIL OFL 1.1), servies par le site : aucune requête vers Google Fonts.
- `docs/` : la licence d'utilisation (CVSim_Licence.pdf) et les plaquettes FR/EN, servies par le site.
- Rubrique « Données » et mentions légales (éditeurs, hébergeur) en bas de page.

## À remplacer avant publication
- `docs/CVSim_Licence.pdf` : la version validée par les tutelles (celle-ci porte « PROJET »).
- Les mentions de copyright, si les tutelles désignent d'autres titulaires.

## Mise en ligne
1. Sur GitHub : **New repository**, nom `cvsim`, **Public**, puis *Create repository*.
2. *uploading an existing file* : glisser **le contenu** du dossier (pas le dossier lui-même), en gardant `fr/`, `assets/`, `docs/` et `images/`. *Commit changes*.
3. **Settings > Pages** : *Source* = *Deploy from a branch*, branche `main`, dossier `/ (root)`, *Save*.
4. Après une à deux minutes, le site est à l'adresse `https://<votre-compte>.github.io/cvsim/` (version française : `.../cvsim/fr/`).

Mise à jour : déposer le fichier modifié au même endroit (*Add file > Upload files*), le site se met à jour seul.
