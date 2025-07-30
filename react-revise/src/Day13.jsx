/* 
Day 13 - React Concepts

Topics Covered:
1. Functional Components
2. Props (passing data between components)
3. State (useState hook)
4. Handling Events: onClick, onChange, onSubmit
5. Controlled vs Uncontrolled Components

-----------------------------
1. Functional Components
-----------------------------
Functional components are basic building blocks of a React UI.
They are JavaScript functions that return JSX (UI).

Example:
*/

function Greeting() {
  return <h2>Hello, welcome to Day 13!</h2>;
}

/*
-----------------------------
2. Props (Passing Data)
-----------------------------
Props are used to pass data from a parent component to a child component.

Example:
*/

function Welcome(props) {
  return <h3>Hello, {props.name}!</h3>;
}

// Usage:
// <Welcome name="John" />

/*
-----------------------------
3. State (useState Hook)
-----------------------------
State is used to manage data that changes inside a component.
useState is a React hook used in functional components.

Example:
*/

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

/*
-----------------------------
4. Handling Events
-----------------------------
React uses camelCase for event names like:
- onClick
- onChange
- onSubmit

Example 1: onClick
*/

function ClickExample() {
  function handleClick() {
    alert("Button was clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

/*
Example 2: onChange (Input field)
*/

function InputExample() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>Typed: {text}</p>
    </div>
  );
}

/*
Example 3: onSubmit (Form)
*/

function FormExample() {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    alert("Submitted: " + input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

/*
---------------------------------------
5. Controlled vs Uncontrolled Components
---------------------------------------

Controlled Component:
- React controls the input.
- Value is stored in state.
- You use onChange and value.

Example:
*/

function ControlledInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Controlled Name: {name}</p>
    </div>
  );
}

/*
Uncontrolled Component:
- React does not control the input.
- We access the DOM element directly using useRef.

Example:
*/

import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef();

  function handleClick() {
    alert("Uncontrolled value: " + inputRef.current.value);
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
}

/*
Conclusion:
- Functional components are preferred in modern React.
- Props let us reuse and customize components.
- State lets us handle dynamic values inside components.
- Events help us handle user interactions.
- Controlled components give more control but need state.
- Uncontrolled components are easier but */
