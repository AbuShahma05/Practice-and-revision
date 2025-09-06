// (Context API & Redux)

// Context API → Good for SMALL to MEDIUM apps (simple state sharing)
//  Redux (or Zustand, Jotai, Recoil) → Good for LARGE apps (complex state sharing,
//  middleware, debugging)

// 1. CONTEXT API EXAMPLE

import React, { createContext, useContext, useReducer } from "react";

// Create a Context
const ThemeContext = createContext();

// A provider using Context API
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for cleaner usage
const useTheme = () => useContext(ThemeContext);

// Component using Context
function ContextExample() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <h2>Context API Example</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

// 2. REDUX EXAMPLE 

// Redux requires: Store + Reducer + Actions + Middleware (optional)

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer (pure function)
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Middleware example (logs actions)
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  let result = next(action);
  console.log("Next state:", store.getState());
  return result;
};

// Store (with Redux)
import { legacy_createStore as createStore, applyMiddleware } from "redux";
const store = createStore(counterReducer, applyMiddleware(loggerMiddleware));

// React-Redux setup
import { Provider, useDispatch, useSelector } from "react-redux";

function ReduxExample() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

// 3. WHEN TO USE REDUX?
//  Use Context API when:
//   - Small to medium apps
//   - Few components share state
//   - No complex logic
//
//  Use Redux when:
//   - Many components need same state
//   - State management is complex
//   - Need middleware (logging, async calls, etc.)
//   - Want powerful debugging tools (Redux DevTools)

// MAIN APP
export default function Day24() {
  return (
    <div>
      <h1>Day24: State Management (Context API & Redux)</h1>
      <ThemeProvider>
        <ContextExample />
      </ThemeProvider>
      <Provider store={store}>
        <ReduxExample />
      </Provider>
    </div>
  );
}
