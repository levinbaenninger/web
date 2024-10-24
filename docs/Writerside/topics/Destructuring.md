# Destructuring

Bei Props kann es mühsam sein, wenn wir immer wieder `props.pizza.details` zum Beispiel schreiben müssen. Dafür gibt es jedoch eine Lösung: 
[**Destructuring**](Destructuring-Objects.md)

````Typescript
function Pizza({ pizza }: PizzaProps) {
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
````

Hier holen wir also die `pizza` aus unserem `props`-Objekt heraus und können dieses direkt benutzen.