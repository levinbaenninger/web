# Sets

Sets sind eine neue Datenstruktur in JavaScript, es gibt sie seit ES6. Dabei ist ein Set eine Kollektion von einzigartigen Werten, d.h. ein Set kann
nie Duplikate beinhalten. Auch spielt die Reihenfolge von Elementen in Sets keine Rolle.

Sie werden vor allem dazu gebraucht Duplikate in Arrays zu entfernen

## Set erstellen

Wir erstellen Sets mit dem `new`-Keyword:

````Javascript
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
````

Hier sieht man bereits, dass wir mehrere Duplikate haben, wenn wir dieses Set nun ausgeben, werden wir sehen, dass die Duplikate entfernt wurden:

````Javascript
console.log(ordersSet); // Set(3) {"Pasta", "Pizza", "Risotto"}
````

Wir können aber nicht nur Arrays in das Set einfügen, sondern alle Iterables stehen uns zur Verfügung, also Arrays, aber unter anderem auch Strings:

````Javascript
const nameSet = new Set('Levin');
console.log(nameSet); // Set(5) {"L", "e", "v", "i", "n"}
````

## Datenzugriff- und Modifikation

### Grösse eines Sets erhalten

Mit dem `size`-Property können wir die Grösse eines Sets bestimmen:

````Javascript
console.log(ordersSet.size); // 3
````

### Überprüfen, ob ein Element in einem Set ist

Um zu überprüfen, ob ein bestimmtes Element in einem Set ist, benutzen wir die Methoder `has()`.

````Javascript
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false
````

### Neue Elemente hinzufügen

Mit der `add()`-Methode können wir neue Elemente hinzufügen:

````Javascript
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(5) {"Pasta", "Pizza", "Risotto", "Garlic Bread"}
````

### Elemente löschen

````Javascript
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(4) {"Pasta", "Pizza", "Garlic Bread"}
````

### Elemente abrufen

In Sets gibt es tatsächlich keine Möglichkeit Elemente aus einem Set abzurufen. Jedoch besteht dazu auch kein Bedarf, da wie oben erwähnt, die
Reihenfolge egal ist und es keine Duplikate gibt. Es reicht uns mit `has()` zu überprüfen, ob ein Element in jenem Set ist.

## Über Sets loopen

Da Sets Iterables sind, können wir auch über sie loopen. Das macht man standardmässig wieder mit dem `for .. of`-Loop.

````Javascript
for (const order of ordersSet) console.log(order); // Pasta Pizza Garlic Bread
````

## Beispiel

Oft will man mit Sets einfach die Dupikate aus einem Array herausfischen.

````Javascript
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
````

Hier haben wir bspw. ein Array mit den Mitarbeitern, wollen jetzt aber die einzelnen Berufe haben. Hierfür erstellen wir ein Set:

````Javascript
const roles = new Set(staff);
````

Damit wir nun direkt wieder ein Set herausbekommen, können wir den Spread-Operator verwenden:

````Javascript
const roles = [...new Set(staff)];
````

Wenn wir uns nun den Array `roles` anschauen sehen wir, dass die Duplikate entfernt wurden und dass es immer noch ein Array ist:

````Javascript
console.log(roles); // (3) ["Waiter", "Chef", "Manager"]
````