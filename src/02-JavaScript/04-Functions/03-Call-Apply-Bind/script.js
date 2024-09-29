'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

lufthansa.book(971, 'Levin'); // Levin booked a seat on Lufthansa flight LH971
lufthansa.book(972, 'Martha'); // Martha booked a seat on Lufthansa flight LH972

console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: ƒ}

// Copying the book method would be a bad practice
const book = lufthansa.book;
// book(973, 'Steven'); //! Cannot read property 'airline' of undefined

//* Call method
book.call(eurowings, 974, 'Steven'); // Steven booked a seat on Eurowings flight EW974
book.call(lufthansa, 975, 'Sarah'); // Sarah booked a seat on Lufthansa flight LH975

console.log(eurowings); // {airline: "Eurowings", iataCode: "EW", bookings: Array(1)}
console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(3), book: ƒ}

//* Apply method
book.apply(swiss, [976, 'Mary']); // Mary booked a seat on Swiss Air Lines flight LX976
book.apply(lufthansa, [977, 'John']); // John booked a seat on Lufthansa flight LH977

//* Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(978, 'Peter'); // Peter booked a seat on Eurowings flight EW978
bookLH(979, 'Laura'); // Laura booked a seat on Lufthansa flight LH979
bookLX(980, 'Michael'); // Michael booked a seat on Swiss Air Lines flight LX980

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100)); // 123

const addTaxRate = function (rate) {
  return function (value) {
    value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

// CHALLENGE
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    if (answer < this.answers.length && !isNaN(answer)) {
      this.answers[answer]++;
    } else {
      alert('Invalid answer!');
    }

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else {
      console.log('Invalid type!');
    }
  }
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
