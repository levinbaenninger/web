---
icon: puzzle
---

# Modules

Module sind wiederverwendbare Codeteile, die Implementierungsdetails kapseln. Dabei sind Module meistens in einem File.&#x20;

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">import { rand } from './math.js';</a>

const diceP1 = rand(1, 6, 2);
const diceP2 = rand(1, 6, 2);
const scores = { diceP1, diceP2 }

<a data-footnote-ref href="#user-content-fn-2">export { scores };</a>
</code></pre>

## Vorteile

* **Software zusammensetzen**: Module sind kleine Bausteine, die wir zusammenfügen, um komplexe Anwendungen zu erstellen
* **Komponenten isolieren**: Module können isoliert entwickelt werden, ohne an die gesamte Codebasis denken zu müssen
* **Code abstrahieren**: Low-Level-Code in Modulen implementieren und diese Abstraktionen in andere Module importieren
* **Code organisieren**: Module führen auf natürliche Weise zu einer besser organisierten Codebase
* **Code wiederverwenden**: Module ermöglichen es uns, denselben Code einfach wiederzuverwenden, auch über mehrere Projekte hinweg

## ES6 Modules

Bei ES6 Modulen beinhaltet eine Datei genau ein Modul.

### Unterschiede: Modules vs. Scripts

<table><thead><tr><th>Eigenschaft</th><th width="264">ES6 Module</th><th>Script</th></tr></thead><tbody><tr><td>Top-Level-Variablen</td><td>Auf Modul beschränkt</td><td>Global</td></tr><tr><td>Standardmodus</td><td>Strict Mode</td><td>"Sloppy" Mode</td></tr><tr><td>Top-Level <code>this</code></td><td><code>undefined</code></td><td><code>window</code></td></tr><tr><td>Imports und Exports</td><td><a data-footnote-ref href="#user-content-fn-3">✓ Ja</a></td><td>× Nein</td></tr><tr><td>HTML-Linking</td><td><code>&#x3C;script type="module"></code></td><td>&#x3C;<code>script></code></td></tr><tr><td>Download</td><td>Asynchron</td><td>Synchron</td></tr></tbody></table>

### Importieren und exportieren

Wir können ein File einfach über ein `import`-Statement importieren.

{% tabs %}
{% tab title="script.js" %}
```javascript
import './shoppingCart.js';
console.log('Importing module');
```
{% endtab %}

{% tab title="shoppingCart.js" %}
```javascript
console.log('Exporting module');
```
{% endtab %}

{% tab title="Output" %}
```bash
Exporting module
Importing module
```
{% endtab %}
{% endtabs %}

Wie wir sehen können, wird also einfach der Code des importieren Files ausgeführt. Dabei spielt die Reihenfolge keine Rolle, da das `import`-Statement sowieso gehoisted wird.

***

Weiter gibt es sogenannte Named Exports, das heisst, dass wir den Namen des zu importierenden Codes angeben müssen.

{% tabs %}
{% tab title="script.js" %}
<pre class="language-javascript"><code class="lang-javascript">import { addToCart, <a data-footnote-ref href="#user-content-fn-4">totalPrice as price</a>, tq } from './shoppingCart.js';

addToCart('bread', 5);
addToCart('milk', 3);
console.log(price, tq);
</code></pre>
{% endtab %}

{% tab title="shoppingCart.js" %}
<pre class="language-javascript"><code class="lang-javascript">const shippingCost = 10;
const cart = [];

export const addToCart = (product, quantity) => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}(s) added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, <a data-footnote-ref href="#user-content-fn-5">totalQuantity as tq</a> };
</code></pre>
{% endtab %}

{% tab title="Output" %}
```bash
5 bread(s) added to cart
3 milk(s) added to cart
237 23
```
{% endtab %}
{% endtabs %}

***

Wir können auch das ganze Modul als Objekt importieren.

{% tabs %}
{% tab title="script.js" %}
```javascript
import * as ShoppingCart from './shoppingCart.js';

console.log(ShoppingCart.totalPrice);
```
{% endtab %}

{% tab title="Output" %}
```bash
237
```
{% endtab %}
{% endtabs %}

***

Wir können auch Default-Exports machen. Diese können wir dann beim importieren nennen, wie wir wollen.&#x20;

{% tabs %}
{% tab title="script.js" %}
```javascript
import log from './shoppingCart.js';

log();
```
{% endtab %}

{% tab title="shoppingCart.js" %}
```javascript
export default () => {
  console.log('Exporting module');
}
```
{% endtab %}

{% tab title="Output" %}
```bash
Exporting Module
```
{% endtab %}
{% endtabs %}

{% hint style="warning" %}
Technisch ist es möglich Named-Exports und Default-Exports zu mischen, es ist jedoch nicht empfohlen!
{% endhint %}

## CommonJS

CommonJS Imports und Export wurden vor allem in Node.js gebraucht und sind dadurch auch heute noch weit verbreitet.

{% tabs %}
{% tab title="script.js" %}
```javascript
const { addToCart } = require(./shoppingCart.js);
```
{% endtab %}

{% tab title="shoppingCart.js" %}
```javascript
exports.addToCart = () => {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product}(s) added to cart`);
}
```
{% endtab %}
{% endtabs %}

[^1]: Importieren → Dependency

[^2]: Exportieren → Public API

[^3]: Müssen auf Top-Level stattfinden.

    Imports werden gehoisted.

[^4]: Wir können die Importe umbenennen, indem wir `as` benutzen.

[^5]: Wir können die Exporte auch umbenennen, indem wir `as` nutzen.
