# Strings - Weitere Methoden

## split()

Eine weiter nützliche Methode ist die `split()`-Methode. Mit ihr kann man Strings aufteilen und in Arrays speichern.

Dabei muss man einen Parameter mitgeben, wo der String aufgeteilt werden soll:

````Javascript
console.log('A+very+nice+string'.split('+')); // ["A", "very", "nice", "string"]
console.log('Jonas Schmedtmann'.split(' ')); // ["Jonas", "Schmedtmann"]
````

Da wir einen Array zurückbekommen, können wir das sehr gut mit Destructuring kombinieren:

````Javascript
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
````

## join()

Die Methode `join()` ist genau das Gegenteil von `split()`, denn es bring Strings in Arrays wieder zusammen. 

Im Parameter können wir sagen, wie sie getrennt werden sollen, bspw. `' '`.

````Javascript
const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName); // Mr. Jonas Schmedtmann
````

## padStart() und padEnd()

Mit diesen beiden Methoden können wir "Padding" um unseren String herum kreieren. 

Das erste Argument ist, wie lang der String am Schluss sein soll und das Zweite ist, das Füllerzeichen:

````Javascript
const message = 'Go to gate 23!';
console.log(message.padStart(22, '+').padEnd(30, '+')); // +++++++Go to gate 23!++++++++
````

