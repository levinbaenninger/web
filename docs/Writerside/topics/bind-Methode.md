# bind Methode

Genau wie die `call`-Methode erlaubt es uns die `bind`-Methode das `this`-Keyword für jeglichen Funktionsaufruf manuell zu ändern. Jedoch ruft `bind` die Funktion nicht sofort auf, sondern gibt uns eine neue Funktion zurück, in welcher das `this`-Keyword "gebunden" ist.

````Javascript
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

//* Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLH(543, 'Stefan Muller');
bookLX(961, 'Enrico Gonzales');
````

Here we only passed in one argument and that's the object to which the `this`-Keyword will be referring to. However, we can further specify the arguments, for example we could create a function that books all Eurowings flights with the flight number 23:

````Javascript
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Levin Bänninger');
````

