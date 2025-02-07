---
icon: knife-kitchen
---

# Spread und Rest Operator

## Spread Operator

Die Spread (`...`)-Syntax ermöglicht es, ein Iterable, wie z. B. ein Array oder einen String, an Stellen zu erweitern, an denen null oder mehr Argumente (bei Funktionsaufrufen) oder Elemente (bei Array-Literalen) erwartet werden. In einem Objektliteral zählt die Spread-Syntax die Eigenschaften eines Objekts auf und fügt die Schlüssel-Wert-Paare dem zu erstellenden Objekt hinzu.

### Beispiele

#### Funktionsaufrufe

Wir können über die Spread-Syntax einer Funktion die Argumente innerhalb eines Arrays mitgeben.

<pre class="language-javascript"><code class="lang-javascript">const sum = (x, y, z) => {
  return x + y + z;
}

const numbers = [1, 2, 3];

<a data-footnote-ref href="#user-content-fn-1">sum(...numbers));</a>
</code></pre>

#### Array-Literals

Wir können mit der Spread-Syntax Arrays mit Arrays kombinieren und so Elemente hinzufügen.

<pre class="language-javascript"><code class="lang-javascript">const parts = ["shoulders", "knees"];
<a data-footnote-ref href="#user-content-fn-2">const lyrics = ["head", ...parts, "and", "toes"];</a>
</code></pre>

***

Wir können mit dem Spread Operator ausserdem einen Array kopieren.

```javascript
const arr2 = [...arr];
```

***

Mit der Spread-Syntax können wir Arrays verketten.

<pre class="language-javascript"><code class="lang-javascript">let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

<a data-footnote-ref href="#user-content-fn-3">arr1 = [...arr1, ...arr2];</a>
</code></pre>

#### Objekt-Literals

Mit dem Spread Operator können wir Objekte ganz einfach zusammenführen.

<pre class="language-javascript"><code class="lang-javascript">const obj1 = { foo: "bar", x: 42 };
const obj2 = { bar: "baz", y: 13 };

<a data-footnote-ref href="#user-content-fn-4">const mergedObj = { ...obj1, ...obj2 };</a>
</code></pre>

***

Wie auch bei Arrays, können wir Objekte mit der Spread-Syntax klonen.

```java
const clonedObj = { ...obj1 };
```

***

Mit dem Spread Operator können wir Properties überschreiben.

<pre class="language-javascript"><code class="lang-javascript">const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

<a data-footnote-ref href="#user-content-fn-5">const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 };</a>
</code></pre>

## Rest Operator

Du kannst ein [Destructuring ](../objekte-und-datenstrukturen/destructuring.md)Pattern mit dem Rest Operator `...rest` beenden. Dieses Pattern speichert alle verbleibenden Eigenschaften des Objekts oder Arrays in einem neuen Objekt oder Array.

<pre class="language-javascript"><code class="lang-javascript">const { a, ...others } = { a: 1, b: 2, c: 3 };
<a data-footnote-ref href="#user-content-fn-6">console.log(others);</a>

const [first, ...others2] = [1, 2, 3];
<a data-footnote-ref href="#user-content-fn-7">console.log(others2);</a>
</code></pre>

[^1]: 6

[^2]: `["head", "shoulders", "knees", "and", "toes"]`

[^3]: `[0, 1, 2, 3, 4, 5]`

[^4]: `{ foo: "bar", x: 42, bar: "baz", y: 13 }`

[^5]: `{ x: 42, foo: "baz", y: 9 }`

[^6]: `{ b: 2, c: 3 }`

[^7]: `[2, 3]`
