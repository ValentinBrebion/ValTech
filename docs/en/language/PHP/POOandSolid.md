---
next:
    text: 'API'
    link: 'en/language/PHP/API/APIcourse'
prev:
    text: 'MVC'
    link: 'en/language/PHP/MVC'
---

# POO (Programmation Orienté Objet)

# 4 piliers :

## Encapsulation:

We hide the internal state and expose only what is necessary. More precisely, encapsulation restricts direct access to data and prevents modification of the object outside its methods. Access is done through `getter` and `setter`:

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

## Inheritance
A class reuses the behavior of another. More precisely, inheritance allows creating a new class that inherits properties and methods from a parent class and can override them if needed.

::: info Exemple of sentences
A novel is a book, a car is a vehicle
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

// Child class
class Developer extends Person
{
    public $language;

    public function __construct(Sexe $sexe)
    {
        // Call parent constructor
        parent::__construct($sexe);
    }

    public function develop()
    {
        // Specific behavior
    }
}
```
:::

## Polymorphism

The same call behaves differently depending on the object. More precisely, it allows objects of different classes to be treated as the same type via a common interface.

::: details Example {open}

```php
class Bird {
    public function speak() {
        echo "Tweet!";
    }
}

class Dog {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function speak() {
        echo "Woof!";
    }
}

class Cat {
    private $name;

    public function __construct($name) {
        $this->name = $name;
    }

    public function speak() {
        echo "Meow!";
    }
}

function makeSpeak($animal) {
    $animal->speak();
}

// Usage
makeSpeak(new Dog("Rex"));   // Woof!
echo "\n";
makeSpeak(new Cat("Tigrou")); // Meow!
echo "\n";
makeSpeak(new Bird());       // Tweet!

// Polymorphism allows using a common method 'speak' on different objects
```
:::

## Abstraction
We expose a simple interface while hiding complexity.

::: details Real-life example {open}
When you drive a car, you use the steering wheel and pedals without knowing how the engine works.
➡️ The car exposes a simple interface and hides complexity.
:::

::: details Code example {open}
```php

abstract class Animal {
    abstract public function makeSound();
}

class Dog extends Animal {
    public function makeSound() {
        echo "Woof";
    }
}

class Cat extends Animal {
    public function makeSound() {
        echo "Meow";
    }
}

// Usage
$dog = new Dog();
$dog->makeSound(); // Woof

$cat = new Cat();
$cat->makeSound(); // Meow
```
:::

Any abstract method declared in an abstract class must be implemented in child classes.

```php
abstract class Animal {
    abstract public function makeSound();
}

class Dog extends Animal {
    public function makeSound() {
        echo "Woof";
    }
}
```

⚠️ Important exception:

If the child class is also abstract, it does not have to implement the method:
```php
abstract class Dog extends Animal {
    // OK
}
```

👉 But a concrete class later must implement it.

# SOLID:

## S: Single Responsability
A class should have only one responsibility, therefore only one reason to change.

::: details Example {open}
```php
class User {
    public function getName() {
        return "John";
    }
}

class UserRepository {
    public function save(User $user) {
        // database logic
    }
}
```
:::
Here :

- User → handles data
- UserRepository → handles database

 = Responsibilities are separated

## O: Open Close
A class should be open for extension but closed for modification.
::: details Example {open}

```php

interface Payment {
    public function pay();
}

class CreditCard implements Payment {
    public function pay() {
        echo "Paying by card";
    }
}

class Paypal implements Payment {
    public function pay() {
        echo "Paying with PayPal";
    }
}

function processPayment(Payment $payment) {
    $payment->pay();
}
```
:::

Here:

- You can add `ApplePay`, `Crypto`, etc.
- without modifying existing code

👉 Extend, don’t modify

## L: Liscof
A child class must be able to replace its parent class without breaking behavior.
::: details Example {open}

```php
class Bird {
    public function fly() {
        echo "I fly";
    }
}

class Sparrow extends Bird {
    // OK
}

function makeFly(Bird $bird) {
    $bird->fly();
}
```

Bad example:

```php
class Ostrich extends Bird {
    public function fly() {
        // ❌ ostriches can't fly
    }
}
```
👉 This breaks the principle
:::

## Interface Segregation
It is better to have multiple small interfaces than one big one.

::: details Example {open}

```php

interface Worker {
    public function work();
}

interface Eater {
    public function eat();
}

class Human implements Worker, Eater {
    public function work() {
        echo "I work";
    }

    public function eat() {
        echo "I eat";
    }
}

class Robot implements Worker {
    public function work() {
        echo "I work";
    }
}
```
:::

## Dependency Inversion
Depend on abstractions, not on concrete classes.

::: details Example {open}
```php

interface Database {
    public function connect();
}

class MySQLDatabase implements Database {
    public function connect() {
        echo "MySQL connection";
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

Here:

- UserService depends on Database (interface)
- not on MySQLDatabase

👉 You can change the database without breaking the code