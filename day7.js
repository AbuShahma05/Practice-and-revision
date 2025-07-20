const user = {
  name: 'Abu Shahma',
  address: {
    city: 'Gaya',
    zip: '10001',
  },
};

// Traditional way (can break)
console.log(user.profile && user.profile.age); // undefined

// Optional Chaining (Safe)
console.log(user?.profile?.age); // undefined (no error)

const users = null;
console.log(users?.[0]?.name); // undefined (safe access in arrays)

// Named exports
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export
const subtract = (a, b) => a - b;
export default subtract;

// Importing named and default exports
import subtract, { add, multiply } from './math.js';

console.log("Add:", add(4, 5));           // 9
console.log("Multiply:", multiply(4, 5)); // 20
console.log("Subtract:", subtract(9, 4)); // 5

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      success ? resolve('📦 Data received!') : reject(' Failed to fetch.');
    }, 1000);
  });
};

// Using async/await
const loadData = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

loadData();
