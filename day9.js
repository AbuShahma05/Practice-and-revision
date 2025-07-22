// Topics: Fetch API, JSON, Classes & Constructors, this keyword

// 1. Fetch API — Fetching data from a public API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json(); // convert JSON response to JS object
        console.log("Fetch API Example:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();


// 2. JSON — Parse and Stringify
const userJSON = '{"name": "Abu", "age": 22}';
const userObject = JSON.parse(userJSON); // convert JSON string to object
console.log("Parsed JSON:", userObject);

const newJSONString = JSON.stringify(userObject); // convert object to JSON string
console.log("Stringified JSON:", newJSONString);


// 3. Classes & Constructors
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, I’m ${this.name} and I’m ${this.age} years old.`);
    }
}

const person1 = new Person("Abu", 22);
person1.introduce(); // Hi, I’m Abu and I’m 22 years old.


// 4. this keyword
const car = {
    brand: "Toyota",
    model: "Corolla",
    showDetails: function () {
        console.log("This refers to:", this); // this refers to the `car` object
        console.log(`Car: ${this.brand} ${this.model}`);
    }
};

car.showDetails(); // Car: Toyota Corolla

// Edge case: this in arrow function (no binding)
const arrowExample = () => {
    console.log("Arrow Function `this`:", this); // depends on lexical scope
};
arrowExample();
