# Rest Pattern und Parameter

Das **Rest Pattern** sieht genauso aus, wie der Spread Operator. Jedoch macht es genau das Gegenteil des Spread Operators. Mit dem Rest Pattern können
wir mehrere Elemente zu sammeln und sie in einem Array zu speichern.

## Unterschied Rest Pattern und Spread Operator

Damit die JS-Engine nun die beiden Operatoren unterscheiden kann, obwohl sie die gleiche Syntax haben, muss die Engine auf die Position achten.
Ist `...` auf der rechten Seite des `=`, dann ist es der Spread Operator. Ist aber der `...` auf der linken Seite, wird das Rest Pattern benutzt.

````Javascript
// Spread is always on the righthand side
const arr = [1, 2, ...[3, 4]];

// Rest is always on the lefthand side
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]
````

## Destructuring

### Funktion des Rest Pattern bei Arrays

Wie man oben sehen kann, speichert das Rest Pattern beim Destructuring die restlichen Werte in einem Array. Deshalb gelten folgende Regeln:

> - Es kann nur **ein** Rest Pattern geben 
> - Das Rest Pattern muss am **Ende** sein
> - Übersprungene Elemente werden **nicht** zum Rest-Array hinzugefügt

Es folgt ein weiteres Beispiel:

````Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(pizza, Risotto, otherFood); // Pizza Risotto ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
````

### Funktion des Rest Patterns bei Objekten

Das Rest Pattern funktioniert nicht nur bei Arrays, sondern auch bei Objekten. Jedoch werden hier die restlichen Properties nicht in einem Array, 
sondern in einem Objekt gespeichert.

````Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { thu, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // {{fri: {…}, sat: {…}}
````

## Rest Parameters

Wir können den Rest Operator auch in Funktionen als Parameter nutzen. Die **Rest Parameter** sind sehr nützlich, wenn es darum geht, eine 
unbekannte Anzahl an Argumenten zu verarbeiten. Der Rest Parameter speichert die Argumente nämlich in einem Array.

````Javascript
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
````

Diese Funktion kann nun eine unendliche Anzahl von Parametern enthalten:

````Javascript
add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25
````

Natürlich können wir das auch mit dem Spread-Operator verbinden:

````Javascript
const x = [23, 5, 7];
add(...x); // 35
````

### Beispiel

````Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); // mushrooms (3) ["onion", "olives", "spinach"]
restaurant.orderPizza('mushrooms'); // mushrooms []
````