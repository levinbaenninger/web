//* 5. Strings

const firstName = 'Levin';
const job = 'programmer';
const birthYear = 2007;

// ? Concatenation
const levin = `I'm ${firstName}, a ${2023 - birthYear} year old ${job}!`; // I'm Levin, a 16 year old programmer!

console.log(levin);

// Multiline strings
console.log('String with multiple lines: \nlike this,\nand this.'); // String with multiple lines: like this, and this.

// ? Template literals
const levinNew = `I'm ${firstName}, a ${2023 - birthYear} year old ${job}!`; // I'm Levin, a 16 year old programmer!

console.log(levinNew);

// Multiline strings
console.log(`String with multiple lines: 
like this,
and this.`); // String with multiple lines: like this, and this.
