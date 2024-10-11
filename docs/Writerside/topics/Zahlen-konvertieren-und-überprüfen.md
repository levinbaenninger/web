# Zahlen konvertieren und überprüfen

In JavaScript sind Zahlen immer floating point numbers, egal ob sie eine ganze Zahl, wie `101` oder eben `3.141` ist. Das können wir auch ganz 
einfach überprüfen:

````Javascript
console.log(23 === 23.0); // true
````

## Floating Point Numbers

Die Präzision von floating point numbers ist stark begrenzt, da solch eine Zahl mit dem Binärsystem dargestellt wird. So kann z.B. folgendes 
passieren:

````Javascript
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
````

> Hier müssen wir einfach aufpassen, da wir es als Fehler von JavaScript hinnehmen müssen.

## Konversion

Es gibt mehrere Möglichkeiten einen Wert in eine Zahl zu konvertieren:

````Javascript
console.log(Number('23')); // 23
console.log(+'23'); // 23

console.log(Number.parseInt('30px', 10)); // 30
console.log(Number.parseFloat('2.5rem')); // 2.5
````

Die beiden letzteren nennt man auch _parsing_ und ist nützlich um auch Strings mit Suffixen, z.B. CSS-Werten, in Zahlen umzuwandeln.

## Überprüfung

Es gibt hauptsächlich zwei Methoden, um zu überprüfen, ob eine Zahl auch wirklich eine Zahl ist: `isNaN()` und `isFinite()`. Letzteres ist dabei 
deutlich zuverlässiger, da es auch Werte, wie `Infinity` abfangen kann:

````Javascript
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true
console.log(object.isNaN(23 / 0)); // false

console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20X')); // false
console.log(Number.isFinite(23 / 0)); // false
````