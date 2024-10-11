'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const hasDepositOverFiveHundred = movements.some((movement) => movement > 500);
console.log(hasDepositOverFiveHundred);

const isOnlyDeposits = movements.every((movement) => movement > 0);
console.log(isOnlyDeposits);
