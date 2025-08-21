// This file is my PERMANENT memory of React Hooks & Component Architecture concepts.

import React, { useState, useEffect, useRef, useContext, createContext } from 'react';

// useContext Setup (Avoid Prop Drilling) 
const ThemeContext = createContext();

//  Smart vs Dumb Components Example 
// Smart = handles logic, state, effects
// Dumb = just displays what it's told via props

// Dumb Component: purely presentational
function DisplayCounter({ count, onIncrement }) {
  return (
    <div>
      <h2> Count: {count}</h2>
      <button onClick={onIncrement}> Increment</button>
    </div>
  );
}

// Dumb Component that uses useRef for input
function InputWithFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Direct access to DOM element
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus}> Focus Input</button>
    </div>
  );
}

// Dumb Component using useContext (no prop drilling!)
function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p style={{ color: theme === 'dark' ? 'white' : 'black' }}>
     Theme is: {theme}</p>;
}

// Smart Component
function App() {
// useState 
  const [count, setCount] = useState(0); // local state

// useEffect 
  useEffect(() => {
    console.log(" Component Mounted / Updated");

    return () => {
      console.log(" Component Unmounted"); // clean up
    };
  }, [count]); // only runs when 'count' changes

// Lifting State Up 
  const handleIncrement = () => setCount(prev => prev + 1);

// useContext value 
  const theme = 'light'; // can be dynamic too

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: '2rem', backgroundColor: theme === 'dark' ? '#333' :
         '#f2f2f2' }}>
        <h1> React Mastery Day 15</h1>

        {/* Smart handles logic, Dumb displays */}
        <DisplayCounter count={count} onIncrement={handleIncrement} />

        {/* useRef demo */}
        <InputWithFocus />

        {/* useContext demo */}
        <ThemedText />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

/*
QUICK LIFETIME SUMMARY:

1. useState → like a notepad that remembers values
2. useEffect → like a security camera (runs on mount/update)
3. useRef → like a hidden box (can store DOM ref or any data without rerender)
4. useContext → like a public speaker (shares data globally without passing manually)

COMPONENT ARCHITECTURE:

- Smart Components → brain (state, logic, API)
- Dumb Components → mouth (presentation only)

Lifting State Up = When a child component needs to tell its parent something (e.g., button clicked)

Prop Drilling = Passing props 5 levels down like Chinese whispers
Solution = useContext to give global access

You’ll NEVER forget these again — because you LIVED this file 
*/
