# Objekte

<show-structure depth="2" />

Ein Objekt ist die zweite wichtige Datenstruktur in JavaScript. In Arrays können wir die Daten nicht über den Namen referenzieren, sondern müssen uns
auf den Index verlassen. Um dieses Problem zu lösen, gibt es in JS eine weitere Datenstruktur, nämlich Objekte.

In Objekten definieren wir **Schlüssel-Werte-Paare**. Mit diesen Paaren können wir jedem Wert einen Namen geben. Ein Objekt hat die folgende Syntax:

```Javascript
const objName = {
	key1: value1,
	key2: value2,
	...,
	keyN: valueN,
};
```

## Beispiel

```Javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  age: 16,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
};
```

> Wie du sehen kannst, können wir alle Datentypen benutzen, sogar Arrays!

Der Schlüssel wird auch eine Eigenschaft genannt. Wir können also sagen, dass das Objekt `levin` fünf **Eigenschaften** und fünf
**Schlüssel-Werte-Paare** hat.
