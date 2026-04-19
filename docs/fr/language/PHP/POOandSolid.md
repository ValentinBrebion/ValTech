---
next:
    text: 'API'
    link: 'fr/language/PHP/API/APIcourse'
prev:
    text: 'MVC'
    link: 'fr/language/PHP/MVC'
---

# POO (Programmation Orienté Objet)

# 4 piliers :

## Encapsulation:
On cache l'état interne, on expose ce qui est nécessaire. Plus précisément, l'encapsulation restreind l'accès direct aux états et empêche la modification de l'objet hors de ses méthodes. Son accès se fera via un `getter` et un `setter`:

::: details Exemple {open}
```php
Class User {

    private boolean $active = false;
    
    public function isActive(): bool
    {
        return $isActive;
    }
    
    public function setActive(bool $active): void
    {
        $this->active = $active;
    }
}
```
:::

## Héritage
Une classe réutilise le comportement d'une autre. Plus précisément, l'héritage permet de créer une nouvelle classe qui héritera des propriétés et des méthodes d'une classe parent et qui pourra, si on le souhaite, redéfinir certaines propriétés et méthodes.

::: info Exemple de phrase
Un roman est un livre, Une voiture est un Véhicule
:::

::: details Exemple de code {open}
```php
// Classe Mère
class Personne
{
    public Sexe $sexe;
    public function __construct(Sexe $sexe)
    {
        $this->setSexe($sexe);
    }
    public function marcher()
    {
    }
    public function dormir()
    {
    }
    public function getSexe()
    {
        return $this->sexe;
    }
    public function setSexe(Sexe $sexe)
    {
        $this->sexe = $sexe;
    }
}

// Classe Fille
class Developpeur extends Personne
{
    public $langage;
    public function __construct(Sexe $sexe)
    {
        // On appelle les constructeur de la classe "mère" afin 
        // de lui spécifier ce paramètre à notre instance
        parent::__construct($sexe);
        // Cette méthode va invoquer la méthode setSexe($sexe) de 
        // la classe "mère" en interne
    }
    public function developper()
    {
        // Ici, nous pourrions définir une méthode propre à la méthode développer
        // qui pourrait appeller d'autres méthodes spécifiques à cette dernière
    }
}
```
:::
## Polymorphisme
Un même appel se comporte différement selon l'objet. Plus précisément, elle permet à des objets de classes différentes d'être traités comme des objets de la même classe via des interfaces communes. 

::: details Exemple {open}
```php
<?php

class Oiseau {
    public function parler() {
        echo "Cui-Cui!";
    }
}

class Chien {
    private $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }

    public function parler() {
        echo "Woof!";
    }
}

class Chat {
    private $nom;

    public function __construct($nom) {
        $this->nom = $nom;
    }

    public function parler() {
        echo "Miaou!";
    }
}

function faireParler($animal) {
    $animal->parler();
}

// Utilisation
faireParler(new Chien("Rex"));   // Woof!
echo "\n";
faireParler(new Chat("Tigrou")); // Miaou!
echo "\n";
faireParler(new Oiseau());       // Cui-Cui!

// Le polymorphisme permet d'utiliser une méthode commune 'parler' sur différents objets
```
:::

## Abstraction
on expose une interface simple on cache la complexité

::: details Exemple du quotidien : {open}
Quand tu conduis une voiture, tu utilises le volant, les pédales, etc., sans connaître tous les détails du moteur.
➡️ La voiture t’expose une interface simple, et cache sa complexité.
:::

::: details Exemple de code {open}
```php
<?php

abstract class Animal {
    // Méthode abstraite (pas de corps)
    abstract public function faireDuBruit();
}

class Chien extends Animal {
    public function faireDuBruit() {
        echo "Wouf";
    }
}

class Chat extends Animal {
    public function faireDuBruit() {
        echo "Miaou";
    }
}

// Utilisation
$chien = new Chien();
$chien->faireDuBruit(); // Wouf

$chat = new Chat();
$chat->faireDuBruit(); // Miaou
```
:::

Toute méthode abstraite déclarée dans une classe abstraite doit obligatoirement être implémentée dans les classes enfants.

```php
abstract class Animal {
    abstract public function faireDuBruit();
}

class Chien extends Animal {
    public function faireDuBruit() {
        echo "Wouf";
    }
}
```

⚠️ Exception importante

Si ta classe enfant est elle aussi abstraite, alors elle n’est pas obligée d’implémenter la méthode :

```php
abstract class Chien extends Animal {
    // OK, pas d’implémentation
}
```

👉 Mais du coup, une classe concrète plus bas devra le faire

# SOLID:

## S: Single Responsability
Une classe doit avoir une seule responsabilité, donc une seule raison de changer.

::: details Exemple {open}
```php
class User {
    public function getNom() {
        return "John";
    }
}

class UserRepository {
    public function save(User $user) {
        // logique de sauvegarde en base de données
    }
}
```
:::

Ici :

- User → gère les données
- UserRepository → gère la base de données

 = On sépare les responsabilités

## O: Open Close
Une classe doit être ouverte à l’extension mais fermée à la modification.

::: details Exemple {open}
```php
<?php

interface Paiement {
    public function payer();
}

class CarteBancaire implements Paiement {
    public function payer() {
        echo "Paiement par carte";
    }
}

class Paypal implements Paiement {
    public function payer() {
        echo "Paiement par PayPal";
    }
}

function effectuerPaiement(Paiement $paiement) {
    $paiement->payer();
}
```
:::

Ici :

- Tu peux ajouter `ApplePay`, `Crypto`, etc
- Sans modifier le code existant

 = Tu ajoutes, tu ne modifies pas

## L: Liscof
Une classe enfant doit pouvoir remplacer sa classe parent sans problème

::: details Exemple {open}
```php
<?php

class Oiseau {
    public function voler() {
        echo "Je vole";
    }
}

class Moineau extends Oiseau {
    // OK
}

function faireVoler(Oiseau $oiseau) {
    $oiseau->voler();
}
```

Mauvais exemple :

```php
class Autruche extends Oiseau {
    public function voler() {
        // ❌ une autruche ne vole pas
    }
}
```

👉 Ça casse le principe
:::

## I: Interface Segregation
Il vaut mieux plusieurs petites interfaces qu’une grosse.

::: details Exemple {open}
```php
<?php

interface Travailleur {
    public function travailler();
}

interface Mangeur {
    public function manger();
}

class Humain implements Travailleur, Mangeur {
    public function travailler() {
        echo "Je travaille";
    }

    public function manger() {
        echo "Je mange";
    }
}

class Robot implements Travailleur {
    public function travailler() {
        echo "Je travaille";
    }
}
```
:::

## D: Dependancy inversion
Dépendre des abstractions, pas des classes concrètes.

::: details Exemple {open}
```php
<?php

interface Database {
    public function connect();
}

class MySQLDatabase implements Database {
    public function connect() {
        echo "Connexion MySQL";
    }
}

class UserService {
    private Database $db;

    public function __construct(Database $db) {
        $this->db = $db;
    }

    public function getUsers() {
        $this->db->connect();
    }
}
```
:::

Ici :

- UserService dépend de Database (interface)
- pas de MySQLDatabase

👉 Tu peux changer de base sans casser le code