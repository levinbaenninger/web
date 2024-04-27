// 2. Functions

//* Function without parameters and return value
// Declaring a function
function menu() {
  console.log('Startup PC1 ............ 1');
  console.log('Startup PC2 ............ 2');
  console.log('Startup Printer ........ 3');
  console.log('Quit ................... 4');
}

// Calling / running / invoking function
menu(); /*  Startup PC1 ............ 1
            Startup PC2 ............ 2
            Startup Printer ........ 3
            Quit ................... 4 */

//* Function with parameters and without return value
// Declaring a function
function logAddition(a, b) {
  const sum = a + b;
  console.log(sum);
}

// Calling / running / invoking function
logAddition(2, 3); // 5
logAddition(5, 12); // 17

//* Function without paramaters and with return value
// Declaring a function
function randNum() {
  return Math.floor(Math.random() * 10) + 1;
}

// Calling / running / invoking function
const num = randNum();
console.log(num); // Random number between 1 and 10

//* Function with paramaters and with return value
// Declaring a function
function calcSum(a, b) {
  return a + b;
}

// Calling / running / invoking function
const sum = calcSum(2, 3);
console.log(sum); // 5
