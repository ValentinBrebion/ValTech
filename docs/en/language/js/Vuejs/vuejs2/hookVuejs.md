# <u>Vue.js "hook" functions</u> ⤵️

## 1/ Declarative Rendering: v-bind
::: warning
The v-bind attribute is used in Vue.js to **bind data to HTML element properties**. This means you can use v-bind to tell Vue.js to <u>automatically update the value of a property when the data changes</u>.
:::

<u>**Context of using V-bind:**</u>

:::info
*Let's say you have a Vue.js application that displays a user's name. You have a `name` variable in your Vue.js code and you want to bind this variable to an HTML element to display the name on screen.*

<u>**HTML:**</u>

```html
<div id="app">
  <p>My name is: <span v-bind:text="name"></span></p>
</div>
```

<u>**JS:**</u>

```js
const app = new Vue({
  el: '#app',
  data: {
    name: 'John Doe'
  }
})
```
<br/>

*In this example, we used `v-bind:text` to bind the value of name to the text property of the `<span>` element. This means that whenever the value of name changes, the value displayed in the `<span>` will be updated to match the new value.*

*Initially, the displayed name will be <u>**"John Doe"**</u> (the initial value of name set in the Vue.js code). If you change the value of name in the Vue.js code, for example using `app.name` = <u>**"Jane Smith";**</u>, the displayed name will automatically update to show "Jane Smith".*
:::
<br/>

## 2/ Conditions: v-if

::: warning
The `v-if` attribute is a special feature in Vue.js that **allows us to control the display of elements in our application (Conditional Rendering).**

Imagine you have a toy that turns on or off based on a button. You want the toy to **turn on only if the button is pressed, otherwise it stays off.** <u>**That's exactly what the `v-if` attribute does!**</u>

With Vue.js, you can use v-if to tell your application <u>when to show or hide certain elements based on a condition</u>. If the condition is true, the element will be displayed on screen. Otherwise, it will be hidden.
:::

<u>**Context of using V-if:**</u>

:::info
*Let's say you have a variable called **toyOn** that can be `true` or `false` depending on whether the button is pressed or not. You can use v-if to <u>control the toy's display like this:</u>*

<u>**HTML:**</u>

```html
<div id="app">
  <div v-if="toyOn">
    The toy is on!
  </div>
</div>
```

<u>**JS:**</u>
```js
const app = new Vue({
  el: '#app',
  data: {
    toyOn: true
  }
})
```
:::

## 3/ Iterations: v-for

::: warning
The `v-for` attribute is a feature in Vue.js that **allows us to display a list of items from an array.**
:::

<u>**Context of using V-for:**</u>

:::info
*Let's say you want to display a shopping list. You have an array with data inside but how do you display it?*

Nothing could be simpler! 😁

<u>**JS:**</u>
```js
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Fruit juice' },
      { text: 'Lemon' },
      { text: 'Tomato' }
    ]
  }
})
```

<u>**HTML:**</u>

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
:::tip Rendered
1. Fruit juice
2. Lemon
3. Tomato
:::
*The `v-for` attribute is very handy when you need to display multiple elements dynamically, like a to-do list or a photo gallery.* 