---
icon: question
---

# Optionale Verkettung

Der optionale Verkettungsoperator (`?.`) greift auf die Eigenschaft eines Objekts zu oder ruft eine Funktion auf. Wenn das Objekt, auf das zugegriffen wird, oder die Funktion, die mit diesem Operator aufgerufen wird, `undefined` oder `null` ist, wird der Ausdruck kurzgeschlossen und als `undefined` ausgewertet, anstatt einen Fehler zu verursachen.

<pre class="language-javascript"><code class="lang-javascript">const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

<a data-footnote-ref href="#user-content-fn-1">adventurer.dog?.name;</a>
<a data-footnote-ref href="#user-content-fn-2">adventurer.someNonExistentMethod?.();</a>
</code></pre>

[^1]: `undefined`

[^2]: `undefined`
