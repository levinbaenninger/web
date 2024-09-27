# Arrays

<show-structure depth="2" />

Arrays sind unsere erste Datenstruktur. Arrays sind wie ein großer Container, in den wir Variablen werfen können, um sie später zu referenzieren. In
JavaScript sind die beiden wichtigsten Datenstrukturen **Arrays** und **Objekte**.

## Arrays erstellen

Wir erstellen ein Array mit `[]` und die Werte werden mit `,` getrennt:

```JavaScript
const friends = ['Michael', 'Steven', 'Peter'];
```

Das ist die häufigste Art, ein Array zu erstellen, aber es gibt noch eine andere:

```JavaScript
const years = new Array(1991, 1984, 2008, 2020);
```

Wie du siehst, kann ein Array jede Art von Daten enthalten, z. B. Zahlen, Strings oder sogar `null` oder `undefined`.

## Verschiedene Datentypen in einem Array

Wir können mehrere verschiedene Datentypen in einem Array haben, z. B. Strings, Zahlen (auch berechnete) oder sogar Arrays.

```Javascript
const levin = [
  'Levin',
  'Bänninger',
  2023 - 2007,
  'computer scientist',
  friends,
];

console.log(levin); // ["Levin", "Bänninger", 16, "computer scientist", Array(3)]
```
