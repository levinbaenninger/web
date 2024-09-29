# First-Class- und Higher-Order-Funktionen

JavaScript ist eine Sprache, welche First-Class-Funktionen hat und somit auch Higher-Order-Funktionen.

## First-Class-Funktionen

First-Class-Funktion
: - Erste Klasse Bürger
: - Funktionen sind nur Werte
: - Ein anderer Typ von Objekt

So können wir z.B. die Funktion `add` oder `increment` als Variable speichern:

````Javascript
const add = (a, b) => a + b;

const counter = {
    value: 23,
    inc: function() { this.value++; } 
}
````

Ausserdem können wir mit First-Class-Funktionen Funktionen als Argumente für andere Funktionen übergeben, wie z.B. bei der Funktion 
`addEventListener()`:

````Javascript
const greet = () => console.log('Hey Levin');
btnClose.addEventListener('click', greet);
````

Darüber hinaus können wir Funktionen als return-Value zurückgeben, das kann oftmals sehr praktisch sein.

Weil Funktionen eben nur Objekte sind haben auch sie einige Methoden, beispielsweise die `bind`-, `call`- und `apply`-Methoden.

````Javascript
counter.inc.bind(someOtherObject);
````

## Higher-Order-Funktionen

Higher-Order-Funktionen
: - Erhält eine andere Funktion als Argument, gibt eine neue Funktion zurück oder beides
: - Nur möglich, aufgrund von First-Class-Funktionen

Im obigen Beispiel mit der `addEventListener`-Funktion ist eben genau diese Funktion eine Higher-Order-Funktion, da sie eine Callback-Funktion als 
Argument, hier `greet`, erhält.

Weiter können wir Funktionen haben, die Funktionen zurückgeben, z.B.:

````Javascript
function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}
````

### Beispiele

````Javascript
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function that accepts a callback
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const highFive = function () {
  console.log('🖐');
};

document.body.addEventListener('click', highFive);
['Jonas', 'Martha', 'Adam'].forEach(highFive);

// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey'); // returns the function that takes the name
greetHey('Jonas');
greetHey('Steven');

greet('Hello')('Jonas');
````

Wie wir sehen können wir unsere eigenen Funktionen erstellen, die Funktionen annehmen (`transformer`). Aber JavaScript nutzt sehr of in ihren 
eigenen Funktionen Callback-Funktionen, wie `addEventListener` oder `forEach`.

### Vorteile

- Alle Funktionen machen genau das, was sie sagen und nicht mehr oder weniger
- Funktionen sind wiederverwendbar
- Es fügt eine Schicht an Abstraktion hinzu