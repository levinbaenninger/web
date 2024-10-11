# filter-Methode

Die `filter()`-Methode ist dafür da, um bestimmte Elemente aus einem Array herauszufiltern.

So wird z.B. der Array `[3, 1, 4, 3, 2]` mit dem Filter `current > 2` zu `[3, 4, 3]`.

> `filter()` gibt uns einen neuen Array zurück, welcher den Anforderungen der Kondition entspricht.

Mit `filter` können wir z.B. nur die Ein- bzw. Auszahlungen bekommen:

````Javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => movement > 0);
const withdrawals = movements.filter((movement) => movement < 0);
````

