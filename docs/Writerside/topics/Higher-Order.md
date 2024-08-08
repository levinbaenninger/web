# First Class und Higher Order Funktionen

## First-Class Funktionen

Unter First-Class Funktionen versteht man folgendes:

- JavaScript behandelt Funktionen als **"erste Klasse Bürger"**
- Das heisst, dass Funktionen **einfach Werte** sind
- Funktionen sind nur ein anderer **Typ von Objekten**

### Beispiele - First-Class Funktionen

Wir können Funktionen in Variablen und Properties speichern:

````Javascript
const add = (a, b) => a + b;

const counter = {
    value: 23
    inc: function() { this.value++; }
}
````

Zudem können wir Funktionen in andere Funktion als Argument mitgeben, hier die `greet`-Funktion:

````Javascript
const greet = () => console.log('Hey Jonas');
btnClose.addEvenListener('click', greet);
````

Darüber hinaus können wir Funktionen von Funktionen zurückgeben, hier die Funktion `calc`:

````Javascript
function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}
````

Ausserdem können wir Methoden auf Funktionen aufrufen, hier die `bind`-Methode:

````Javascript
counter.inc.bind(someOtherObject);
````

## Higher-Order Funktionen

Unter Higher-Order Funktionen versteht man Folgendes: 

- Eine Funktion, die eine andere Funktion als Argument bekommt, eine Funktion die eine neue Funktion zurückgibt oder beides
- Das ist nur möglich wegen den First-Class Funktionen.

### Beispiele 

Funktionen die andere Funktionen annehmen können, hier die `addEventListener`-Funktion. Dabei ist `greet` die Callback-Function:

````Javascript
const greet = () => console.log('Hey Jonas');
btnClose.addEvenListener('click', greet);
````

Funktionen die andere Funktionen zurückgeben, hier ist `count` die Higher-Order Funktion und es wird eine Funktion zurückgegeben:

````Javascript
function count() {
    let counter = 0;
    return function() {
        counter++;
    }
}
````