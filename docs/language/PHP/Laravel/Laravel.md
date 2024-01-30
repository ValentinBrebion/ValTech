
# Intro Laravel

*Laravel est un framework open-source très populaire et puissant écrit en PHP. Il a été créé par Taylor Otwell et est apparu pour la première fois en 2011. Ce framework est conçu pour `simplifier le développement d'applications web en fournissant une structure solide et des fonctionnalités avancées.`*

## <u>Ses caractéristiques </u>💡

| Architecture MVC 🏗️       |      Routage 🪜      |  ORM élégant 🌟 |
| ------------- | :-----------: | ----: |
| Laravel suit le motif de conception Modèle-Vue-Contrôleur (MVC), ce qui facilite la séparation des préoccupations et la gestion des différentes couches de l'application.              | Il offre un système de routage simple et efficace, permettant de définir facilement les points d'entrée de l'application et de lier des URL aux contrôleurs correspondants. | Laravel fournit un ORM (Object-Relational Mapping) appelé Eloquent. Cela permet de manipuler la base de données à l'aide de requêtes PHP orientées objet plutôt qu'en utilisant du SQL brut, simplifiant ainsi les opérations de base de données. |


| Gestionnaire de dépendances 📦        |      Système de templates 📝     |  Sécurité 🛡️ |
| ------------- | :-----------: | ----: |
| Laravel est livré avec un puissant gestionnaire de dépendances appelé "Composer", qui facilite l'installation de bibliothèques tierces et de packages dans votre projet.      | Le framework utilise le moteur de templates Blade, qui offre une syntaxe concise et expressive pour gérer les vues de manière propre et structurée. | Laravel met l'accent sur la sécurité en intégrant des mécanismes de protection contre les attaques courantes telles que les failles CSRF (Cross-Site Request Forgery) et XSS (Cross-Site Scripting). |

| Intégration de services tiers   📧     |      Traitement des sessions et des cookies  🍪    |  Tests automatisés 🤔 |
| ------------- | :-----------: | ----: |
| Laravel propose une intégration facile avec des services tiers tels que l'envoi d'e-mails, le stockage en cloud, la gestion des tâches en arrière-plan, etc.      |  Le framework facilite la gestion des sessions et des cookies, ce qui permet de conserver l'état de l'application pour chaque utilisateur. |  Laravel encourage les bonnes pratiques de développement en fournissant des outils pour réaliser des tests unitaires et des tests fonctionnels automatisés. |

## <u>Comment l'installer (Version Windows)</u> ❓

Comme mentionné ci-dessus, Laravel est livré avec un puissant gestionnaire de dépendances appelé <a href="https://getcomposer.org/download/">`"Composer" 🔗` </a>, qui facilite l'installation de bibliothèques tierces et de packages dans votre projet. 

*Une fois le .exe lancé, lancez votre CMD et tapez la commande **"composer"**. Si vous avez les inscriptions comme indiquez sur la capture ci-dessous, c'est que composer a bien été installé sur votre ordinateur* 😁.

![Texte alternatif de l'image](/composerSetup.png)

## <u>Comment l'installer (Version MacOS)</u> ❓

Pour la version MacOS, PHP et composer peuvent-être installés avec <a href="https://herd.laravel.com">`Laravel Herd`</a>. Herd est un environnement de développement Laravel et PHP qui comprend nginx et dnsmasq en plus !

## <u>Comment créer projet Laravel </u> ❓
<br/>

::: code-group

```sh [Composer Windows]
composer create-project laravel/laravel ProjetLaravel


```

```sh [Herd Laravel]
composer global require laravel/installer
 
laravel new ProjetLaravel
```

:::

:::danger Attention
⚠️ <u>**composer**</u> => Lorsque vous allez créer votre projet laravel avec `composer`, les fichiers seront dans le dossier <u>**/ProjetLaravel**</u> donc attention ou vous mettez vos fichiers !

⚠️ <u>**Herd Laravel**</u> => Si vous avez installé PHP et composer via l'installer Herd Laravel sur MacOS, **L'installeur Laravel est déjà disponible !**
:::

Une fois l'application crée, Vous voulez sans doutes savoir comment démarrer le serveur de développement local ? tapez cette commande dans le terminal :

```sh
cd ProjetLaravel
 
php artisan serve
```

## Compréhension de la logique de développement

Comme expliqué ci-dessus, nous utilisons la logique <a href="../MOVC">MVC</a> (Modèle, Vue, Controller)

# <u>Les redirections</u>

:::info routes
Lors de la création de votre projet Laravel, vous aurez un dossier **routes** avec trois fichiers php : API, WEB et CONSOLE. Généralement vous devrez initialiser vos routes dans le fichier `WEB`.
:::

Voici un exemple de comment vous devez déclarer vos routes :

```php
use Illuminate\Support\Facades\Route;
 
Route::get('/HelloWorld', function () {
    return 'Hello World';
});

```

Que veux dire ce bout de code ? Lorsque vous allez déclarer une route du nom de `/greeting`. Comment procéder ?

Côté HTML :
```html
<a href="/HelloWorld" class="button ...">Dites bonjour</a>
```
Lorsque l'utilisateur va cliquer sur le bouton, il sera redirigé vers une nouvelle page ou sera affiché `"Hello World"`.

:::tip Bonnes pratiques
**Pour la lisibilité du code php, vous devez déclarer pour chaque features un nouveau fichier route. Par exemple on a une feature ou je dois afficher des produits. Nous devrons alors créer un fichier `ProduitsRoutes` (En CamelCase pour la convention) qui va lister toutes les routes de cette feature !**
:::

# <u>Approfondissement</u>

Une fois la base comprise nous allons creuser ! Nous avons vu qu'en MVC la vue n'intéragit pas avec les données (partie Modèle) (qui va intéragir avec nos données via L'ORM) mais comment on fait alors pour afficher des données provenant d'une base de donnée si la vue ne nous le permet pas ? Alors ? bien vue ! Nous allons utiliser les **`controllers`**.

*Pour continuer sur notre exemple de produit nous allons créer un controller "ProduitController":*

```sh
php artisan make:controller ProductsController
```

dedans nous allons créer une nouvelle fonction basique qui va retourner un hello world tout simple :

```php
<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ProduitsController;

class ProduitsController extends Controller
{
    function Hello(){
        return "Hello World";
    }
}

?>
```

Et alors la soyez attentif car dans notre routes nous n'allons pas écrire comme ci-dessus mais plutôt comme celle-ci : 

```php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitsController;

//Route pour hello world
Route::get('/HelloWorld', [ProduitsController::class, "Hello"]);
```

Comprenez vous la logique ? nous utilisons **get** pour obtenir un return de hello world et après la virgule nous allons dire : *je veux que tu m'affiches mon hello world depuis la <u>**Classe ProduitsController**</u> et tu vas me selectionner la fonction **`Hello`** définit dans le controller.*

