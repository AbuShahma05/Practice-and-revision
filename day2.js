const car = {
    brand : "mercedez",
    model : "benz",
    year : 2001
}
car.brand = "bmw"

console.log(car.brand);

const multiply = (x, y) => {
    return x * y;
}

function multiply1(x,y){
    return x*y
}

let sum = (a, b) => {
    return a+b
}

function foo(n) {
  const f = () => arguments[0] + n; 
  return f();
}

console.log(foo(3));

// this gives the NAN
const newNUm = (a,b) => {
    return a*b
}
console.log(newNUm(5,2));
console.log(newNUm(5));

// assign a value bydefault that not gives NAN
let num5 = (a,b = 1) => {
    return a*b
}

console.log(num5(10,2));
console.log(num5(10));

const fruits = []
fruits.push("Apple", "Banana", "Mango",  "avacardo", "kiwi")
console.log(fruits);
console.log(fruits.length);
console.log(fruits[4]);
console.log(Object.keys(fruits));








