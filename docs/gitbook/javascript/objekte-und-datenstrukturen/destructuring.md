---
icon: webhook
---

# Destructuring

Die Destructuring-Syntax ist ein JavaScript-Ausdruck, der es ermöglicht, Werte aus Arrays oder Eigenschaften von Objekten in einzelne Variablen auszupacken.

## Objekte

<pre class="language-javascript"><code class="lang-javascript"><strong>const restaurant = {
</strong>  restaurantName: 'Classico Italiano',
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
</code></pre>

### Variablennamen ändern

Wenn wir nicht die Propertynamen des Objektes als Variablennamen haben wollen, können wir diese auch umbenennen.

```javascript
const { restaurantName: name, openingHours: hours, categories: tags } = restaurant;
```

### Standardwerte

Jede destrukturierte Eigenschaft kann einen Standardwert haben. Der Standardwert wird verwendet, wenn die Eigenschaft nicht vorhanden ist oder einen undefinierten Wert hat. Er wird nicht verwendet, wenn die Eigenschaft den Wert `null` hat.

```javascript
const { menu = [], starterMenu: starters = [] } = restaurant;
```

## Arrays

<pre class="language-javascript"><code class="lang-javascript">const arr = [1, 2, 3];
const [<a data-footnote-ref href="#user-content-fn-1">x</a>, <a data-footnote-ref href="#user-content-fn-2">y</a>, <a data-footnote-ref href="#user-content-fn-3">z</a>] = arr;
</code></pre>

### Elemente überspringen

<pre class="language-javascript"><code class="lang-javascript">const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}

let [<a data-footnote-ref href="#user-content-fn-4">main</a>, , <a data-footnote-ref href="#user-content-fn-5">secondary</a>] = restaurant.categories;
</code></pre>

### Variablen vertauschen

Normalerweise, wenn wir die Werte von zwei Variablen umtauschen möchten, würden wir eine `temp`-Variable erstellen:

```javascript
const temp = main;
main = secondary;
secondary = temp;
```

Aber mit Destructuring können wir daraus einen Einzeiler machen:

```javascript
[main, secondary] = [secondary, main];
```

### Standardwerte

<pre class="language-javascript"><code class="lang-javascript">const [<a data-footnote-ref href="#user-content-fn-6">p</a> = 1, <a data-footnote-ref href="#user-content-fn-7">q</a> = 1, <a data-footnote-ref href="#user-content-fn-8">r</a> = 1] = [8, 9];
</code></pre>

[^1]: 1

[^2]: 2

[^3]: 3

[^4]: Italian

[^5]: Vegeterian

[^6]: 8

[^7]: 9

[^8]: 1
