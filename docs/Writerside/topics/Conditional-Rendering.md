# Conditional Rendering

Mit Conditional Rendering können wir basierend auf einem Status etwas anzeigen lassen oder eben nicht. Dafür gibt es zwei Möglichkeiten:

- Mit dem `&&`-Operator dank [**Kurzschlüssen**](Kurzschlüsse-und.md#der-und-operator)
- [**Ternaries**](Der-Conditional-Operator.md)

## `&&`-Kurzschlüsse

Mit `&&`-Kurzschlüssen können wir etwas rendern, wenn ein Wert truthy ist.

````Javascript
return (
  <footer className="footer">
    {isOpen && (
      <div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
      </div>
    )}
  </footer>
);
````

Das heisst, das ganze `<div>` mit dem Inhalt rendern wir nur, wenn die Variable `isOpen` `true` ist.

## Ternary-Operator

Mit dem Ternary-Operator können wir auch etwas anzeigen, wenn der Wert falsy ist:

````Javascript
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizza={pizza} />
          ))}
        </ul>
      ) : (
        <p>Sorry, we're still working on our menu</p>
      )}
    </main>
  );
}
````

In diesem Beispiel werden als je nachdem die Pizzen angezeigt oder ein Text über den aktuellen Status des Menüs. Dasselbe funktioniert natürlich 
auch, um Text oder Klassen konditionell zu setzen:

````Typescript
function Pizza({ pizza }: PizzaProps) {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold out' : `$${pizza.price}`}</span>
      </div>
    </li>
  );
}
````
