# Optional Chaining (?.)

## Properties

Wenn man die Werte von einem Property bspw. `restaurant.openingHours.mon.open` lesen möchte, muss man immer sichergehen, dass diese auch
existieren. Wenn dieses Property, wie hier tief verschachtelt ist, kann das sehr mühsam und unleserlich werden:

```Javascript
if (restaurant.openingHours && restaurant.openingHours.mon) {
    console.log(restaurant.openingHours.mon.open);
}
```

Um das zu vermeiden, gibt es seit ES2020 ein Feature namens **Optional Chaining**. Mit diesem wird, wenn ein Property nicht existiert, sofort
`undefined` anstatt ein Fehler ausgegeben. Derselbe Ausdruck sieht nun so aus:

```Javascript
console.log(restaurant.openingHours.mon?.open);
```

Hier wird `open` nur dann zurückgegeben, wenn das Property vor dem `?` auch wirklich existiert. Ansonsten wird sofort `undefined zurückgegeben`.

### Beispiel - Properties

```Javascript
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
```

## Methoden

Wir können nicht nur überprüfen, ob bestimmte Properties existieren, sondern auch, ob es eine Methode gibt:

```Javascript
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');
```

## Arrays

Wir können **Optional Chaining** auch auf Arrays anwenden. Wir können es benutzen, um zu überprüfen, ob ein Array leer ist:

```Javascript
const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];

console.log(user[0]?.name ?? 'User array empty'); // prints 'Jonas'
console.log(user[1]?.name ?? 'User array empty'); // prints 'User array empty'
```
