//* Die Call und Apply Methoden

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(239, 'Levin Bänninger');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [], 
}

const book = lufthansa.book;
// book(23, 'Sarah Williams'); //! Error, because this keyword is undefined

//* Call Method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

//* Apply Method
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
console.log(eurowings);

