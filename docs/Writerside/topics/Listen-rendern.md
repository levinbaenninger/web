# Listen rendern

In React können wir mit der [**`.map()`-Methode**](map-Methode.md) Listen bzw. Arrays anzeigen lassen. So können wir z.B. für jedes Objekt in 
einem Array eine Komponente anzeigen lassen.

````Javascript
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza pizza={pizza} />
        ))}
      </div>
    </main>
  );
}
````

Dieser Code gibt uns für jede Pizza in unserem `pizzas`-Array eine Pizza-Komponente mit den entsprechenden Daten der aktuellen Pizza zurück. 
Jedoch wird uns dieser Code noch eine Warnung ausgeben, da wir kein `key`-Property angegeben haben. Dieses Attribut brauch React, um intern den 
Status unserer Komponenten zu überprüfen.

````Javascript
{pizzas.map((pizza) => (
  <Pizza key={pizza.name} pizza={pizza} />
))}
````