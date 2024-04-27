# Der Spread Operator

## Arrays

Der Spread Operator nimmt alle Elemente aus einem Array heraus. Am besten ist es, uns ein Beispiel anzuschauen:

````Javascript
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(newArr); // [1, 2, 7, 8, 9]
````

Hier haben wir einen neuen Array erstellt mit neuen Werten (1 und 2) und allen Werten aus dem Array `arr`.

> Der schlechte und veraltete Weg ging so:
>
> ````Javascript
>   
> const arr = [7, 8, 9];
> const newArr = [1, 2, arr[0], arr[1], arr[2]];
> 
> console.log(newArr); // [1, 2, 7, 8, 9]
> ````
>
> Wie man sieht, ist dieser Weg sehr unflexibel.

{style="warning"}

Der Spread Operator ist ähnlich, wie Destructuring. Jedoch kann man mit dem Spread Operator alle Elemente aus einem Array nehmen und es kreiert keine
neuen Variablen. Als Konsequenz können wir diesen Operator nur dann nutzen, wenn wir ansonsten **Werte, die mit Kommas getrennt werden**, deklarieren.

### Arrays kopieren

Mit dem Spread Operator ist es sehr einfach Arrays zu kopieren:

````Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};


const mainMenuCopy = [...restaurant.mainMenu];
````

### Mehrere Arrays zusammenführen

Auch das ist eine leichte Aufgabe mit dem Spread Operator:

````Javascript
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
````

## Strings

Auch Strings können mit dem Spread Operator auspacken:

````Javascript
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];

console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']
````

## Funktionen

Spread kann sehr nützlich sein, wenn wir einer Funktion Argumente übergeben:

````Javascript
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`);
  }
};

const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
restaurant.orderPasta(...ingredients); // Here is your delicious pasta with 1, 2, 3
````

## Objekte

Seit ES2018 können wir den Spread Operator auch bei Objekten anwenden:

````Javascript
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
````

Hier fügen wir ebenfalls alle Properties und Methoden des `restaurant`-Objektes ein und fügen noch zwei weitere Properties hinzu.