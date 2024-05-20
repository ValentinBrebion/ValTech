---
next: false
prev: 
    text: 'Histoire de Symfony'
    link: 'language/PHP/Symfony/HistoireSymfony'
---

# Installation d'un projet Symfony

C'est bien beau d'apprendre l'histoire de Symfony mais comment on créer un projet ? et bien t'a deux solutions soit tu vas [voir la doc](https://symfony.com/doc/current/setup.html#creating-symfony-applications) soit tu es un giga beau gosse et tu suis mon tutoriel...

## Création d'un projet Symfony
Si tu as suivi les étapes d'avant normalement tu devrais être apte à créer et utiliser un projet Symfony.

```php
composer create-project symfony/skeleton:"7.0.*" my_project_directory
```

vous constaterez que vous n'avez pas grand chose mais c'est ce `pas grand chose` qui fait tout ;)
mais nous on veut s'amuser alors passons à la suite !

## Ajout des composants supplémentaires
C'est bien beau mais peut-on customiser notre projet ? la réponse est oui ! Vous pouvez installer des composants supplémentaires à votre projet :

```php exemples de composants
composer require --dev profiler maker
// et
composer require twig form validator orm
```

## Moteur de rendu : Twig <a target="_blank" href="https://twig.symfony.com/"><Badge type="tip" text="Documentation" /></a>
Une fois que vous avez éxecuté la commande `composer require twig`, un dossier "template" apparaitra dans votre projet et vous pourrez mettre en forme vos données.

### La syntaxe :
Faire un appel variable : 
```js
{{ ... }} /*Appel et affichage d'une variable*/
```

Commentaires :
```js
{# ... #} /*Commentaires*/
```

Rendu conditionnel
```js
{% ... %} /*if*/
```