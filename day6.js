// Arrow Functions
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice")); 

const add = (a, b) => a + b;
console.log(add(5, 3)); 

const square = n => n * n;
console.log(square(4)); 


// Template Literals
const user = "John";
const age = 25;
const message = `My name is ${user} and I am ${age} years old.`;
console.log(message); 
const multiLine = `
This is line one.
This is line two.
This is line three.
`;
console.log(multiLine);


// Destructuring
const person = {
  firstName: "Jane",
  lastName: "Doe",
  country: "India"
};

const { firstName, country } = person;
console.log(firstName); 
console.log(country);  

const numbers = [1, 2, 3];
const [x, y, z] = numbers;
console.log(x, y, z); 


// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); 

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); 


// Rest Operator
const sum = (...nums) => {
  return nums.reduce((total, current) => total + current, 0);
};
console.log(sum(1, 2, 3, 4)); 


// Default Parameters
const sayHi = (name = "Guest") => {
  console.log(`Hi, ${name}!`);
};

sayHi();        
sayHi("Riya"); 
