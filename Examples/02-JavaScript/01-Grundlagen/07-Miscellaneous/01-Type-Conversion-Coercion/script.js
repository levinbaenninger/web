// 7. Type Conversion and Coercion

//* Type Conversion
const inputYear = '1991';

// ? Number() = converts a string to a number
// We can't really do math with strings, that's why we need to convert it to a number with Number()
console.log(Number(inputYear) + 18); // 2009

// ? NaN = Not a Number
// What happens if we try to convert a string that is not a number?
console.log(Number('Jonas')); // NaN

// We can check if a value is NaN with isNaN()
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN('Jonas')); // true

// ? String() = converts a number to a string
// We can convert a number to a string with String()
console.log(String(23)); // '23'

//* Type Coercion
// The + operator converts the number to a string, in this case it will convert 23 to '23'
console.log(`I am ${23} years old`); // 'I am 23 years old'

// The -, /, *, <, >, ... operator converts the string to a number, in this case it will convert '23' to 23
console.log('23' - '10' - 3); // 10
console.log('23' * '2'); // 46
console.log('23' > '18'); // true

// Further examples
let n = `1${1}`; // '11'
n -= 1; // 10
console.log(n); // 10

const m = `${'10' - '4' - '3' - 2}5`; // '15'
console.log(m); // '15'
