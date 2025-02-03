---
icon: snooze
---

# Standardparameter und Rest-Parameter

## Standardparameter

Mit **Standardparametern** können wir Standardwerte für Parameter setzen, falls beim Aufruf der Funktion dieser Parameter ausgelassen wird. Standardmässig, wenn wir keine Parameter mitgeben ist der Wert `undefined`.

```javascript
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

Auch das Überspringen von Argumenten ist mit `undefined` möglich:

```javascript
createBooking('LH123', undefined, 300); // numPassengers = 1, price = 300
```

## Rest-Parameter

Die **Rest-Parameter** sind nützlich, wenn es darum geht, eine unbekannte Anzahl an Argumenten zu verarbeiten. Der **Rest-Parameter** speichert die Argumente nämlich in einem Array.

```javascript
const add = function (...numbers) {
  return numbers.reduce((acc, cur) => acc + cur, 0)
};
```

Diese Funktion kann nun eine unendliche Anzahl von Parametern enthalten:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">add(2, 3);</a>
<a data-footnote-ref href="#user-content-fn-2">add(5, 3, 7, 2);</a>
<a data-footnote-ref href="#user-content-fn-3">add(8, 2, 5, 3, 2, 1, 4);</a>
</code></pre>

[^1]: 5

[^2]: 17

[^3]: 25
