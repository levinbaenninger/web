# map-Methode

Die Map-Methode funktioniert ähnlich wie die `forEach()`-Methode. Sie geht durch jedes Element im Array durch und führt eine bestimmte 
Callback-Methode aus.

So wird z.B. der Array `[3, 1, 4, 3, 2]` zu `[6, 2, 8, 6, 4]` wenn die Callback-Methode `current * 2` lautet. 

> Im Gegensatz zur genannten `forEach()`-Methode gibt uns `map()` einen neuen Array mit den Resultaten der angewandten Operation zurück.

Wir haben auf folgende Argumente Zugriff:

- Das aktuelle Element
- Den Index des aktuellen Elements
- Den gesamten Array

Mit `map()` können wir so also z.B. einen Währungskonverter machen:

````Javascript
const movementsInEuro = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsdConversionRate = 1.1;

const movementsInUsd = movementsInEuro.map(
  (movement) => movement * euroToUsdConversionRate
);
````