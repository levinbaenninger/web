# Destructuring Objects

Wir können nicht nur Arrays, sondern auch Objekte destrukturieren. Um Objekte zu destrukturieren, nutzen wir die geschweiften Klammern `{}`. Im
Gegensatz zu den Arrays müssen wir hier die korrekten Property-Namen schreiben:

```Javascript
const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
    },
};

const { restaurantName, openingHours, categories } = restaurant;
console.log(restaurantName, openingHours, categories); // Classico Italiano
//                                                        { thu: { open: 12, close: 22 },
//                                                        fri: { open: 11, close: 23 },
//                                                        sat: { open: 0, close: 24 } }
//                                                        ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```

## Variablennamen ändern

Jedoch müssen wir uns mit den Property-Namen nicht zufriedengeben. Wir können sie dennoch so ändern:

```Javascript
const { restaurantName: name, openingHours: hours, categories: tags } = restaurant;
console.log(name, hours, tags); // Classico Italiano
//                                 { thu: { open: 12, close: 22 },
//                                 fri: { open: 11, close: 23 },
//                                 sat: { open: 0, close: 24 } }
//                                 ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
```

## Standardwerte

Die Standardwerte funktionieren genau gleich, wie bei Arrays:

```Javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
```

## Variablenwerte ändern

Wir können Variablen auch mit Objekt Destructuring mutieren:

```Javascript
let a = 1;
let b = 2;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); // 23 7
```

Hierbei ist es wichtig, die Destruction in Klammen zu halten, da JS ansonsten einen Codeblock erwartet.

## Verschachtelte Objekte

Auch verschachtelte Objekte sind für uns kein Problem:

```Javascript
const {
  openingHours: {
    fri: { open, close },
  },
} = restaurant;
console.log(open, close);
```
