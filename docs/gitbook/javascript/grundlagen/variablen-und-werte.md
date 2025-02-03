---
icon: square-root-variable
---

# Variablen und Werte

## Werte

Ein Wert ist ein Stück aus Daten. Es ist die grundlegendste Informationseinheit, die wir beim Programmieren haben. Zum Beispiel sind

```javascript
'Jonas'
210
3.141
```

alles Werte. Wie Sie sehen, haben sie alle unterschiedliche [Datentypen](datentypen.md), sodass sie etwas anderes darstellen. `"Jonas"` zum Beispiel ist ein String.

## Variablen

Aber das allein nützt uns nichts, weil wir es nirgendwo speichern. Dieses Problem wird mit Variablen gelöst, in denen wir einen Wert speichern, sodass wir ihn immer wieder verwenden können. Variablen werden mit einem von drei Schlüsselwörtern erstellt: `let`, `const` oder `var`. Letzteres wird heutzutage nicht mehr verwendet, es ist alt und nur noch für Legacy-Code da, aber es hat einige besondere Eigenschaften.

```javascript
let firstName = 'Jonas';
```

Was wir hier getan haben, nennt man eine Variable deklarieren. Wenn wir nun den Wert verwenden wollen, referenzieren wir den Variablennamen

```javascript
console.log(firstName); // Jonas
```

Dies ist äusserst nützlich, wenn der Name in mehreren Fällen verwendet wird und wir ihn ändern wollen. Ohne Variablen müssten wir den alten Namen durch den neuen ersetzen, aber mit der Variable müssen wir ihn nur einmal ersetzen:

```javascript
let firstName = 'Matilda';
console.log(firstName); // Matilda
console.log(firstName); // Matilda
console.log(firstName); // Matilda
```

## `let`, `const` und `var`

Wir benutzen `let`, um eine Variable zu deklarieren, die später geändert werden kann:

```javascript
let age = 30;
age = 31;
```

Dieser Vorgang wird Neuzuweisung eines Wertes an eine Variable oder Mutation der Variable `age` genannt.

***

Wir benutzen `const`, um eine Variable zu deklarieren, die später nicht mehr geändert werden kann:

<pre class="language-javascript"><code class="lang-javascript">const birthYear = 1991;
<a data-footnote-ref href="#user-content-fn-1">birthYear = 1990;</a>
</code></pre>

Da wir die Variable nicht mutieren können, müssen wir ihr direkt einen Wert zuweisen, zum Beispiel

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-2">const birthYear;</a>
</code></pre>

ist illegal, weil es nie einen Wert erhalten wird.

***

`var` ist die alte Art, eine Variable zu deklarieren, auf den ersten Blick sieht es so aus, als wäre es das gleiche wie `let`:

```javascript
var job = 'Programmierer';
job = 'Lehrer';
```

Es gibt jedoch einige wesentliche Unterschiede zwischen `let` und `var`, auf die wir in späteren Abschnitten eingehen werden.

{% hint style="danger" %}
Wenn du nicht weisst, was du tust, nutze **niemals** `var`!
{% endhint %}

[^1]: <mark style="background-color:red;">TypeError: Assignment to constant variable.</mark>

[^2]: <mark style="background-color:red;">SyntaxError: Missing initializer in const declaration</mark>
