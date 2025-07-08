---
next: 
    text: 'Hooks'
    link: '/en/language/js/react/hook'
prev: 
    text: 'Introduction to React'
    link: '/en/language/js/react/IntroReact'
---

# <u>Components</u>
>The fundamental concept of React is to separate interface elements into reusable pieces of code. Components <u>**are independent pieces of code that encapsulate the logic and presentation of a specific part of the user interface**</u>.<br>
>>There are two main types of components in React: <u>**Class Components and Functional Components**</u>.

## <u>Class Components</u>:

*Class components in React were the traditional way of creating components before the introduction of Hooks in **React 16.8**. Although Hooks have introduced a more concise way to manage state and effects in functional components, class components remain an integral part of React and are still widely used. Our `render` method doesn't receive **props** directly as an argument, but rather as an instance property (thus accessible through `this`).*

## <u>Usability</u>:

- Class components are defined as JavaScript classes that extend the **`React.Component`** class.
- They have state (**`state`**) and lifecycle methods (like **`componentDidMount`**, **`render`**, **`componentDidUpdate`**, etc.).
- They are used when you need to manage local state and use lifecycle methods.

## <u>Example</u>:

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <h1>Hello, I am a class component!</h1>;
  }
}

export default MyComponent;
```

## <u>Functional Components</u>:

Functional components offer a more concise syntax, are often easier to understand, and with the introduction of Hooks, they can now manage state and effects, thus eliminating many advantages traditionally associated with class components. They are simply **`JavaScript functions that return JSX`**. This makes them lighter and easier to read.

## <u>Usability</u>:

- Functional components are `JavaScript functions that return JSX`.
- They <u>don't manage local state or lifecycle methods</u>.
- They are used when ***you don't need to manage local state and don't require lifecycle methods***.

## <u>Example</u>:
```jsx
import React from 'react';

const MyComponent = () => {
  return <h1>Hello, I am a functional component!</h1>;
};

export default MyComponent;
``` 