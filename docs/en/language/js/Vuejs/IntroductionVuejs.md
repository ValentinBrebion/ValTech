---
next:
    text: 'Vuejs 2'
    link: '/en/language/js/vuejs/vuejs2/IntroVuejs2'
prev: 
    text: 'Vuejs 3'
---
# Introduction to Vuejs

## <u>Definition</u>
VueJs is a framework for developing user interfaces. Developed entirely in <mark>Typescript</mark> since version 3, it gives Vue.js better maintainability and enhanced productivity for our developer friends. *It is a **progressive** JavaScript framework used to develop interactive and reactive web applications. It is often considered a "front-end" JavaScript framework or a client-side rendering framework.*

::: warning
Vuejs is based on 2 key concepts:
**<u>declarative rendering</u>**: is describing the rendering (**HTML**) based on the application state (**Javascript**).

**<u>reactivity</u>**: is how Vue tracks state changes in Javascript code and `updates the DOM in an optimized way if changes need to be made`.
:::

## <u>Option API (OAPI) VS Composition API (CAPI)??</u>

# Option API
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

# Composition API
### Example
```js
<script setup>
import { ref, onMounted } from 'vue'

const count = ref(0)

function increment() {
    count.value++
}
onMounted() {
    console.log('the initial count is `${count.value}`')
}
</setup>
<template>
    <button @click="increment">Count is :{{count}}/>
    </template>
```
>Vue.js's Composition API refers to <u>a function that can be used to ***encapsulate reusable logic*** in a Vue.js component or in other composables</u>. Composables are functions that return an object containing values and methods that can be used in a Vue component 