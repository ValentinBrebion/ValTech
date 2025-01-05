---
next: false
prev: 
    text: 'Introduction à Git'
    link: 'fr/language/git/git'
---

# Les Commandes de Git

## Setup et Initialisation de projet 📖
---
Initialiser le dossier vide <a href="https://git-scm.com/docs/git-init" target="_blank"><Badge type="tip" text="Documentation" /></a>
```sh
git init
```

Copier (Cloner) un projet github depuis un dossier local <a href="https://git-scm.com/docs/git-clone" target="_blank"><Badge type="tip" text="Documentation" /></a>
```sh
git clone https://github.com/NomDeLaPersonne/NomDuRepository.git
# ou
git clone git@github.com:NomDeLaPersonne/NomDuRepository.git
```

## Commandes de base 🧰

Pour ajouter les modifications réalisées dans un projet <a href="https://git-scm.com/docs/git-add" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git add *
```
Affiche quels fichiers ont été modifiés <a href="https://git-scm.com/docs/git-status" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git status
```

Affiche les changements entre les validations <a href="https://git-scm.com/docs/git-diff" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git diff
```

Commiter les modifications avec un message <a href="https://git-scm.com/docs/git-commit" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git commit -m "Votre message"
```

Restaurer les fichiers d'arborescence de travail <a href="https://git-scm.com/docs/git-restore" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git restore
```

Supprimer les fichiers de l'arborescence de travail et de l'index <a href="https://git-scm.com/docs/git-rm" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git rm
```

## Branche et Fusion 🔀

Liste, création ou suppression de branches <a href="https://git-scm.com/docs/git-branch" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git branch [options]
```

Changer de branche ou restaurer les fichiers d'arborescence de travail <a href="https://git-scm.com/docs/git-checkout" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git checkout [options]
```

Changer de branche <a href="https://git-scm.com/docs/git-switch" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git switch [options]
```

Fusion de deux branches<a href="https://git-scm.com/docs/git-merge" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git merge
```

::: details git merge exemple
Imaginons que les branches ``master`` et ``sujet`` existent et nous voulons fusionner la branche sujet à la branche master.

Tout d'abord nous nous plaçons sur la branche master :
```sh
git switch master
```

et ensuite nous mergeons la branche sujet à la branche master :

```sh
git merge sujet
```
:::

## Partages et modifications de projets 📢

Récupération modifications du dépôt distant et fusion automatiquement avec votre branche locale <a href="https://git-scm.com/docs/git-pull" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git pull <branche>
```

Envoie des modifications vers le dossier distant <a href="https://git-scm.com/docs/git-push" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git push
```

quand tu fais un commit et que par exemple tu veux changer de branche, ça va sortir le message `force checkout` mais comment retirer le commit
stash ? et bien avec cette commande : 

```sh
git reset --soft HEAD~1
```

Comment faire une rebase ?

```sh 
git checkout main
git pull
git checkout <nom-branche>
git rebase main
```