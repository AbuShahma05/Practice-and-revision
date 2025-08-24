import React, { useState, useEffect, useRef, useContext, createContext } from "react";

/*
  React Hooks Deep Dive 
  Hooks let you use state, lifecycle methods, refs, and context in functional components.
*/

const Counter = () => {
  // useState creates a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "2px solid #6c63ff", margin: "10px", padding: "10px" }}>
      <h2>useState Example</h2>
      <p>Count value: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

// 2. useEffect → Lifecycle Events 
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  // useEffect runs after render → like componentDidMount + componentDidUpdate
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function 
    return () => clearInterval(interval);
  }, []); // empty [] → runs only once (on mount)

  return (
    <div style={{ border: "2px solid #ff9800", margin: "10px", padding: "10px" }}>
      <h2>useEffect Example </h2>
      <p>Timer: {seconds} seconds</p>
    </div>
  );
};

// 3. useRef → Access DOM or persist values
const InputFocus = () => {
  const inputRef = useRef(null); // creates a ref object

  const focusInput = () => {
    inputRef.current.focus(); // focus the input field
  };

  return (
    <div style={{ border: "2px solid #4caf50", margin: "10px", padding: "10px" }}>
      <h2>useRef Example </h2>
      <input ref={inputRef} placeholder="Click button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

// 4. useContext → Global State, no prop drilling


// Step 1: Create Context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user] = useState({ name: "Abu Shahma", role: "Full-Stack Dev" });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const UserProfile = () => {
  // Step 2: Consume context using useContext
  const user = useContext(UserContext);
  return (
    <div style={{ border: "2px solid #e91e63", margin: "10px", padding: "10px" }}>
      <h2>useContext Example</h2>
      <p>
        Welcome, <b>{user.name}</b><br />
        Role: {user.role}
      </p>
    </div>
  );
};

// Main Component 
const Day17 = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Hooks</h1>
      <Counter />
      <Timer />
      <InputFocus />
      <UserProvider>
        <UserProfile />
      </UserProvider>
    </div>
  );
};

export default Day17;
