// 1. Hoisting
// Variable and function declarations are hoisted to the top of their scope
console.log("1 HOISTING:");
console.log(hoistedVar); // undefined
var hoistedVar = "I'm hoisted!";

hoistedFunction(); // Works!
function hoistedFunction() {
  console.log("Function hoisted!");
}

// Function expressions are NOT hoisted
notHoisted(); // TypeError
var notHoisted = function () {
  console.log("This won't hoist.");
};
console.log("\n");

// 2. Event Loop & Callback Queue
console.log("2 EVENT LOOP:");
console.log("Start");

setTimeout(() => {
  console.log("Callback from setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask from Promise");
});

console.log("End");
// Output: Start → End → Microtask → setTimeout
console.log("\n");

// // 3. Debouncing
console.log("3 DEBOUNCING:");
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Debounced: called after delay if no further calls");
}, 1000);

// // Simulate rapid calls
debouncedFunction();
debouncedFunction();
debouncedFunction(); // Only this one will fire after 1 sec
console.log("\n");

// // 4. Throttling
console.log("4 THROTTLING:");
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

const throttledFunction = throttle(() => {
  console.log("Throttled: called at most once per delay");
}, 1000);

// Simulate rapid calls
setInterval(() => {
  throttledFunction();
}, 200); // Will only log every 1 second
console.log("\n");

// // 5. Currying
console.log("5 CURRYING:");
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("Curried result:", add(1)(2)(3)); // Output: 6
console.log("\n");

// // 6. Memoization
console.log("6 MEMOIZATION:");
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Fetching from cache for", args);
      return cache[key];
    }
    console.log("Calculating result for", args);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function slowAdd(a, b) {
  // Simulate expensive calculation
  for (let i = 0; i < 1e8; i++) {}
  return a + b;
}

const memoizedAdd = memoize(slowAdd);

console.time("First call");
console.log("Result:", memoizedAdd(5, 10)); // Calculating
console.timeEnd("First call");

console.time("Second call");
console.log("Result:", memoizedAdd(5, 10)); // From cache
console.timeEnd("Second call");
