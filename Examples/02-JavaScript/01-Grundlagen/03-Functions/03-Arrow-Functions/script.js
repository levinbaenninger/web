// 4. Arrow Functions

// Without parameters
const menu = () => {
  console.log('Startup PC1 ............ 1');
  console.log('Startup PC2 ............ 2');
  console.log('Startup Printer ........ 3');
  console.log('Quit ................... 4');
};

menu();

// One line function
const calcAge = (birthYear) => 2023 - birthYear;

// With parameters and return value
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2007, Levin)); // Levin retires in 53 years
