// 4. Objects

// 4.3 Object Methods

const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  birthYear: 2007,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
  hasDriversLicense: true,

  /* calcAge: function (birthYear) {
    return 2023 - birthYear;
  }, */

  /* calcAge: function () {
    return 2023 - this.birthYear;
  }, */

  calcAge() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license`;
  },
};

/* console.log(levin.calcAge(2007)); // 16 */
console.log(levin.calcAge()); // 16
console.log(levin.age); // 16

console.log(levin.getSummary());
