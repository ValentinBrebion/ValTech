---
next: 
    text: 'API'
    link: '/en/language/PHP/API'
---

# Intro to Laravel

*Laravel is a very popular and powerful open-source framework written in PHP. It was created by Taylor Otwell and first appeared in 2011. This framework is designed to `simplify web application development by providing a solid structure and advanced features.`*

## <u>Its Features</u> 💡

| MVC Architecture 🏗️       |      Routing 🪜      |  Elegant ORM 🌟 |
| ------------- | :-----------: | ----: |
| Laravel follows the Model-View-Controller (MVC) design pattern, which facilitates separation of concerns and management of different application layers.              | It offers a simple and efficient routing system, making it easy to define application entry points and link URLs to corresponding controllers. | Laravel provides an ORM (Object-Relational Mapping) called Eloquent. This allows database manipulation using object-oriented PHP queries rather than raw SQL, thus simplifying database operations. |


| Dependency Manager 📦        |      Template System 📝     |  Security 🛡️ |
| ------------- | :-----------: | ----: |
| Laravel comes with a powerful dependency manager called "Composer", which makes it easy to install third-party libraries and packages in your project.      | The framework uses the Blade template engine, which offers a concise and expressive syntax for managing views in a clean and structured way. | Laravel emphasizes security by integrating protection mechanisms against common attacks such as CSRF (Cross-Site Request Forgery) and XSS (Cross-Site Scripting) vulnerabilities. |

| Third-party Service Integration 📧     |      Session and Cookie Handling 🍪    |  Automated Testing 🤔 |
| ------------- | :-----------: | ----: |
| Laravel offers easy integration with third-party services such as email sending, cloud storage, background task management, etc.      |  The framework facilitates session and cookie management, allowing the application state to be maintained for each user. |  Laravel encourages good development practices by providing tools for automated unit testing and functional testing. |

## <u>How to Install It (Windows Version)</u> ❓

As mentioned above, Laravel comes with a powerful dependency manager called <a href="https://getcomposer.org/download/" target="_blank">`"Composer" 🔗` </a>, which makes it easy to install third-party libraries and packages in your project.

*Once the .exe is launched, open your CMD and type the **"composer"** command. If you see the inscriptions as shown in the screenshot below, it means composer has been successfully installed on your computer* 😁.

![Alternative image text](/composerSetup.png)

## <u>How to Install It (MacOS Version)</u> ❓

For the MacOS version, PHP and composer can be installed with <a href="https://herd.laravel.com" target="_blank">`Laravel Herd`</a>. Herd is a Laravel and PHP development environment that includes nginx and dnsmasq as well!

## <u>How to Create a Laravel Project</u> ❓
<br/>

::: code-group

```sh [Composer Windows]
composer create-project laravel/laravel LaravelProject


```

```sh [Herd Laravel]
composer global require laravel/installer
 
laravel new LaravelProject
```

:::

:::danger Warning
⚠️ <u>**composer**</u> => When you create your Laravel project with `composer`, the files will be in the <u>**/LaravelProject**</u> folder, so be careful where you put your files!

⚠️ <u>**Herd Laravel**</u> => If you installed PHP and composer via the Laravel Herd installer on MacOS, **The Laravel installer is already available!**
:::

Once the application is created, you probably want to know how to start the local development server? Type this command in the terminal:

```sh
cd LaravelProject
 
php artisan serve
```

## Understanding Development Logic

As explained above, we use the <a href="../MOVC">MVC</a> (Model, View, Controller) logic

# <u>Redirections</u>

:::info routes
When creating your Laravel project, you'll have a **routes** folder with three PHP files: API, WEB, and CONSOLE. Generally, you should initialize your routes in the `WEB` file.
:::

Here's an example of how you should declare your routes:

```php
use Illuminate\Support\Facades\Route;
 
Route::get('/HelloWorld', function () {
    return 'Hello World';
});

```

What does this code mean? When you declare a route named `/greeting`. How to proceed?

HTML side:
```html
<a href="/HelloWorld" class="button ...">Say hello</a>
```
When the user clicks the button, they will be redirected to a new page where `"Hello World"` will be displayed.

:::tip Best Practices
**For PHP code readability, you should declare a new route file for each feature. For example, if we have a feature where I need to display products, we should create a `ProductsRoutes` file (in CamelCase for convention) that will list all the routes for this feature!**
:::

# <u>Going Deeper</u>

Once we understand the basics, let's dig deeper! We've seen that in MVC, the view doesn't interact with the data (Model part) (which will interact with our data via ORM) but how do we display data from a database if the view doesn't allow it? So? good point! We're going to use **`controllers`**.

*To continue with our product example, we'll create a "ProductController":*

```sh
php artisan make:controller ProductsController
```

inside we'll create a new basic function that will return a simple hello world:

```php
<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProduitsController;

class ProductsController extends Controller
{
    function Hello(){
        return "Hello World";
    }
}

?>
```

And then pay attention because in our routes we won't write as above but rather like this:

```php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;

//Route for hello world
Route::get('/HelloWorld', [ProductsController::class, "Hello"]);
```

Do you understand the logic? we use **get** to get a hello world return and after the comma we're going to say: *I want you to display my hello world from the <u>**ProductsController Class**</u> and you're going to select the **`Hello`** function defined in the controller.* 