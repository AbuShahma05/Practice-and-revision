// Controlled vs Uncontrolled Components, Two-way Binding, Conditional Rendering

import React, { useState, useRef } from "react";

const Day16 = () => {
  // 1. Controlled Component
  // Controlled means input value is controlled by React state
  const [controlledValue, setControlledValue] = useState("");

  // 2. Uncontrolled Component
  // Uncontrolled means input value is directly handled by DOM, we use ref to access it
  const uncontrolledInputRef = useRef();

  // 3. Two-way Binding Example
  const [name, setName] = useState("");

  // 4. Conditional Rendering Examples
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showBox, setShowBox] = useState(true);

  // Function to handle uncontrolled input
  const handleUncontrolledSubmit = () => {
    alert(`Uncontrolled Input Value: ${uncontrolledInputRef.current.value}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Day 16 - React Practice</h1>

      {/* Controlled Input */}
      <section>
        <h2>1. Controlled Component</h2>
        <input
          type="text"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          placeholder="Type here..."
        />
        <p>Current Value: {controlledValue}</p>
      </section>

      <hr />

      {/* Uncontrolled Input */}
      <section>
        <h2>2. Uncontrolled Component</h2>
        <input type="text" ref={uncontrolledInputRef} placeholder="Uncontrolled input" />
        <button onClick={handleUncontrolledSubmit}>Get Value</button>
      </section>

      <hr />

      {/* Two-way Binding */}
      <section>
        <h2>3. Two-way Binding</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name ? name : "Stranger"} </p>
      </section>

      <hr />

      {/* Conditional Rendering */}
      <section>
        <h2>4. Conditional Rendering</h2>

        {/* if/else style (using ternary) */}
        <p>{isLoggedIn ? " You are logged in!" : " Please log in"}</p>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>

        {/* && Operator */}
        <div>
          {isLoggedIn && <p>Welcome back, user! (Shown only when logged in)</p>}
        </div>

        {/* Show/Hide Example */}
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => setShowBox(!showBox)}>
            {showBox ? "Hide Box" : "Show Box"}
          </button>
          {showBox && <div style={{ padding: "20px", background: "#ddd" }}> This is a box</div>}
        </div>
      </section>
    </div>
  );
};

export default Day16;
