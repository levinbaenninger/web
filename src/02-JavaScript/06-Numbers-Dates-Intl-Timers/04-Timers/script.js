'use strict';

// setTimeout
const ingredients = ['olives', 'spinach'];

const pizzaDelivery = setTimeout(
  (ingredients, type) => {
    console.log(
      `Here is your ${type} with ${ingredients.join(' and ')} ${type === 'pizza' ? '🍕' : ''}`
    );
  },
  3000,
  ingredients,
  'pizza'
);

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaDelivery);
}

// setInterval
const clock = setInterval(() => {
  const now = new Date();
  console.log(
    new Intl.DateTimeFormat('de-CH', { timeStyle: 'medium' }).format(now)
  );
}, 1000);
