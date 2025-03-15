---
next: 
    text: 'Child Theme'
    link: 'en/language/PHP/Wordpress/ChildTheme'
prev: false
---
# 📜 Introduction to WordPress
> WordPress is a content management system, or `CMS`. It was created in 2003 by a Texan from a Corsican project and distributed by Automattic. It is entirely written in PHP/MySQL and is capable today of managing large websites. According to w3tech, WordPress held nearly 63% of market share in 2023.

::: danger ⚠️ Warning
WordPress is available in two versions: <a href="wordpress.com" target="_blank">WordPress.com</a>, which is a hosting platform managed by Automattic (the company founded by Matt Mullenweg), and <a href="wordpress.org" target="_blank">WordPress.org</a>, which is the self-hosted and customizable version of the software
:::

## I. What can you do with WordPress?
::: tip WordPress
1. blogs
2. institutional websites
3. multilingual sites
4. e-commerce (WooCommerce) and more
5. themes!
:::

## II. Discovering WordPress Administration
### Accessing the Administration

```
URL: https://domain-name.ext/wp-admin
```

### Administration Interface
<br>
<img src="/wordpress/tableau-de-bord-wordpress.webp" alt="wordpress-dashboard">

### Content Types:
WordPress allows users to create content according to their needs. Among the content possibilities, we find:
- Posts
- Categories
- Tags
- Comments
- Media
- Pages

### Access to Gutenberg Demo

<a href="https://wordpress.org/gutenberg/" target="_blank">Access the demo</a>

### New Content Editor
#### Tutorials and Resources for Gutenberg

Content Organization:
- Categories
- Tags
- Taxonomies

Pages
::: details Page Template
A WordPress Page Template (or "page template") is a PHP file used in a WordPress theme to define the layout and style of a specific page or group of pages. Unlike posts, which generally use a single template, pages in WordPress can use custom templates to display content differently.
### Example:
```php
<?php
/*
Template Name: Template Name
*/
```
:::
- Media

- Images, Video, Sound, PDF, etc.
- Image Editor

- Basic Functions
- Themes <a href="ChildTheme"><Badge type="tip" text="See child theme section" /></a>

- Free, paid, customization, child theme
- Menus
::: details Menus
Menus in WordPress are a key element of website navigation, allowing users to easily access different pages, categories, links, and other important content.
### Integration:
```php
//functions.php file
<?php
function add_menu() {
    register_nav_menu('zeta_menu', 'Main Menu');
}
?>
```
*The first parameter is the name you gave to the menu in WordPress and the second parameter is a description* <a href="https://capitainewp.io/formations/developper-theme-wordpress/menus-moteur-recherche/#:~:text=Déclarer%20un%20emplacement%20de%20menu,-On%20va%20maintenant&text=On%20vient%20de%20déclarer%20nos,l%27assigner%20à%20notre%20emplacement." target="_blank"><Badge type="tip" text="See more information" /></a>
:::

:::details Widgets
WordPress widgets are small blocks of content or functionality that you can add to various areas of your website, such as sidebars, footer, or other areas designated by your theme. They allow you to quickly add interactive or informative elements without needing to code.
Integration:
```php
//functions.php file
add_action('wp_dashboard_setup','custom_dashboard');

function custom_dashboard() {
global $wp_meta_boxes;
wp_add_dashboard_widget('widget_id', 'Widget Title', 'custom_dashboard_help');
}
function custom_dashboard_help() {
echo '<p>widget content</p>';
}
```
:::

## Resources:
Captain W: <u><a href="https://capitainewp.io" target="_blank"><Badge type="warning" text="View resource" /></a></u> 