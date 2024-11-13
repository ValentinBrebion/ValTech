---
next: false
prev: 
    text: 'SQL'
    link: 'language/sql/SQL'
---

# Introduction TypeScript

TypeScript est un langage de programmation open-source développé par Microsoft, qui a vu le jour en 2012. Développé pour améliorer Javascript, TypeScript a été crée pour palier les faiblesses de javascript telle que l'absence de typage fort pouvant entrainer des erreurs subtiles difficiles à détécter. Voici un exemple :
```js
function add(a, b) {
  return a + b;
}

let result = add(10, "20"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

Dans le code ci dessus, le typage n'est pas imposé par conséquent le fait de passer une chaine de caractères au lieu d'un nombre type `Number` va générer un résultat inattendu et ne va pas provoquer d'erreur. C'est dans ce but précis que Typescript à été crée. Voici le bon code avec l'utilisation de TypeScript :

```ts
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); 
```

## Les Types
Grâce à TypeScript, vous allez pouvoir typer vos variables de manière statique ou optionnel et l'intégrer dans vos fonctions Javascript. Il prend même en charge les fonctionnalités modernes de Javascript y compris celles ajoutées dans ES6. Trop fort ! 💪
Avant de discuter du typage statique et optionnel, je vais vous présenter les possibilités de typage.

:::info Typage
### I - Les primitifs
- `String`: Cela concerne les chaînes de caractères.
- `Number`: Cela concerne les nombres entier. **<u>En Javascript, il n'existe aucun équivalent à un `int` ou `float`. Tout est simplement un `number`</u>**.
- `Boolean`: Cela concerne les deux valeurs `true` et `false`.
### II - Les tableaux
Prenons un exemple, imaginons le tableau de nombre suivant : [1,5,6] comment vous l'auriez typé ? Il est évident qu'il ne contient que des nombres et que par conséquent c'est un type `Number` mais c'est un tableau donc la réponse est toutes simple. 
::: details Quoi ? vous ne trouvez pas ?
allez je vous donne la réponse : `number[]`. Rien de complexe voyez-vous ? 😜
:::
::: info II - Les tableaux suite
Il en découlera la même logique pour un tableau de string, de boolean ect... Il existe aussi une deuxième notation qui signifie exactement la même chose : `Array<number>`.
:::
:::warning <h4 style="margin:0px;">le type any</h4>
Le type `any` est un type spécial dans TypeScript qui peut être utilisé pour les valeurs particulières ou si vous voulez que la vérification de types ne cause pas d'erreur.

### ⚠️ Attention 
Bande de petit coquin je vous vois venir, éviter de tomber dans la faciliter à mettre des any partout. Réfléchissez à la maintenabilité de votre code ! Soyez cohérent.

### Exemple
```ts
let obj: any = { x:0, y:'France', z: ['Superficie', 'nbHabitant']}
```
:::


## Typage statique
Il signifie que chaque variable est défini explicitement et vérifié avant l'exécution du programme.
Ex: 
```ts
let name: string = 'hello world'
let isValid: boolean = false
let count: number = 0
```
## Typage optionnel
Il signifie qu'il n'est pas obligé de déclarer un type pour chaque variable. TypeScript va détécter tout seul comme un grand de quel type il sagit.

```ts
let name = 'hello world' // TypeScript va comprendre de lui même que c'est un type string
let isValid = false
```

## Interfaces
Une Interface est une structure qui définit les formes et mes types des objets sans en spécifier l'implémentation. Elle décrit ses propriétés, leurs types et les méthodes qu'elle doit implémenter.

Ex: 
```ts
interface Person {
  name: string;
  age: number;
  greet(): string;
}

```
### Utilisation d'une interface
```ts
const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return "Hello, " + this.name;
  }
};

console.log(user.greet());  // Affiche "Hello, Alice"
```
### Interface avec des propriétés optionnelles
Les interfaces permettent aussi de déclarer des propriétés optionnelles avec le signe `?`.

```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // `year` est optionnel
}

const car1: Car = { brand: "Toyota", model: "Corolla" };
const car2: Car = { brand: "Honda", model: "Civic", year: 2020 };

```
Ici, `year` est optionnelle, donc `car1` et `car2` sont tous deux valides.

### Interface avec des Fontions
Une interface peut aussi décrire des signatures de fonction:

```ts
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 10)); // Affiche 15
```
## Ressources
Liens vers la documentation officelle :<u><a href="https://www.typescriptlang.org/fr/" target="_blank"><Badge type="info" text="Documentation" /></a></u>