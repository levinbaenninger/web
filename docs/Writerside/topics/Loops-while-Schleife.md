# Loops - while Schleife

<show-structure depth="2" />

Es gibt noch eine andere Art von Schleife in JavaScript: die `while`-Schleife.

```Javascript
while (condition) {
  statement
}
```

Insgesamt ist die `while`-Schleife vielseitiger, d.h. sie kann in einer größeren Vielfalt von Situationen eingesetzt werden. Das liegt daran, dass du
nicht wirklich einen Zähler brauchst.

## Beispiel

```Javascript
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end...');
}
```

Hier wissen wir nicht, wie oft wir die Anweisung in einer Schleife wiederholen müssen, und das ist genau ein Anwendungsbeispiel für eine `while`
-Schleife.
