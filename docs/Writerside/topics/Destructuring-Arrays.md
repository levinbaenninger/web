# Destructuring Arrays

Das **Destructuring** ist eine ES6-Funktion, mit der Werte aus einem Array oder einem Objekt in separate Variablen ausgepackt werden können. Mit
anderen Worten: Durch Destructuring wird eine komplexe Datenstruktur in kleinere Datenstrukturen wie Variablen aufgeteilt.

Normalerweise würden wir etwa so vorgehen, um die Werte aus einem Array abzurufen:

```Javascript
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
```

Aber mit Destructuring ist es viel einfacher, um an die Werte aus einem Array zu kommen:

```Javascript
const [x, y, z] = arr;
console.log(x, y, z); // 1 2 3
```

Wenn wir ein Array destrukturieren wird der originale Array nicht verändert:

```Javascript
console.log(arr); // [1, 2, 3]
```

## Elemente überspringen

Wir können Elemente überspringen, indem wir einfach den Namen der Variable auslassen:

```Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian
```

## Variablen tauschen

Normalerweise, wenn wir die Werte von zwei Variablen umtauschen möchten, würden wir eine `temp`-Variable erstellen:

```Javascript
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // Vegetarian Italian
```

Aber mit Destructuring können wir daraus einen Einzeiler machen:

```Javascript
[main, secondary] = [secondary, main];
console.log(main, secondary); // Italian Vegetarian
```

## Zwei return Values von einer Funktion erhalten

```Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
```

## Verschachteltes Destructuring

Wenn Arrays in anderen Array verschachtelt sind, können wir auch diese ganz einfach destrukturieren:

```Javascript
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // 2 [5, 6]

const [k, , [l, m]] = nested;
console.log(k, l, m); // 2 5 6
```

## Standardwerte

In echten Applikationen, wissen wir oft die Länge des Arrays nicht, deshalb kommen dann Standardwerte zum Einsatz:

```Javascript
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

Wenn wir keine Standardwerte deklarieren, würde hier unser letzter Wert `undefined` sein.
