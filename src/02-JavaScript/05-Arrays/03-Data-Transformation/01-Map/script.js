'use strict';

const movementsInEuro = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsdConversionRate = 1.1;

const movementsInUsd = movementsInEuro.map(
  (movement) => movement * euroToUsdConversionRate
);

console.log(movementsInEuro);
console.log(movementsInUsd);
