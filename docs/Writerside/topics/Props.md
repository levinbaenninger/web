# Props

Props werden genutzt, um Daten von einer **Parent-Komponente zu einer Child-Komponente** zu übergeben. Es ist ein essenzielles Tool, um 
Komponenten zu **konfigurieren** und **anzupassen**. Mit Props **kontrollieren** Parent-Komponenten wie Child-Komponenten aussehen und funktionieren.

**Alles Mögliche** kann als Props übergeben werden: Strings, Arrays, Objekte, Funktionen, sogar andere Komponenten.

## Props übergeben und erhalten

Die Daten übergeben wir einfach über ein Attribut unserer Komponente:

````HTML
<Pizza
  name="Pizza Spinaci"
  ingredients="Tomato, mozarella, spinach, and ricotta cheese"
  photoName="pizzas/spinaci.jpg"
  price={12}
/>
````

Dann können wir in unserer Child-Komponente ein Argument `props` definieren:

````Typescript
type PizzaProps = {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
};

function Pizza(props: PizzaProps) {
  return (
    <div>
      <img src={props.photoName} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}
````

`props` wird also ein einfaches Objekt sein und wir können dadurch auf unsere Daten zugreifen. Props sind sehr nützlich, um unsere Komponente 
wiederbenutzen zu können, wenn Daten variabel sind.

````Typescript
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />
    </main>
  );
}
````

So können wir nun mit derselben Komponente zwei verschiedene Pizzen anzeigen lassen.

## Immutability

In einer Komponente bestehen Daten aus zwei wichtigen Aspekten:

- Props
- State

Der State kann durch die interne Logik der Komponenten manipuliert werden, wohingegen Props nur von der Parent-Komponente aktualisiert werden 
können.

> Props sind read-only, sie sind **immutable**! Wenn wir Props manipulieren müssen, brauchen wir eigentlich **State**.

{ style="warning" }

Aber warum ist das so?

- Die Mutation von Props würde das Parent beeinflussen, was einen **Side-Effect** kreiert, d.h. die Funktion ist nicht pure
- Komponenten müssen **pure Funktionen** sein bezüglich Props und State
- Das erlaubt es React die App zu optimieren, Bugs zu umgehen und Apps vorhersehbar zu machen