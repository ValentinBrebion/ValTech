---
next: false
prev: 
    text: 'Introduction vuejs 2'
    link: 'fr/language/js/vuejs/vuejs2/IntroVuejs2'
---
# <u>Les fonctions "hook" de vuejs</u> ⤵️

## 1/ Les rendues déclaratifs : v-bind 
::: warning
L'attribut v-bind est utilisé dans Vue.js pour **lier des données à des propriétés d'éléments HTML**. Cela signifie que tu peux utiliser v-bind pour dire à Vue.js de <u>mettre à jour automatiquement la valeur d'une propriété lorsque les données changent</u>.
:::

<u>**Contexte d'application du V-bind :**</u>

:::info
*Supposons que tu as une application Vue.js qui affiche le nom d'un utilisateur. Tu as une variable `nom` dans ton code Vue.js et tu veux lier cette variable à un élément HTML pour afficher le nom à l'écran.*

<u>**HTML :**</u>

```html
<div id="app">
  <p>Mon nom est : <span v-bind:text="nom"></span></p>
</div>
```

<u>**JS :**</u>

```js

const app = new Vue({
  el: '#app',
  data: {
    nom: 'John Doe'
  }
})

```
<br/>

*Dans cet exemple, nous avons utilisé `v-bind:text` pour lier la valeur de nom à la propriété text de l'élément `<span>`. Cela signifie que chaque fois que la valeur de nom change, la valeur affichée dans le `<span>` sera mise à jour pour correspondre à la nouvelle valeur.*

*Au début, le nom affiché sera <u>**"John Doe"**</u> (la valeur initiale de nom définie dans le code Vue.js). Si tu changes la valeur de nom dans le code Vue.js, par exemple en utilisant `app.nom` = <u>**"Jane Smith";**</u>, le nom affiché sera automatiquement mis à jour pour afficher "Jane Smith".*
:::
<br/>

## 2/ Les conditions : v-if 

::: warning
L'attribut `v-if` est une fonctionnalité spéciale dans Vue.js qui nous **permet de contrôler l'affichage des éléments dans notre application (Rendue conditionnel).**

Imagine que tu as un jouet qui s'allume ou s'éteint en fonction d'un bouton. Tu voudrais que le jouet **s'allume seulement si le bouton est enfoncé, sinon il reste éteint.** <u>**C'est exactement ce que fait l'attribut `v-if` !**</u>

Avec Vue.js, tu peux utiliser v-if pour dire à ton application <u>quand afficher ou cacher certains éléments en fonction d'une condition</u>. Si la condition est vraie, l'élément sera affiché à l'écran. Sinon, il sera caché.
:::

<u>**Contexte d'application du V-if :**</u>

:::info
*Supposons que tu as une variable appelée **jouetAllume** qui peut être `true` ou `false` en fonction de si le bouton est enfoncé ou non. Tu peux utiliser v-if pour <u>contrôler l'affichage du jouet de cette manière :</u>*

<u>**HTML :**</u>

```html
<div id="app">
  <div v-if="jouetAllume">
    Le jouet est allumé !
  </div>
</div>
```

<u>**JS :**</u>
```js

const app = new Vue({
  el: '#app',
  data: {
    jouetAllume: true
  }
})
```

:::

## 3/ Les itérations : v-for 

::: warning
L'attribut `v-for` est une fonctionnalité dans Vue.js qui nous **permet d'afficher une liste d'éléments depuis un tableau (Array).**
:::

<u>**Contexte d'application du V-for :**</u>

:::info
*Supposons que tu veuillez afficher une liste de course. Tu as donc un tableau avec des données à l'intérieur mais comment les afficher ?*

Rien de plus simple !😁

<u>**JS :**</u>
```js

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Jus de fruit' },
      { text: 'Citron' },
      { text: 'Tomate' }
    ]
  }
})
```

<u>**HTML :**</u>

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>
</div>
```
:::tip Rendu
1. Jus de fruit
2. Citron
3. Tomate
:::
*L'attribut `v-for` est très pratique lorsque tu as besoin d'afficher plusieurs éléments de manière dynamique, comme une liste de tâches à faire ou une galerie de photos.*