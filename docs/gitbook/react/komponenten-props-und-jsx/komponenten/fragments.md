---
icon: code-simple
---

# Fragments

[JSX](../jsx.md) darf nur ein Root-Element zurückgeben. Wenn wir aber zwei Elemente zurückgeben möchten, müssten wir es in ein zusätzliches `<div>` einpacken. Das ist jedoch keine gute Practice, da so Daten zusammenkommen, die eigentlich nicht zusammengehören. Für genauen diesen Fall stellt uns React sogenannte **Fragments** zu Verfügung.&#x20;

```tsx
{pizzas.length > 0 ? (
  <>
    <p>
      Authentic Italian cuisine. 6 creative dishes to choose from. All
      from our stone oven, all organic, all delicious.
    </p>

    <ul className="pizzas">
      {pizzas.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </ul>
  </>
) : (
  <p>Sorry, we're still working on our menu</p>
)}
```

{% hint style="info" %}
Das Fragment fügt kein neues Element in den DOM-Tree hinzu.
{% endhint %}

