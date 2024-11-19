---
icon: plus
---

# State-Variable hinzufügen

Um eine State-Variable hinzuzufügen, müssen wir `useState` von React importieren und dann den `useState`-Hook nutzen.

```tsx
const [step, setStep] = useState(1);
```

`step` ist eine State-Variable, während `setState` die Setter-Funktion ist.

{% hint style="info" %}
Die `[` und `]` Syntax wird hier als [Array-Destructuring](https://javascript.info/destructuring-assignment) bezeichnet und ermöglicht das Lesen von Werten aus einem Array. Das von `useState` zurückgegebene Array hat immer genau zwei Elemente.
{% endhint %}

```tsx
const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep((step) => step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((step) => step + 1);
  };

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={handlePrevious}
          style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
```

## Dein erster Hook

In React, `useState`, und andere Funktionen, die mit "`use`" starten, werden **Hook** genannt.&#x20;

_Hooks_ sind spezielle Funktionen, die nur verfügbar sind, während React am [Rendern ](https://react.dev/learn/render-and-commit#step-1-trigger-a-render)ist. Sie lassen uns in verschiedene React Features "einhaken".

State ist nur eine dieser Features, wir werden noch viele weiter Hooks kennenlernen.

{% hint style="warning" %}
**Hooks - Funktionen, die mit `use` starten - können nur auf oberster Ebene der Komponente aufgerufen werden.** Hooks können nicht in Konditionen, Loops oder verschachtelten Funktionen aufgerufen werden.
{% endhint %}

## Aufbau von `useState`

Wenn du [`useState`](https://react.dev/reference/react/useState) aufrufst, sagst du React, dass diese Komponente sich etwas merken soll:

```tsx
const [index, setIndex] = useState(0);
```

In diesem Fall möchtest du, dass React sich `index` merkt.

{% hint style="info" %}
Die Konvention für die Namen, der State-Variable und des Setters sind `const [something, setSomething]`
{% endhint %}

Das einzige Argument, welches du `useState` mitgeben musst, ist der **Initialwert** deiner State-Variable. In diesem Beispiel ist `index`'s Initialwert `0`.

***

Jedes Mal, wenn unsere Komponente gerendert wird, gibt uns`useState` einen Arrays mit zwei Werten:

1. Die **State-Variable** (`index`) mit dem Wert, der gespeichert ist.
2. Die **State-Setter-Funktion**  (setIndex) wleche die State-Variable aktualisieren kann und React triggert, die Komponente erneut zu rendern.

Hier siehst du, wie das in Aktion passiert:

```tsx
const [index, setIndex] = useState(0);
```

1. **Deine Komponente wird zum ersten Mal gerendert.** Weil du `0` an `useState` übergeben hast, gibt es uns `[0, setIndex]` zurück. React merkt sich `0` als letzten Wert.
2. **Du aktualisierst den State.** Wenn ein User auf einen Button klickt ruft er `setIndex(index + 1)` auf. `index` ist `0`, also ist es `setIndex(1)`. Das sagt React, dass `index` jetzt `1` ist und triggert einen re-render.
3. **Das zweite Rendern deiner Komponente.** React sieht immer noch `useState(0)`, aber da React sich _erinnert_, dass du `index` zu `1` gesetzt hast, gibt es uns `[1, setIndex]` zurück.
4. Und so weiter
