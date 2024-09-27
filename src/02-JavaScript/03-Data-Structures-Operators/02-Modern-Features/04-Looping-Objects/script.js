//* Looping Objects: Object Keys, Values, and Entries

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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // After ES6
  }
};

//? Keys
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

for (const day of Object.keys(openingHours)) {
  console.log(day); // thu, fri, sat
}

//? Values
const values = Object.values(openingHours);
console.log(values); // [{open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}]

for (const day of Object.values(openingHours)) {
  console.log(day); // {open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}
}

//? Entries
const entries = Object.entries(openingHours);
console.log(entries); // [['thu', {open: 12, close: 22}], ['fri', {open: 11, close: 23}], ['sat', {open: 0, close: 24}]]

for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`); // On thu we open at 12 and close at 22. On fri we open at 11 and close at 23. On sat we open at 0 and close at 24.
}
