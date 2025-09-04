import React, { useState, useEffect, Suspense, lazy, memo, useMemo, useCallback } from "react";

/*
 * 11. CUSTOM HOOKS
 * Hooks let you reuse logic across components.
 * Example: useFetch (fetches data) can be reused anywhere.
 */

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(url);
            const json = await res.json();
            setData(json);
            setLoading(false);
        }
        fetchData();
    }, [url]);

    return { data, loading };
}

function CustomHookDemo() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/1");
    return <div>{loading ? "Loading..." : JSON.stringify(data)}</div>;
}

/*
 * 12. ADVANCED PATTERNS
 */

// 1. Code Splitting with React.lazy + Suspense
// React.lazy dynamically loads components when needed.
const LazyComponent = lazy(() => import("./LazyLoaded"));

function CodeSplittingDemo() {
    return (
        <Suspense fallback={<div>Loading Lazy Component...</div>}>
            <LazyComponent />
        </Suspense>
    );
}

// 2. Error Boundaries (class component only)
// They catch errors in child components and show fallback UI.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("Error caught by boundary:", error, info);
    }
    render() {
        if (this.state.hasError) return <h2>Something went wrong.</h2>;
        return this.props.children;
    }
}

function BuggyComponent() {
    throw new Error("I crashed!");
}

// 3. Memoization (React.memo, useMemo, useCallback)
// Prevents unnecessary re-renders or recalculations.
const Child = memo(({ count }) => {
    console.log("Child re-rendered!");
    return <div>Child Count: {count}</div>;
});

function MemoDemo() {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);

    // useMemo caches expensive calculations.
    const expensiveCalc = useMemo(() => {
        console.log("Expensive calculation running...");
        return count * 1000;
    }, [count]);

    // useCallback memoizes functions.
    const increment = useCallback(() => setCount(c => c + 1), []);

    return (
        <div>
            <button onClick={increment}>Increment Count</button>
            <button onClick={() => setOther(o => o + 1)}>Change Other</button>
            <p>Expensive Value: {expensiveCalc}</p>
            <Child count={count} />
        </div>
    );
}

// 4. Higher-Order Components (HOC)
// A function that takes a component and returns a new one.
function withLogger(WrappedComponent) {
    return function Enhanced(props) {
        console.log("Props received:", props);
        return <WrappedComponent {...props} />;
    };
}

function SimpleComponent({ text }) {
    return <div>{text}</div>;
}

const LoggedComponent = withLogger(SimpleComponent);

// 5. Render Props
// Share logic using a function passed as children.
function MouseTracker({ children }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = e => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return children(pos);
}

function RenderPropsDemo() {
    return (
        <MouseTracker>
            {pos => <p>Mouse at ({pos.x}, {pos.y})</p>}
        </MouseTracker>
    );
}

/*
 * MAIN EXPORT
 */
export default function Day22() {
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Day 22: Custom Hooks & Advanced Patterns</h1>

            <h2>Custom Hook</h2>
            <CustomHookDemo />

            <h2>Code Splitting (Lazy + Suspense)</h2>
            <CodeSplittingDemo />

            <h2>Error Boundary</h2>
            <ErrorBoundary>
                {/* Uncomment to see error boundary in action */}
                {/* <BuggyComponent /> */}
                <p>No crash yet </p>
            </ErrorBoundary>

            <h2>Memoization</h2>
            <MemoDemo />

            <h2>Higher-Order Component</h2>
            <LoggedComponent text="Hello from HOC!" />

            <h2>Render Props</h2>
            <RenderPropsDemo />
        </div>
    );
}
