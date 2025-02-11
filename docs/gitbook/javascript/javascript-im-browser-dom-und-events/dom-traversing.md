---
icon: arrow-up-arrow-down
---

# DOM Traversing

Mit DOM Traversing können wir mit verschiedenen Methoden durch den DOM-Baum wandern.

## Children

<pre class="language-javascript"><code class="lang-javascript">const h1 = document.querySelector('h1');

<a data-footnote-ref href="#user-content-fn-1">console.log(h1.querySelectorAll('.highlight'));</a>
<a data-footnote-ref href="#user-content-fn-2">console.log(h1.childNodes);</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(h1.children);</a>
<a data-footnote-ref href="#user-content-fn-4">console.log(h1.firstElementChild);</a>
<a data-footnote-ref href="#user-content-fn-5">console.log(h1.lastElementChild);</a>
</code></pre>

* Mit `querySelectorAll` wählen wir alle Children-Elemente von `h1` aus, die dem Query entsprechen, auch rekursiv.
* Mit `childNodes` wählen wir jeden Node der `h1` aus, dazu gehören auch Text und Kommentare.
* Mit `children` wählen wir nur die Elemente aus.
* Mit `firstElementChild` und `lastElementChild` wählen wir das erste respektive letzte Child-Element aus.

## Parents

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-6">console.log(h1.parentElement);</a>
<a data-footnote-ref href="#user-content-fn-7">console.log(h1.closest('.header'));</a>
</code></pre>

* Mit `parentElement` bekommen wir das direkte Parent-Element.
* Mit der Methode `closest` können wir nach dem nächsten Parent suchen, das mit dem Query übereinstimmt.

## Siblings

<pre class="language-javascript"><code class="lang-javascript"><a data-footnote-ref href="#user-content-fn-8">console.log(h1.previousElementSibling);</a>
<a data-footnote-ref href="#user-content-fn-9">console.log(h1.nextElementSibling);</a>
</code></pre>



[^1]: `NodeList(2) [span.highlight, span.highlight]`

[^2]: `[text, comment, text, span.highlight, text, br, text, span.highlight, text]`

[^3]: `HTMLCollection(3) [span.highlight, br, span.highlight]`

[^4]: `<span class="highlight">...</span>`

[^5]: `<span class="highlight">...</span>`

[^6]: \<div class="header\_\_title">...\</div>

[^7]: \<header class="header">...\<header>

[^8]: `null`

[^9]: \<h4>...\</h4>
