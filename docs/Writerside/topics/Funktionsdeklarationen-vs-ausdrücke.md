# Funktionen - Funktionsdeklarationen vs. -ausdrücke

<show-structure depth="2" />

In JavaScript gibt es verschiedene Möglichkeiten, Funktionen zu schreiben. Und jede Art von Funktion funktioniert auf eine etwas andere Weise.

## Funktionsdeklarationen

Die Funktionen, die wir vorhin gesehen haben, heißen **Funktionsdeklaration**, weil wir einfach das Schlüsselwort `function` verwenden, um eine
Funktion zu deklarieren, ähnlich wie eine Variable. Sehen wir uns ein weiteres Beispiel an:

```JavaScript
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);
```

## Funktionsausdrücke

Wenn wir Funktionsausdrücke haben, speichern wir die Funktion in einer Variablen als Ausdruck, und diese Variable wird dann die Funktion sein. Dieser
Ausdruck erzeugt dann einen Wert, sodass die Variable am Ende nur einen Wert hat.

```JavaScript
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const age = calcAge(1991);
console.log(age);
```

Wie du siehst, geben wir der Funktion keinen Namen, diese wird dann **anonyme Funktion** genannt.

## Unterschiede

Es gibt einige Unterschiede, die später noch wichtig werden. Aber es gibt einen wichtigen praktischen Unterschied: Wir können Funktionsdeklarationen
aufrufen, bevor sie definiert sind:

```JavaScript
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
```

Das liegt am **Hoisting**, ein Konzept, mit dem wir uns später beschäftigen werden.
