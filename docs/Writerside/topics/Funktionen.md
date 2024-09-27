# Funktionen

<show-structure depth="2" />

Der grundlegende Baustein von JavaScript-Anwendungen sind Funktionen. Sie sind eines der wichtigsten Konzepte der Sprache.

Eine Funktion ist einfach ein **Stück Code, das wir immer wieder in unserem Code verwenden können**. Sie sind also ein bisschen wie Variablen, aber
für ganze Codeabschnitte.

## Funktion ohne Parameter und Rückgabewert

Funktionen werden mit dem Schlüsselwort `function` und einem Namen, gefolgt von `()` deklariert (wir werden später sehen, warum) und dann verwenden
wir das `{}`, um den sogenannten **Funktionskörper** zu erstellen.

```JavaScript
function funcName() {
	// Code
}
```

Hier deklarieren/definieren wir eine Funktion.

Um diese Funktion nun zu verwenden, geben wir den Namen der Funktion gefolgt von einer Klammer an:

```JavaScript
funcName()
```

Dies wird als **aufrufen/ausführen** eine Funktion bezeichnet. Jedes Mal, wenn wir die Funktion aufrufen, wird sie ausgeführt.

### Beispiel - Funktion ohne Parameter und Rückgabewert

```JavaScript
function menu() {
  console.log('Startup PC1 ............ 1');
  console.log('Startup PC2 ............ 2');
  console.log('Startup Printer ........ 3');
  console.log('Quit ................... 4');
}

menu(); /*  Startup PC1 ............ 1
            Startup PC2 ............ 2
            Startup Printer ........ 3
            Quit ................... 4 */
```

## Funktion mit Parametern und ohne Rückgabewert

Sie werden auf die gleiche Weise deklariert wie normale Funktionen, aber in der Klammer stehen Parameter. Parameter sind Werte, die du der Funktion
gibst, damit sie etwas mit ihnen machen kann.

```JavaScript
function funcName(parameter1, parameter2, ...) {
	// Code
}

funcName(argument1, argument2, ...);
```

### Beispiel - Funktion mit Parametern und ohne Rückgabewert

```JavaScript
function logAddition(a, b) {
  let sum = a + b;
  console.log(sum);
}

logAddition(2, 3); // 5
logAddition(5, 12); // 17
```

## Funktionen ohne Parameter und mit Rückgabewert

Eine Funktion kann uns mit dem Schlüsselwort `return` einen Wert zurückgeben.

```JavaScript
function funcName() {
  // Code
  return value;
}

let returnValue = funcName();
console.log(returnValue);
```

### Beispiel - Funktionen ohne Parameter und mit Rückgabewert

```JavaScript
function randNum() {
  return Math.floor(Math.random() * 10) + 1;
}

let num = randNum();
console.log(num); // Random number between 1 and 10
```

## Funktion mit Parametern und mit Rückgabewert

Das ist die Kombination der letzten beiden Methoden.

```JavaScript
function funcName(parameter1, parameter2, ...) {
	// Code
	return value;
}

let returnValue = funcName(argrument1, argument2, ...);
console.log(returnValue);
```

### Beispiel - Funktion mit Parametern und mit Rückgabewert

```JavaScript
function calcSum(a, b) {
  return a + b;
}

let sum = calcSum(2, 3);
console.log(sum); // 5
```
