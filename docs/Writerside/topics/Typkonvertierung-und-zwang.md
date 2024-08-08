# Typkonvertierung und -zwang

<show-structure depth="2" />

JavaScript verhält sich oft sehr seltsam, besonders wenn es einen Wert von einem Datentyp in einen anderen umwandeln muss.

In JavaScript gibt es **Typkonvertierung** und **Typzwang**. Sie hören sich sehr ähnlich an, sind es aber in Wirklichkeit nicht. Typumwandlung
bedeutet, dass wir **manuell** von einem Typ in einen anderen umwandeln, während Typzwang die **automatische Umwandlung** von Datentypen hinter den
Kulissen bedeutet.

## Typkonvertierung

Eine Typumwandlung liegt vor, wenn wir eine Variable explizit von einem Typ in einen anderen umwandeln wollen.

````Javascript
const inputYear = '1991';

// Number() = converts a string to a number
// We can't really do math with strings, that's why we need to convert it to a number with Number()
console.log(Number(inputYear) + 18); // 2009

// NaN = Not a Number
// What happens if we try to convert a string that is not a number?
console.log(Number('Jonas')); // NaN

// We can check if a value is NaN with isNaN()
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN('Jonas')); // true

// String() = converts a number to a string
// We can convert a number to a string with String()
console.log(String(23)); // '23'
````

Um den Datentyp in Zahlen oder Strings zu ändern, verwenden wir die Funktionen `Number()` oder `String()`. Wenn wir der Funktion `Number()` einen
nicht-numerischen Wert übergeben, erhalten wir `NaN` zurück.

Um zu prüfen, ob eine Zahl `NaN` ist, können wir die Funktion `isNaN()` verwenden, die uns einen booleschen Wert zurückgibt.

## Typzwang

Typenzwang tritt immer dann auf, wenn ein Operator mit zwei Werten zu tun hat, die unterschiedliche Typen haben. In diesem Fall wandelt JavaScript
einen der Werte um, damit er mit dem anderen Wert übereinstimmt und die Operation am Ende ausgeführt werden kann.

````Javascript
// The + operator converts the number to a string, in this case it will convert 23 to '23'
console.log('I am ' + 23 + ' years old'); // 'I am 23 years old'

// The -, /, *, <, >, ... operators converts the string to a number, in this case it will convert '23' to 23
console.log('23' - '10' - 3); // 10
console.log('23' * '2'); // 46
console.log('23' > '18'); // true
````

