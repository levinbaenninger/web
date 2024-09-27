// 4. Regular vs. Arrow Functions

const levin = {
  firstName: 'Levin',
  year: 2017,

  // Regular function
  calcAge() {
    console.log(2037 - this.year); // 20

    // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self); // levin object
      console.log(self.year >= 1981 && self.year <= 1996); // false
    };
    isMillenial();

    // Solution 2
    const isMillenial2 = () => {
      console.log(this); // levin object
      console.log(this.year >= 1981 && this.year <= 1996); // false
    };
    isMillenial2();
  },

  // Arrow function
  greet: () => console.log(`Hey ${this.firstName}`) // Hey undefined
};

levin.calcAge();
levin.greet();
