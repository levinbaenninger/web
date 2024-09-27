# Arrays - Methoden

<show-structure depth="2" />

JavaScript hat einige eingebaute Funktionen, die wir auf Arrays anwenden können. Diese werden Methoden genannt und wir können sie als \*
\*Array-Operationen\*\* betrachten. Es gibt zahllose Array-Methoden in JavaScript, aber jetzt lernen wir erst einmal nur die wichtigsten kennen.

## push()

Die `push()`-Methode fügt Elemente an das Ende eines Arrays an. Der Rückgabewert ist die **Länge des Arrays**. Du kannst mehr als ein Element auf
einmal
hinzufügen.

```Javascript
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]
```

## unshift()

Die Methode `unshift()` fügt Elemente am Anfang eines Arrays hinzu. Sie gibt auch die **Länge des Arrays** zurück. Du kannst mehr als ein Element auf
einmal hinzufügen.

```Javascript
friends.unshift('John');
console.log(friends); // ["John", "Michael", "Steven", "Peter", "Jay"]
```

## pop()

Die Methode `pop()` entfernt das letzte Element aus einem Array. Der Rückgabewert ist das **entfernte Element**. Wenn das Array leer ist, wird
`undefined` zurückgegeben und das Array wird nicht verändert.

```Javascript
friends.pop();
console.log(friends); // ["John", "Michael", "Steven", "Peter"]
```

## shift()

Die Methode `shift()` entfernt das erste Element eines Arrays. Sie gibt auch das **entfernte Element** zurück. Wenn das Array leer ist,
wird `undefined` zurückgegeben und das Array wird nicht verändert.

```Javascript
friends.shift();
console.log(friends); // ["Michael", "Steven", "Peter"]
```

## indexOf()

Gibt den Index des ersten Vorkommens eines Wertes in einem Array zurück oder -1, wenn er nicht vorhanden ist.

```Javascript
console.log(friends.indexOf('Steven')); // 1
console.log(friends.indexOf('Bob')); // -1
```

## includes()

Ermittelt, ob ein Array ein bestimmtes Element enthält, und gibt je nach Fall `true` oder `false` zurück.

```Javascript
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
```
