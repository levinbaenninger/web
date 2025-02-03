---
icon: plus
---

# Operatoren und Ausdrücke

Mit Operatoren können wir mehrere Werte umwandeln oder miteinander kombinieren.

## Mathematische Operatoren﻿ <a href="#mathematische-operatoren" id="mathematische-operatoren"></a>

Wir können alle arithmetischen Operatoren verwenden wie:

* `+`  → Addieren von Werten
* `-`  → Subtrahieren von Werten
* `*`  → Multiplikation von Werten
* `/`  → Dividieren von Werten
* `%`  → Berechnen des Restes einer Division
* `**`  → Berechnen der Potenz

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">10 + 4</a>;
<a data-footnote-ref href="#user-content-fn-2">10 - 4</a>;
<a data-footnote-ref href="#user-content-fn-3">10 * 4</a>;
<a data-footnote-ref href="#user-content-fn-4">10 / 4</a>;
<a data-footnote-ref href="#user-content-fn-5">10 % 4</a>;
<a data-footnote-ref href="#user-content-fn-6">10 ** 4</a>;
</code></pre>

## Verkettungsoperator﻿ <a href="#verkettungsoperator" id="verkettungsoperator"></a>

Der Verkettungsoperator (`+`) wird verwendet, um zwei Zeichenketten miteinander zu verbinden:

```javascript
let firstName = 'Levin';
let lastName = 'Bänninger';
const fullName = firstName + ' ' + lastName;

console.log(fullName); // Levin Bänninger
```

## Zuweisungsoperator﻿ <a href="#zuweisungsoperator" id="zuweisungsoperator"></a>

Die Zuweisungsoperatoren sind:

* `=` → einen Wert setzen
* `+=` → etwas zu einer Variablen hinzufügen
* `-=` → etwas von einer Variablen subtrahieren
* `*=` → etwas mit einer Variablen multiplizieren
* `/=` → etwas von einer Variablen dividieren
* `%=` → Rest von einer Variablen berechnen
* `**=` → Potenz von einer Variablen berechnen
* `++` → eins zu einer Variablen addieren
* `--` → eins von einer Variablen subtrahieren

Zuweisungsoperatoren werden verwendet, um die Aktualisierung für eine Variable zu verkürzen:

<pre class="language-javascript"><code class="lang-javascript">let a = 10;

<a data-footnote-ref href="#user-content-fn-7">a += 10;</a>
<a data-footnote-ref href="#user-content-fn-8">a -= 5;</a>
<a data-footnote-ref href="#user-content-fn-9">a *= 4;</a>
<a data-footnote-ref href="#user-content-fn-10">a /= 2;</a>
<a data-footnote-ref href="#user-content-fn-11">a %= 6</a>; 
<a data-footnote-ref href="#user-content-fn-12">a **= 3;</a>
<a data-footnote-ref href="#user-content-fn-13">a++;</a>
<a data-footnote-ref href="#user-content-fn-14">a--;</a>
</code></pre>

## Vergleichsoperatoren﻿ <a href="#vergleichsoperatoren" id="vergleichsoperatoren"></a>

Wir verwenden Vergleichsoperatoren, um boolesche Werte zu erzeugen:

* `==` → gleicher Wert, ignoriert Datentyp
* `===` → gleicher Wert und gleicher Typ
* `!=` → nicht gleicher Wert, ignoriert den Datentyp
* `!==` → ungleicher Wert und Typ
* `>` → größer als
* `<` → kleiner als
* `>=` → größer als oder gleich
* `<=` → kleiner als oder gleich

<pre><code><a data-footnote-ref href="#user-content-fn-15">10 == 5;</a>
<a data-footnote-ref href="#user-content-fn-16">10 == '10';</a>
<a data-footnote-ref href="#user-content-fn-17">10 === '10';</a>
<a data-footnote-ref href="#user-content-fn-18">10 === 10;</a>
<a data-footnote-ref href="#user-content-fn-19">10 != 5;</a>
<a data-footnote-ref href="#user-content-fn-20">10 !== '10';</a>

<a data-footnote-ref href="#user-content-fn-21">10 > 5;</a>
<a data-footnote-ref href="#user-content-fn-22">10 >= 5;</a>
<a data-footnote-ref href="#user-content-fn-23">10 &#x3C; 5;</a>
<a data-footnote-ref href="#user-content-fn-24">10 &#x3C;= 5;</a>
</code></pre>

## Reihenfolge der Operationen

Der Vorrang der Operatoren entscheidet darüber, welche Operationen zuerst ausgeführt werden, dann als zweites, ... MDN hat dazu eine sehr gute Referenz: [Reference for Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

Hier sehen wir, dass die Gruppierung die höchste Priorität hat `()`, danach folgen Funktionsaufrufe usw.

[^1]: 14

[^2]: 6

[^3]: 40

[^4]: 2.5

[^5]: 2

[^6]: 10000

[^7]: 20 `(a = a + 10)`

[^8]: 15 `(a = a - 5)`

[^9]: 60 `(a = a * 4)`

[^10]: 25 `(a = a / 2)`

[^11]: 1 `(a = a % 6)`

[^12]: 1 `(a = a ** 3)`

[^13]: 2 `(a = a + 1)`

[^14]: 1 `(a = a - 1)`

[^15]: `false`

[^16]: `true`

[^17]: `false`

[^18]: `true`

[^19]: `true`

[^20]: `true`

[^21]: `true`

[^22]: `true`

[^23]: `false`

[^24]: `true`
