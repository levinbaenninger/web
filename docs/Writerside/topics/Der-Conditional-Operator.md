# Verzweigungen - Der Konditionale Operator

<show-structure depth="2" />

Der ternäre/konditionale Operator ermöglicht es uns, etwas Ähnliches wie eine `if` / `else` Anweisung zu schreiben, aber alles in einer Zeile.

Die Syntax sieht wie folgt aus:

```Javascript
condition ? exprIfTrue : exprIfFalse
```

Da der konditionale Operator ein Ausdruck ist, können wir ihn auch in einer Variable speichern.

## Beispiel

```JavaScript
const age = 18;

// condition ? exprIfTrue : exprIfFalse
const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`I like to drink ${drink}`);

// if/else version
let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}

console.log(`I like to drink ${drink2}`);

// if/else ladder as ternary operator
const drink3 =
  age >= 18
    ? 'wine 🍷'
    : age >= 16
    ? 'beer 🍺'
    : age >= 10
    ? 'soda 🥤'
    : 'water 💧';

console.log(`I like to drink ${drink3}`);
```
