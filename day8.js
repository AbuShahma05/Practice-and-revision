// JavaScript SetTimeout and SetInterval are the only native function in JavaScript 
// that is used to run code asynchronously, it means allowing the function to be executed
// immediately, there is no need to wait for the current execution completion, it will be
//  for further execution.

// window.setTimeout(); also can be written as without window prefix

// let hell0 = () => {
//   setTimeout(() => {}, timeout);
// };

clearTimeout(); // stop the execution of settimeout

//window.setInterval(); repeats a given function at every given time-interval, 
// this can also be written as without window prefix

// The first parameter is the function to be executed.
// The second parameter indicates the length of the time-interval between each execution.

clearInterval()  // method stop the execution of the function specified in the setinterval() method

setTimeout(hello, 1000);
function hello() {
    console.log("Hey my name is Abu Shahma");
}

setInterval(hello2, 1000)
function hello2() {
    console.log("Whatsup!");
    
}

// Callback

// How Do Callbacks Work in JavaScript?
// JavaScript executes code line by line (synchronously), but sometimes we need to delay 
// execution or wait for a task to complete before running the next function. Callbacks 
// help achieve this by passing a function that is executed later.

let greet = (name, callbacks) => {
      console.log("Hello" + name);
      callbacks()
}

let saybye = () => {
    console.log("Good bye");
    
}

greet(" Abu shahma", saybye)

// JavaScript Async Foundations

// 1. setTimeout
// Executes a function once after a given delay (in ms)
function greetLater() {
  console.log("Hello from setTimeout (after 2 seconds)");
}
let timeoutID = setTimeout(greetLater, 2000); // executes once after 2s

// 2. clearTimeout
// Stops the timeout before it executes
clearTimeout(timeoutID); // Comment this line to see setTimeout working

// 3. setInterval
// Repeats a function every given interval
let intervalID = setInterval(() => {
  console.log("Repeating message every 1 second");
}, 1000);

// 4. clearInterval
// Stops the repeated execution
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Stopped interval after 5 seconds");
}, 5000);

// 5. Callback Functions
// Passing a function as an argument to be executed later
function greeting(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greeting("Abu Shahma", sayBye);

// 6. Promises
// Promise represents a value that may be available now, or in the future, or never.

let fakeAPI = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Error fetching data.");
    }
  }, 2000);
});

fakeAPI
  .then((data) => {
    console.log("Promise resolved:", data);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

// 7. async/await
// Cleaner way to write asynchronous code using Promises

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncExample() {
  console.log("Waiting for 2 seconds...");
  await wait(2000); 
  console.log("Done waiting (after 2 seconds)");
}

asyncExample();
