# Strings - Grundlagen

## Zeichen und Länge

Um ein Zeichen von einem String an einer bestimmten Position zu erhalten, können wir, wie in Arrays, den Index verwenden:

```Javascript
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]); // T
console.log(plane[1]); // 3
console.log(plane[5]); // undefined
```

Wie wir sehen gibt uns der Compiler `undefined` zurück, falls es den Index nicht gibt.

Wie auch in Arrays können wir die Länge eines Strings mit der `length`-Property erhalten.

## Methoden

### indexOf()

Mit der `indexOf()`-Methode können wir den ersten Index eines Zeichens erhalten:

```Javascript
console.log(airline.indexOf('r')); // 6
console.log(airline.indexOf('z')); // -1
console.log(airline.indexOf('Portugal')); // 8
```

Darüber hinaus können wir das letzte Auftreten des Zeichens ebenfalls mit `lastIndexOf()` bestimmen:

```Javascript
console.log(airline.lastIndexOf('r')); // 10
```

### slice()

Die `slice()`-Methode gibt uns einen Teil eines Strings zurück.

Die Methode nimmt zwei Parameter an: `start` und `end`. Dabei ist `start` der Start des zu extrahierenden Strings (als Index) und `end` das Ende des
Strings (ebenfalls als Index).
Falls man den zweiten Parameter weglässt, wird einfach der Rest des Strings extrahiert.

> **Achtung**: Bei `end` wird der String vor dem Index extrahiert, d.h. der Index wird nicht in den Substring inkludiert.

{ style="warning" }

```Javascript
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air
```

Natürlich können wir Methoden auch kombinieren:

```Javascript
console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
```

Darüber hinaus können wir auch negative Indexe benutzt werden, diese beginnen dann einfach bei dem Ende des Wortes:

```Javascript
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga
```
