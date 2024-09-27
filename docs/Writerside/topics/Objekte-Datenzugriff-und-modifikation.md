# Objekte - Datenzugriff und -modifikation

<show-structure depth="2" />

## Datenzugriff

Es gibt zwei Möglichkeiten, auf Daten eines Objekts zuzugreifen:

- **Punktnotation**
- **Klammernotation**

### Punktnotation

Die Syntax der Punktnotation sieht wie folgt aus:

```Javascript
objName.property;
```

Es ist ziemlich einfach. Beispiel mit unseren Personendaten:

```Javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  age: 16,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
};

console.log(levin.lastName); // Bänninger
console.log(levin.age); // 16
console.log(levin.friends); // (3) ["Jonas", "Marie", "Peter"]
```

### Klammernotation

Die Syntax für die Klammerschreibweise sieht wie folgt aus:

```Javascript
objName['expression'];
```

Wie du sehen kannst, ist das auch ziemlich einfach. Wieder das Beispiel mit unseren Personendaten:

```Javascript
console.log(levin['lastName']); // Bänninger
console.log(levin['age']); // 16
console.log(levin['friends']); // (3) ["Jonas", "Marie", "Peter"]
```

> Das gilt für beide Notationen. Wenn wir versuchen, auf eine Eigenschaft zuzugreifen, die nicht existiert, erhalten wir `undefined`.

### Unterschied

Der große Unterschied, zwischen den beiden ist, dass ich mit der Klammerschreibweise einen Ausdruck eintippen kann. Du könntest zum Beispiel Folgendes
tun:

```Javascript
const nameKey = 'Name';
console.log(levin['first' + nameKey]); // Levin
console.log(levin['last' + nameKey]); // Bänninger
```

Das ist nicht möglich mit der Punktnotation.

> **Wann sollte ich was verwenden?** In der Regel solltest du immer die Punktschreibweise verwenden, weil sie viel einfacher zu lesen ist. Verwende
> die Klammerschreibweise nur, wenn du den Eigenschaftsnamen berechnen musst.

## Datenmodifikation

### Eine Eigenschaft hinzufügen

```Javascript
levin.location = 'Switzerland';
levin['twitter'] = '@LevinBaenninger';
```

### Eine Eigenschaft bearbeiten

```Javascript
levin.job = 'programmer';
levin['location'] = 'Zurich';
console.log(levin); // {firstName: "Levin", lastName: "Bänninger", age: 16, job: "programmer", friends: Array(3), …}
```

### Eine Eigenschaft löschen

```Javascript
delete levin.location;
delete levin['twitter'];
console.log(levin); // {firstName: "Levin", lastName: "Bänninger", age: 16, job: "programmer", friends: Array(3), …}
```
