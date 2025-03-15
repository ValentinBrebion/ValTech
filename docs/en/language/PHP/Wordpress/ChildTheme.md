---
next: 
    text: 'SQL'
    link: 'en/language/sql/SQL'
prev: 
    text: 'Introduction'
    link: 'en/language/PHP/Wordpress/WordpressIntro'
---
# How to Create a WordPress Theme

### <u>Prerequisites</u>

- the `style.css` file where you can paste this text with your project information
```bash
/*
Theme Name: Your theme name
Author: ValTech
Author URI: https://valtech.ovh
Description: My first theme...
*/
```
- <u>screenshot.png</u> to illustrate the theme. When you go to the themes section of your WordPress, you'll see pre-installed themes. The screenshot will be the image that illustrates your theme.
- <u>index.php</u> This is the default template, it will be used by WordPress if no other file is present
::: details <u>some templates to populate WordPress pages</u>
- single.php (article detail)
- page.php (page detail)
- archive.php (article list)
- front-page.php (homepage)
- 404.php (content not found page)
- search.php (search list)
:::
- <u>functions.php</u>
::: details <u>What can the functions.php file contain?</u>
- Menu location
- Widget area
- Shortcode
- adding external js or css files
:::

## WordPress PHP Functions
### <u>Template Tags</u>
These are small pieces of PHP code used to display specific information or content on the site. They allow retrieving and displaying data dynamically from the WordPress database.
- 1. Display the title of the article or page:
```php
<?php the_title() ?>
```
- 2. Display the content of the article or page:
```php
<?php the_content() ?>
```
- 3. Display the author of the article or page:
```php
<?php the_author() ?>
```
::: tip condition
Template tags can be used to check a condition!
```php
<?php if ( in_category( 'category-name' ) ) : ?>
    <!-- Code to execute if the article is in the category -->
    <p>This article is in the "category-name" category.</p>
<?php else : ?>
    <!-- Code to execute if the article is not in the category -->
    <p>This article is not in the "category-name" category.</p>
<?php endif; ?>
```
:::
### <u>File Structure</u>
To structure a WordPress website in a modular and reusable way, we generally use the following steps:

::: warning <u>Header and Footer Isolation:</u>
The site header is isolated in a file named `header.php`.<br>
The site footer is isolated in a file named `footer.php`.
:::
### <u>File Inclusion</u>
When creating a WordPress site, there are often parts of code that repeat across multiple pages, like a breadcrumb trail, sidebar, or article content. Rather than repeating this code on each page, you can place it in a separate file and include it where needed.

### How to Include?
Instead of using PHP's include function, you should use a special WordPress function called `get_template_part()` to include your file. If you use include, it could make it difficult to customize the theme with a child theme.

### Usage Example:
Suppose you have a file named my-template.php containing the breadcrumb code.
To include it in your WordPress theme, you would do:

```php
<?php
get_template_part( 'my-template' );
?>
```
This line of code will look for the `my-template.php` file in your theme directory and include it where you placed this line of code.

### <u>The Loop</u>
The loop is a central concept in WordPress. It's used to display posts, pages, and other custom content types on a WordPress site.

### Code to Display Posts:
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
    echo '<p>No posts found.</p>';
endif;
?>
```
### Code to Display Pages:
```php
<?php
$args = array(
    'post_type' => 'page', // Display pages
    'posts_per_page' => -1 // Number of pages to display (-1 to display all pages)
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
    echo '<p>No pages found.</p>';
endif;

// Reset main query data
wp_reset_postdata();
?>
```

::: danger Reset Main Query Data
<p class="color-danger">After using WP_Query, it's important to reset the main query data with wp_reset_postdata() to avoid potential issues with other WordPress loops on the same page.</p>
:::

### PAGE TEMPLATES
When creating a WordPress site, it's often necessary to create specific HTML templates for certain pages, like the contact page or homepage.

::: warning First (bad) solution: Using Template Hierarchy
<p>How does it work?</p>
If you have a page with a specific ID, like ID 5, you can create a specific template file for this page. For example, you can create a page-5.php or page-contact.php file (using the slug) for this page.

Practical example:
<i>If your page has ID 5, you create a page-5.php file with the following code:</i>

```php
<?php get_header(); ?>

<!-- Your content specific to page 5 -->

<?php get_footer(); ?>
```
:::

### How to Find the Slug or ID of Content in WordPress?
The slug: The slug is part of the URL that uniquely identifies a page. For example, for the slug about-us, the URL might look like `https://yoursite.com/about-us.`

The identifier (ID): The identifier is a unique number assigned to each piece of content in WordPress. To find a page's ID, you can go to the WordPress administration, click on "Pages", then hover over the page to see the ID in the URL or in the page link.

In this example, the slug is about-us and the identifier is 52.

Why using template hierarchy in this case is a bad solution?
- Not reusable:

>The template created can only apply to a single page. If you have other pages with similar needs, you'll need to copy the template for each page or use includes.
- Maintenance issue:

>If your page ID changes (for example, due to deletion, translation, etc.), the template will no longer be associated with the right page, which can cause display issues.
::: tip The second (good) solution: Using Page Templates
The best practice for creating custom page templates in WordPress is to use page templates.

How to create a page template?
Create a new file in your theme, for example template-contact.php.

Add the following code at the top of the file to define the template:
```php
<?php
/*
Template Name: Contact Template
*/
?>

<?php get_header(); ?>

<!-- Your content specific to the contact page -->

<?php get_footer(); ?>
```
:::
In this example, the template-contact.php file is created to serve as a template for the contact page. The code Template Name: Contact Template defines the template name that you can select in the WordPress page editor.

## Hooks
Hooks and filters are powerful WordPress mechanisms that allow modifying and extending WordPress's standard behavior without having to modify the core code. Filters, in particular, allow modifying the result of a function or variable before it's returned or used.

1. Calling a filter:
When you use a function that is associated with a filter, WordPress returns the result through the filter before returning it to the caller.

Example:

```php
$title = 'Original title';
$id = 1;

$new_title = apply_filters('the_title', $title, $id);

echo $new_title;  // Displays the title modified by the filter
```
2. Hooking a filter:
You can add your own filter function using add_filter() to modify the result of a specific function or variable.

Example of a filter function to truncate a long title:
```php
function truncate_long_title($title, $id) {
    if (strlen($title) > 10) {  // If the title is longer than 10 characters
        $title = substr($title, 0, 10) . '...';  // Truncate the title and add ellipsis
    }
    return $title;
}

add_filter('the_title', 'truncate_long_title', 10, 2);
```
In this example:

>- `the_title` is the name of the filter you're connecting to.
>- `truncate_long_title` is the name of the filter function you created.
>- `10` is the filter priority (higher numbers execute later).
>- `2` is the number of arguments the filter function expects.

## Action Hooks in WordPress
An action hook allows you to execute specific actions at precise moments in the WordPress lifecycle without having to modify the core system. In other words, it allows you to add functionality or modify WordPress behavior without touching the main source code.

## What is an Action?
An action is a function that is triggered when certain events occur in WordPress.

Example with save_post
The `save_post` action is triggered each time a post is saved.

```php
add_action('save_post', 'my_function', 20);
```
>- `add_action`: this is the function to attach an action to a hook.
>- `save_post`: this is the name of the action (event) you're connecting to.
>- `my_function`: this is the name of the function you want to execute when the action is triggered.
>- `20`: this is the action priority (higher numbers execute later). 