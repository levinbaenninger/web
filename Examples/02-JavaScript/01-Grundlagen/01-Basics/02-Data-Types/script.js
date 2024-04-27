//* 2. Data Types
// Number: Floating point numbers, for decimals and integers
let age = 23;
const PI = 3.1415;

// String: Sequence of characters, used for text
const lastName = 'Robinson';
const job = 'teacher';
console.log(lastName); // Robinson
console.log(job); // teacher

// Boolean: Logical type that can only be true or false
const isFullAge = true;
console.log(isFullAge); // true

// Undefined: Value taken by a variable that is not yet defined ('empty value')
let year;
console.log(year); // undefined

// Null: Also means 'empty value'
const emptyValue = null;
console.log(emptyValue); // null

// Get the type of a variable
console.log(typeof isFullAge); // boolean
console.log(typeof year); // undefined
console.log(typeof emptyValue); // object (bug in JS)

// Change the value of a variable
console.log(typeof age); // number
age = 'twenty-three';

console.log(typeof age); // string
