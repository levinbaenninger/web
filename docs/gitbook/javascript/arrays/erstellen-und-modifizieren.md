---
icon: wrench-simple
---

# Erstellen und Modifizieren

## Arrays erstellen

Es gibt verschiedene Optionen, um Arrays in JavaScript zu erstellen.

<pre class="language-javascript"><code class="lang-javascript">let items = [];
let names = ['Levin', 'Jonas', 'Thierry'];
let <a data-footnote-ref href="#user-content-fn-1">ranking</a> = new Array(5);
let <a data-footnote-ref href="#user-content-fn-2">numbers</a> = Array.of(1, 2, 3);
let <a data-footnote-ref href="#user-content-fn-3">selection</a> = Array(5).fill(1);
</code></pre>

Ein Arrays kann jede Art von Daten enthalten, sogar [Objekte ](../objekte-und-datenstrukturen/)oder andere [Arrays](./). Dabei können in einem Array **verschiedene** Datentypen erhalten sein.

## Datenzugriff

Wir können auf einen Wert im Array über den Index des Elementes zugreifen. Der Index ist **nullbasiert**.

<pre class="language-javascript"><code class="lang-javascript">const friends = ['Michael', 'Peter', 'John', 'Trina', 'Fred'];

<a data-footnote-ref href="#user-content-fn-4">friends[0]</a>;
<a data-footnote-ref href="#user-content-fn-5">friends[2]</a>;
<a data-footnote-ref href="#user-content-fn-6">friends[friends.length - 1]</a>;
</code></pre>

## Länge

Wir können die Länge des Arrays herausfinden, indem wir auf das Property `length` zugreifen.

<pre class="language-javascript"><code class="lang-javascript">const friends = ['Michael', 'Peter', 'John', 'Trina', 'Fred'];

<strong><a data-footnote-ref href="#user-content-fn-7">friends.length</a>;
</strong></code></pre>

## Arrays modifizieren

### Daten direkt modifizieren

Wir können über den Index den Wert eines Elementes direkt verändern.

```javascript
const friends = ['Michael', 'Peter', 'John', 'Trina', 'Fred'];

friends[1] = "Paul";
```

{% hint style="info" %}
Hier können wir die Konstante "modifizieren", da wir nicht den eigentlichen Wert, den Array verändern, sondern nur den Wert darin.&#x20;

Anders gesagt, da ein Array ein **Referenztyp** ist, können wir die Werte darin verändern, aber nicht das Array selber.
{% endhint %}

### `push()`

Die `push()`-Methode fügt Elemente an das Ende eines Arrays an. Der Rückgabewert ist die **Länge des Arrays**. Du kannst mehr als ein Element auf einmal hinzufügen.

<pre class="language-javascript"><code class="lang-javascript">const friends = ['Michael', 'Steven', 'Peter'];
<a data-footnote-ref href="#user-content-fn-8">friends.push('Jay')</a>;
</code></pre>

### `unshift()`

Die Methode `unshift()` fügt Elemente am Anfang eines Arrays hinzu. Sie gibt auch die **Länge des Arrays** zurück. Du kannst mehr als ein Element auf einmal hinzufügen.

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-9">friends.unshift('John')</a>;
</code></pre>

### `pop()`

Die Methode `pop()` entfernt das letzte Element aus einem Array. Der Rückgabewert ist das **entfernte Element**. Wenn das Array leer ist, wird `undefined` zurückgegeben und das Array wird nicht verändert.

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-10">friends.pop()</a>;
</code></pre>

### `shift()`

Die Methode `shift()` entfernt das erste Element eines Arrays. Sie gibt auch das **entfernte Element** zurück. Wenn das Array leer ist, wird `undefined` zurückgegeben und das Array wird nicht verändert.

{% code fullWidth="false" %}
```javascript
friends.shift()
```
{% endcode %}



[^1]: `[undefined, undefined, undefined, undefined, undefined]`

[^2]: `[1, 2, 3]`

[^3]: `[1, 1, 1, 1, 1]`

[^4]: Michael

[^5]: John

[^6]: Fred

[^7]: 5

[^8]: 4

[^9]: 5

[^10]: Jay
