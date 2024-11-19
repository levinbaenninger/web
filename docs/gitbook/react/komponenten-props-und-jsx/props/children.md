---
icon: diagram-subtask
---

# Children

Das `children`-Prop ist ein spezielles Prop, welches wir einer Komponente mitgeben können. Der Name `children` ist vorgeben und nicht veränderbar.

Das `children`-Prop erhält die Daten, die zwischen dem öffnenden uns schliessendem Tag unserer Komponente sind.

## `children`-Prop übergeben

<pre class="language-tsx"><code class="lang-tsx">&#x3C;div className="buttons">
  &#x3C;Button
    backgroundColor="#7950f2"
    textColor="#ffffff"
    onClick={handlePrevious}
  >
    <a data-footnote-ref href="#user-content-fn-1">👈 Previous</a>
  &#x3C;/Button>
  &#x3C;Button
    backgroundColor="#7950f2"
    textColor="#ffffff"
    onClick={handleNext}
  >
    <a data-footnote-ref href="#user-content-fn-2">Next 👉</a>
  &#x3C;/Button>
&#x3C;/div>
</code></pre>

## `children`-Prop annehmen

<pre class="language-tsx"><code class="lang-tsx">const Button = ({ textColor, backgroundColor, onClick, <a data-footnote-ref href="#user-content-fn-3">children</a> }) => {
  return (
    &#x3C;button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {<a data-footnote-ref href="#user-content-fn-4">children</a>}
    &#x3C;/button>
  );
}

export default Button;
</code></pre>



[^1]: Hier findet die Übergabe statt

[^2]: Hier findet die Übergabe statt

[^3]: Hier findet die Annahme statt

[^4]: Hier werden die `children` genutzt
