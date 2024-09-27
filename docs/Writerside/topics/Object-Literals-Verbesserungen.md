# Object Literals - Verbesserungen

Mit ES6 kamen einige Verbesserungen für Object Literals.

## Andere Object Literals referenzieren

Vor ES6 musste man einen Namen und den Wert für ein Objekt angeben, dass man referenzieren möchte. Das hat sich mit ES6 geändert. Man kann nun
einfach den Namen des zu referenzierenden Objektes angeben:

```Javascript
const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //* ES6 enhanced object literals (Other object literals)
  //! openingHours: openingHours // Before ES6
  openingHours, // After ES6
};
```

## Verbesserte Syntax für Methoden

Auch die Syntax von Methoden hat sich geändert, so muss das `funtion`-Keyword nicht mehr verwendet werden:

```Javascript
//* ES6 enhanced object literals (Methods)
order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
}, // Before ES6

order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // After ES6
},
```

## Berechnete Property-Namen

Mit berechneten Property-Namen muss man die Namen nicht selber angeben, sondern kann sie beispielsweise aus einem Array holen:

```Javascript
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//* ES6 enhanced object literals (Computed property names)
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
```
