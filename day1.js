// var keyword
var num = 2;
console.log(num);

var num = 3; // reassigning is allowed
console.log(num);

// let keyword
let n = 15;
console.log(n); //Value can be updated

// Data Types
// primitive data types

// 1 -> Number
let num = 20;
let dec = 2.14;

// 2 -> String
let s = "Hello JII";

// 3 -> Boolean
let bln = true;

// 4 -> undefined
let someting;

// 5 -> Null
let something1 = null;

// 6 -> Symbol
let sym = Symbol('unique')

// 7 -> BigInt
let bigNumber = 123456679799999999999999999999999999;

// Non primitive data types
// 1 -> Object
let obje = {
    name : "Abu Shahma",
    age : 22,
    village : "Sagahi",
    male : true
}

// 2 -> Array
let arr = ["Hello", "From", "This side"]

// 3 -> Function
function fun (){
    console.log("Hello World!");
    
}

// Temporal dead zone
// accessing the variable before its declaration results in a ReferenceError,

console.log(z);
let z = 12


