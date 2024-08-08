# Kurzschlüsse (&amp;&amp; und ||)

Wir haben noch nicht ganz alle Funktionen der beiden logischen Operatoren angeschaut.

## Der ODER-Operator

Der ||-Operator hat noch ein paar spezielle Verhaltensweisen, nämlich:

- Sie können jeden Datentypen benutzen
- Sie können jeden Datentypen zurückgeben
- Kurzschlüsse

Wir können von dem ||-Operator nicht nur Booleans zurückerhalten, sondern auch alle anderen Datentypen:

````Javascript
3 || 'Levin' // 3
````

Dabei gibt es ein paar Regeln, welchen Wert wir zurückerhalten:

- Wenn der erste Ausdruck truthy ist, wird uns dieser zurückgegeben und der andere Operand nicht ausgewertet
- Ist aber der zweite Ausdruck falsy, dann wird der zweite Ausdruck ausgewertet und zurückgegeben

````Javascript
'' || 'Jonas' // Jonas
true || 0 // true
undefined || null // null
````

Diese Regeln können natürlich auch auf mehrere Ausdrücke angewendet werden:

````Javascript
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
````

### Beispiel - ODER-Operator

````Javascript
const restaurant = {
  name: 'Classico Italiano',
};

const guests = restaurant.numGuests || 10; // 10 because numGuests is undefined, therefore falsy
````

## Der UND-Operator

Das Gleiche ist natürlich auch mit dem &&-Operator möglich, jedoch funktioniert er genau umgekehrt:

````Javascript
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas

console.log('Hello' && 23 && null && 'Jonas'); // null
````

Er sucht also einen Falsy-Ausdruck und gibt diesen dann zurück. Gibt es keine, dann wird der letzte Ausdruck zurückgegeben.

### Beispiel - UND-Operator

Mit dieser Syntax können wir das Prüfen von Dingen, ob sie existieren mit einem `if` verhindern:

````Javascript
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); 
````