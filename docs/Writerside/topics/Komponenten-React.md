# Komponenten

Komponenten sind das fundamentalste Konzept in React, da React-Applikationen vollständig aus Komponenten bestehen.

- Komponenten sind die **Bauklötze** unseres User Interfaces in React
- Teil der UI, der seine eigenen **Daten, Logik und Aussehen** hat
- Wir bauen komplexe UIs, indem wir **mehrere Komponenten bauen und diese kombinieren**
- Komponenten können wiederbenutzt werden, ineinander verschachtelt sein und Daten zwischen ihnen übergeben

Eine Komponente ist im Grunde genommen eine einfache Funktion, die uns Markup zurückgibt:

````Typescript
function Pizza() {
  return <div>Pizza</div>
}
````

Die Component nutzen wir nun in unserer `<App />`-Component:

````Typescript
export function App() {
  return <Pizza />;
}

export default App;
````

Nun wird der Text `Pizza` auf unserer Webseite angezeigt. Natürlich können wir nicht nur Text in unserer Komponenten anzeigen, sondern auch alle 
anderen HTML-Tags, wie Bilder, Videos, Code, etc.

````Typescript
function Pizza() {
  return (
    <div>
      <img src="/pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}
````

In unseren Komponenten können wir natürlich auch ganz normalen JavaScript-Code schreiben:

````Javascript
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)

  return <footer>We're open from {openHour}:00 to {closeHour}:00</footer>;
}
````

Vor unserem `return`-Statement können wir also jeglichen normalen JavaScript-Code ausführen. Um JavaScript-Code in unserem JSX anzeigen zu lassen 
nutzen wir `{}`.

## Komponenten-Bäume

Komponenten-Bäume visualisieren uns, wie die App aufgebaut ist.

![image_2.png](image_2.png)

So können wir einsehen, wie die Komponenten verschachtelt sind, wie die Beziehungen zueinander sind, etc.