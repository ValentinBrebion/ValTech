---
next: 
    text: 'Les hooks de vuejs'
    link: '/language/js/vuejs/vuejs2/hookVuejs'
prev: false
---
# Introduction de VueJS

## <u>C'est quoi VueJS ❓</u>

VueJs est un framework permettant de développer des interfaces utilisateur. Développé entièrement en <mark>Typescript</mark> depuis la version 3, il lui confère à vuejs une meilleure maintenabilité ainsi qu'un gain de productivité boostée pour nos amies développeurs.</br></br>
*C'est est un framework JavaScript **progressif** utilisé pour développer des applications web interactives et réactives. Il est souvent considéré comme un framework JavaScript "front-end" ou un framework de rendu côté client.*
::: warning
Vue.js se concentre sur la construction de l'interface utilisateur (UI) et facilite la création de composants réutilisables. Il utilise une approche déclarative, ce qui signifie que vous définissez simplement le résultat souhaité, et Vue.js se charge de mettre à jour la page de manière réactive lorsque l'état des données change.
:::

## <u>Progressif ❓</u>

*VueJS est dit **progressif** dans le sens ou lorsque l'on va développer notre application, on va pouvoir mettre uniquement sur une partie de notre application ou sur une page entière ! à vous de décider !* 😉

## <u>Ses particularités</u>

::: tip Il y en a plusieurs 😜
<u>**Composants :**</u> Vue.js encourage la création de composants réutilisables qui encapsulent la logique et l'apparence d'une partie de l'interface utilisateur. Cela permet de structurer efficacement une application en morceaux modulaires.

<u>**Liaison de données bidirectionnelle :**</u> *Vue.js offre une liaison de données bidirectionnelle entre les composants et les données, ce qui signifie que lorsque les données changent, l'interface utilisateur est automatiquement mise à jour, et vice versa.*

<u>**Directives :**</u> *Vue.js propose des directives personnalisées qui vous permettent d'ajouter des fonctionnalités spécifiques à vos éléments HTML. Par exemple, la directive v-if permet de conditionnerl'affichage d'un élément en fonction d'une expression.*

<u>**Gestion des événements :**</u> *Vue.js facilite la gestion des événements en vous permettant d'écouter les événements et de réagir en conséquence. Vous pouvez également créer vos propres événements personnalisés pour faciliter la communication entre les composants.*

<u>**Routage :**</u> *Vue.js propose un système de routage intégré qui vous permet de créer des applications à pages multiples avec des URL propres et des transitions fluides entre les vues.*

<u>**Écosystème extensible :**</u> *Vue.js dispose d'un écosystème riche en extensions et en plugins qui peuvent être utilisés pour ajouter des fonctionnalités supplémentaires à votre application.*
:::

## <u> Option API (OAPI)</u>
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

## <u>Comment l'installer ❓</u>

*Rien de plus simple ! il suffit de créer une page HTML et de mettre entre les balises header cette ligne de commande :*

::: code-group

```html [Première solution]
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo VueJS</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> // [!code focus]
  </head>
  <body>
    <!-- Votre code ici -->
  </body>
</html>
```

```html [deuxième solution]
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo VueJS</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2"></script> // [!code focus]
  </head>
  <body>
    <!-- Votre code ici -->
  </body>
</html>
```

:::




ou bien de passer par une commande NPM : pour installer Vue Js 2 tapez la commande suivante :

```shell
npm install vue@^2
```
## <u>Comment savoir si ça marche ❓</u>

**Vous osez douter de moi ?? non plus sérieusement Si vous voulez savoir si le bout de code que vous avez ajouté dans votre header vous pouvez ajouter ce bout de code dans votre page HTML :**

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo VueJS</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script> 
  </head>
  <body>
    <p>Voici un calcul simple : </p>
    {{ 2 + 4 }}// [!code ++]
  </body>
</html>
```
En lançant le live de la page HTML vous obtiendrez :

```html
Voici un calcul simple : 
6
```

## <u>Maintenant la structure! 😉 </u><a href="https://v2.vuejs.org/v2/guide/#Declarative-Rendering" target="_blank"><Badge type="tip" text="Documentation" /></a>

La on rentre dans le concret, comment une application vuejs (2) est-elle structurée ? Est-ce compliqué à prendre en main ? Est-ce que... STOP ❗<br>

*Nous allons commencer par le B-A BA à savoir la création d'une vue.
Dans votre page html, ajoutez une div qui va être la cible de notre vue puis insérer notre variable qui va contenir notre donnée.*

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Démo VueJS</title>
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
Vous obtiendrez le résultat suivant directement dans votre page html :

:::tip Rendue
**Hello Vue !**
:::

C'est quoi ces options la ❓

::: info
`data` => Vous déclarerez des variables dont vous aurez besoin maintenant ou plus tard. Il peut-être de tout types (booléen, string, int, tableau, error...).

`el` => Il fonctionne exactement comme un `document.getElementById` de Javascript. **En effet, dans votre Vue vous allez assignez l'id de votre HTML à votre Vue par la propriété `el`.**
:::

## Ressources: 
Liens vers la documentation officelle :<u><a href="https://v2.vuejs.org/v2/guide/" target="_blank"><Badge type="info" text="Documentation" /></a></u>