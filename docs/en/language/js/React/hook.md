---
next: false
prev: 
    text: 'Components'
    link: '/en/language/js/react/Components'
---

# Hooks

## <u>Definition</u>

>In React, a "hook" is a special function that allows React functional components to access component state and other class-related features without using classes. Hooks were introduced in React 16.8 to enable developers to use state and other React features in functional components, which were previously limited in functionality compared to class components.

## <u>useState</u>

useState is a React hook that allows a functional component to `maintain and update its own local state`. This means it lets you declare <u>state variables in your functional components.</u>
Specifically, useState ***returns an array*** with 2 elements.

### Example:
```jsx
import React, { useState } from 'react'; // [!code ++]

function ExampleComponent() {
  // Using useState to declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0); // [!code ++]

  // The 'count' variable contains the current state value
  // The 'setCount' function allows updating this value

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

### Explanation
::: warning Explanation
In the previous example, we declare 2 values:
1. `count` which is defined as ***<u>the current state</u>***
2. `setCount` which is defined as ***<u>the update function</u>***

<h3>⚠️ Calling the update function doesn't change the current state in the code being executed:</h3>

```jsx
function handleClick() {
  setName('Robin');
  console.log(name); // Still "Clara"!
}
```
It only affects what <u>useState will return from the next render.</u>
:::

## <u>useEffect</u>

useEffect is another React hook that allows performing side effects in functional components. Side effects refer to actions that take place outside the normal render cycle, such as network calls, DOM modifications, event subscriptions, etc.
***Specifically, if your application makes an API call, you could make <u>your call that will execute after the content loads.</u>***

### Example:
```jsx
import React, { useEffect } from 'react';

function ExampleComponent() {
  useEffect(() => {
    // Side effect logic here

    // The callback function can return an optional cleanup function
    return () => {
      // Cleanup logic (executed when the component is unmounted or when dependencies change)
    };
  }, [dependencies]);
  
  // Rest of the component...
}
```

### Explanation
::: warning Explanation
***<u>The callback function</u>*** passed to useEffect is executed after each component render, unless the dependency array is provided and the values in this array haven't changed since the last execution.

***<u>If a dependency array is provided</u>***, the effect will be triggered only if <u>one of the values in the array changes between successive component renders</u>. If the dependency array is empty, the effect will be executed only once after the first component render.

The callback function can return a cleanup function that will be executed when the component is unmounted or when dependencies change.
:::

## Concrete Example
```jsx
useEffect(() => {
    getData()
    const timer = setInterval(getData, 10000)
    return () => {
      clearInterval(timer)
    }
  }, [getData])
```
here `getData()` is an API fetch function, every 10 seconds we will make an API call. In React terms, the cleanup function: `return () => {}` will <u>stop the `setInterval` function through the `clearInterval` function when the component unmounts</u>.

## <u>useCallback</u>
useCallback is a React Hook that lets you cache a function definition between re-renders. When optimizing render performance, you will sometimes need to <u>cache the functions you pass to child components</u>.

### Example
```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the callback function
  const memoizedCallback = useCallback(
    () => {
      console.log('Callback function called');
    },
    [count]  // The function will be recalculated only if 'count' changes
  );

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      {/* Using the memoized function in a child component */}
      <ChildComponent callback={memoizedCallback} />
    </div>
  );
}

function ChildComponent({ callback }) {
  // Using the callback function in the child component
  return (
    <div>
      <p>Child Component</p>
      <button onClick={callback}>
        Call Callback
      </button>
    </div>
  );
}
```

::: tip Understanding
Basically, as long as the dependencies don't change, the function cached by useCallback will remain the same, which allows for significant performance gains.
:::

### Help I still don't understand
Let me explain differently through a more meaningful example:

```jsx
function ProductPage({ productId, referrer, theme }) {
  // Tell React to cache your function from one render to another...
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); // ...so as long as these dependencies don't change...

  return (
    <div className={theme}>
      {/* ...ShippingForm will receive the same props and won't re-render */}
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}
``` 