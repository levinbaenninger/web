# Truthy- und Falsy-Werte

<show-structure depth="2" />

Falsy-Werte sind nicht wirklich falsch, aber sie werden falsch, wenn wir versuchen, sie in einen booleschen Wert umzuwandeln. In JavaScript gibt es
nur fünf gefälschte Werte:

- `0`
- `''`
- `undefined`
- `null`
- `NaN`

Alles andere sind sogenannte truthy-Werte, also Werte, die in wahr umgewandelt werden. Zum Beispiel:

- `1`
- `Hello World`
- `{}`
- ...

## Beispiel

```Javascript
// Falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false

console.log(Boolean('Jonas')); // true
console.log(Boolean({})); // true

// We can use this to check if a variable has a value or not
const money = 0;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}

// Bad example, because we don't take into account the case where the user inputs 0
let height;
if (height) {
  console.log('Yay! Height is defined');
} else {
  console.log('Height is undefined');
}
```
