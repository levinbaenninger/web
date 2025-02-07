---
icon: right-left-large
---

# Call, Apply und Bind

Mit den Funktionsmethoden können wir das [`this`-Keyword](this-keyword.md) explizit setzen. Dabei gibt es drei Methoden: `call`, `apply` und `bind`.

### `call()`-Methode﻿ <a href="#call-methode" id="call-methode"></a>

<pre class="language-javascript"><code class="lang-javascript">const lufthansa = {
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

<a data-footnote-ref href="#user-content-fn-1">lufthansa.book(971, 'Levin');</a>
<a data-footnote-ref href="#user-content-fn-2">lufthansa.book(972, 'Martha');</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(lufthansa);</a>

// Copying the book method would be a bad practice
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const book = lufthansa.book;

<a data-footnote-ref href="#user-content-fn-4">book(973, 'Steven');</a>
</code></pre>

Hier sagen wir also, dass die globale Funktion `book` das Gleiche macht wie die Methode `lufthansa.book`. Nun bekommen wir aber einen Fehler, da das `this`-Keyword `undefined` ist.

Um das nun zu umgehen, können wir die `call`-Methode nutzen, um zu sagen, dass wir einen Flug für Lufthansa bzw. Eurowings buchen wollen.

```javascript
book.call(eurowings, 974, 'Steven'); // Steven booked a seat on Eurowings flight EW974
book.call(lufthansa, 975, 'Sarah'); // Sarah booked a seat on Lufthansa flight LH975
```

Das erste Argument bestimmt also das `this`-Keyword.

### `apply()`-Methode﻿ <a href="#apply-methode" id="apply-methode"></a>

Die `apply()`-Methode funktioniert ganz ähnlich, jedoch geben wir die Argumente in Form eines Arrays mit:

```javascript
const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

book.apply(swiss, [976, 'Mary']); // Mary booked a seat on Swiss Air Lines flight LX976
book.apply(lufthansa, [977, 'John']); // John booked a seat on Lufthansa flight LH977
```

### `bind()`-Methode﻿ <a href="#bind-methode" id="bind-methode"></a>

Die `bind()`-Methode ist praktisch, wenn man eine Methode sehr oft braucht, jedoch mit einem anderen `this`. Dabei gibt uns die `bind()`-Methode eine Funktion zurück. Diese Funktion können wir nun überall aufrufen, ohne dass `this`-Keyword durch `call()` oder `apply()` setzen zu müssen.

<pre class="language-javascript"><code class="lang-javascript">const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

<a data-footnote-ref href="#user-content-fn-5">bookEW(978, 'Peter');</a>
<a data-footnote-ref href="#user-content-fn-6">bookLH(979, 'Laura');</a>
<a data-footnote-ref href="#user-content-fn-7">bookLX(980, 'Michael');</a>
</code></pre>

Es ist aber auch möglich andere Parameter fest zu definieren. Hier möchte man z.B. immer eine Buchung für den Eurowings Flug EW23 ausführen:

<pre class="language-javascript"><code class="lang-javascript">const bookEW23 = book.bind(eurowings, 23);
<a data-footnote-ref href="#user-content-fn-8">bookEW23('Steven Williams');</a>
</code></pre>

#### Beispiel mit Event-Listeners﻿ <a href="#beispiel-mit-event-listeners" id="beispiel-mit-event-listeners"></a>

Das `this`-Keyword bei Event-Listeners bezieht sich immer auf das HTML-Element, das heisst, wenn wir eine Methode aufrufen, welche das `this`-Keyword braucht, wird diese fehlschlagen. Hier kommt die `bind()`-Methode ins Spiel wo wir eben das `this`-Keyword bestimmen können:

```javascript
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
```

[^1]: Levin booked a seat on Lufthansa flight LH971

[^2]: Martha booked a seat on Lufthansa flight LH972

[^3]: `{airline: "Lufthansa", iataCode: "LH", bookings: Array(2), book: ƒ}`

[^4]: Cannot read property 'airline' of undefined

[^5]: Peter booked a seat on Eurowings flight EW978

[^6]: Laura booked a seat on Lufthansa flight LH979

[^7]: Michael booked a seat on Swiss Air Lines flight LX980

[^8]: Steven Williams booked a seat on Eurowings flight EW23
