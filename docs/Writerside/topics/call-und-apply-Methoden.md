# call und apply Methoden

Mit den beiden Methoden `call` und `apply` können wir das `this` Keyword von Objekten bestimmen. Am besten ist dazu ein Beispiel:

````Javascript
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
````

Der Lufthansa-Group gehören mehrere Airlines, darunter Lufthansa selbst und Eurowings. Für beide brauchen wir dieselben Methoden, jedoch wäre Copy-Paste keine gute Variante. Deshalb könnte man denken, dass man eine neue globale Funktion `book` erstellt, die wir aus der Lufthansa `book`-Methode erstellen.

Wenn wir jedoch diese Funktion aufrufen, ist das `this`-Keyword `undefined`, da wir es ja im globalen Kontext aufrufen. Um dieses Problem zu beheben, gibt es die `call` und `apply`-Methoden.

## call Methode

````Javascript
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');
````

Mithilfe der `call`-Methode können wir das `this`-Keyword bestimmen, in diesem Fall ist das der erste Parameter. Die restlichen Parameter sind die normalen Parameter unserer `book`-Methode. 

## apply Methode

Die `apply`-Methode funktioniert fast gleich wie die `call`-Methode, jedoch werden die Parameter der Methode als Array mitgegeben:

````Javascript
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData);
````

Die `apply`-Methode wird jedoch heutzutage kaum mehr verwendet, da wir einfach den Spread-Operator nutzen können:

````Javascript
book.call(eurowings, ...flightData);
````