---
icon: function
---

# Funktionen

Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte Aufgabe ausführen. Sie helfen, den Code strukturierter und übersichtlicher zu machen.

<pre class="language-javascript"><code class="lang-javascript">function add(a, b) {
  return a + b;
}

function greet(name) {
  console.log("Hello " + name)   
}

function randNum() {
  return Math.floor(Math.random() * 10) + 1;
}

let <a data-footnote-ref href="#user-content-fn-1">sum</a> = add(2, 1);
<a data-footnote-ref href="#user-content-fn-2">greet("Levin");</a>
let <a data-footnote-ref href="#user-content-fn-3">randNum</a> = randNum();
</code></pre>

{% content-ref url="funktionsdeklarationen-vs.-funktionsausdrucke.md" %}
[funktionsdeklarationen-vs.-funktionsausdrucke.md](funktionsdeklarationen-vs.-funktionsausdrucke.md)
{% endcontent-ref %}

{% content-ref url="arrow-functions.md" %}
[arrow-functions.md](arrow-functions.md)
{% endcontent-ref %}

{% content-ref url="standardparameter-und-rest-parameter.md" %}
[standardparameter-und-rest-parameter.md](standardparameter-und-rest-parameter.md)
{% endcontent-ref %}

{% content-ref url="first-class-und-higher-order-funktionen.md" %}
[first-class-und-higher-order-funktionen.md](first-class-und-higher-order-funktionen.md)
{% endcontent-ref %}

{% content-ref url="closures.md" %}
[closures.md](closures.md)
{% endcontent-ref %}

{% content-ref url="iife-immediately-invoked-function-expressions.md" %}
[iife-immediately-invoked-function-expressions.md](iife-immediately-invoked-function-expressions.md)
{% endcontent-ref %}

[^1]: 3

[^2]: Hello Levin

[^3]: Random number between 1 and 10
