//* ||-Operator

console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// Example
const restaurant = {
  name: 'Classico Italiano',
};

const guests = restaurant.numGuests || 10; // 10 because numGuests is undefined, therefore falsy

//* &&-Operator

console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); // null

// Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // orderPizza method doesn't exist, therefore falsy