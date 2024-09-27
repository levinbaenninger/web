# Über Objekte loopen

## Über Propertynamen (Keys) loopen

Um über Keys zu loopen können wir die `.keys()`-Methode verwenden:

```Javascript
for (const day of Object.keys(openingHours)) {
  console.log(day); // thu, fri, sat
}
```

Dieses `Object.keys(openingHours)` erstellt uns einen Array mit allen Keys. Das heisst, dass wir im Endeffekt wieder über einen Array loopen:

```Javascript
const properties = Object.keys(openingHours);
console.log(properties); // ['thu', 'fri', 'sat']
```

## Über Werte (Values) loopen

Um über die Values zu loopen können wir die `.values()`-Methode verwenden:

```Javascript
for (const day of Object.values(openingHours)) {
  console.log(day); // {open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}
}
```

Auch hier erstellt `Object.values()` einen neuen Array, dieses Mal mit den Werten:

```Javascript
const values = Object.values(openingHours);
console.log(values); // [{open: 12, close: 22}, {open: 11, close: 23}, {open: 0, close: 24}]
```

## Über Einträge (Entries) loopen

Um über das ganze Objekt zu loopen, brauchen wir Entries. Entries sind eigentlich nur die Keys und die Values zusammen. Entries haben wir schon beim
Loopen über Arrays verwendet, um auch den Index zu erhalten. Hierfür verwenden wir die `.entries()`-Methode.

```Javascript
const entries = Object.entries(openingHours);
console.log(entries); // [['thu', {open: 12, close: 22}], ['fri', {open: 11, close: 23}], ['sat', {open: 0, close: 24}]]
```

Um die Daten nun Sauber darzustellen, können wir mit Destructuring arbeiten:

```Javascript
for (const [key, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`); // On thu we open at 12 and close at 22. ...
}
```
