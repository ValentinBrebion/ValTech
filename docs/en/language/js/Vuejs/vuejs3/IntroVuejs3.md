---
next: false
prev: 
    text: 'Vue.js hooks'
    link: '/en/language/js/vuejs/vuejs2/hookVuejs'
---

# Introduction to Vuejs 3

Following version 2, version 3 brings a new, more performant approach, particularly with its API (composition API). Unlike version 2's option API, the composition API brings a new code organization focused on functional logic rather than by type.

::: tip new features :tada:
`setup()`: The `setup()` method is the heart of the Composition API. It is executed before the component's creation and allows defining reactives and methods to be used in the component.
:::

## What's new in the new version?

### Performance :exploding_head:
::: tip New Features
**<h4>Component mounting time:</h4>** Vue 3 is about `50%` faster than Vue 2 during the mounting phase (component initialization), particularly for applications with many components or complex components.

**<h4>Bundle size:</h4>** Vue 3's source code size is about `40%` smaller than Vue 2's in the lightest builds. This reduction is made possible thanks to increased modularity and tree-shaking optimization.

**<h4>Update (patch) time:</h4>** DOM update operations (patching) are also much more performant, with an improvement of about `50-70%` depending on the scenario. This concerns situations where frequent and rapid DOM changes occur, such as during animation or manipulation of large lists.

**<h4>Memory allocation:</h4>** Vue 3 also consumes over `30%` less memory compared to Vue 2, especially in applications that mount and unmount a large number of dynamic components.
:::

### TypeScript the hero :sunglasses:

::: warning TypeWrite
**<u>Vue 3 has been rewritten in TypeScript</u>**, which allows better integration and compatibility with TypeScript for developers who choose to use this language. This brings advantages in terms of type checking and IDE support.
:::

### The API has changed!
::: warning Composition API
Vue 3 introduces a change in how the application is mounted. Instead of using new Vue(), you now need to use createApp(). For example:
```js
import { createApp } from 'vue';
const app = createApp(App);
app.mount('#app');
```
:::

### So cool :sunglasses:

::: warning Migration Tool
Vue 3 offers a migration tool to help with the transition from Vue 2 to Vue 3. It flags parts of the code that need adjustments to be compatible with Vue 3.
To learn more, please visit: <a href="https://v3-migration.vuejs.org/" target="_blank"><Badge type="danger" text="Documentation" /></a>
:::

and many other changes...

## Composables

Composables in Vue 3 are reusable functions based on the Composition API. They allow grouping reactive logic of an application outside of components, making this logic easier to organize and share across multiple components.

::: info Advantages of composables
- <u><h4>Separation of concerns:</h4></u> Composables allow organizing code by functional logic (e.g., state management, events, API) rather than by component, which improves readability and maintainability.

- <u><h4>Testability:</h4></u> Composable functions are easier to test than mixins or component objects because they are pure functions without direct side effects.

- <u><h4>Cleaner than mixins:</h4></u> Unlike mixins, composables avoid name conflicts and offer more transparency about dependencies.
:::

## Fragments, Teleport, Suspense

::: warning features
- <u><h4>Fragments:</h4></u> Ability to return multiple elements at the root of a component without needing a single parent element. link: <a href="https://v3-migration.vuejs.org/new/fragments.html" target="_blank"><Badge type="danger" text="Documentation" /></a>
- <u><h4>Teleport:</h4></u> Allows rendering DOM elements in another part of the DOM tree, outside the component hierarchy. link: <a href="https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#teleport" target="_blank"><Badge type="danger" text="Documentation" /></a>
- <u><h4>Suspense:</h4></u> Handles asynchronous component rendering, useful for displaying a loading state when data or components are still loading. link: <a href="https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#experimental-suspense" target="_blank"><Badge type="danger" text="Documentation" /></a>
::: 