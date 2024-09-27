//* The Nullish Coalescing Operator (??)

// Here we have a problem because if the number of guests is 0, it will be falsy and the operator will return the default value.
const restaurant = {
  name: 'Classico Italiano',
  numGuests: 0
};

const guests = restaurant.numGuests || 10;
console.log(guests); // 10

// Nullish: null and undefined (Not 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;

console.log(guestCorrect); // 0
