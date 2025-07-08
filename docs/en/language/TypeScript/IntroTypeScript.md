---
next: 
    text: 'Introduction to Java'
    link: '/en/language/java/IntroductionJava'
prev: 
    text: 'SQL'
    link: '/en/language/sql/SQL'
---

# Introduction to TypeScript

TypeScript is an open-source programming language developed by Microsoft, which was released in 2012. Developed to enhance JavaScript, TypeScript was created to address JavaScript's weaknesses such as the lack of strong typing that can lead to subtle errors that are difficult to detect. Here's an example:
```js
function add(a, b) {
  return a + b;
}

let result = add(10, "20"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

In the code above, typing is not enforced, therefore passing a string instead of a `Number` type will generate an unexpected result and won't trigger an error. This is precisely why TypeScript was created. Here's the correct code using TypeScript:

```ts
function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, "20"); 
```

## Types
Thanks to TypeScript, you can statically or optionally type your variables and integrate them into your JavaScript functions. It even supports modern JavaScript features including those added in ES6. How awesome! 💪
Before discussing static and optional typing, let me introduce you to the typing possibilities.

:::info Typing
### I - Primitives
- `String`: This concerns character strings.
- `Number`: This concerns integer numbers. **<u>In JavaScript, there is no equivalent to `int` or `float`. Everything is simply a `number`</u>**.
- `Boolean`: This concerns the two values `true` and `false`.
### II - Arrays
Let's take an example, imagine the following number array: [1,5,6] how would you type it? It's obvious that it only contains numbers and therefore it's a `Number` type, but it's an array so the answer is quite simple. 
::: details What? You can't figure it out?
Let me give you the answer: `number[]`. Nothing complex, see? 😜
:::
::: info II - Arrays continued
The same logic will apply for an array of strings, booleans, etc... There is also a second notation that means exactly the same thing: `Array<number>`.
:::
:::warning <h4 style="margin:0px;">The any type</h4>
The `any` type is a special type in TypeScript that can be used for particular values or if you want type checking not to cause errors.

### ⚠️ Warning 
You little rascals, I see you coming, avoid falling into the easy trap of putting any everywhere. Think about your code maintainability! Be consistent.

### Example
```ts
let obj: any = { x:0, y:'USA', z: ['Area', 'Population']}
```
:::


## Static Typing
It means that each variable is explicitly defined and checked before program execution.
Ex: 
```ts
let name: string = 'hello world'
let isValid: boolean = false
let count: number = 0
```
## Optional Typing
It means that you don't have to declare a type for each variable. TypeScript will detect on its own what type it is.

```ts
let name = 'hello world' // TypeScript will understand by itself that it's a string type
let isValid = false
```

## Interfaces
An Interface is a structure that defines the shapes and types of objects without specifying their implementation. It describes its properties, their types, and the methods it must implement.

Ex: 
```ts
interface Person {
  name: string;
  age: number;
  greet(): string;
}

```
### Using an Interface
```ts
const user: Person = {
  name: "Alice",
  age: 30,
  greet() {
    return "Hello, " + this.name;
  }
};

console.log(user.greet());  // Displays "Hello, Alice"
```
### Interface with Optional Properties
Interfaces also allow declaring optional properties with the `?` sign.

```ts
interface Car {
  brand: string;
  model: string;
  year?: number; // `year` is optional
}

const car1: Car = { brand: "Toyota", model: "Corolla" };
const car2: Car = { brand: "Honda", model: "Civic", year: 2020 };

```
Here, `year` is optional, so both `car1` and `car2` are valid.

### Interface with Functions
An interface can also describe function signatures:

```ts
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
console.log(add(5, 10)); // Displays 15
```
## Resources
Links to the official documentation: <u><a href="https://www.typescriptlang.org/" target="_blank"><Badge type="info" text="Documentation" /></a></u> 