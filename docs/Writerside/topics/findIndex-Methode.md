# findIndex-Methode

Ähnlich wie die [**`find()`-Methode**](find-Methode.md) können wir mit der `findIndex()`-Methode das erste Element finden, welches eine bestimmte 
Kondition erfüllt. Jedoch erhalten wir nicht das Element selber, sondern den Index des Elementes.

````Javascript
const index = movements.findIndex((movement) => movement < 0);
````

Hier bekommen wir den Index des ersten Elements, das negativ ist.