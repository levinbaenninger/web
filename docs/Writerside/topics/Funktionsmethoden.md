# Funktionsmethoden

Mit den Funktionsmethoden können wir das [**`this`**](Das-this-Keyword.md)-Keyword explizit setzen. Dabei gibt es drei Methoden: `call`, `apply` 
und `bind`.

## `call()`-Methode

````Javascript
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

lufthansa.book(971, 'Levin'); // Levin booked a seat on Lufthansa flight LH971
lufthansa.book(972, 'Martha'); // Martha booked a seat on Lufthansa flight LH972
console.log(lufthansa); // {airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: ƒ}

// Copying the book method would be a bad practice
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;

book(973, 'Steven'); //! Cannot read property 'airline' of undefined
````

Hier sagen wir also, dass die globale Funktion `book` das Gleiche macht wie die Methode `lufthansa.book`. Nun bekommen wir aber einen Fehler, da 
das `this`-Keyword `undefined` ist.

Um das nun zu umgehen, können wir die `apply`-Methode nutzen, um zu sagen, dass wir einen Flug für Lufthansa bzw. Eurowings buchen wollen.

````Javascript
book.call(eurowings, 974, 'Steven'); // Steven booked a seat on Eurowings flight EW974
book.call(lufthansa, 975, 'Sarah'); // Sarah booked a seat on Lufthansa flight LH975
````

Das erste Argument bestimmt also das `this`-Keyword.

## `apply()`-Methode

Die `apply()`-Methode funktioniert ganz ähnlich, jedoch geben wir die Argumente in Form eines Arrays mit:

````Javascript
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

book.apply(swiss, [976, 'Mary']); // Mary booked a seat on Swiss Air Lines flight LX976
book.apply(lufthansa, [977, 'John']); // John booked a seat on Lufthansa flight LH977
````

## `bind()`-Methode

Die `bind()`-Methode ist praktisch, wenn man eine Methode sehr oft braucht, jedoch mit einem anderen `this`. Dabei gibt uns die `bind()`-Methode 
eine Funktion zurück. Diese Funktion können wir nun überall aufrufen, ohne dass `this`-Keyword durch `call()` oder `apply()` setzen zu müssen.

````Javascript
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(978, 'Peter'); // Peter booked a seat on Eurowings flight EW978
bookLH(979, 'Laura'); // Laura booked a seat on Lufthansa flight LH979
bookLX(980, 'Michael'); // Michael booked a seat on Swiss Air Lines flight LX980
````

Es ist aber auch möglich andere Parameter fest zu definieren. Hier möchte man z.B. immer eine Buchung für den Eurowings Flug EW23 ausführen:

````Javascript
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Steven Williams'); // Steven Williams booked a seat on Eurowings flight EW23
````

### Beispiel mit Event-Listeners

Das `this`-Keyword bei Event-Listeners bezieht sich immer auf das HTML-Element, das heisst, wenn wir eine Methode aufrufen, welche das 
`this`-Keyword braucht, wird diese fehlschlagen. Hier kommt die `bind()`-Methode ins Spiel wo wir eben das `this`-Keyword bestimmen können:

````Javascript
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
````