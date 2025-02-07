---
icon: pi
---

# Mathematische Operationen

In JavaScript sind Zahlen immer Floating Point Numbers﻿, egal ob sie eine ganze Zahl, wie `101` oder eben `3.141` ist. Das können wir auch ganz einfach überprüfen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">console.log(23 === 23.0);</a>
</code></pre>

## Floating Point Numbers﻿ <a href="#floating-point-numbers" id="floating-point-numbers"></a>

Die Präzision von Floating Point Numbers ist stark begrenzt, da solch eine Zahl mit dem Binärsystem dargestellt wird. So kann z.B. folgendes passieren:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-2">console.log(0.1 + 0.2);</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(0.1 + 0.2 === 0.3);</a>
</code></pre>

{% hint style="info" %}
Hier müssen wir einfach aufpassen, da wir es als Fehler von JavaScript bzw. allgemein von Computern hinnehmen müssen.
{% endhint %}

## Konversion﻿ <a href="#konversion" id="konversion"></a>

Es gibt mehrere Möglichkeiten einen Wert in eine Zahl zu konvertieren:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-4">console.log(Number('23'));</a>
<a data-footnote-ref href="#user-content-fn-5">console.log(+'23');</a>

<a data-footnote-ref href="#user-content-fn-6">console.log(Number.parseInt('30px', 10));</a>
<a data-footnote-ref href="#user-content-fn-7">console.log(Number.parseFloat('2.5rem'));</a>
</code></pre>

Die beiden letzteren nennt man auch _Parsing_ und ist nützlich um auch Strings mit Suffixen, z.B. CSS-Werten, in Zahlen umzuwandeln.

## Überprüfung﻿ <a href="#berpr-fung" id="berpr-fung"></a>

Es gibt hauptsächlich zwei Methoden, um zu überprüfen, ob eine Zahl auch wirklich eine Zahl ist: `isNaN()` und `isFinite()`. Letzteres ist dabei deutlich zuverlässiger, da es auch Werte, wie `Infinity` abfangen kann:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-8">console.log(Number.isNaN(20));</a>
<a data-footnote-ref href="#user-content-fn-9">console.log(Number.isNaN('20'));</a>
<a data-footnote-ref href="#user-content-fn-10">console.log(Number.isNaN(+'20X'));</a>
<a data-footnote-ref href="#user-content-fn-11">console.log(object.isNaN(23 / 0));</a>

<a data-footnote-ref href="#user-content-fn-12">console.log(Number.isFinite(20));</a>
<a data-footnote-ref href="#user-content-fn-13">console.log(Number.isFinite('20'));</a>
<a data-footnote-ref href="#user-content-fn-14">console.log(Number.isFinite(+'20X'));</a>
<a data-footnote-ref href="#user-content-fn-15">console.log(Number.isFinite(23 / 0));</a>
</code></pre>

## Wurzeln

Wir können Wurzeln mit der `sqrt()`-Methode beschreiben. Natürlich sind aber auch Brüche im Exponenten möglich um Wurzeln darzustellen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-16">console.log(Math.sqrt(25));</a>
<a data-footnote-ref href="#user-content-fn-17">console.log(25 ** (1 / 2));</a>
<a data-footnote-ref href="#user-content-fn-18">console.log(8 ** (1 / 3));</a>
</code></pre>

## Aggregatfunktionen

JavaScript stellt uns zwei Aggregatfunktionen zur Verfügung, `min()` und `max()`:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-19">console.log(Math.max(5, 18, 23, 11, 2));</a>
<a data-footnote-ref href="#user-content-fn-20">console.log(Math.min(5, 18, 23, 11, 2));</a>
</code></pre>

## Konstanten

Zudem gibt uns JavaScript Zugriff auf die Konstanten π und e (Eulersche Zahl):

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-21">console.log(Math.PI); </a>
<a data-footnote-ref href="#user-content-fn-22">console.log(Math.E);</a>
</code></pre>

## Random

Die `random()`-Funktion ermöglicht uns die Erstellung von zufälligen Zahlen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-23">console.log(Math.random());</a>
<a data-footnote-ref href="#user-content-fn-24">console.log(Math.random() * 100);</a>
<a data-footnote-ref href="#user-content-fn-25">console.log(Math.trunc(Math.random() * 100));</a>
</code></pre>

## Runden﻿ <a href="#runden" id="runden"></a>

### Auf Ganzzahlen runden﻿ <a href="#auf-ganzzahlen-runden" id="auf-ganzzahlen-runden"></a>

Beim Runden gibt es essenziell vier Methoden:

* `trunc()`: entfernt alle Nachkommastellen
* `round()`: rundet nach mathematischen Gesetzen auf die nächste Ganzzahl
* `ceil()`: rundet immer auf
* `floor()`: rundet immer ab

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-26">console.log(Math.trunc(23.3));</a>

<a data-footnote-ref href="#user-content-fn-27">console.log(Math.round(23.3));</a>
<a data-footnote-ref href="#user-content-fn-28">console.log(Math.round(23.9));</a>

<a data-footnote-ref href="#user-content-fn-29">console.log(Math.ceil(23.3));</a>
<a data-footnote-ref href="#user-content-fn-30">console.log(Math.ceil(23.9));</a>

<a data-footnote-ref href="#user-content-fn-31">console.log(Math.floor(23.3));</a>
<a data-footnote-ref href="#user-content-fn-32">console.log(Math.floor(23.9));</a>
</code></pre>

### Auf Dezimalzahlen runden﻿ <a href="#auf-dezimalzahlen-runden" id="auf-dezimalzahlen-runden"></a>

Um auf Dezimalzahlen zu runden, nutzen wir die Methode `toFixed()`.

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-33">console.log((2.7).toFixed(0));</a>
<a data-footnote-ref href="#user-content-fn-34">console.log((2.7).toFixed(3));</a>
<a data-footnote-ref href="#user-content-fn-35">console.log((2.345).toFixed(2));</a>

<a data-footnote-ref href="#user-content-fn-36">console.log(+(2.7).toFixed(0));</a>
<a data-footnote-ref href="#user-content-fn-37">console.log(+(2.7).toFixed(3));</a>
</code></pre>

{% hint style="warning" %}
Die Methode `toFixed()` gibt einen **String** aus und keine Zahl!
{% endhint %}

[^1]: `true`

[^2]: `0.30000000000000004`

[^3]: `false`

[^4]: 23

[^5]: 23

[^6]: 30

[^7]: 2.5

[^8]: `false`

[^9]: `false`

[^10]: `true`

[^11]: `false`

[^12]: `true`

[^13]: `false`

[^14]: `false`

[^15]: `false`

[^16]: 5

[^17]: 5

[^18]: 2

[^19]: 23

[^20]: 2

[^21]: 3.141592653589793

[^22]: 2.718281828459045

[^23]: Random number between 0 and 1

[^24]: Random number between 0 and 100

[^25]: Random integer between 0 and 100

[^26]: 23

[^27]: 23

[^28]: 24

[^29]: 24

[^30]: 24

[^31]: 23

[^32]: 23

[^33]: 3 (string)

[^34]: 2.700 (string)

[^35]: 2.35 (string)

[^36]: 3 (number)

[^37]: 2.7 (number)
