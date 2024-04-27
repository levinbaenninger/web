// 3. The this keyword

//* Global this keyword
console.log(this); // window object

//* Regular function call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined
};

calcAge(1991);

//* Arrow function
const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // window object
};

calcAgeArrow(1991);

//* Method - regular function
const jonas = {
  year: 1991,
  calcAge() {
    console.log(this); // jonas object
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // this keyword is only assigned a value when the object calls the method

//* Method - arrow function
const levin = {
  year: 2017,
  calcAge: () => {
    console.log(this); // window object
    console.log(2037 - this.year); // NaN
  },
};

levin.calcAge();
