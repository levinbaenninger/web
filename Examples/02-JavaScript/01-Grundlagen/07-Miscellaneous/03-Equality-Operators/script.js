// 9. Equality Operators: == vs. ===

// We use the Number() function to convert the string to a number, so we can compare it with the number 23 and 7.
const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else {
  console.log("You're number isn't cool!");
}
