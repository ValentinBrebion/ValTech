---
next: 
    text: 'les workflows'
    link: 'fr/devOps/workFlow/WorkFlow'
prev: false
---

# Intégration continue

L'intégration continue (CI) est une pratique de développement logiciel qui vise à s'assurer que chaque modification apportée au code ne provoque pas de problèmes dans le projet. Voici une explication simplifiée des aspects mentionnés :

### Sécurité :

> - Objectif : Vérifier que le code ne contient pas de vulnérabilités de sécurité.
> - Comment : En utilisant des outils d'analyse de sécurité qui scannent le code pour détecter des failles potentielles, comme des injections SQL, des failles XSS, etc.

### Bonnes pratiques de codage :

> - Objectif : S'assurer que le code respecte des normes de qualité et de lisibilité.
> - Comment : En appliquant des règles de style de code (linters) et en vérifiant que le code est bien structuré et documenté.

### Analyse de code :

> - Objectif : Détecter des erreurs potentielles et améliorer la qualité du code.
> - Comment : En utilisant des outils d'analyse statique qui examinent le code sans l'exécuter, pour trouver des bugs, des inefficacités ou des violations de règles de codage.

### Automatisation de tâches :

> - Objectif : Gagner du temps et réduire les erreurs humaines en automatisant des processus répétitifs.
> - Comment : Par exemple, automatiser la compilation du code (build), la réduction de la taille des fichiers (minification), ou le déploiement sur un serveur.

### Respect des spécifications du projet :

> - Objectif : Vérifier que le code fonctionne comme prévu et répond aux exigences du projet.
> - Comment : En exécutant des tests :<br>
    - Tests unitaires : Vérifient que des parties individuelles du code (comme des fonctions ou des méthodes) fonctionnent correctement.<br>
    - Tests fonctionnels : Vérifient que le système dans son ensemble fonctionne comme attendu du point de vue de l'utilisateur final.


## Phpqa
On trouve sur github un <a href="https://github.com/jakzal/phpqa" target="_blank">phpqa</a> permettant de réaliser beaucoup de tests concernant les projets php.

Ce projet est une suite d'images docker contenant tous les outils préinstallés en fonction de la version de php à utiliser et de la distribution utilisée.

## Alias
Vous allez créer un alias pour vous simplifier la vie :
```
alias phpqa='docker run --init -it --rm -v "$(pwd):/project" -v "$(pwd)/tmp-phpqa:/tmp" -w /project jakzal/phpqa:php8.3-alpine'
```
:::tip Explications
Un alias est un raccourci. En tapant phpqa, c'est comme si vous tapiez la commande docker run ... en entier.

`--init` : permet de faire traverser les signaux et les processus entre le conteneur et l'hôte

`-it` : équivalent à -i (interactive) -t (tty) c'est-à-dire qu'il peut recevoir des entrées standards dans un pseudo-terminal

`--rm`: permet de supprimer le conteneur quand il est arrếté

`-v` : crée un volume entre votre dossier courant (pwd) et le dossier /project du conteneur

`-w` : définit le répertoire de travail du conteneur
:::

## Sécurité
Vous allez utiliser l'image docker pour vérifier que vos dépendances php ne contiennent pas de failles de sécurité.

```
phpqa local-php-security-checker  --path=./composer.lock
```

On pourrait également utiliser la commande symfony pour réaliser la même chose
```
symfony local:check:security
```
:::danger Failles détectées
Des alertes CVE apparaissent.

Corrigez ces failles en utilisant les commandes composer adéquates.
:::

## Règles de codage
Toujours avec la même image docker, vous allez utiliser les outils phpcs et phpstan

Phpcs pour Php Code Sniffer est un outil permettant de valider votre code en fonction des règles de codage <a href="https://www.php-fig.org/psr/" target="_blank" >PSR</a>. Vous allez donc valider le code à travers la norme PSR-12

```
phpqa phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src
```

:::danger Les espaces !!
Vous pouvez voir qu'en écrivant naturellement, on commet énormément d'erreurs d'écriture ne respectant pas les standards !
:::

Heureusement, des outils peuvent être utilisés pour corriger cela automatiquement. D'ailleurs phpcs vous propose d'utiliser phpcbf (Code Beautifier and Fixer). Lançons cet outil et relançons phpcs.

```
phpqa phpcbf -v --standard=PSR12 --ignore=./src/Kernel.php ./src
phpqa phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src
```

## Analyse static du code - phpstan
<a href="https://phpstan.org/" target="_blank" >Phpstan</a> est un outil permettant de faire de l'analyse static du code en vérifiant par exemple les types d'entrée et sortie des fonctions. Cela permet de détecter très tôt des erreurs dans le code.

La philosophie de phpstan est : "Trouvez des bugs sans écrire de tests !"

Il possède <a href="https://phpstan.org/user-guide/rule-levels" target="_blank" >10 niveaux de règles</a> allant de 0, la plus permissive au niveau 9 la plus stricte.

Pour un projet symfony, le bon réglage est le niveau 3.
```
phpqa phpstan analyse ./src --level 3
```

:::danger Erreur !
Corriger l'erreur et relancez le test.
:::

:::info laravelStan
Une version spécifique à Laravel est <a href="https://github.com/larastan/larastan" target="_blank" >disponible ici</a>
:::

## Vérification du twig
phpqa possède également un outil appelé twig-linter pour vérifier le code twig.

```
phpqa  twig-linter lint ./templates
```
:::danger Erreur !
Corriger l'erreur et relancez le test.
:::