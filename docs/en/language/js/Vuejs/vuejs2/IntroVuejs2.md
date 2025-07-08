---
next: 
    text: 'Vue.js hooks'
    link: '/en/language/js/vuejs/vuejs2/hookVuejs'
prev: false
---
# Introduction to VueJS

## <u>What is VueJS ❓</u>

VueJs is a framework for developing user interfaces. Developed entirely in <mark>Typescript</mark> since version 3, it gives Vue.js better maintainability and enhanced productivity for our developer friends.</br></br>
*It is a **progressive** JavaScript framework used to develop interactive and reactive web applications. It is often considered a "front-end" JavaScript framework or a client-side rendering framework.*
::: warning
Vue.js focuses on building the user interface (UI) and facilitates the creation of reusable components. It uses a declarative approach, which means you simply define the desired result, and Vue.js handles updating the page reactively when the data state changes.
:::

## <u>Progressive ❓</u>

*VueJS is called **progressive** in the sense that when developing our application, we can implement it only on a part of our application or on an entire page! It's up to you to decide!* 😉

## <u>Its Features</u>

::: tip There are several 😜
<u>**Components:**</u> Vue.js encourages the creation of reusable components that encapsulate the logic and appearance of a part of the user interface. This allows for efficiently structuring an application into modular pieces.

<u>**Two-way Data Binding:**</u> *Vue.js offers two-way data binding between components and data, which means that when data changes, the user interface is automatically updated, and vice versa.*

<u>**Directives:**</u> *Vue.js provides custom directives that allow you to add specific functionality to your HTML elements. For example, the v-if directive allows you to conditionally display an element based on an expression.*

<u>**Event Handling:**</u> *Vue.js makes event handling easy by allowing you to listen to events and react accordingly. You can also create your own custom events to facilitate communication between components.*

<u>**Routing:**</u> *Vue.js offers an integrated routing system that allows you to create multi-page applications with clean URLs and smooth transitions between views.*

<u>**Extensible Ecosystem:**</u> *Vue.js has a rich ecosystem of extensions and plugins that can be used to add additional functionality to your application.*
:::

## <u>Option API (OAPI)</u>
### Example:
```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Change message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue.js!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'The message has been changed!'
    }
  }
}
</script>
```

>*Vue.js's Option API <u>***refers to the set of options you can use to configure and define***</u> a Vue.js component's behavior. These options are used in Vue.js component definitions and allow you to specify data, methods, computed properties, lifecycle hooks, and much more.*

::: info Here are the most commonly used ones:
<u>**data**</u>: This option returns an object containing the component's initial data.

<u>**methods**</u>: You can define custom methods for your component in this option.

<u>**computed**</u>: You can define computed properties that react to data changes.

<u>**watch**</u>: This option allows you to watch for changes in data properties or computed properties and execute a function in response to these changes.

<u>**props**</u>: Used to specify properties that the parent component can pass to the child component.

<u>**components**</u>: Allows you to declare child components used in the current component.

<u>**created, mounted, updated, destroyed**</u>: These options are component lifecycle hooks that allow you to execute code at specific moments in the component's lifecycle.

<u>**filters**</u>: Allows you to define reusable filters for formatting data in templates.

<u>**directives**</u>: Allows you to define custom directives for manipulating the DOM.
:::

In summary, the option API provides several useful `scopes` for interface development. Data is accessible using `this`.

## <u>How to install it ❓</u>

*Nothing could be simpler! Just create an HTML page and put this command line between the header tags:*

::: code-group

```html [First solution]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJS Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> // [!code focus]
  </head>
  <body>
    <!-- Your code here -->
  </body>
</html>
```

```html [Second solution]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJS Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> // [!code focus]
  </head>
  <body>
    <!-- Your code here -->
  </body>
</html>
```

:::

or use an NPM command: to install Vue.js 2, type the following command:

```shell
npm install vue@^2
```

## <u>How to know if it works ❓</u>

**You dare doubt me?? No, more seriously, if you want to know if the code snippet you added in your header works, you can add this code snippet to your HTML page:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJS Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> 
  </head>
  <body>
    <p>Here's a simple calculation: </p>
    {{ 2 + 4 }}// [!code ++]
  </body>
</html>
```
When launching the HTML page live, you'll get:

```html
Here's a simple calculation:
6
```

## <u>Now the structure! 😉 </u><a href="https://v2.vuejs.org/v2/guide/#Declarative-Rendering" target="_blank"><Badge type="tip" text="Documentation" /></a>

Now we're getting to the concrete part, how is a Vue.js (2) application structured? Is it complicated to get started with? Is it... STOP ❗<br>

*We'll start with the basics, namely creating a view.
In your HTML page, add a div that will be the target of our view, then insert our variable that will contain our data.*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>VueJS Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> 
  </head>
  <body>
    <div id="app">// [!code ++]
        {{ message }}// [!code ++]
    </div>// [!code ++]
  </body>
</html>
```
```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'// [!code ++]
  }
})
```
You'll get the following result directly in your HTML page:

:::tip Rendered
**Hello Vue!**
:::

What are these options ❓

::: info
`data` => You'll declare variables that you'll need now or later. It can be of any type (boolean, string, int, array, error...).

`el` => It works exactly like Javascript's `document.getElementById`. **Indeed, in your Vue, you'll assign the HTML id to your Vue through the `el` property.**
:::

## Resources:
Links to the official documentation: <u><a href="https://v2.vuejs.org/v2/guide/" target="_blank"><Badge type="info" text="Documentation" /></a></u> 