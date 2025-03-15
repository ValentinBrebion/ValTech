---
next:
    text: 'Symfony Hierarchy'
    link: 'en/language/PHP/Symfony/SymfonyHierarchy'
prev: 
    text: 'Symfony History'
    link: 'en/language/PHP/Symfony/SymfonyHistory'
---

# Installing a Symfony Project

It's nice to learn about Symfony's history, but how do you create a project? Well, you have two options: either you can [check the docs](https://symfony.com/doc/current/setup.html#creating-symfony-applications) or you can be awesome and follow my tutorial...

## Creating a Symfony Project
If you've followed the previous steps, you should now be able to create and use a Symfony project.

```php
composer create-project symfony/skeleton:"7.0.*" my_project_directory
```

You'll notice that you don't have much, but it's this "not much" that does everything ;)
But we want to have fun, so let's move on!

## Adding Additional Components
That's nice, but can we customize our project? The answer is yes! You can install additional components to your project:

```php component examples
composer require --dev profiler maker
// and
composer require twig form validator orm
```

## Template Engine: Twig <a target="_blank" href="https://twig.symfony.com/"><Badge type="tip" text="Documentation" /></a>
Once you've executed the `composer require twig` command, a "template" folder will appear in your project and you'll be able to format your data.

### The syntax:
Making a variable call:
```js
{{ ... }} /*Call and display a variable*/
```

Comments:
```js
{# ... #} /*Comments*/
```

Conditional rendering:
```js
{% if condition %}
  //code to execute in the condition
{% endif %}
``` 