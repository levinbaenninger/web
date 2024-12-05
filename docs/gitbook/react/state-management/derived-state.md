---
icon: arrow-down-9-1
---

# Derived State

<details>

<summary>Derived State</summary>

State, der aus einer bereits bestehenden State-Variable oder aus Props abgeleitet bzw. berechnet werden kann.

</details>

## Beispiel

```jsx
const [cart, setCart] = useState([
  { name: "JaveScript Course", price: 15.99 }
  { name: "Node.js Bootcamp", price: 14.99 }
]);
const [numItems, setNumItems] = useState(2);
const [totalPrice, setTotalPrice] = useState(30.98);
```

Dieser Code hat gleich drei Probleme:

* Drei State-Variablen, obwohl `numItems` und `totalPrice` abhängig von `cart` sind
* Sie müssen synchron bleiben
* 3 State-Updates -> 3 Re-Renders

***

Wenn wir jedoch den State ableiten können wir alle diese Probleme auf einen Schlag lösen:

<pre class="language-jsx"><code class="lang-jsx">const [<a data-footnote-ref href="#user-content-fn-1">cart</a>, setCart] = useState([
  { name: "JaveScript Course", price: 15.99 }
  { name: "Node.js Bootcamp", price: 14.99 }
]);
const numItems = <a data-footnote-ref href="#user-content-fn-2">cart.length</a>;
const totalPrice = <a data-footnote-ref href="#user-content-fn-3">cart.reduce((acc, cur) => acc + cur.price, 0)</a>
</code></pre>

[^1]: **Single Source of Truth**

[^2]: Anzahl Items abgeleitet von der Länge des Arrays

[^3]: Array-Funktion genutzt, um den Endpreis zu berechnen
