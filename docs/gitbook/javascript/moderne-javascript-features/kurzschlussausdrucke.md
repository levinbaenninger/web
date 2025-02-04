---
icon: brain-circuit
---

# Kurzschlussausdrücke

## OR-Operator

Der ||-Operator hat noch ein paar spezielle Verhaltensweisen, nämlich:

* Sie können jeden Datentypen benutzen
* Sie können jeden Datentypen zurückgeben
* Kurzschlüsse

Wir können von dem ||-Operator nicht nur Booleans zurückerhalten, sondern auch alle anderen Datentypen:

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-1">3 || 'Levin'</a>
</code></pre>

Dabei gibt es ein paar Regeln, welchen Wert wir zurückerhalten:

* Wenn der erste Ausdruck truthy ist, wird uns dieser zurückgegeben und der andere Operand nicht ausgewertet
* Ist aber der zweite Ausdruck falsy, dann wird der zweite Ausdruck ausgewertet und zurückgegeben

<pre class="language-java"><code class="lang-java"><a data-footnote-ref href="#user-content-fn-2">'' || 'Jonas'</a>
<a data-footnote-ref href="#user-content-fn-3">true || 0</a>
<a data-footnote-ref href="#user-content-fn-4">undefined || null</a>
</code></pre>

## AND-Operator

Der &&-Operator funktioniert genau umgekehrt, heisst:

* Wenn der erste Ausdruck falsy ist, wird uns dieser zurückgegeben und der andere Operand nicht ausgewertet
* Ist aber der zweite Ausdruck truthy, dann wird der zweite Ausdruck ausgewertet und zurückgegeben

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-5">0 &#x26;&#x26; 'Levin'</a>
<a data-footnote-ref href="#user-content-fn-6">7 &#x26;&#x26; 'Levin'</a>
<a data-footnote-ref href="#user-content-fn-7">'Hello' &#x26;&#x26; 23 &#x26;&#x26; null &#x26;&#x26; 'Levin'</a>
</code></pre>

[^1]: 3

[^2]: Jonas

[^3]: true

[^4]: null

[^5]: 0

[^6]: Levin

[^7]: `null`
