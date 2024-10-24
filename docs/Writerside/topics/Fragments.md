# Fragments

In den [**Regeln für JSX**](JSX.md#generelle-regeln) haben wir gelernt, dass JSX nur ein Root-Element zurückgeben darf. Wir könnten es in ein 
`<div>` wrappen, um das zu umgehen. Jedoch wollen wir nicht einfach willkürlich `<div>`-Elemente erstellen für Content, der überhaupt nicht 
zusammenpasst. Deshalb gibt uns React sogenannte Fragments:

````Typescript
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
````

Das Fragment fügt kein neues Element in den DOM-Tree hinzu!