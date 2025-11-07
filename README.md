# Challenge - Inspection et Analyse d'un Repository GIT

## Consignes générales

Ce challenge a pour but d'évaluer votre capacité à **explorer, comprendre et analyser l'historique d'un projet GIT**.

### Règles

- **Aucune interface graphique n'est autorisée**, vous devez travailler **exclusivement en ligne de commande** (sauf pour le FORK depuis Github)
- **L'utilisation d'outils d'intelligence artificielle est strictement interdite.**
- Vous pouvez utiliser la documentation à l'adresse suivante: https://git-scm.com/book/fr/v2
- **Objectif : comprendre l'évolution du code et reconstituer les décisions prises.**

## Travail à effectuer

Le dépôt d'origine à utiliser est disponible à l'adresse suivante :
```bash
https://github.com/ETML-RRY/324_inspection_git.git
```

### Partie 1 - Préparation

1. Faites un *FORK* du dépôt sur votre compte GitHub (Attention il faut copier toutes les branches donc il faut **décocher** la case "Copy the main branch only" sur l'interface de Github)
2. Ajoutez votre enseignant comme collaborateur à votre dépôt forké.
3. Vous trouverez une réplique de ces instructions dans le fichier README.md de votre dépôt.
4. Répondez directement aux questions dans le fichier README.md qui est au format **Markdown**
5. Pour chaque points, veuillez noter la ou les commandes `git` utilisées vous permettant de répondre à la question.
6. Pour chaque partie, effectuez au minimum un commit et un push lorsque vous avez complété les réponses de la partie correspondante.

> Le format Markdown: [https://www.markdownguide.org/basic-syntax/](https://www.markdownguide.org/basic-syntax/)


### Partie 2 — Exploration de base

1. Combien de branches existent dans le dépôt ? Citez-les.
   ```sh
   # main
   # experiment/dark-mode
   # feature/header
   # feature/login
   # hotfix/typo
   ```  
2. Quels sont les **tags** disponibles ? A quoi correspondent-ils ?
   ```sh
   # v0.2
   # v0.1
   # correspondent aux versions du projet
   ```
3. Quelle est la **branche principale** du projet ?
   ```sh
   # main
   ```

### Partie 3 — Historique et commits

4. Quel est le message du **premier commit** du projet ? 
   ```sh
   # Initial commit: structure HTML/CSS/JS + README + docs
   ```
5. Trouvez le commit où une **clé API** a été ajoutée par erreur. Quel est son identifiant (hash court) ?  
   ```sh
   # bea2d
   ```
6. Quel commit a ensuite corrigé cette erreur ?  
   ```sh
   # 1b682
   ```
7. Trouvez le commit où le **titre de la page d'accueil** a été corrigé.  
   ```sh
   # 6317c
   ```
8. Quel est le message du commit qui a **ajouté le fichier `CHANGELOG.md`** et quelle commande avez-vous utilisé ?
   ```sh
   # docs: ajoute un changelog de base
   # git log
   ```

### Partie 4 — Branches et fusions

9. Quelles branches ont été fusionnées dans `main` ?
   ```sh
   # merge(feature/header): intègre la navigation
   # merge(hotfix/typo): corrige la typo sur main
   # merge(feature/login): intègre la page de connexion
   ```
10. Quelle branche **n'a pas été fusionnée** ? Pourquoi, selon vous ? 
   ```sh
   # experiment/dark-mode car c'est juste une experiment
   ```

### Partie 5 — Analyse du contenu

11. Quelle est la **différence principale** entre les fichiers `index.html` dans les versions `v0.1` et `v0.2` et quelle commande permet de le voir rapidement ?  
```sh
# git diff v0.1 v0.2
# dans v0.1 il est vide et dans v0.2 il contient:
   " <!-- NOTE HISTORIQUE: ancien slogan modifié plusieurs fois -->
   <h1>Bienvenue sur notre site Wolrd!</h1>
   <p id="tagline">Un site tout simple pour apprendre Git.</p>"
```
12. Que contient la branche `feature/login` ?  
   ```sh
   # README.md  config.js  docs/  index.html  login.html  script.js  style.css
   ```
13. Dans quelle branche a été ajouté le code pour le **mode sombre** ?  
   ```sh
   # dans experiment/dark-mode: experiment(dark-mode): ajoute styles et JS pour mode sombre (non mergé)
   ```
14. Quelle bonne pratique de sécurité est évoquée dans les commits du fichier `config.js` ?
   ```sh
   # utiliser des variables d'environnements
   ```

### Partie 6 — Réflexion

15. Pourquoi est-il important de **taguer** des versions dans un projet ?  
   ```sh
   # affin de pouvoir retourner à des version antérieures si besoin
   ```
16. Que peut-on déduire du style de travail de l'équipe à partir de cet historique GIT ?
   ```sh
   # ils sont orgaisé
   ```

Bonne chance, et surtout... **ne vous perdez pas dans le log !** 😉
