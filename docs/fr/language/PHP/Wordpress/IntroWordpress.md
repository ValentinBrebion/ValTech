---
next: 
    text: 'Thème enfant'
    link: 'fr/language/PHP/Wordpress/Childrentheme'
prev: false
---
# 📜 Introduction à Wordpress
> Wordpress est un système de gestion de contenu ou autrement dit : `CMS`. Il a été créé en 2003 par un texan depuis un projet Corse et distribué par Automattic. Il est entièrement écrit en PHP/Mysql et il est capable, aujourd’hui, de gérer de gros sites internet. Selon w3tech, Wordpress occupait près de 63% des parts de marchés en 2023.

::: danger ⚠️ Attention
WordPress est disponible en deux versions : <a href="wordpress.com" target="_blank">WordPress.com</a>, qui est une plateforme d'hébergement gérée par Automattic (la société fondée par Matt Mullenweg), et <a href="wordpress.org" target="_blank">WordPress.org</a>, qui est la version auto-hébergée et personnalisable du logiciel
:::

## I. Que faire avec Wordpress ?
::: tip Wordpress
1. des blogs
2. des sites institutionnels
3. des sites multilangue
4. e-commerce (wooCommerce) et autre
5. des thèmes !
:::

## II. Découverte de l'administration de WordPress
### Accès à l’administration

```
URL : https://nom-domaine.ext/wp-admin
``` 

### Interface d’administration
<br>
<img src="/wordpress/tableau-de-bord-wordpress.webp" alt="tableau-de-bord-wordpress">

### Types de contenus : 
Wordpress permet aux utilisateurs de créer du contenu selon leurs besoins. Parmis les possibilités de contenus, on retrouve :
- Articles
- Catégories
- Étiquettes
- Commentaires
- Médias 
- Pages

### Accès à la démo de Gutenberg

<a href="https://fr.wordpress.org/gutenberg/" target="_blank">Accéder à la démo</a>

### Nouvel éditeur de contenu
#### Tutoriels et ressources pour Gutenberg

Organisation des contenus :
- Catégories 
- Étiquettes 
- Taxonomies

Les pages
::: details Modèle de page
Un Modèle de page WordPress (ou "page template" en anglais) est un fichier PHP utilisé dans un thème WordPress pour définir la mise en page et le style d'une page spécifique ou d'un groupe de pages. Contrairement aux articles, qui utilisent généralement un modèle unique, les pages dans WordPress peuvent utiliser des modèles personnalisés pour afficher le contenu de manière différente.
### Exemple: 
```php
<?php
/*
Template Name: Nom du Modèle
*/
```
:::
- Les médias

- Images, Vidéo, Son, PDF, etc.
- Éditeur d’images

- Fonctions de base
- Les thèmes <a href="Childrentheme"><Badge type="tip" text="Voir partie thème enfant" /></a>

- Gratuit, payant, personnalisation, thème enfant
- Les menus
::: details Les menus
Un Modèle de page WordPress (ou "page template" en anglais) est un fichier PHP utilisé dans un 
Les menus dans WordPress sont un élément clé de la navigation d'un site web, permettant aux utilisateurs d'accéder facilement aux différentes pages, catégories, liens, et autres contenus importants.
### Intégration: 
```php
//fichier functions.php
<?php
function ajouter_menu() {
    register_nav_menu('zeta_menu', 'Menu principal');
}
?>
```
*Le premier paramètre est le nom que vous avez donné au menu dans worpress et le deuxième paramètre est une description* <a href="https://capitainewp.io/formations/developper-theme-wordpress/menus-moteur-recherche/#:~:text=Déclarer%20un%20emplacement%20de%20menu,-On%20va%20maintenant&text=On%20vient%20de%20déclarer%20nos,l%27assigner%20à%20notre%20emplacement." target="_blank"><Badge type="tip" text="Voir plus d'information" /></a>
:::

:::details Les widgets
Les widgets WordPress sont de petits blocs de contenu ou de fonctionnalités que vous pouvez ajouter à diverses zones de votre site web, comme les barres latérales, le pied de page, ou d'autres zones désignées par votre thème. Ils permettent d'ajouter rapidement des éléments interactifs ou informatifs sans avoir besoin de coder.
Intégration :
```php
//fichier functions.php
add_action('wp_dashboard_setup','custom_dashboard');

function custom_dashboard() {
global $wp_meta_boxes;
wp_add_dashboard_widget('widget_id', 'Titre du
widget', 'custom_dashboard_help');
}
function custom_dashboard_help() {
echo '<p>contenu du widget</p>';
}
```
:::

## Ressources: 
Captain W : <u><a href="https://capitainewp.io" target="_blank"><Badge type="warning" text="Voir la ressource" /></a></u>