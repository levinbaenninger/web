---
icon: table
---

# Sets und Maps

Sets und Maps sind zwei alternative Datenstrukturen zu Arrays und Objekten.

## Sets

Mit dem Set-Objekt kannst du eindeutige Werte jedes Typs speichern, egal ob primitive Werte oder Objektreferenzen.

### Sets erstellen

<pre class="language-javascript"><code class="lang-javascript">const <a data-footnote-ref href="#user-content-fn-1">ordersSet</a> = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
</code></pre>

Wie wir sehen können, werden Duplikate sofort entfernt.

### Datenzugriff

Es gibt in Sets keine Möglichkeit Elemente abzurufen. Jedoch besteht dazu auch kein Bedarf, da die Reihenfolge egal ist und es keine Duplikate gibt. Es reicht uns mit `has()` zu überprüfen, ob ein Element in jenem Set ist.

### Länge

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-2">ordersSet.size;</a>
</code></pre>

### `has()`

Um zu überprüfen, ob ein bestimmtes Element in einem Set ist, benutzen wir die Methode `has()`.

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-3">ordersSet.has('Pizza');</a>
<a data-footnote-ref href="#user-content-fn-4">ordersSet.has('Bread');</a>
</code></pre>

### Sets modifizieren

#### `add()`

```
ordersSet.add('Garlic Bread');
```

#### `delete()`

```javascript
ordersSet.delete('Risotto');
```

## Maps

Das Map-Objekt enthält Schlüssel-Wert-Paare und merkt sich die ursprüngliche Einfügereihenfolge der Schlüssel. Jeder Wert (sowohl Objekte als auch primitive Werte) kann entweder als Schlüssel oder als Wert verwendet werden.

### Maps erstellen

```javascript
const restaurant = new Map();
```

### Datenzugriff

```javascript
restaurant.get('name');
restaurant.get(true);
restaurant.get(1);
restaurant.get(3);
```

### Grösse

```
restaurant.size;
```

### `has()`

```javascript
restaurant.has('categories');
restaurant.has('open');
restaurant.has('closed');
```

### Maps modifizieren

#### `set()`

```javascript
restaurant.set('name', 'Classico Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');
```

Auch die Verkettung von mehreren `set()`-Methoden ist möglich.

```javascript
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed!');
```

#### `delete()`

```javascript
restaurant.delete(2);
```

#### `clear()`

Mit der `clear()`-Methode können wir alle Key-Value-Paare einer Map löschen.

```javascript
restaurant.clear();
```

[^1]: `{"Pasta", "Pizza", "Risotto"}`

[^2]: 3

[^3]: `true`

[^4]: `false`
