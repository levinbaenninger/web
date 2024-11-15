---
icon: list
---

# Listen

In React können wir mit der [`.map()`-Methode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Array/map) Listen bzw. Arrays anzeigen lassen. So können wir z.B. für jedes Objekt in einem Array eine Komponente anzeigen lassen.

```tsx
export function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </div>
    </main>
  );
}

export default Menu;
```

{% hint style="warning" %}
React muss von jedem Element in der `map()`-Methode das **`key`-Property** erhalten. Dieses muss **eindeutig** sein.
{% endhint %}

