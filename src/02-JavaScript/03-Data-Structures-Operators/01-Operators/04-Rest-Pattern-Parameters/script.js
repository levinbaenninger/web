const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//* Difference between Rest and Spread

// Spread is always on the righthand side
const arr = [1, 2, ...[3, 4]];

// Rest is always on the lefthand side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

//* Rest with arrays

// Rest must be the last element and only one per destructuring assignment
const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];

console.log(pizza, Risotto, otherFood); // Pizza Risotto ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//* Rest with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {thu: {…}, fri: {…}}

//* Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const x = [23, 5, 7];
add(...x); // 35

//* Example
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms (3) ["onion", "olives", "spinach"]
restaurant.orderPizza('mushrooms'); // mushrooms []
