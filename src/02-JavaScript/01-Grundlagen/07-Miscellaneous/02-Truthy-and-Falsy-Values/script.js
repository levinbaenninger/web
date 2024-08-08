// 8. Truthy and Falsy Values

// Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true

// We can use this to check if a variable has a value or not
const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

// Bad example, because we don't take into account the case where the user inputs 0
let height;
if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is undefined');
}
