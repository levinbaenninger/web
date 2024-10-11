# reduce-Methode

Die `reduce()`-Methode "reduziert" alle Elemente eines Arrays auf einen Wert hinab, z.B. das Addieren aller Werte.

So wird z.B. der Array `[3, 1, 4, 3, 2]` zu `13` mit `accumulator + current`.

So können wir z.B. das Guthaben auf einem Bankkonto berechnen anhand der Ein- und Auszahlungen:

````Javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, cur) => acc + cur, 0);
````

Die Methode erwartet zwei Argumente: die Callback-Funktion und den Initialwert des `accumulators`, hier `acc`. Die Callbackmethode hat vier 
Argumente, die wir nutzen können:

- Den Accumulator, welcher den gesamten Wert speichert, z.B. am Anfang `0`, dann `200`, `650`, `250`, etc.
- Den aktuellen Wert, z.B. `200` oder `-400`
- Den aktuellen Index
- Den eigentlichen Array

Aber wir können z.B. auch den Maximalwert eines Arrays herausfinden:

````Javascript
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
````