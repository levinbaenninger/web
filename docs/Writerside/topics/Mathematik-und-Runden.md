# Mathematik und Runden

JavaScript bietet uns eine pralle Bibliothek für mathematische Aufgaben an. Darunter Wurzeln, Trigonometrie, Absolutwerte, Runden, etc.

## Wurzeln

Wir können Wurzeln mit der `sqrt()`-Methode beschreiben. Natürlich sind aber auch Brüche im Exponenten möglich um Wurzeln darzustellen:

````Javascript
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2
````

## Aggregatfunktionen

JavaScript stellt uns zwei Aggregatfunktionen zur Verfügung, `min()` und `max()`:

````Javascript
console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.min(5, 18, 23, 11, 2)); // 2
````

## Konstanten

Zudem gibt uns JavaScript Zugriff auf die Konstanten π und e (Eulersche Zahl):

````Javascript
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
````

## Random

Die `random()`-Funktion ermöglicht uns die Erstellung von zufälligen Zahlen:

````Javascript
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.random() * 100); // Random number between 0 and 100
console.log(Math.trunc(Math.random() * 100)); // Random integer between 0 and 100
````

## Runden

### Auf Ganzzahlen runden

Beim Runden gibt es essenziell vier Methoden:

- `trunc()`: entfernt alle Nachkommastellen
- `round()`: rundet nach mathematischen Gesetzen auf die nächste Ganzzahl
- `ceil()`: rundet immer auf
- `floor()`: rundet immer ab

````Javascript
console.log(Math.trunc(23.3)); // 23

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.9)); // 23
````

### Auf Dezimalzahlen runden

Um auf Dezimalzahlen zu runden, nutzen wir die Methode `toFixed()`.

````Javascript
console.log((2.7).toFixed(0)); // 3 (string)
console.log((2.7).toFixed(3)); // 2.700 (string)
console.log((2.345).toFixed(2)); // 2.35 (string)

console.log(+(2.7).toFixed(0)); // 3 (number)
console.log(+(2.7).toFixed(3)); // 2.7 (number)
````

> **Wichtig:** Die Methode `toFixed()` gibt einen String aus und keine Zahl!

{ style="warning" }