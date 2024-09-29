// Higher-order function that accepts a callback
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log('🖐');
};

document.body.addEventListener('click', highFive);
['Jonas', 'Martha', 'Adam'].forEach(highFive);

// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey'); // returns the function that takes the name
greetHey('Jonas');
greetHey('Steven');

greet('Hello')('Jonas');

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
