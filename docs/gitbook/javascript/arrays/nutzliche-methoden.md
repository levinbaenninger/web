---
icon: toolbox
---

# Nützliche Methoden

## `slice()`

Die `slice()`-Methode gibt eine [Shallow Copy](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy) eines Teils eines Arrays in ein neues Array-Objekt zurück, das von Anfang bis Ende (ohne Ende) ausgewählt wird, wobei Anfang und Ende den Index der Elemente in diesem Array darstellen. Das ursprüngliche Array wird nicht verändert.

<pre class="language-javascript"><code class="lang-javascript">const arr = ['a', 'b', 'c', 'd', 'e'];

<a data-footnote-ref href="#user-content-fn-1">arr.slice(2);</a>
<a data-footnote-ref href="#user-content-fn-2">arr.slice(2, 4);</a>
<a data-footnote-ref href="#user-content-fn-3">arr.slice(-2);</a>
<a data-footnote-ref href="#user-content-fn-4">arr.slice(-1);</a>
<a data-footnote-ref href="#user-content-fn-5">arr.slice(1, -2);</a>
<a data-footnote-ref href="#user-content-fn-6">arr.slice();</a>
</code></pre>

## `splice()`

Die Methode `splice()` ändert den Inhalt eines Arrays, indem sie bestehende Elemente entfernt oder ersetzt und/oder neue Elemente an ihrer Stelle hinzufügt.

<pre class="language-javascript"><code class="lang-javascript">const months = ['Jan', 'March', 'April', 'June'];
<a data-footnote-ref href="#user-content-fn-7">months.splice(1, 0, 'Feb');</a>
<a data-footnote-ref href="#user-content-fn-8">months.splice(4, 1, 'May');</a>
</code></pre>

## `concat()`

Die Methode **concat()** wird verwendet, um zwei oder mehr Arrays zusammenzuführen. Diese Methode verändert die bestehenden Arrays nicht, sondern gibt ein neues Array zurück.

<pre class="language-javascript"><code class="lang-javascript">const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
<a data-footnote-ref href="#user-content-fn-9">arr1.concat(arr2);</a>
</code></pre>

## `join()`

Die Methode `join()` erstellt eine neue Zeichenkette und gibt sie zurück, indem sie alle Elemente in diesem Array durch Kommas oder eine angegebene Trennzeichenkette trennt. Wenn das Array nur ein Element enthält, wird dieses Element ohne Trennzeichen zurückgegeben.

<pre class="language-javascript"><code class="lang-javascript">const elements = ['Fire', 'Air', 'Water'];
<a data-footnote-ref href="#user-content-fn-10">elements.join();</a>
<a data-footnote-ref href="#user-content-fn-11">elements.join('');</a>
<a data-footnote-ref href="#user-content-fn-12">elements.join('-');</a>
</code></pre>

## `at()`

Die `at()`-Methode nimmt einen ganzzahligen Wert an und gibt das Element an diesem Index zurück, wobei positive und negative Ganzzahlen möglich sind. Negative Ganzzahlen werden ab dem letzten Element im Array zurückgezählt.

<pre class="language-javascript"><code class="lang-javascript">const arr = [5, 12, 8, 130, 44];
<a data-footnote-ref href="#user-content-fn-13">arr.at(2);</a>
<a data-footnote-ref href="#user-content-fn-14">arr.at(-2);</a>
</code></pre>

## `indexOf()`

Die Methode `indexOf()` gibt den ersten Index zurück, an dem ein bestimmtes Element im Array gefunden werden kann, oder -1, wenn es nicht vorhanden ist.

<pre class="language-javascript"><code class="lang-javascript"><strong>const friends = ['Michael', 'Peter', 'John', 'Trina', 'Fred'];
</strong><a data-footnote-ref href="#user-content-fn-15">friends.indexOf('Peter');</a>
<a data-footnote-ref href="#user-content-fn-16">friends.indexOf('Bob');</a>
</code></pre>

## `includes()`&#x20;

Die Methode `includes()` bestimmt, ob ein Array einen bestimmten Wert in seinen Einträgen enthält, und gibt je nachdem `true` oder `false` zurück.

<pre class="language-javascript"><code class="lang-javascript">const friends = ['Michael', 'Peter', 'John', 'Trina', 'Fred'];
<a data-footnote-ref href="#user-content-fn-17">friends.includes('Peter');</a>
<a data-footnote-ref href="#user-content-fn-18">friends.includes('Bob');</a>
</code></pre>

## `find()`

Die `find()`-Methode gibt das erste Element im angegebenen Array zurück, das die angegebene Prüffunktion erfüllt. Wenn kein Wert die Prüffunktion erfüllt, wird `undefined` zurückgegeben.

```javascript
currentAccount = accounts.find(
    (account) => account.username === inputLoginUsername.value
);
```

## `findIndex()`

Die Methode `findIndex()` gibt den Index des ersten Elements in einem Array zurück, das die angegebene Prüffunktion erfüllt. Wenn kein Element die Prüffunktion erfüllt, wird -1 zurückgegeben.

```javascript
const index = movements.findIndex((movement) => movement < 0);
```

## `some()`

Die Methode some() prüft, ob mindestens ein Element im Array den von der angegebenen Funktion implementierten Test besteht. Sie gibt `true` zurück, wenn sie in dem Array ein Element findet, für das die angegebene Funktion `true` liefert; andernfalls gibt sie `false` zurück. Das Array wird dabei nicht verändert.

<pre class="language-javascript"><code class="lang-javascript">const arr = [1, 2, 3, 4, 5];
<strong><a data-footnote-ref href="#user-content-fn-19">arr.some((element) => element % 2 === 0);</a>
</strong></code></pre>

## `every()`

Die Methode `every()` prüft, ob alle Elemente im Array den von der angegebenen Funktion implementierten Test bestehen. Sie gibt einen booleschen Wert zurück.

<pre class="language-javascript"><code class="lang-javascript">const arr= [1, 2, 3, 4, 5];
<a data-footnote-ref href="#user-content-fn-20">arr.every((element) => element % 2 === 0);</a>
</code></pre>

## `flat()`

Die `flat()`-Methode erstellt ein neues Array, in dem alle Unterarrayelemente rekursiv bis zur angegebenen Tiefe verkettet werden.

<pre class="language-javascript"><code class="lang-javascript">const arr1 = [0, 1, 2, [3, 4]];
<a data-footnote-ref href="#user-content-fn-21">arr1.flat();</a>

const arr2 = [0, 1, [2, [3, [4, 5]]]];
<a data-footnote-ref href="#user-content-fn-22">arr2.flat();</a>
<a data-footnote-ref href="#user-content-fn-23">arr2.flat(2);</a>
<a data-footnote-ref href="#user-content-fn-24">arr2.flat(Infinity);</a>
</code></pre>

## `flatMap()`

Die Methode `flatMap()` gibt ein neues Array zurück, das durch die Anwendung einer bestimmten Callback-Funktion auf jedes Element des Arrays gebildet wird, und reduziert das Ergebnis um eine Ebene. Sie ist identisch mit einer `map()` gefolgt von einer `flat()` der Tiefe 1 (`arr.map(...args).flat()`), aber etwas effizienter als der separate Aufruf dieser beiden Methoden.

<pre class="language-javascript"><code class="lang-javascript">const arr = [1, 2, 1];
<strong><a data-footnote-ref href="#user-content-fn-25">arr.flatMap((num) => (num === 2 ? [2, 2] : 1));</a>
</strong></code></pre>



[^1]: `['c', 'd', 'e']`

[^2]: `['c', 'd']`

[^3]: `['d', 'e']`

[^4]: `['e']`

[^5]: `['b', 'c']`

[^6]: `['a', 'b', 'c', 'd', 'e']` - shallow copy

[^7]: `['Jan', 'Feb', 'March', 'April', 'June']`

[^8]: \["Jan", "Feb", "March", "April", "May"]

[^9]: `['a', 'b', 'c', 'd', 'e', 'f']`&#x20;

[^10]: Fire,Air,Water

[^11]: FireAirWater

[^12]: Fire-Air-Water

[^13]: 8

[^14]: 130

[^15]: 1

[^16]: -1

[^17]: `true`

[^18]: false

[^19]: `true`

[^20]: `false`

[^21]: `[0, 1, 2, 3, 4]`

[^22]: `[0, 1, 2, [3, [4, 5]]]`

[^23]: \[0, 1, 2, 3, \[4, 5]]

[^24]: `[0, 1, 2, 3, 4, 5]`

[^25]: `[1, 2, 2, 1]`
