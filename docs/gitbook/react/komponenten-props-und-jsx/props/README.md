---
icon: sliders
---

# Props

Props werden genutzt, um Daten von einer **Parent-Komponente zu einer Child-Komponente** zu übergeben. Es ist ein essenzielles Tool, um Komponenten zu **konfigurieren** und **anzupassen**. Mit Props **kontrollieren** Parent-Komponenten wie Child-Komponenten aussehen und funktionieren.

**Alles Mögliche** kann als Props übergeben werden: Strings, Arrays, Objekte, Funktionen, sogar andere Komponenten.

## Props übergeben

Die Daten übergeben wir einfach über ein Attribut unserer Komponente:

```tsx
<Pizza
  name="Pizza Spinaci"
  ingredients="Tomato, mozarella, spinach, and ricotta cheese"
  photoName="pizzas/spinaci.jpg"
  price={12}
/>
```

## Props annehmen

In unserer Child-Komponente können wir ein Parameter namens `props` annehmen.

```tsx
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
```

{% hint style="info" %}
Wenn wir mit TypeScript arbeiten müssen wir noch den Typ für die Props definieren.
{% endhint %}
