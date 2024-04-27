//* 3. let, const and var
// let: Declares a variable that can be changed later
let age = 30;
age = 31;

// const: Declares a variable that cannot be changed later
const birthYear = 1991;
//! birthYear = 1990; // TypeError: Assignment to constant variable.

// We cannot declare a const variable without initializing it
//! const PI; // SyntaxError: Missing initializer in const declaration

// var: Declares a variable that can be changed later (old way)
let job = 'programmer';
job = 'teacher';
