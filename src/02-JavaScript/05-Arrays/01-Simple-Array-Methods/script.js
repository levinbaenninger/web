'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['b', 'c']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] - shallow copy

// splice method
// console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr.splice(-1)); // ['e']
console.log(arr); // ['a', 'b', 'c', 'd']

arr = ['a', 'b', 'c', 'd', 'e'];

// reverse method
console.log(arr.reverse()); // ['e', 'd', 'c', 'b', 'a']
console.log(arr); // ['e', 'd', 'c', 'b', 'a']

arr = ['a', 'b', 'c', 'd', 'e'];

// concat method
const letters = arr.concat(['f', 'g', 'h']); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// join method
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h

// at method
console.log(letters.at(0)); // a
console.log(letters.at(-1)); // h
