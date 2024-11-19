---
icon: paint-roller
---

# Styling

Es gibt viele verschiedene Wege in React, um unsere Komponenten zu stylen.

## Inline-Styles

Genau wie in HTML können wir auch in React Inline-Styles nutzen, um unsere Elemente zu stylen. In JSX funktioniert es jedoch ein wenig anders, denn hier übergeben wir ein Objekt an Styles.

```tsx
const Header = () => {
  return (
    <h1 style={{ color: 'red', fontSize: '3rem', textTransform: 'uppercase' }}>
      Fast React Pizza Co.
    </h1>
  );
}

export default Header;
```

## Externes CSS-File

Wir können auch ein externes CSS-File in unsere `<App />`-Komponente einbinden und so Styles mit ganz normalen Klassen, IDs, Elementen und anderen Selektoren erreichen.

<pre class="language-tsx"><code class="lang-tsx"><strong><a data-footnote-ref href="#user-content-fn-1">import '/src/styles.css';</a>
</strong>
const App = () => {
  return (
    &#x3C;div className="container">
      &#x3C;Header />
      &#x3C;Menu />
      &#x3C;Footer />
    &#x3C;/div>
  );
}

export default App;
</code></pre>

{% hint style="danger" %}
Um eine Klasse zu vergeben, müssen wir das Attribut `className` nutzen anstatt `class`!
{% endhint %}



[^1]: Bei einige Bundlern muss dieser Import nicht gemacht werden.
