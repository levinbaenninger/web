---
icon: function
description: Hier lernst du alles über Funktionen in JavaScript.
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

[^1]: 3

[^2]: Hello Levin

[^3]: Random number between 1 and 10
