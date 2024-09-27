//* Optional Chaining (?.)

//* Properties

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // After ES6
  }
};

//? Without optional chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//? With optional chaining

console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

//* Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // function gets executed
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // prints 'Method does not exist'

//* Arrays
const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(user[0]?.name ?? 'User array empty'); // prints 'Jonas'
console.log(user[1]?.name ?? 'User array empty'); // prints 'User array empty'
