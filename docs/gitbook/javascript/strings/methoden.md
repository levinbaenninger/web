---
icon: swap-arrows
---

# Methoden

## Zeichen

Um ein Zeichen von einem String an einer bestimmten Position zu erhalten, können wir den Index verwenden.

<pre class="language-javascript"><code class="lang-javascript">const airline = 'TAP Air Portugal';
const plane = 'A320';

<a data-footnote-ref href="#user-content-fn-1">airline[0]</a>;
<a data-footnote-ref href="#user-content-fn-2">plane[1]</a>;
<a data-footnote-ref href="#user-content-fn-3">plane[5]</a>;
</code></pre>

Wie wir sehen gibt uns der Compiler `undefined` zurück, falls es den Index nicht gibt.

## Länge

<pre><code><a data-footnote-ref href="#user-content-fn-4">plane.length;</a>
</code></pre>

## `indexOf()`

Die Methode `indexOf()` durchsucht diesen String und gibt den Index des ersten Vorkommens des angegebenen Substrings zurück. Sie nimmt eine optionale Startposition an und gibt das erste Vorkommen des angegebenen Substrings mit einem Index grösser oder gleich der angegebenen Zahl zurück.

<pre class="language-javascript"><code class="lang-javascript">const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = 'dog';

<a data-footnote-ref href="#user-content-fn-5">paragraph.indexOf(searchTerm);</a>
</code></pre>

## `slice()`

Die Methode `slice()` extrahiert einen Abschnitt dieses Strings und gibt ihn als neuen String zurück, ohne den ursprünglichen String zu verändern.

<pre class="language-javascript"><code class="lang-javascript">const str = 'The quick brown fox jumps over the lazy dog.';

<a data-footnote-ref href="#user-content-fn-6">str.slice(31);</a>
<strong><a data-footnote-ref href="#user-content-fn-7">str.slice(4, 19);</a>
</strong><a data-footnote-ref href="#user-content-fn-8">str.slice(-4);</a>
<a data-footnote-ref href="#user-content-fn-9">str.slice(-9, -5);</a>
</code></pre>

## `toLowerCase()`

Die Methode `toLowerCase()` gibt den String in Kleinbuchstaben umgewandelt zurück.

<pre class="language-javascript"><code class="lang-javascript">const sentence = 'The quick brown fox jumps over the lazy dog.';
<a data-footnote-ref href="#user-content-fn-10">sentence.toLowerCase();</a>
</code></pre>

## `toUpperCase()`

Die Methode `toUpperCase()` gibt den String in Grossbuchstaben umgewandelt zurück.

<pre class="language-javascript"><code class="lang-javascript">const sentence = 'The quick brown fox jumps over the lazy dog.';
<a data-footnote-ref href="#user-content-fn-11">sentence.toLowerCase();</a>
</code></pre>

## `trim()`

Die `trim()`-Methode entfernt Leerzeichen an beiden Enden dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern.

<pre class="language-javascript"><code class="lang-javascript">const greeting = '   Hello world!   ';
<a data-footnote-ref href="#user-content-fn-12">greeting.trim();</a>
</code></pre>

## `replace()`

Die Methode `replace()` von gibt einen neuen String zurück, in der eine, einige oder alle Übereinstimmungen eines `pattern`s durch ein `replacement` ersetzt wurden. Das `pattern` kann ein String oder eine [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) sein, und das `replacement` kann ein String oder eine Funktion sein, die für jede Übereinstimmung aufgerufen wird. Wenn das `pattern` ein String ist, wird nur das erste Vorkommen ersetzt. Der ursprüngliche String wird unverändert gelassen.

<pre class="language-javascript"><code class="lang-javascript">const paragraph = "I think Ruth's dog is cuter than your dog!";
<a data-footnote-ref href="#user-content-fn-13">paragraph.replace("Ruth's", 'my');</a>

const regex = /Dog/i;
<a data-footnote-ref href="#user-content-fn-14">paragraph.replace(regex, 'ferret');</a>
</code></pre>

## `includes()`

Die Methode `includes()` führt eine Suche nach Gross- und Kleinschreibung durch, um festzustellen, ob ein bestimmter String in diesem String gefunden werden kann, und gibt je nach Fall `true` oder `false` zurück.

<pre class="language-javascript"><code class="lang-javascript">const sentence = 'The quick brown fox jumps over the lazy dog.';
<a data-footnote-ref href="#user-content-fn-15">sentence.includes('fox');</a>
</code></pre>

## `split()`

Die `split()`-Methode nimmt ein Muster und unterteilt diesen String in eine geordnete Liste von Substrings, indem sie nach dem Muster sucht, diese Substrings in ein Array packt und das Array zurückgibt.

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-16">'A+very+nice+string'.split('+');</a>
<a data-footnote-ref href="#user-content-fn-17">'Levin Bänninger'.split(' ');</a>
</code></pre>

[^1]: T

[^2]: 3

[^3]: `undefined`

[^4]: 4

[^5]: 15

[^6]: the lazy dog.

[^7]: quick brown fox

[^8]: dog.

[^9]: lazy

[^10]: the quick brown fox jumps over the lazy dog.

[^11]: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

[^12]: Hello world!

[^13]: I think my dog is cuter than your dog!

[^14]: I think Ruth's ferret is cuter than your dog!

[^15]: `true`

[^16]: `["A", "very", "nice", "string"]`

[^17]: `["Levin", "Bänninger"]`
