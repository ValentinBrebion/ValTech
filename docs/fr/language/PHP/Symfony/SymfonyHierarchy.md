---
next: 
    text: 'Introduction à Wordpress'
    link: 'fr/language/PHP/Wordpress/WordpressIntro'
prev: 
    text: 'Histoire de Symfony'
    link: 'fr/language/PHP/Symfony/SymfonyHistory'
---

# Comprendre la hiérarchie d'une application Symfony

## Application
::: info *L'application Symfony est constituée de plusieurs parties distinctes :*
>  Kernel => C'est le coeur de l'application Symfony. Il gère les configurations, le cycle de vie des requêtes et des réponses.

> Bundles => C'est l'équivalents des plugins ou modules. Un bundle est une `collection de fichiers qui ajoutent des fonctionnalités spécifiques à l'application`.
:::

## Bundles

::: info *Les bundles sont des blocs réutilisables de fonctionnalités. Il existe deux types de bundles*
>  Bundles tiers => Fournis par la communauté ou des développeurs externes. Ils sont installés via Composer.

> Bundles personnalisés => Créés par les développeurs pour des fonctionnalités spécifiques à leur application.
:::

## Structure des fichiers

::: info *La structure typique d'un projet Symfony inclut les répertoires suivants :*
::: details :file_folder: *src/ : Contient le code source de l'application, y compris les bundles personnalisés.*
>>>:open_file_folder: `Controller/` : Contrôleurs qui gèrent les requêtes HTTP et renvoient les réponses appropriées.

>>>:open_file_folder: `Entity/` : Définitions des entités pour l'ORM (Object-Relational Mapping).

>>>:open_file_folder: `Repository/` : Contient les classes de dépôt qui manipulent les entités.
:::
>:file_folder: config/ : Fichiers de configuration pour l'application et les bundles.

>:file_folder: templates/ : Fichiers de template Twig utilisés pour le rendu des vues.

>:file_folder: public/ : Point d'entrée public de l'application, souvent avec un fichier index.php.

>:file_folder: var/ : Fichiers générés par l'application, comme les logs et le cache.

>:file_folder: vendor/ : Dépendances externes installées via Composer.

## Controllers
Les contrôleurs sont responsables de traiter les requêtes HTTP et de renvoyer des réponses HTTP. ***Chaque méthode de contrôleur correspond généralement à une route spécifique.***

## Routes
Les routes définissent comment les requêtes HTTP sont associées aux contrôleurs. Elles sont configurées dans des fichiers de configuration (YAML, XML) ou via des annotations dans les contrôleurs.

## Modèles et Entités
Les entités sont des objets qui représentent des données stockées dans une base de données. Elles sont définies dans le répertoire `Entity/`. Les dépôts (repositories) fournissent des méthodes pour interagir avec ces entités.

## Services et Injections de Dépendances
Symfony utilise un conteneur de services pour gérer les dépendances. Les services sont des objets réutilisables configurés via des fichiers de configuration. L'injection de dépendances permet d'injecter automatiquement ces services là où ils sont nécessaires.

::: details En savoir plus :point_down:
:::tip <h4><u>c'est quoi un service ?</u></h4>
<p class="italic">Un service est comme un outil ou un assistant qui fait une tâche spécifique pour ton application. Par exemple, un service peut envoyer des emails, se connecter à une base de données, ou traiter des données.</p>

<h4><u>Qu'est-ce que l'injection de dépendances ?</u></h4>
<p class="italic">L'injection de dépendances, c'est une façon de donner à tes contrôleurs (ou à d'autres services) les outils dont ils ont besoin sans qu'ils aient à les chercher eux-mêmes. C'est comme si quelqu'un préparait tout le matériel dont tu as besoin pour faire un bricolage et te le donnait directement.</p>

<h4><u>Exemple concret:</u></h4>
Imaginons que nous avons un service qui envoie des emails. Voici comment nous allons le créer et l'utiliser dans un contrôleur.

1. **<u>Créer un Service</u>**<br>
On va créer un fichier de service qui s'occupe d'envoyer des emails. Ce fichier va être dans le dossier `src/Service`.

```php
// src/Service/MailService.php
namespace App\Service;

class MailService
{
    public function sendEmail($to, $subject, $message)
    {
        // Ici, on met le code pour envoyer un email
        // Par exemple, on peut utiliser la fonction mail() de PHP
        mail($to, $subject, $message);
    }
}

```
2. **<u>Configurer le Service</u>**<br>
Nous devons dire à Symfony que ce service existe. Pour cela, nous allons ajouter une configuration dans un fichier YAML.

```php
# config/services.yaml
services:
    App\Service\MailService:
        public: true

```
3. **<u>Utiliser le Service dans un Contrôleur</u>**<br>
Maintenant, nous allons utiliser ce service dans un contrôleur. Un contrôleur est un fichier qui gère les requêtes de l'utilisateur.

```php
// src/Controller/RegistrationController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use App\Service\MailService;

class RegistrationController extends AbstractController
{
    private $mailService;

    // Ici, on injecte le service dans le contrôleur
    public function __construct(MailService $mailService)
    {
        $this->mailService = $mailService;
    }

    public function register(): Response
    {
        // Code pour enregistrer un utilisateur

        // Utiliser le service pour envoyer un email
        $this->mailService->sendEmail('user@example.com', 'Welcome!', 'Thanks for registering!');

        return new Response('User registered and email sent!');
    }
}
```
:::

## Templates et Twig
Twig est le moteur de template par défaut de Symfony. Les fichiers Twig, situés dans le répertoire templates/, sont utilisés pour le rendu des vues.

## En résumé 
```lua
my_project/
|-- config/
|   |-- packages/
|   |-- routes/
|   |-- services.yaml
|-- public/
|   |-- index.php
|-- src/
|   |-- Controller/
|   |   |-- DefaultController.php
|   |-- Entity/
|   |   |-- User.php
|   |-- Repository/
|   |   |-- UserRepository.php
|   |-- Kernel.php
|-- templates/
|   |-- base.html.twig
|   |-- default/
|       |-- index.html.twig
|-- var/
|   |-- cache/
|   |-- log/
|-- vendor/
|-- composer.json

```