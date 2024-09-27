//* Enhanced Object Literals

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//* ES6 enhanced object literals (Computed property names)
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [weekdays[5]]: {
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

  //* ES6 enhanced object literals (Other object literals)
  //! openingHours: openingHours // Before ES6
  openingHours, // After ES6

  //* ES6 enhanced object literals (Methods)
  //! order: function (starterIndex, mainIndex) {
  //!   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //! }, // Before ES6

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // After ES6
  }
};

console.log(restaurant);
