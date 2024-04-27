//* 4. Basic Operators

// ? Math operators
const addition = 10 + 5;
const subtraction = 10 - 5;
const multiplication = 10 * 5;
const division = 10 / 5;
const modulo = 10 % 5;
const exponentiation = 10 ** 5;

console.log(addition, subtraction, multiplication, division, modulo, exponentiation); // 15 5 50 2 0 100000

// ? Concatenation operator
const firstName = 'Levin';
const lastName = 'Bänninger';
const fullName = `${firstName} ${lastName}`;

console.log(fullName); // Levin Bänninger

// ? Assignment operators
let a = 10;

a += 10; // 20 (a = a + 10)
a -= 5; // 15 (a = a - 5)
a *= 3; // 45 (a = a * 3)
a /= 5; // 9 (a = a / 5)
a %= 2; // 1 (a = a % 2)
a **= 3; // 1 (a = a ** 3)

// Increment and decrement operators
let b = 0;

b++; // 1 (b = b + 1)
b--; // 0 (b = b - 1)

// ? Comparison operators
// Equality operators
10 === 5; // false
10 == '10'; // true
10 === '10'; // false
10 === 10; // true
10 !== 5; // true
10 !== '10'; // true

// Relational operators
10 > 5; // true
10 >= 5; // true
10 < 5; // false
10 <= 5; // false

// ? Operator precedence
10 + 5 * 2; // 20 (10 + 5 * 2 = 10 + 10 = 20)
5 * 2 + 10 ** 3; // 1010 (5 * 2 + 10 ** 3 = 5 * 2 + 1000 = 10 + 1000 = 1010)
5 * (2 + 10) ** 3; // 8640 (5 * (2 + 10) ** 3 = 5 * 12 ** 3 = 5 * 1728 = 8640)
