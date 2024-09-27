const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  }
};

//* Arrays
// Spread Operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr); // [1, 2, 7, 8, 9]

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 or more arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//* Strings
// Spread Operator

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];

console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']

//* Functions

const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?')
];
restaurant.orderPasta(...ingredients); // Here is your delicious pasta with 1, 2, 3

//* Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
