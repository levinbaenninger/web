//* Maps

//? Maps: Introduction

//* Create a map
const restaurant = new Map();

//* Set key-value pairs
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');

//* Get Map entries
console.log(restaurant); // Map(3) {"name" => "Classico Italiano", 1 => "Firenze, Italy", 2 => "Lisbon, Portugal"}

//* Chaining set() methods
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');

console.log(restaurant);

//* Get values from a Map
console.log(restaurant.get('name')); // Classico Italiano
console.log(restaurant.get(true)); // We are open!
console.log(restaurant.get(1)); // Firenze, Italy
console.log(restaurant.get(3)); // undefined

//* Check if a Map has a certain key
console.log(restaurant.has('categories')); // true
console.log(restaurant.has('open')); // true
console.log(restaurant.has('closed')); // false

//* Delete a key-value pair from a Map
restaurant.delete(2);

//* Get the size of a Map
console.log(restaurant.size); // 7

//* Delete all key-value pairs from a Map
// restaurant.clear();

const openingHours = {
  thu: {
    open: 12,
    close: 22
  },
  fri: {
    open: 11,
    close: 23
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24
  }
};

//* Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

//? Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!']
]);

console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
