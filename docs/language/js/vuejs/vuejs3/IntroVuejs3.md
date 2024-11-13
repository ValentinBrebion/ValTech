---
next: false
prev: 
    text: 'Les hooks de vuejs'
    link: '/language/js/vuejs/vuejs2/hookVuejs'
---

# Introduction Vuejs 3

Dans la continuité de la version 2, la version 3 apporte une nouvelle approche plus performante notamment sur son API (composition API). Contrairement à l'API option de la version 2, la composition API apporte une nouvelle organisation de code axé sur la logique fonctionnelle plutôt que par type.

::: tip new features :tada:
`setup()` : La méthode `setup()` est le cœur de la Composition API. Elle est exécutée avant la création du composant et permet de définir des réactifs et des méthodes à utiliser dans le composant.
:::

## Quoi de nouveau dans la nouvelle version ?

### La performance :exploding_head:
::: tip Nouveautés
**<h4>Temps de montage des composants :</h4>** Vue 3 est environ `50%` plus rapide que Vue 2 lors de la phase de montage (initialisation des composants), particulièrement pour les applications avec beaucoup de composants ou des composants complexes.

**<h4>Taille du bundle :</h4>** La taille du code source de Vue 3 est environ `40%` plus petite que celle de Vue 2 dans les builds les plus légers. Cette réduction est rendue possible grâce à la modularité accrue et à l’optimisation de l’arbre d’analyse (tree-shaking).

**<h4>Temps de mise à jour (patch) :</h4>** Les opérations de mise à jour du DOM (patching) sont également beaucoup plus performantes, avec une amélioration d'environ `50-70%` selon le scénario. Cela concerne les situations où des changements fréquents et rapides du DOM se produisent, comme lors de l’animation ou de la manipulation de grandes listes.

**<h4>Allocation mémoire :</h4>** Vue 3 consomme également plus de `30%` de mémoire en moins par rapport à Vue 2, surtout dans les applications qui montent et démontent un grand nombre de composants dynamiques.
:::

### Typescript le héro :sunglasses:

::: warning TypeWrite
**<u>Vue 3 a été réécrit en TypeScript</u>**, ce qui permet une meilleure intégration et compatibilité avec TypeScript pour les développeurs qui choisissent d'utiliser ce langage. Cela apporte des avantages en matière de vérification des types et de support IDE.
:::

### l'API à changé !
::: warning API Composition
Vue 3 introduit un changement dans la façon dont l'application est montée. Au lieu d'utiliser new Vue(), vous devez maintenant utiliser createApp(). Par exemple :
```js
import { createApp } from 'vue';
const app = createApp(App);
app.mount('#app');
```
:::

### Trop sympa :sunglasses:

::: warning Outil de migration
Vue 3 propose un outil de migration pour aider à la transition depuis Vue 2 vers Vue 3. Il signale les parties du code qui nécessitent des ajustements pour être compatibles avec Vue 3.
Pour en savoir plus, veuillez consulter le lien : <a href="https://v3-migration.vuejs.org/" target="_blank"><Badge type="danger" text="Documentation" /></a>
:::

et plein d'autres changements...

## Les composables

Les composables dans Vue 3 sont des fonctions réutilisables basées sur la Composition API. Ils permettent de regrouper la logique réactive d'une application en dehors des composants, rendant cette logique plus facile à organiser et à partager à travers plusieurs composants.

::: info Avantages des composables
- <u><h4>Séparation des préoccupations :</h4></u> Les composables permettent d’organiser le code par logique fonctionnelle (ex : gestion d’état, événements, API) plutôt que par composant, ce qui améliore la lisibilité et la maintenabilité.

- <u><h4>Testabilité :</h4></u> Les fonctions composables sont plus faciles à tester que des mixins ou des objets de composants car elles sont des fonctions pures sans effet de bord direct.

- <u><h4>Plus propre que les mixins :</h4></u> Contrairement aux mixins, les composables évitent les conflits de noms et offrent plus de transparence sur les dépendances.
:::

## Fragments, Teleport, Suspense

::: warning features
- <u><h4>Fragments :</h4></u> Possibilité de retourner plusieurs éléments à la racine d’un composant sans avoir besoin d’un élément parent unique. lien: <a href="https://v3-migration.vuejs.org/new/fragments.html" target="_blank"><Badge type="danger" text="Documentation" /></a>
- <u><h4>Teleport :</h4></u> Permet de rendre des éléments DOM dans une autre partie de l’arbre DOM, en dehors de la hiérarchie du composant. lien: <a href="https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#teleport" target="_blank"><Badge type="danger" text="Documentation" /></a>
- <u><h4>Suspense :</h4></u> Gère le rendu asynchrone des composants, utile pour afficher un état de chargement lorsque des données ou des composants sont encore en cours de chargement. lien: <a href="https://www.monterail.com/blog/whats-new-in-vue-3-the-most-interesting-new-features#experimental-suspense" target="_blank"><Badge type="danger" text="Documentation" /></a>
:::