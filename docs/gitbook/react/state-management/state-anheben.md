---
icon: hand-holding
---

# State anheben

Manchmal möchte man, dass sich der Zustand von zwei Komponenten immer gemeinsam ändert. Dafür entfernt man den State aus beiden Komponenten, verschiebt ihn in die nächstgelegene gemeinsame Elternkomponente und gibt ihn dann über Props an die Komponenten weiter. Dies wird _**State anheben**_ genannt und ist eine der häufigsten Aufgaben beim Schreiben von React-Code.

## Beispiel

In diesem Beispiel rendert eine `Accordion` Komponente zwei separate `Panel`s.

* `Accordion`
  * `Panel`
  * `Panel`

Jede `Panel`-Komponente hat eine `isActive` State-Variable, die bestimmt, ob der Inhalt sichtbar ist oder nicht.

{% tabs %}
{% tab title="Panel" %}
{% code title="Panel.jsx" %}
```jsx
const Panel = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Show
        </button>
      )}
    </section>
  );
}

export default Panel;
```
{% endcode %}
{% endtab %}

{% tab title="Accordion" %}
{% code title="Accordion.jsx" %}
```jsx
const Accordion = () => {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

export default Accordion;
```
{% endcode %}
{% endtab %}
{% endtabs %}

Wenn wir nun das eine `Panel` einblenden, bleibt das andere `Panel` ausgeblendet - sie sind unabhängig voneinander.

***

Was aber, wenn wir möchten, dass nur ein `Panel` auf einmal geöffnet ist? Um das zu machen müssen wir den **State in die Parent-Komponente anheben**.

{% stepper %}
{% step %}
### State-Variablen von den Child-Komponenten entfernen

Man gibt die Kontrolle über `isActive` des Panels an eine übergeordnete Komponente ab. Das bedeutet, dass die übergeordnete Komponente stattdessen `isActive` an `Panel` als Prop weitergibt. Entferne diese Zeile aus der `Panel`-Komponente:

```jsx
const [isActive, setIsActive] = useState(false);
```

Stattdessen füge `isActive` zu den Props der `Panel`-Komponente hinzu:

```jsx
const Panel = ({ title, children, isActive }) => {...}
```

Nun hat die Parent-Komponente von `Panel` Kontrolle über den Wert `isActive`, indem es ihn als Prop übergibt. Umgekehrt hat nun die `Panel`-Komponente keine Kontrolle mehr über den Wert von `isActive`.
{% endstep %}

{% step %}
### Übergabe von Hard-Coded Daten aus der gemeinsamen Eltern-Komponente

Um den State anzuheben, muss man die nächstgelegene gemeinsame Parent-Komponente der beiden untergeordneten Komponenten finden:

* `Accordion` (nächstgelegene gemeinsame Parent-Komponente)&#x20;
  * `Panel`
  * `Panel`

In diesem Beispiel ist es die Komponente `Accordion`. Da sie sich über beiden `Panel`s befindet und deren Props steuern kann, wird sie zur „Soure of Truth“ dafür, welches `Panel` gerade aktiv ist. Lass die `Accordion`-Komponente einen hard-coded Wert von `isActive` (z. B. `true`) an beide `Panel`s weitergeben:

```jsx
const Accordion = () => {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="About" isActive={true}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Etymology" isActive={true}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
```
{% endstep %}

{% step %}
### State-Variable zur gemeinsamen Eltern-Komponente hinzufügen

Wenn wir den State anheben verändert es oft die Art und Weise, wie der Zustand gespeichert wird.

In diesem Fall sollte immer nur ein `Panel` gleichzeitig aktiv sein. Das bedeutet, dass die gemeinsame Elternkomponente, das `Accordion`, verfolgen muss, welches Panel gerade aktiv ist. Anstatt einen booleschen Wert zu verwenden, könnte sie eine Zahl als Index des aktiven Panels für die Zustandsvariable nutzen:

```jsx
const [activeIndex, setActiveIndex] = useState(0);
```

Wenn `activeIndex` den Wert `0` hat, ist das erste `Panel` aktiv, und wenn der Wert `1` ist, ist das zweite `Panel` aktiv.

Ein Klick auf den "Show"-Button in einem der `Panel`s muss den aktiven Index im Accordion ändern. Ein Panel kann den `activeIndex`-Zustand nicht direkt setzen, weil dieser innerhalb des Accordions definiert ist. Die Accordion-Komponente muss explizit dem Panel erlauben, ihren Zustand zu ändern, indem sie einen [Event-Handler als Prop](../interaktivitat/event-handling.md#event-handlers-als-props) weitergibt:

{% code title="Accordion.jsx" %}
```jsx
<>
  <Panel
    isActive={activeIndex === 0}
    onShow={() => setActiveIndex(0)}
  >
    ...
  </Panel>
  <Panel
    isActive={activeIndex === 1}
    onShow={() => setActiveIndex(1)}
  >
    ...
  </Panel>
</>
```
{% endcode %}

Der `Button` innerhalb des `Panel`s wird nun das `onShow`-Prop als seinen Event-Handler nutzen:

{% code title="Panel.jsx" %}
```jsx
<section className="panel">
  <h3>{title}</h3>
    {isActive ? (
      <p>{children}</p>
    ) : (
    <button onClick={onShow}>
      Show
    </button>
  )}
</section>
```
{% endcode %}
{% endstep %}
{% endstepper %}

