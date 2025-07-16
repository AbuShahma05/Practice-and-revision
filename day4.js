const person = {
    name : "Abu Shahma",
    age : 22,
    city : "Gaya"
}
document.getElementById("Hello").innerHTML = person

// JavaScript Object Revision - Quick Recap

const user = {
  name: "Abu Shahma",
  age: 22,
  skills: ["JavaScript", "React", "Node.js"],
  isActive: true,
  address: {
    city: "Delhi",
    country: "India"
  },
  greet() {
    return `Hello, I’m ${this.name} from ${this.address?.city}.`;
  },
  addSkill(skill) {
    this.skills.push(skill);
  }
};

// Destructuring
const { name, age, address: { city } } = user;

// Add a new skill
user.addSkill("MongoDB");

// Loop through skills
user.skills.forEach((skill, index) => {
  console.log(`${index + 1}. ${skill}`);
});

// Output greeting
console.log(user.greet());

// Optional chaining & ternary
console.log(user.hobbies?.length ? "Has hobbies" : "No hobbies listed.");

// Output destructured values
console.log(`${name} is ${age} years old and lives in ${city}.`);
