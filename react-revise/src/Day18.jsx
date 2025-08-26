// 1. Smart (Container) vs Dumb (Presentational) Components
// 2. Lifting State Up
// 3. Props Drilling and How to Avoid It

import React, { useState, createContext, useContext } from "react";

/* SMART (CONTAINER) vs DUMB (PRESENTATIONAL) COMPONENTS
   - Smart components: Handle logic, state, API calls, data fetching.
   - Dumb components: Only present UI. Receive data via props.
   Think: Smart = Brain, Dumb = Face
*/

// Dumb (Presentational) Component
const UserCard = ({ name, age }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-bold">Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

// Smart (Container) Component
const UserContainer = () => {
  const [user] = useState({ name: "Shahma", age: 21 });

  return (
    <div className="my-4">
      <h1 className="font-bold mb-2">Smart vs Dumb Example</h1>
      {/* Smart component passes data to Dumb component */}
      <UserCard name={user.name} age={user.age} />
    </div>
  );
};

/* LIFTING STATE UP
   - When two components need the same state, move the state up to their common parent.
   Example: Counter with buttons and display.
*/

// Dumb Component: Just displays count
const CounterDisplay = ({ count }) => <h2>Count: {count}</h2>;

// Dumb Component: Just has button
const CounterButton = ({ increment }) => (
  <button
    className="px-4 py-2 bg-blue-500 text-white rounded-md mt-2"
    onClick={increment}
  >
    Increment
  </button>
);

// Smart Component (Parent): Holds the state
const CounterContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4">
      <h1 className="font-bold mb-2">Lifting State Up Example</h1>
      <CounterDisplay count={count} />
      <CounterButton increment={() => setCount(count + 1)} />
    </div>
  );
};

/* PROPS DRILLING
   - Passing props down multiple levels becomes annoying.
   Solution: React Context API (or libraries like Redux, Zustand, etc.)
*/

// Create context
const ThemeContext = createContext();

// Level 3 component (Deep child)
const Button = () => {
  const theme = useContext(ThemeContext); // consume context
  return (
    <button className={`px-4 py-2 mt-2 rounded-md ${theme}`}>
      Context Button
    </button>
  );
};

// Level 2
const Toolbar = () => (
  <div>
    <h2>Toolbar</h2>
    <Button />
  </div>
);

// Level 1
const Page = () => (
  <div>
    <h2>Page</h2>
    <Toolbar />
  </div>
);

// Smart Component (Provider)
const ContextExample = () => {
  return (
    <ThemeContext.Provider value="bg-green-500 text-white">
      <div className="my-4">
        <h1 className="font-bold mb-2">Avoid Props Drilling with Context</h1>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
};

/* MAIN COMPONENT 
   - Combines all examples together
*/

const Day18 = () => {
  return (
    <div className="p-6 space-y-8">
      <UserContainer />
      <CounterContainer />
      <ContextExample />
    </div>
  );
};

export default Day18;
