---
next: 
    text: 'SQL'
    link: 'fr/language/sql/SQL'
prev: 
    text: 'Introduction'
    link: 'fr/language/PHP/Wordpress/IntroWordpress'
---
# Comment faire un thème Wordpress

### <u>Pré-requis</u>

- le fichier `style.css` et vous pouvez coller ce texte en y renseignant les informations du projet 
```bash
/*
Theme Name: Le nom de votre thème
Author: ValTech
Author URI: https://valtech.ovh
Description: Mon premier thème…
*/
```
- <u>screenshot.png</u> pour illustrer le thème. Lorsque vous vous rendrez sur la partie thème de votre Wordpress vous verrez des thèmes pré-installés. Le screenshot sera l'image qui illustrera votre thème.
- <u>index.php</u> C’est le gabarit par défaut, il sera utilisé par wordpress si aucun autre fichier n’est présent
::: details <u>quelques gabarits pour alimenter les pages Wordpress</u>
- single.php (détail d'un article)
- page.php (détail d'une page)
- archive.php (liste d'articles)
- front-page.php (page d'accueil)
- 404.php (page contenu introuvable)
- search.php (liste de recherche)
:::
- <u>functions.php</u>
::: details <u>Que peut contenir le fichier functions.php ?</u>
- Emplacement de menu
- Zone de widget
- Shortcode
- ajout des fichiers js ou css externes
:::

## Fonctions PHP Wordpress
### <u>Les templates Tags</u>
Ce sont des petits morceaux de code PHP utilisés pour afficher des informations ou du contenu spécifique sur le site. Ils permettent de récupérer et d'afficher des données dynamiquement depuis la base de données Wordpress.
- 1.Afficher le titre de l'article ou de la page : 
```php
<?php the_title() ?>
```
- 2. Afficher le contenu de l'article ou de la page : 
```php
<?php the_content() ?>
```
- 3. Afficher l'auteur de l'article ou de la page :
```php
<?php the_author() ?>
```
::: tip condition
Les template tags peuvent être utiliser pour vérifier une condition !
```php
<?php if ( in_category( 'nom-de-la-categorie' ) ) : ?>
    <!-- Le code à exécuter si l'article est dans la catégorie -->
    <p>Cet article est dans la catégorie "nom-de-la-categorie".</p>
<?php else : ?>
    <!-- Le code à exécuter si l'article n'est pas dans la catégorie -->
    <p>Cet article n'est pas dans la catégorie "nom-de-la-categorie".</p>
<?php endif; ?>
```
:::
### <u>Structure de fichier</u>
Pour structurer un site web WordPress de manière modulaire et réutilisable, on utilise généralement les étapes suivantes :

::: warning <u>Isolation de l'en-tête et du pied de page :</u>
L'en-tête du site est isolé dans un fichier nommé `header.php`.<br>
Le pied de page du site est isolé dans un fichier nommé `footer.php`.
:::
### <u>Inclusion de fichier</u>
Lorsque vous créez un site WordPress, il y a souvent des parties de code qui se répètent sur plusieurs pages, comme un fil d'Ariane, une barre latérale, ou le contenu d'articles. Plutôt que de répéter ce code sur chaque page, vous pouvez le placer dans un fichier séparé et l'inclure là où vous en avez besoin.

### Comment faire l'inclusion ?
Au lieu d'utiliser la fonction include de PHP, vous devez utiliser une fonction spéciale de WordPress appelée `get_template_part()` pour inclure votre fichier. Si vous utilisez include, cela pourrait rendre difficile la personnalisation du thème avec un thème enfant.

### Exemple d'utilisation :
Supposons que vous ayez un fichier nommé mon-template.php contenant le code du fil d'Ariane.
Pour l'inclure dans votre thème WordPress, vous feriez comme suit :

```php
<?php
get_template_part( 'mon-template' );
?>
```
Cette ligne de code va chercher le fichier `mon-template.php` dans le répertoire de votre thème et l'inclut à l'endroit où vous avez placé cette ligne de code.

### <u>La boucle de rendu</u>
La boucle de rendu est un concept central dans WordPress. Elle est utilisée pour afficher les articles, les pages et d'autres types de contenus personnalisés sur un site WordPress.

### Code pour afficher des articles : 
```php
<?php
if (have_posts()) :
    while (have_posts()) : the_post();
        ?>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <?php
        the_post_thumbnail();
        the_excerpt();
    endwhile;
else :
    echo '<p>Aucun article trouvé.</p>';
endif;
?>
```
### Code pour afficher des pages : 
```php
<?php
$args = array(
    'post_type' => 'page', // Afficher les pages
    'posts_per_page' => -1 // Nombre de pages à afficher (-1 pour afficher toutes les pages)
);

$pages_query = new WP_Query($args);

if ($pages_query->have_posts()) :
    while ($pages_query->have_posts()) : $pages_query->the_post();
        ?>
        <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
        <?php
        the_post_thumbnail();
        the_excerpt();
    endwhile;
else :
    echo '<p>Aucune page trouvée.</p>';
endif;

// Réinitialiser les données de la requête principale
wp_reset_postdata();
?>
```

::: danger Réinitialiser les données de la requête principale
<p class="color-danger">Après avoir utilisé WP_Query, il est important de réinitialiser les données de la requête principale avec wp_reset_postdata() pour éviter les problèmes potentiels avec d'autres boucles de WordPress sur la même page.</p>
:::

### LES TEMPLATES DE PAGE
Lors de la création d'un site WordPress, il est souvent nécessaire de créer des gabarits HTML spécifiques pour certaines pages, comme la page de contact ou la page d'accueil.

::: warning Première (mauvaise) solution : Utiliser la hiérarchie des modèles
<p>Comment ça fonctionne ?</p>
Si vous avez une page avec un identifiant spécifique, comme l'identifiant 5, vous pouvez créer un fichier de gabarit spécifique pour cette page. Par exemple, vous pouvez créer un fichier page-5.php ou page-contact.php (en utilisant le slug) pour cette page.

Exemple pratique :
<i>Si votre page a l'identifiant 5, vous créez un fichier page-5.php avec le code suivant :</i>

```php
<?php get_header(); ?>

<!-- Votre contenu spécifique à la page 5 -->

<?php get_footer(); ?>
```
:::

### Comment trouver le slug ou l'ID d'un contenu sur WordPress ?
Le slug : Le slug est une partie de l'URL qui identifie une page de manière unique. Par exemple, pour le slug qui-sommes-nous, l'URL pourrait ressembler à `https://votresite.com/qui-sommes-nous.`

L'identifiant (ID) : L'identifiant est un numéro unique attribué à chaque contenu dans WordPress. Pour trouver l'identifiant d'une page, vous pouvez aller dans l'administration WordPress, cliquer sur "Pages", puis survoler la page pour voir l'ID dans l'URL ou dans le lien de la page.

Dans cet exemple, le slug est qui-sommes-nous et l'identifiant est 52.

Pourquoi utiliser la hiérarchie des modèles dans ce cas est une mauvaise solution ?
- Non réutilisable :

>Le gabarit créé ne peut s'appliquer qu'à une seule page. Si vous avez d'autres pages avec des besoins similaires, vous devrez recopier le gabarit pour chaque page ou utiliser des includes.
- Problème de maintenance :

>Si l'ID de votre page change (par exemple, en raison d'une suppression, d'une traduction, etc.), le gabarit ne sera plus associé à la bonne page, ce qui peut entraîner des problèmes d'affichage.
::: tip La seconde (bonne) solution : Utiliser les modèles de pages
La meilleure pratique pour créer des gabarits de page personnalisés dans WordPress est d'utiliser les modèles de pages.

Comment créer un modèle de page ?
Créez un nouveau fichier dans votre thème, par exemple template-contact.php.

Ajoutez le code suivant en haut du fichier pour définir le modèle :
```php
<?php
/*
Template Name: Modèle Contact
*/
?>

<?php get_header(); ?>

<!-- Votre contenu spécifique à la page de contact -->

<?php get_footer(); ?>
```
:::
Dans cet exemple, le fichier template-contact.php est créé pour servir de gabarit à la page de contact. Le code Template Name: Modèle Contact définit le nom du modèle que vous pourrez sélectionner dans l'éditeur de page WordPress.

## Les hooks
Les hooks et les filtres sont des mécanismes puissants de WordPress qui permettent de modifier et d'étendre le comportement standard de WordPress sans avoir à modifier le code principal du cœur. Les filtres, en particulier, permettent de modifier le résultat d'une fonction ou d'une variable avant qu'elle ne soit renvoyée ou utilisée.

1. Appeler un filtre :
Lorsque vous utilisez une fonction qui est associée à un filtre, WordPress renvoie le résultat à travers le filtre avant de le retourner à l'appelant.

Exemple :

```php
$title = 'Titre original';
$id = 1;

$new_title = apply_filters('the_title', $title, $id);

echo $new_title;  // Affiche le titre modifié par le filtre
```
2. Brancher un filtre :
Vous pouvez ajouter votre propre fonction de filtrage en utilisant add_filter() pour modifier le résultat d'une fonction ou d'une variable spécifique.

Exemple de fonction de filtrage pour tronquer un titre trop long :
```php
function truncate_long_title($title, $id) {
    if (strlen($title) > 10) {  // Si le titre est plus long que 10 caractères
        $title = substr($title, 0, 10) . '...';  // Tronquer le titre et ajouter des points de suspension
    }
    return $title;
}

add_filter('the_title', 'truncate_long_title', 10, 2);
```
Dans cet exemple :

>- `the_title` est le nom du filtre auquel vous vous connectez.
>- `truncate_long_title` est le nom de la fonction de filtrage que vous avez créée.
>- `10` est la priorité du filtre (plus le nombre est élevé, plus le filtre s'exécute tardivement).
>- `2` est le nombre d'arguments que la fonction de filtrage attend.

## Les hooks actions dans WordPress
Un hook action vous permet d'exécuter des actions spécifiques à des moments précis dans le cycle de vie de WordPress sans avoir à modifier le cœur du système. En d'autres termes, cela vous permet d'ajouter des fonctionnalités ou de modifier le comportement de WordPress sans toucher au code source principal.

## Qu'est-ce qu'une action ?
Une action est une fonction qui est déclenchée lorsque certains événements se produisent dans WordPress.

Exemple avec save_post
L'action `save_post` est déclenchée chaque fois qu'un article est sauvegardé.

```php
add_action('save_post', 'ma_fonction', 20);
```
>- `add_action` : c'est la fonction pour attacher une action à un hook.
>- `save_post` : c'est le nom de l'action (l'événement) auquel vous vous connectez.
>- `ma_fonction` : c'est le nom de la fonction que vous voulez exécuter lorsque l'action est déclenchée.
>- `20` : c'est la priorité de l'action (plus le nombre est élevé, plus l'action s'exécute tardivement).

## Comment utiliser `do_action()` ?
La fonction do_action() est utilisée pour déclencher manuellement un hook action.

```php
do_action('mon_evenement', $arg1, $arg2);
```
>- `'mon_evenement'` : c'est le nom de l'action (l'événement) que vous voulez déclencher.
>- `$arg1, $arg2` : ce sont les arguments que vous pouvez passer aux fonctions qui sont connectées à cet événement.

Exemple simple :
```php
// Fonction à exécuter lors de l'action 'mon_evenement'
function ma_fonction_action($arg1, $arg2) {
    // Votre code ici
    echo "Argument 1 : " . $arg1;
    echo "Argument 2 : " . $arg2;
}

// Attacher la fonction à l'action 'mon_evenement'
add_action('mon_evenement', 'ma_fonction_action', 10, 2);

// Déclencher l'action 'mon_evenement' avec des arguments
do_action('mon_evenement', 'Valeur 1', 'Valeur 2');
```

## LES FONCTIONS FRÉQUENTES
Créer l’emplacement de menu, dans functions.php :
```php
add_action('init', 'ajouter_menu');
function ajouter_menu() {
register_nav_menu('main_menu', 'Menu principal');
}
```

Afficher l’emplacement de menu dans votre theme (ex: header.php) :
```php
wp_nav_menu(
array('theme_location' => 'main_menu')
)
```

## INCLURE UN FICHIER CSS OU UN JS
L'inclusion de fichiers CSS ou JavaScript dans un thème WordPress est une opération courante, notamment pour ajouter des fonctionnalités avancées ou pour personnaliser l'apparence de votre site. Voici deux méthodes pour le faire correctement :

### Méthode 1 : Utilisation de wp_enqueue_scripts
Cette méthode est recommandée car elle est conforme aux meilleures pratiques de WordPress.

Inclure le fichier CSS et JS dans functions.php
```php 
function wpdocs_theme_name_scripts() {
    // Inclure le fichier CSS
    wp_enqueue_style('style-name', get_template_directory_uri() . '/css/example.css');

    // Inclure le fichier JS
    wp_enqueue_script('script-name', get_template_directory_uri() . '/js/example.js', array(), '1.0.0', true);
}

add_action('wp_enqueue_scripts', 'wpdocs_theme_name_scripts');
```

### Méthode 2 : Utilisation de wp_head et wp_footer (Solution alternative)
Depuis la version 5.7 de WordPress, vous pouvez également utiliser cette méthode.

Inclure le fichier JS dans functions.php 
```php
add_action( 'wp_head', 'wpdd_load_scripts' );
function wpdd_load_scripts() {
    wp_print_script_tag(
        array(
        'id' => 'swiffy-slider',
        'src' => 'swiffy-slider.min.js',
        'defer' => true
        )
    );
}
```
Inclure `wp_head()` dans header.php
Ajoutez cette ligne juste avant la balise de fermeture `</head>`.

```php
<?php 
 wp_head(); ?>
</head>
```
Inclure `wp_footer()` dans footer.php
Ajoutez cette ligne juste avant la balise de fermeture `</body>`.

```php
<?php wp_footer(); ?>
</body>
```