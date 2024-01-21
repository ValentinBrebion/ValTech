---
next: 
    text: 'Les hooks (en cours)'

prev: 
    text: 'Introduction à React'
    link: 'language/js/react/IntroReact'
---

# <u>Les composants</u>
>Le concept fondamental de React est de séparer les éléments d'une interface en morceaux réutilisables de code. Les composants <u>**sont des morceaux de code indépendants qui encapsulent la logique et la présentation d'une partie spécifique de l'interface utilisateur**</u>.<br>
>>Il existe deux types de composants principaux dans React : <u>**les composants de classe (Class Components) et les composants fonctionnels (Functional Components)**.</u>

## <u>Les composants de classe</u> :

*Les composants de classe dans React ont été le moyen traditionnel de créer des composants avant l'introduction des Hooks dans **React 16.8**. Bien que les Hooks aient introduit une manière plus concise de gérer l'état et les effets dans les composants fonctionnels, les composants de classe restent une partie intégrante de React et sont encore largement utilisés. Notre méthode `render` ne reçoit pas directement les **props** comme argument, mais directement comme propriété de l'instance (donc accessible par `this`).*

## <u>Utilisabilité</u>:

- Les composants de classe sont définis en tant que classes JavaScript qui étendent la classe **`React.Component`**.
- Ils ont un état (**`state`**) et des méthodes de cycle de vie (comme **`componentDidMount`**, **`render`**, **`componentDidUpdate`**, etc.).
- Ils sont utilisés lorsque vous avez besoin de gérer un état local et d'utiliser des méthodes du cycle de vie.

## <u>Exemple</u>:

```jsx
import React, { Component } from 'react';

class MonComposant extends Component {
  render() {
    return <h1>Salut, je suis un composant de classe!</h1>;
  }
}

export default MonComposant;
```
## <u>Composants fonctionnels (Functional Components)</u> :

les composants fonctionnels offrent une syntaxe plus concise, sont souvent plus faciles à comprendre, et avec l'introduction des Hooks, ils peuvent désormais gérer l'état et les effets, éliminant ainsi de nombreux avantages traditionnellement associés aux composants de classe. Ils sont simplement des **`fonctions Javascript qui retournent du JSX`**. Cela les rend plus légers et plus faciles à lire.

## <u>Utilisabilité</u> :

- Les composants fonctionnels sont `des fonctions JavaScript qui retournent du JSX`.
- Ils <u>ne gèrent pas d'état local ni de méthodes de cycle de vie</u>.
- Ils sont utilisés lorsque ***vous n'avez pas besoin de gérer un état local et que vous ne nécessitez pas les méthodes du cycle de vie***.

## <u>Exemple </u>:
```jsx
import React from 'react';

const MonComposant = () => {
  return <h1>Salut, je suis un composant fonctionnel!</h1>;
};

export default MonComposant;
```