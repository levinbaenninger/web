# Maps

Maps sind ebenfalls eine neue Datenstruktur, die in ES6 dazugekommen sind. Sie sind deutlich nützlicher als Sets.

Eine Map ist eine Datenstruktur, um Werte den Schlüsseln zuzuordnen. Das klingt erstmal sehr ähnlich wie Objekte. Der grosse Unterschied zwischen
ihnen ist, dass in Maps die Keys jede Art von Datentyp haben kann.

## Erstellen von Maps

Wie Sets auch erstellen wir Maps mit dem `new`-Keyword:

````Javascript
const restaurant = new Map();
````

## Datenzugriff und -modifikation

### Key-Value Paar hinzufügen

Um Daten hinzuzufügen, können wir die `set()`-Methode verwenden, dabei ist der erste Parameter der Key und der zweite der Wert:

````Javascript
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');
````

Falls es den Key schon gibt, wird der Wert einfach aktualisiert.

Der return-Wert von `set()` ist die Map auf welcher die Methode aufgerufen wird. Als Konsequenz daraus können wir `set()`-Methoden verketten:

````Javascript
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');
````

### Alle Key-Value Paare einer Map

Eine Map sieht auf den ersten Blick ein wenig gewöhnungsbedürftig aus:

````Console
0: {"name" => "Classico Italiano"}
1: {1 => "Firenze, Italy"}
2: {2 => "Lisbon, Portugal"}
````

### Werte einer Map erhalten

Mit der `get()`-Methode können wir die Werte einer Map anhand des Schlüssels erhalten:

````Javascript
console.log(restaurant.get('name')); // Classico Italiano
console.log(restaurant.get(true)); // We are open!
console.log(restaurant.get(1)); // Firenze, Italy
console.log(restaurant.get(3)); // undefined
````

Bei einem Key, der nicht existiert erhalten wir `undefined` zurück.

### Überprüfen, ob eine Map einen Key hat

Mit der Methode `has()` können wir überprüfen, ob die Map diesen Key hat:

````Javascript
console.log(restaurant.has('categories')); // true
console.log(restaurant.has('open')); // true
console.log(restaurant.has('closed')); // false
````

### Ein Key-Value Paar löschen

Mit der Methode `delete()` können wir anhand des Keys ein Key-Value Paar löschen:

````Javascript
restaurant.delete(2);
````

### Grösse einer Map erhalten

Genau wie beim Set können wir auch bei einer Map die Grösse erhalten mit dem Property `size`:

````Javascript
console.log(restaurant.size); // 7
````

### Alle Key-Value Paare einer Map löschen

Um alle Key-Value Paare einer Map zu löschen, benutzen wir die `clear()`-Methode:

````Javascript
restaurant.clear();
````

### Objekt in eine Map konvertieren

Um Objekte in eine Map zu kopieren, können wir einfach die Werte von `Object.entries()` in eine neue Map legen:

````Javascript
const hoursMap = new Map(Object.entries(openingHours));
````

## Über eine Map loopen

Da eine Map ebenfalls ein Iterable ist, ist der `for .. of` Loop ebenfalls verfügbar. 

````Javascript
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
````