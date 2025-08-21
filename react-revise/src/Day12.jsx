// // React Revision 

// // JSX (JavaScript XML)
// // - JSX allows us to write HTML inside JavaScript.
// // - It must return a single parent element.
// // - Example:

// const JSXExample = () => {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//     </div>
//   );
// };

// // One-Way Data Binding
// // - React data flows in one direction: parent ➝ child via props

// // State Management
// // - State is used to make components dynamic and interactive.

// import { useState } from "react";

// const StateExample = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>Count is {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// // React Hooks
// // - Hooks like useState, useEffect add logic to functional components.
// // - Example: useEffect

// import { useEffect } from "react";

// const HookExample = () => {
//   useEffect(() => {
//     console.log("Component Mounted");
//   }, []);
//   return <p>Check console log when this component loads.</p>;
// };

// // React Lifecycle (Only for Class Components)
// // - Common phases: Mounting, Updating, Unmounting
// // - useEffect in functional components mimics lifecycle behavior.

// // Why ReactDOM?
// // - ReactDOM is used to render components to the DOM.
// // - It connects React with actual HTML.

// // Passing Children in JSX
// // - Children are anything between opening and closing tags.

// const ParentComponent = ({ children }) => {
//   return <div>{children}</div>;
// };

// // Limitations of React
// // - Not SEO friendly by default (need SSR for that)
// // - High learning curve for beginners
// // - JSX can feel strange initially
// // - Too many ways to do the same thing

// // Final Note:
// // If you ever forget any React basics — open this file.
// // Remember: React is just JavaScript with components and hooks!

// export  {
//   JSXExample,
//   OneWayBinding,
//   StateExample,
//   HookExample,
//   ParentComponent,
// };

import React, { useState, useEffect } from "react";

// JSX Example
const JSXExample = () => {
  return (
    <div>
      <h1>JSX Example</h1>
      <h2>Hello, React!</h2>
    </div>
  );
};

// One-Way Data Binding
const OneWayBinding = ({ message }) => {
  return <h2>Message from parent: {message}</h2>;
};

// State Example
const StateExample = () => {
  const [count, setCount] = useState(0);
  return ( 
    <div>
      <h2>State Example</h2>
      <p>Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Hook Example
const HookExample = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);
  return <p>Check console log when this component loads.</p>;
};

// ParentComponent Example
const ParentComponent = ({ children }) => {
  return (
    <div>
      <h2>Parent Component</h2>
      {children}
    </div>
  );
};

// Main Component
const Day12 = () => {
  return (
    <div>
      <h1>React Revision</h1>
      <JSXExample />
      <OneWayBinding message="Hello from App!" />
      <StateExample />
      <HookExample />
      <ParentComponent>
        <p>This is a child passed to ParentComponent</p>
      </ParentComponent>
    </div>
  );
};

export default Day12;
