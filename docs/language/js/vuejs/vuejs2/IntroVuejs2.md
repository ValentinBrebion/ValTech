---
next: false
prev: false
---
# Introduction de VueJS

## <u>C'est quoi VueJS ❓</u>

*Vue.js est un framework JavaScript **progressif** utilisé pour développer des applications web interactives et réactives. Il est souvent considéré comme un framework JavaScript "front-end" ou un framework de rendu côté client.*
::: warning
Vue.js se concentre sur la construction de l'interface utilisateur (UI) et facilite la création de composants réutilisables. Il utilise une approche déclarative, ce qui signifie que vous définissez simplement le résultat souhaité, et Vue.js se charge de mettre à jour la page de manière réactive lorsque l'état des données change.


:::

## <u>Progressif ❓</u>

*VueJS est dit **progressif** dans le sens ou lorsque l'on va développer notre application, on va pouvoir mettre uniquement sur une partie de notre application ou sur une page entière ! à vous de décider !* 😉

## <u>Ses particularités </u>

::: tip
<u>**Composants :**</u> *Vue.js encourage la création de composants réutilisables qui encapsulent la logique et l'apparence d'une partie de l'interface utilisateur. Cela permet de structurer efficacement une application en morceaux modulaires.*

<u>**Liaison de données bidirectionnelle :**</u> *Vue.js offre une liaison de données bidirectionnelle entre les composants et les données, ce qui signifie que lorsque les données changent, l'interface utilisateur est automatiquement mise à jour, et vice versa.*

<u>**Directives :**</u> *Vue.js propose des directives personnalisées qui vous permettent d'ajouter des fonctionnalités spécifiques à vos éléments HTML. Par exemple, la directive v-if permet de conditionnerl'affichage d'un élément en fonction d'une expression.*

<u>**Gestion des événements :**</u> *Vue.js facilite la gestion des événements en vous permettant d'écouter les événements et de réagir en conséquence. Vous pouvez également créer vos propres événements personnalisés pour faciliter la communication entre les composants.*

<u>**Routage :**</u> *Vue.js propose un système de routage intégré qui vous permet de créer des applications à pages multiples avec des URL propres et des transitions fluides entre les vues.*

<u>**Écosystème extensible :**</u> *Vue.js dispose d'un écosystème riche en extensions et en plugins qui peuvent être utilisés pour ajouter des fonctionnalités supplémentaires à votre application.*
:::

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
## <u>Les fonctions "hook" de vuejs</u> ⤵️

# 1/ Les rendues déclaratifs : v-bind 
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

# 2/ Les conditions : v-if 

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

# 3/ Les itérations : v-for 

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