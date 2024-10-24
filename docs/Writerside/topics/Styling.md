# Styling

Es gibt viele verschiedene Wege in React, um unsere Komponenten zu stylen.

## Inline-Styles

Genau wie in HTML können wir auch in React Inline-Styles nutzen, um unsere Elemente zu stylen. In JSX funktioniert es jedoch ein wenig anders, 
denn hier übergeben wir ein Objekt an Styles.

````Javascript
function Header() {
  return (
    <h1 style={{ color: 'red', fontSize: '3rem', textTransform: 'uppercase' }}>
      Fast React Pizza Co.
    </h1>
  );
}
````

## Externes CSS-File

Wir können auch ein externes CSS-File in unsere `<App />`-Komponente einbinden und so styles mit ganz normalen Klassen, IDs, Elementen und anderen 
Selektoren erreichen.

````Javascript
import '/src/styles.css';

export function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
````

> Um eine Klasse zu vergeben, müssen wir das Attribut `className` nutzen anstatt `class`!

{ style="warning" }