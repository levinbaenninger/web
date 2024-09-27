# Primitive vs. Objekte

<show-structure depth="2" />

![](primitives_objects.png) { width="500" thumbnail="true" }

Um dieses Verhalten zu vermeiden, können wir mit `Object.assign()` eine Kopie erstellen. Zum Beispiel:

```Javascript
const jessica = {
	firstName: 'Jessica',
	lastName: 'Williams',
	age: 27,
};

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.lastName = 'Davis';

console.log('Before marriage: ', jessica); // {firstName: 'Jessica', lastName: 'Williams', age: 27}
console.log('After marriage: ', jessicaCopy); // {firstName: 'Jessica', lastName: 'Davis', age: 27}
```

Das hat aber noch ein kleines Problem, denn nur die erste Ebene wird kopiert, d.h. wenn wir ein Objekt in einem Objekt haben, ist die Adresse im Heap
immer noch dieselbe. Um einen Deep-Clone zu erstellen, müssen wir externe Bibliotheken verwenden, aber das wäre zu umständlich jetzt.
