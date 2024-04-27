# Funktionen - Arrow

<show-structure depth="2" />

In ES6 wurden Pfeilfunktionen hinzugefügt. Das ist die dritte Art von Funktion. Pfeilfunktionen sind einfach eine besondere Form von
Funktionsausdrücken, die kürzer sind und daher schneller geschrieben werden können. Die Syntax sieht wie folgt aus:

```JavaScript
const funcName = () => expression

const funcName = param => expression

const funcName = (param) => expression

const funcName = (param1, paramN) => expression

const funcName = () => {
  statements
}

const funcName = param => {
  statements
}

const funcName = (param) => {
	statements
}

const funcName = (param1, paramN) => {
  statements
}
```

Es gibt einige kleine Unterschiede zwischen Funktionsausdrücken und Pfeilfunktionen, die wir in späteren Abschnitten kennenlernen werden.

## Beispiele

```Javascript
const menu = () => {
  console.log('Startup PC1 ............ 1');
  console.log('Startup PC2 ............ 2');
  console.log('Startup Printer ........ 3');
  console.log('Quit ................... 4');
};

menu();

const calcAge = (birthYear) => 2023 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2007, Levin)); // Levin retires in 53 years
```