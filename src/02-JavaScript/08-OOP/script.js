'use strict';

// Constructor function
const Person = function (firstname, lastname, birthYear) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthYear = birthYear;
};

const levin = new Person('Levin', 'Bänninger', 2007);
const matilda = new Person('Matilda', 'Johnson', 2009);
const jay = new Person('Jay', 'Smith', 2010);
console.log(levin, matilda, jay);

const john = 'John';

console.log(levin instanceof Person);
console.log(john instanceof Person);

Person.hey = function () {
  console.log('Hey there 👋');
};

Person.hey();

// Prototypes
Person.prototype.calcAge = function () {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - this.birthYear);
};

levin.calcAge();
matilda.calcAge();

console.log(levin.__proto__);

Person.prototype.species = 'Homo sapiens';
console.log(levin.species, jay.species);

// ES6 Classes
class Person2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }

  static hey() {
    console.log('Hey there 👋');
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('Please provide a full name with a first and last name.');
  }
}

const jessica = new Person2('Jessica Davies', 'Doe', 1990);
jessica.fullName = 'Kevin Teaser';
Person2.hey();

// Object.create()
const PersonProto = {
  init(firstName, lastName, birthYear) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.birthYear = birthYear;
  },
  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }
};

const steven = Object.create(PersonProto);
steven.init('Steven', 'Williams', 2002);
steven.calcAge();

// Inheritance between "classes": Constructor functions
const Student = function (firstName, lastName, birthYear, course) {
  Person.call(this, firstName, lastName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and I study ${this.course}`);
};

const mike = new Student('Mike', 'Johnson', 2010, 'Computer Science');
mike.introduce();
mike.calcAge();

// Inheritance between "classes": ES6 Classes
class Student2 extends Person2 {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student2('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

// Another class example
class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  get movements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(250);
