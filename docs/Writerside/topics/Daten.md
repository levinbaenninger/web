# Daten

JavaScript macht es uns leicht Daten zu erstellen, da es kein bestimmtes Format gibt. So ist z.B. folgendes möglich:

````Javascript
const now = new Date();
console.log(now);

console.log(new Date('Aug 19 2021 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date('2021-08-19T18:05:41'));
````

Alle diese obigen Kombinationen sind möglich, jedoch sollte man sich nicht darauf verlassen, das alles funktioniert. Die letzte Variante ist 
wohlmöglich die Beste, da es der Standard für das Datumsformat in Computersystem ist. 

Für noch mehr Möglichkeiten siehe: [**MDN `Date()`-Konstruktor**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

## Methoden

Ein Datum ist in JavaScript ebenfalls ein Objekt, welches verschiedenste Methoden hat.

### `get`-Methoden

Auf einem Datumsobjekt gibt es verschiedenste `get`-Methoden, welche uns einen bestimmten Teil des Objektes zurückgeben:

````Javascript
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4 (Thursday)
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
console.log(future.getTime()); // 2142244980000
````

### `set`-Methoden

Mit den `set`-Methoden können wir bestimmte Teile des Datums verändern:

````Javascript
future.setFullYear(2040);
future.setMonth(6); 
future.setDate(12);
future.setHours(13);
future.setMinutes(15);
future.setSeconds(20);

console.log(future); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)
````

### `toString`-Methoden

Es gibt noch weitere Methoden, welche uns unser Datumsobjekt in einen String umwandeln, den wir dann bspw. einer API senden können:

````Javascript
console.log(future.toISOString()); // 2040-07-12T11:15:20.000Z --> UTC time
console.log(future.toString()); // Sun Jul 12 2040 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toDateString()); // Sun Jul 12 2040
console.log(future.toTimeString()); // 13:15:20 GMT+0200 (Central European Summer Time)
console.log(future.toLocaleString()); // 7/12/2040, 1:15:20 PM
console.log(future.toLocaleDateString()); // 7/12/2040
console.log(future.toLocaleTimeString()); // 1:15:20 PM
console.log(future.toUTCString()); // Sun, 12 Jul 2040 11:15:20 GMT
````

Die Methode `toISOString()` ist besonders nützlich, wenn wir mit APIs arbeiten, die das Datum im UTC-Format verlangen. 

> Die Methode `toLocaleString()` ist abhängig vom Standort des Nutzers: **Darstellung des Datums und Zeitzone**. Dabei kann man als Argument noch 
> das Gebiet angeben. Die volle Übersicht findest du hier: 
> [**W3Schools JS Reference (Dates)**](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocalestring_date_all)