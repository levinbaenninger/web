# Standardparameter

Mit **Default Parametern** können wir Standardwerte für Parameter setzen, falls beim Aufruf der Funktion dieser Parameter ausgelassen wird.
Standardmässig, wenn wir keine Parameter mitgeben ist der Wert `undefined`.

```Javascript
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // numPassengers = 1, price = 199
createBooking('LH123', 2, 800); // numPassengers = 2, price = 800
createBooking('LH123', 2); // numPassengers = 2, price = 398
```

Auch das Überspringen von Argumenten ist möglich:

```Javascript
createBooking('LH123', undefined, 300); // numPassengers = 1, price = 300
```
