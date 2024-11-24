---
icon: wrench
---

# Destructuring

Bei Props kann es mühsam sein, wenn wir immer wieder `props` schreiben muss, um auf die Daten zuzugreifen. Um das zu lösen, können wir [Destructuring ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)nutzen.

```tsx
const Pizza({ pizza }) => {
  if (pizza.soldOut) {
    return (
      <li className="pizza sold-out">
        <img src={pizza.photoName} alt={pizza.name} />
        <div>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
          <span>Sold Out</span>
        </div>
      </li>
    );
  }

  return (
    <li className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>${pizza.price}</span>
      </div>
    </li>
  );
}

export default Pizza;
```

Hier nehmen wir also das Pizza-Objekt aus unserem `props`-Objekt heraus und können nun direkt auf die Properties zugreifen.
