//* Functions Returning Functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');

greet('Hello')('Jonas');

// Challenge
// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greet('Hi')('Levin');
