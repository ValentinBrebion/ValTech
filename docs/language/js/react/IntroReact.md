---
next: 
    text: 'Les composants'
    link: 'language/js/react/Composants'
prev: false
---
# Introduction à React
>*React est une bibliothèque Javascript dite <u>déclarative, efficace et flexible</u> conçue pour faire des interfaces utilisateur. Développé par Facebook en 2013, la bibliothèque est maintenant utilisé dans plein d’entreprise comme Facebook (nan sans blague) ,Netflix, Slack…*

## <u>Pré-requis</u>

- Node ≥ 14.0.0
- npm ≥ 5.6

## <u>Syntaxe JSX</u>
::: tip
React a introduit une nouvelle syntaxe propre à la bibliothèque : le `JSX (Javascript XML)`. C’est une extension de syntaxe utilisée avec React pour ***simplifier la création d’interface***. 
:::

### <u>Une extension de syntaxe ??? hein ?</u>
Lorsqu'on dit que JSX est une ***<u>"extension de syntaxe"</u>*** de JavaScript, cela signifie que `JSX n'est pas du JavaScript pur, mais plutôt une syntaxe qui étend la syntaxe JavaScript pour permettre l'intégration de balises semblables à HTML dans le code JavaScript`. L'extension de syntaxe signifie également que <u>le code JSX doit être transformé en code JavaScript standard avant d'être interprété par les navigateurs</u>. C'est là que les outils de transpilation tels que <a href="https://babeljs.io/" target="_blank">Babel</a> entrent en jeu. Babel est capable de `prendre du code JSX et de le convertir en équivalent JavaScript compréhensible par les navigateurs`, permettant ainsi l'utilisation de JSX dans des applications web.

## <u>Comment créer mon projet en React ?</u>
```jsx
npx create-react-app my-app
cd my-app
npm start
```

### <u>Hop hop hop ! Create react app ??</u>
>Create React App (CRA) est un outil en ligne de commande qui permet de créer facilement et rapidement des applications React. Il a été développé par Facebook pour simplifier le processus de configuration et de démarrage d'un projet React sans avoir à se soucier de la configuration initiale.

### Voici quelques points clés à propos de Create React App :
::: tip Info
1. <u>**Configuration Zéro**</u> : Create React App gère la configuration pour vous, vous permettant de vous concentrer sur le développement de votre application plutôt que sur la configuration de l'environnement de développement.

2. <u>**Développement Rapide**</u> : Vous pouvez créer un nouveau projet React en utilisant une seule commande. L'environnement de développement inclut des fonctionnalités telles que le rechargement automatique de la page lors des modifications du code source.

3. <u>**Conventions de Structure**</u> : Create React App suit certaines conventions de structure de dossier qui peuvent être modifiées, mais qui sont conçues pour faciliter le développement.

4. <u>**Support de TypeScript**</u> : Il prend en charge TypeScript en permettant la création de projets React avec TypeScript intégré dès le départ.

5. <u>**Build Optimisé**</u> : Lorsque vous êtes prêt à déployer votre application, Create React App génère une version optimisée de votre application avec des fichiers minifiés et d'autres améliorations pour les performances.

6. <u>**Scripts NPM**</u> : L'utilisation de scripts npm prédéfinis simplifie les tâches courantes telles que le lancement du serveur de développement, la création d'une version de production, etc.
:::

