# Der Nullish Coalescing Operator (??)

## Das Problem

Im letzten Beispiel mit den Kurzschlüssen hatten wir folgendes Beispiel:

```Javascript
const restaurant = {
  name: 'Classico Italiano',
  numGuests: 0,
};

const guests = restaurant.numGuests || 10;
console.log(guests); // 10
```

Hier ist jedoch das Problem, dass wenn die Anzahl Gäste 0 ist, wir trotzdem den Standardwert, also 10 zurückbekommen.

## Die Lösung

Wenn wir uns in solch einer Situation wiederfinden können wir den Nullish Coalescing Operator (`??`) benutzen. Denn bei diesem Operator werden
nullish-Werte verglichen anstatt falsy-Werte. Zu den nullish-Werten gehören `null` und `undefined`.

```Javascript
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect); // 0
```
