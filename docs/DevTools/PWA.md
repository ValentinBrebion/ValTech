---
next: false
prev: false
---
# Introduction au PWA
## Définition 
> L'histoire des Progressive Web Apps (PWA) remonte aux débuts des années 2010, lorsque les développeurs et les entreprises ont commencé à explorer de nouvelles façons de créer des expériences web plus riches et plus performantes, se rapprochant des applications natives. Ils ont ensuite été popularisé par Google vers 2015.

## Histoire

::: warning <h1 class="PWA__center">C'est quoi la PWA ?</h1>
<u>***<h3 class="PWA__center">Origines dans les applications web mobiles :</h3>***</u> *Avant l'émergence des PWA, les développeurs web ont travaillé sur des techniques pour améliorer l'expérience utilisateur des sites web sur les appareils mobiles. Cela inclut la conception réactive, qui permet aux sites web de s'adapter à différentes tailles d'écrans, ainsi que l'utilisation de caches pour stocker des données localement.*

<u>***<h3 class="PWA__center">Publication de l'article de Alex Russell et Frances Berriman :</h3>***</u> *En 2015, Alex Russell et Frances Berriman, des ingénieurs de Google, ont publié <a href="https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/">un article décrivant le concept des Progressive Web Apps</a>. Ils ont introduit l'idée d'utiliser les fonctionnalités modernes des navigateurs pour créer des applications web qui se comportent comme des applications natives.*

<u>***<h3 class="PWA__center">Caractéristiques clés des PWA :</h3>***</u> *Les PWA combinent plusieurs technologies existantes telles que les Service Workers, les Web App Manifests et les caches pour permettre aux applications web d'être installées sur des appareils, d'accéder aux fonctionnalités natives, et de fonctionner hors ligne.*

<u>***<h3 class="PWA__center">Appui des principaux navigateurs et des géants de la technologie :</h3>***</u> *Les navigateurs web majeurs, notamment Google Chrome, Mozilla Firefox, Microsoft Edge, et Apple Safari, ont commencé à implémenter des fonctionnalités permettant le support des PWA. De plus, des entreprises technologiques telles que Google et Microsoft ont fortement promu les PWA comme une alternative viable aux applications natives.*

<u>***<h3 class="PWA__center">Adoption croissante :</h3>***</u> *Les PWA ont commencé à gagner en popularité en raison de leur capacité à offrir une expérience utilisateur similaire à celle des applications natives tout en étant plus faciles à développer, déployer et mettre à jour. De nombreuses entreprises ont adopté les PWA pour leurs avantages en termes de coûts et de performances.*

<u>***<h3 class="PWA__center">Évolution continue :</h3>***</u> *Au fil du temps, les fonctionnalités des PWA ont continué à s'améliorer, offrant des expériences utilisateur de plus en plus riches. Les développeurs ont également exploré de nouvelles façons d'utiliser les PWA, telles que les applications de bureau et les expériences hors ligne avancées.*
:::

## Une minute.. des services workers ???
Un mot extrèmement stylé mais bien utile puisqu'ils offrent des fonctionnalités telles que **`la gestion de la mise en cache, la notification push et l'interception des requêtes réseau`**.

::: danger ⚠️ Attention
Les fichiers `manifest.json` et `sw.js` doivent toujours être à la racine du fichier
:::

::: details Code à mettre pour activer les services workers (dans head)
```js
if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('/sw.js’)
.then((reg) => console.log("sw registered"), reg).catch((err) => console.log("sw not registered!”), err);}
```
>Le code suivant va enregistrer les services worker dans le fichier sw.js auquel nous pouvons affecter des évènements spécifique
à l'écoute des actions sur la page. ***Vous pouvez laissez vide le fichier sw.js si vous voulez uniquement rendre votre site téléchargeable. On s'en servira par exemple pour la mise en cache si on veut qu'hors ligne notre site conserve les liens et le contenu***
:::

## Une minute.. le manifest.json ???
*Encore un mot inconnu et qui n'a pas grand sens dis comme ça mais qui est l'élément central d'une PWA. La présence d'un manifeste procure également d'autres avantages. En voici quelques uns:*

1. Il permet à certains navigateurs d'ajouter au bureau ou à l'écran d'accueil un raccourci vers la PWA
2. Il permet à la PWA d'être référencée sur certains apps stores tels que le Windows Store (opens new window).
3. Il permet d'afficher la PWA en plein écran, sans UI navigateur, avec un écran de lancement initial (splashscreen) lors de l'ouverture de la PWA

::: details Propriétés du manifest
- **<u>`name:`</u>**  affiché sur le splash-screen
- **<u>`short_name:`</u>**  affiché en dessous du raccourci sur le bureau ou l'écran d'accueil
- **<u>`description:`</u>**  une description générale de l'application
- **<u>`start_url:`</u>** l'URL qui est chargée en premier quand on ouvre l'application depuis son raccourci sur le bureau ou l'écran d'accueil
- **<u>`background_color:`</u>**   La couleur d'arrière-plan du splash-screen
- **<u>`theme_color:`</u>**  la couleur de thème général de l'application, utilisée notamment dans les barres de statut si elles sont affichées
- **<u>`display:`</u>**   spécifie le mode d'affichage. Voici les différents modes disponibles triés par ordre de fallback :
- **<u>`fullscreen:`</u>** toute la zone d'affichage disponible est utilisée et aucun agent utilisateur n'est montré.
- **<u>`standalone:`</u>** comportement similaire a une application native. Cela peut signifier que l'application a sa propre fenêtre, sa propre icône dans le lanceur d'applications, etc. Dans ce mode, l'agent utilisateur va exclure les éléments d'interface qui permettent de contrôler la navigation mais peut inclure d'autres éléments comme une barre de statut par exemple.
- **<u>`minimal-ui:`</u>** l'application va ressembler et se comporter comme une application autonome, mais elle aura quelques élements d'interface permettant de contrôler la navigation. Les éléments varient en fonction du navigateur et du système.
- **<u>`browser (par défaut):`</u>** l'application s'ouvre dans un nouvel onglet ou une nouvelle fenêtre du navigateur, en fonction du navigateur et de la plateforme
- **<u>`icons:`</u>**  liste d'icônes de l'application de différentes résolutions, utilisées notamment pour le raccourci et le splashscreen. Les tailles à fournir recommandées sont a minima 192x192px et 512x512px. L'appareil choisira la meilleure icône automatiquement selon les cas. Il est également intéressant de fournir en fallback une version vectorielle SVG de l'icône qui s'adaptera à un maximum de tailles.
- **<u>`screenshots:`</u>** liste de captures d'écran de l'application dans différents facteurs de forme, affichées dans certains stores d'applications web ou dans l'interface de la fenêtre d'installation pour certains navigateurs.
:::
