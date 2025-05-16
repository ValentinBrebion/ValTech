---
next: 
    text: 'Components'
    link: '/en/language/js/react/Composants'
prev: false
---
# Introduction to React
>*React is a <u>declarative, efficient, and flexible</u> JavaScript library designed to build user interfaces. Developed by Facebook in 2013, the library is now used in many companies like Facebook (no kidding), Netflix, Slack...*

## <u>Prerequisites</u>

- Node ≥ 14.0.0
- npm ≥ 5.6

## <u>JSX Syntax</u>
::: tip
React introduced a new syntax specific to the library: `JSX (Javascript XML)`. It's a syntax extension used with React to ***simplify interface creation***. 
:::

### <u>A syntax extension??? what?</u>
When we say JSX is a ***<u>"syntax extension"</u>*** of JavaScript, it means that `JSX isn't pure JavaScript, but rather a syntax that extends JavaScript syntax to allow HTML-like tags in JavaScript code`. The syntax extension also means that <u>JSX code must be transformed into standard JavaScript before being interpreted by browsers</u>. This is where transpilation tools like <a href="https://babeljs.io/" target="_blank">Babel</a> come in. Babel is able to `take JSX code and convert it into browser-understandable JavaScript equivalent`, thus allowing the use of JSX in web applications.

## <u>How to create my React project?</u>
```jsx
npx create-react-app my-app
cd my-app
npm start
```

### <u>Wait wait wait! Create react app??</u>
>Create React App (CRA) is a command-line tool that makes it easy and quick to create React applications. It was developed by Facebook to simplify the process of configuring and starting a React project without having to worry about initial configuration.

### Here are some key points about Create React App:
::: tip Info
1. <u>**Zero Configuration**</u>: Create React App handles the configuration for you, allowing you to focus on developing your application rather than configuring the development environment.

2. <u>**Rapid Development**</u>: You can create a new React project using a single command. The development environment includes features such as automatic page reloading when source code changes.

3. <u>**Structure Conventions**</u>: Create React App follows certain folder structure conventions that can be modified but are designed to facilitate development.

4. <u>**TypeScript Support**</u>: It supports TypeScript by allowing the creation of React projects with TypeScript built-in from the start.

5. <u>**Optimized Build**</u>: When you're ready to deploy your application, Create React App generates an optimized version of your application with minified files and other performance improvements.

6. <u>**NPM Scripts**</u>: The use of predefined npm scripts simplifies common tasks such as launching the development server, creating a production version, etc.
::: 