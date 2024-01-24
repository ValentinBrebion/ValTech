---
next: false
prev: 
    text: 'Les composants'
    link: 'language/js/react/Composants'
---

# hooks

## <u>Définition</u>

>En React, un "hook" est une fonction spéciale qui permet aux composants fonctionnels de React d'accéder à l'état du composant et à d'autres fonctionnalités liées aux classes sans avoir à utiliser de classes. Les hooks ont été introduits dans React 16.8 pour permettre aux développeurs d'utiliser l'état et d'autres fonctionnalités de React dans les composants fonctionnels, qui étaient auparavant limités en termes de fonctionnalités par rapport aux composants de classe.

## <u>useState</u>

useState est un hook React qui permet à un composant fonctionnel de conserver et de `mettre à jour son propre état local`. Cela signifie qu'il vous permet de déclarer des <u>variables d'état dans vos composants fonctionnels.</u>
Concrètement, le useState ***renvoie un tableau*** avec 2 éléments.

### Exemple:
```jsx
import React, { useState } from 'react'; // [!code ++]

function ExampleComponent() {
  // Utilisation de useState pour déclarer une variable d'état 'count' avec une valeur initiale de 0
  const [count, setCount] = useState(0); // [!code ++]

  // La variable 'count' contient la valeur actuelle de l'état
  // La fonction 'setCount' permet de mettre à jour cette valeur

  return (
    <div>
      <p>Count: {count}</p> // [!code ++]
      <button onClick={() => setCount(count + 1)}> // [!code ++]
        Increment
      </button>
    </div>
  );
}

```
### Explication
::: warning Explication
Dans l'exemple précédent, nous déclarons 2 valeurs :
1. `count` qui est défini comme ***<u>l'état courrant</u>***
2. `setCount` qui est défini comme ***<u>la fonction de mise à jour</u>***

<h3>⚠️ Appeler la fonction de mise à jour ne change pas l’état actuel dans le code en train d’être exécuté :</h3>

```jsx
function handleClick() {
  setName('Robin');
  console.log(name); // Toujours "Clara" !
}
```
Elle n’affecte que ce que <u>useState renverra à partir du prochain rendu.</u>
:::

## <u>useEffect</u>

useEffect est un autre hook React qui permet d'effectuer des effets de bord dans les composants fonctionnels. Les effets de bord se réfèrent à des actions qui ont lieu en dehors du cycle de rendu normal, tels que des appels réseau, des modifications du DOM, des abonnements à des événements, etc.
***Concrètement, si votre application fait un appel API, vous pourriez faire <u>votre appel qui va s'éxecuter après le chargement du contenu.</u>***

### Exemple:
```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Logique de l'effet de bord ici

    // La fonction de rappel peut retourner une fonction de nettoyage (cleanup) optionnelle
    return () => {
      // Logique de nettoyage (exécutée lorsque le composant est démonté ou lorsque les dépendances changent)
    };
  }, [dependencies]);
  
  // Reste du composant...
}
```
### Explication
::: warning Explication
***<u>La fonction de rappel</u>*** passée à useEffect est exécutée après chaque rendu du composant, sauf si le tableau de dépendances est fourni et que les valeurs dans ce tableau n'ont pas changé depuis la dernière exécution.

***<u>Si un tableau de dépendances est fourni</u>***, l'effet sera déclenché uniquement si <u>l'une des valeurs dans le tableau change entre les rendus successifs du composant</u>. Si le tableau de dépendances est vide, l'effet ne sera exécuté qu'une seule fois après le premier rendu du composant.

La fonction de rappel peut retourner une fonction de nettoyage (cleanup) qui sera exécutée lorsque le composant est démonté ou lorsque les dépendances changent.
:::

## Exemple concret
```jsx
useEffect(() => {
    getData()
    const timer = setInterval(getData, 10000)
    return () => {
      clearInterval(timer)
    }
  }, [getData])
```
ici `getData()` est une fonction fetch api, toutes les 10 secondes on va faire un appel API. Pour parler terme React, la fonction de nettoyage : `return () => {}` va <u>arrêter la fonction `setInterval` par la fonction `clearInterval` au déchargement du composant.</u>.