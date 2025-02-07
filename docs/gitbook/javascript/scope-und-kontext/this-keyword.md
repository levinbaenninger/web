---
icon: hand-point-up
---

# this Keyword

<details>

<summary><strong><code>this</code> Schlüsselwort/Variable</strong></summary>

Spezielle Variable, die für jeden [Execution Context](../javascript-engine-und-performance/execution-context-und-call-stack.md) (jede Funktion) erstellt wird. Nimmt den Wert des "Eigentümers" der Funktion an, in der das Schlüsselwort `this` verwendet wird (zeigt auf ihn).

</details>



`this` ist nicht statisch. Es hängt davon ab, wie die Funktion aufgerufen wird, und der Wert wird erst zugewiesen, wenn die Funktion tatsächlich aufgerufen wird.

{% hint style="info" %}
**Method** → `this` = `<object that is calling the method>`

<pre class="language-javascript"><code class="lang-javascript">const jonas = {
	name: 'Jonas',
	year: 1989,
	calcAge: function() {
		return 2037 - this.year
	}
};
<a data-footnote-ref href="#user-content-fn-1">jonas.calcAge()</a>;
</code></pre>

**Simple function call** → `this` = `undefined`

**Arrow functions** → `this` = `<this of surrounding function (lexical this)>`

**Event Listener** → `this` = `<DOM element that the hander is attached to>`
{% endhint %}

[^1]: 48
