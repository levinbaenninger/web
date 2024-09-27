const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

//* Normal Destructuring
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//* Destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
console.log(arr); // [1, 2, 3]

//* Example
const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

//? Skipping elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian

//? Switching variables (without destructuring)
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian

//? Switching variables (with destructuring)
[main, secondary] = [secondary, main];
console.log(main, secondary); // Italian Vegetarian

//* Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza

//* Nested destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]

const [k, , [l, m]] = nested;
console.log(k, l, m); // 2 5 6

//* Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
