# Arrays sortieren

Um Arrays in JavaScript zu sortieren, können wir die `sort()`-Funktion nutzen. Bei Strings werden die Elemente alphabetisch geordnet, bei Zahlen 
ebenfalls nach dem Alphabet, was ein Problem sein kann, dafür gibt es aber eine Lösung:

````Javascript
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Numbers
// return < 0 --> A, B
// return > 0 --> B, A
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.sort((a, b) => (a > b ? 1 : -1)));
````

Bei den Zahlen überprüfen wir, ob `a` grösser ist als `b` und geben dementsprechend `1` bzw. `-1` zurück:

- Wenn der return-Wert kleiner als `1` ist, wird so sortiert: `A`, `B`
- Wenn der return-Wert grösser als `1` ist, wird so sortiert: `B`, `A`

Im obigen beispiel wird aufsteigen sortiert, um absteigend zu sortieren, müssen wir das ganze einfach nur umdrehen:

````Javascript
movements.sort((a, b) => (a > b ? -1 : 1));
````

Um Zahlen zu sortieren, können wir auch einfach die Differenz der beiden Werte nutzen:

````Javascript
movements.sort((a, b) => a - b);
movements.sort((a, b) => b - a);
````

> **Wichtig:** Der originale Array wird mit der `sort()`-Methode verändert!

{ style="warning" }