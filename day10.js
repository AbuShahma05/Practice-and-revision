/*
 JavaScript Deep Concepts Summary

 1. Prototypes & Inheritance
 2. Encapsulation
 3. Factory Functions
 4. Closures
 5. Scope & Lexical Environment

💡 Written to remember forever — minimal code, maximum clarity
*/

////////////////////////////////////////
//  1. Prototypes & Inheritance
////////////////////////////////////////

function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    return `${this.name} makes a sound.`;
};

function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function() {
    return `${this.name} barks.`;
};

const dog = new Dog("Tommy");
console.log(dog.speak()); // Tommy barks.

////////////////////////////////////////
//  2. Encapsulation (via Closures)
////////////////////////////////////////

function Counter() {
    let count = 0; // private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = Counter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
// count is not accessible directly (encapsulation)

////////////////////////////////////////
//  3. Factory Functions
////////////////////////////////////////

function createUser(name, age) {
    return {
        name,
        age,
        greet() {
            return `Hello, I'm ${name}, ${age} years old.`;
        }
    };
}

const user1 = createUser("Abu", 22);
console.log(user1.greet()); // Hello, I'm Abu, 22 years old.

////////////////////////////////////////
//  4. Closures
////////////////////////////////////////

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
    };
}

const closureExample = outerFunction("React");
console.log(closureExample("Hooks")); // Outer: React, Inner: Hooks

////////////////////////////////////////
//  5. Scope & Lexical Environment
////////////////////////////////////////

let globalVar = "I'm global";

function outer() {
    let outerVar = "I'm outer";

    function inner() {
        let innerVar = "I'm inner";
        console.log(globalVar); // Accessible
        console.log(outerVar);  // Accessible
        console.log(innerVar);  // Accessible
    }

    inner();
}

outer();
// innerVar is not accessible here — it's block scoped

/*
Lexical Scope = where the variable is written (physically)
Closure = when a function remembers variables from its lexical scope
*/

