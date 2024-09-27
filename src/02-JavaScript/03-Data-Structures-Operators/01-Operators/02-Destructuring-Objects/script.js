const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 }
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(
      `Order receiver! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }
};

//* Destrcuturing Objects
const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories); // Classico Italiano
//                                                        { thu: { open: 12, close: 22 },
//                                                        fri: { open: 11, close: 23 },
//                                                        sat: { open: 0, close: 24 } }
//                                                        ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//* Changing variable names
const {
  restaurantName: name,
  openingHours: hours,
  categories: tags
} = restaurant;
console.log(name, hours, tags); // Classico Italiano
//                               { thu: { open: 12, close: 22 },
//                               fri: { open: 11, close: 23 },
//                               sat: { open: 0, close: 24 } }
//                               ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

//* Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//* Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7

//* Nested objects
const {
  openingHours: {
    fri: { open, close }
  }
} = restaurant;
console.log(open, close); // 11 23

//? Practical example
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1
});
