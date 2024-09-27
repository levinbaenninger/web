# == vs. ===

<show-structure depth="2" />

Ein Gleichheitsoperator gibt einen wahren oder falschen Wert zurück. Es gibt jedoch zwei Gleichheitsoperatoren, die sich geringfügig
unterscheiden: `==` und `===`.

Der letztere wird **strikter Gleichheitsoperator** genannt. Er ist strikt, weil er keine Typunterscheidung durchführt und daher nur `true` zurückgibt,
wenn beide Werte genau gleich sind.

Der andere wird **loser Gleichheitsoperator** genannt und führt einen Typenzwang durch.

## Beispiel

```Javascript
// We use the Number() function to convert the string to a number, so we can compare it with the number 23 and 7.
const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else {
  console.log("You're number isn't cool!");
}
```

> Die Daumenregel lautet, möglichst den losen Gleichheitsoperator zu vermeiden.
