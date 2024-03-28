---
next:
    text: 'Vuejs 2'
prev: 
    text: 'Vuejs 3'
---
# Introduction à Vuejs

## <u>Définition</u>
VueJs est un framework permettant de développer des interfaces utilisateur. Développé entièrement en <mark>Typescript</mark> depuis la version 3, il lui confère à vuejs une meilleure maintenabilité ainsi qu'un gain de productivité boostée pour nos amies développeurs.*C'est est un framework JavaScript **progressif** utilisé pour développer des applications web interactives et réactives. Il est souvent considéré comme un framework JavaScript "front-end" ou un framework de rendu côté client.*

::: warning
Vuejs est fondé sur 2 concepts clés : 
**<u>le rendu déclaratif</u>**: est le fait de décrire le rendu (**HTML**) en fonction de l'état de l'application (**Javascript**).

**<u>la réactivité</u>**: est le fait que Vue suit les changements d'état dans le code Javascript et `met à jour le DOM de manière optimisée si des changements doivent être fait`.
:::

## <u> Option api (OAPI) VS option composition (CAPI) ??</u>

# Option API
### Exemple : 
```javascript
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="changeMessage">Changer le message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Bonjour, Vue.js!'
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Le message a été changé!'
    }
  }
}
</script>
```

>*L'API des options de Vuejs fait <u>***référence à l'ensemble des options que vous pouvez utiliser pour configurer et définir***</u> le comportement d'un composant Vue.js. Ces options sont utilisées dans la définition des composants Vue.js et permettent de spécifier les données, les méthodes, les propriétés calculées, les hooks de cycle de vie et bien plus encore.*

::: info En voici les plus utilisées :
<u>**data**</u>: Cette option renvoie un objet contenant les données initiales du composant.

<u>**methods**</u>: Vous pouvez définir des méthodes personnalisées pour votre composant dans cette option.

<u>**computed**</u>: Vous pouvez définir des propriétés calculées qui réagissent aux changements des données.

<u>**watch**</u>: Cette option vous permet de surveiller les changements sur les propriétés de données ou les propriétés calculées et d'exécuter une fonction en réponse à ces changements.

<u>**props**</u>: Utilisé pour spécifier les propriétés que le composant parent peut passer au composant enfant.

<u>**components**</u>: Vous permet de déclarer les composants enfants utilisés dans le composant actuel.

<u>**created, mounted, updated, destroyed**</u>: Ces options sont des hooks du cycle de vie du composant qui vous permettent d'exécuter du code à des moments spécifiques du cycle de vie du composant.

<u>**filters**</u>: Vous permet de définir des filtres réutilisables pour formater les données dans les templates.

<u>**directives**</u>: Vous permet de définir des directives personnalisées pour manipuler le DOM.
:::

En somme, l'option api propose plusieurs `scopes` utile pour le développement des interfaces. Les datas sont accessibles avec `this`.

# Composable API
### Exemple
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
>L'option composable de Vue.js fait référence à <u>une fonction qui peut être utilisée pour ***encapsuler la logique réutilisable*** dans un composant Vue.js ou dans d'autres composables</u>. Les composables sont une fonction qui retourne un objet contenant des valeurs et des méthodes utilisables dans un composant Vue

