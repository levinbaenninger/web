# Die Logischen Zuweisungsoperatoren

Die logischen Zuweisungsoperatoren erlauben es uns Zuweisungen direkt mit den logischen Operatoren zu machen.

Wenn wir bspw. folgendes in unserem Programm machen wollen:

```Javascript
const rest1 = {
  restaurantName: 'Classico Italiano',
  numGuests: 20,
};

const rest2 = {
  restaurantName: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests ?? 10;
```

Hier fügen wir in jedes Restaurant eine `numGuests` Property hinzu und falls es sie bereits gibt, bekommt sie denselben Wert, ansonsten ist es `10`.

Das können wir jedoch mit den logischen Zuweisungsoperatoren abkürzen:

```Javascript
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
```

Das macht genau dasselbe, wie der obige Code. Analog gibt es `&&=` und `||=`.
