# Strings - Wichtige Methoden

## toLowerCase() und toUpperCase()

Mit diesen beiden Methoden können wir unseren String in Kleinbuchstaben, bzw. Grossbuchstaben umwandeln:

````Javascript
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
````

Das ist nützlich, wenn wir bspw. eine einheitliche Datenbank haben möchten, aber der User sich vertippt hat:

````Javascript
function correctName(name) {
  const lower = name.toLowerCase();
  const correct = lower[0].toUpperCase() + lower.slice(1);
  console.log(correct);
}

correctName('jOnAS'); // Jonas
````

## trim()

Mit der `trim()`-Methode können wir allfällige Leerzeichen, Tabs, etc. entfernen:

````Javascript
function normalizeMail(email) {
  const normalized = email.toLowerCase().trim();
  console.log(normalized);
}

normalizeMail('  Jonas@HElLo.com \n'); // jonas@hello.com
````

## replace()

Mit der `replace()`-Methode können wir, wie der Name es schon sagt, gewisse Teile in unserem String ersetzen.

Die Methode nimmt zwei Parameter auf: `searchValue` und `replaceValue`. 

````Javascript
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');

console.log(priceUS); // 288.97$
````

Wir können nicht nur mit Strings nach bestimmten Stellen suchen, sondern auch mit Regular Expressions:

````Javascript
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
const announcementCorrect = announcement.replace(/door/g, 'gate');

console.log(announcementCorrect); // All passengers come to boarding gate 23. Boarding gate 23!
````

## includes()

Mit der `includes()`-Methode können wir überprüfen, ob ein bestimmtes Muster im String vorhanden ist:

````Javascript
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
````

## startsWith() und endsWith()

Mit diesen beiden Methoden können wir überprüfen, ob ein String mit einem bestimmten Muster startet bzw. endet:

````Javascript
console.log(plane.startsWith('Air')); // true
console.log(plane.endsWith('A320')); // false
````

