# Funktionen, die Callback Funktionen annehmen

Als Erstes erstellen wir zwei Funktionen, die wir als Callback nutzen wollen:

````Javascript
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
}
````

Danach erstellen wir eine Funktion, die Funktionen annehmen kann:

````Javascript
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
}
````

Wenn wir nun diese Funktion `transformer` aufrufen, können wir entscheiden, was mit dem String geschehen soll:

````Javascript
transformer('JavaScript is the best!', upperFirstWord); 
transformer('JavaScript is the best!', oneWord);
````

> **Wichtig:** Wir rufen die Callback-Funktion nicht beim Funktionsaufruf auf, sondern diese wird erst in der eigentlichen Funktion aufgerufen.

{ style="warning" }