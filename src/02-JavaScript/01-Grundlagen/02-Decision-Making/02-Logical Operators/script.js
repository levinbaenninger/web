// 10. Boolean Logic

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// Example
if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// We can add more than two conditions
const isTired = false; // C

// Example
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
