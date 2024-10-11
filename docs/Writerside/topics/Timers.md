# Timers

Es gibt zwei Arten von Timern: `setTimeout` und `setInterval`.

## `setTimeout()`-Methode

Die `setTimeout()`-Methode führt Code in der Zukunft aus. Die Methode verlangt zwei Argumente: eine Callback-Funktion, die aufgerufen wird und 
eine Zeit in ms. 

Das zweite Argument bestimmt, wann die Callback-Methode aufgerufen wird.

````Javascript
setTimeout(() => console.log('Here is your pizza 🍕'), 3000);
````

So wird z.B. diese Methode nach 3s oder eben 3000ms aufgerufen.

> Jeglicher Code der nach der `setTimeout()`-Methode aufgerufen wird, wartet nicht auf das Abschliessen der genannten Methode, sondern sie laufen 
> sofort weiter.

### Argumente mitgeben

Um der Callback-Methode Argumente mitzugeben, müssen wir sie nach dem `timeOut`-Argument angeben: 

````Javascript
setTimeout(
  (ingredients, type) => {
    console.log(
      `Here is your ${type} with ${ingredients.join(' and ')} ${type === 'pizza' ? '🍕' : ''}`
    );
  },
  3000,
  ['olives', 'spinach'],
  'pizza'
);

````

### Timer abbrechen

Wir haben auch die Möglichkeit den Timer abzubrechen, wenn etwas Bestimmtes passiert. Dafür nutzen wir die Methode `clearTimeout()`:

````Javascript
const ingredients = ['olives', 'spinach'];

const pizzaDelivery = setTimeout(
  (ingredients, type) => {
    console.log(
      `Here is your ${type} with ${ingredients.join(' and ')} ${type === 'pizza' ? '🍕' : ''}`
    );
  },
  3000,
  ingredients,
  'pizza'
);

if (ingredients.includes('spinach')) {
  clearTimeout(pizzaDelivery);
}
````

Falls die Pizzazutaten Spinat enthalten, wird die Bestellung abgebrochen, da die Pizzeria keinen Spinat mehr über hat.

## `setInterval()`-Methode

Die `setInterval()`-Methode ruft eine Callback-Funktion in regelmässigen Abständen auf, z.B. 1 Sekunde oder 10 Minuten. Die Syntax ist gleich, wie 
bei der `setTimeout()`-Methode: eine Callback-Funktion, eine Zeit in ms und allenfalls Argumente für die Callback-Funktion. 

````Javascript
const clock = setInterval(() => {
  const now = new Date();
  console.log(
    new Intl.DateTimeFormat('de-CH', { timeStyle: 'medium' }).format(now)
  );
}, 1000);

````

Mit der `setInterval()`-Methode können wir so z.B. eine Uhr bauen. 
