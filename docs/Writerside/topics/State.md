# State

Um eine Komponente interaktiv zu machen, brauchen wir State. 

> **State** ist das wichtigste Konzept in React!

{ style="warning" }

## Was ist State?

- Daten, die eine Komponente **im Laufe der Zeit speichern** kann; notwendige Informationen, die sie sich während des Lebenszyklus der App 
  **merken** muss
- Das **Gedächtnis** einer Komponente 🧠
- **Component-State**: Eine einzelne Variable in einer Komponente (auch "State-Variable")
- Manipulation von **Component-State** triggert React, die Komponente neu zu rendern

**State erlaubt es uns also:**

1. Die View der Komponente zu aktualisieren (durch das erneute Rendern)
2. Lokale Variablen zwischen Renders zu persistieren

> State ist also ein **Tool**!

## `useState`-Hook

Um nun in unserem Code ein State-Variable zu erstellen, nutzen wir den `useState()`-Hook von React.

````Javascript
const [step, setStep] = useState(1);
````

`useState()` gibt uns also zwei Dinge zurück, einmal die eigentliche `step`-Variable und einmal einen Setter. Als Argument geben wir den 
Standardwert der State-Variable mit.

Nun können wir diese zwei Werte nutzen, um einerseits die State-Variable zu lesen und sie zu setzen:

````Javascript
const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
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
````

> Wir dürfen Hooks nur im Top-Level der Funktion aufrufen, also nicht innerhalb eines `if`-Statements, eines Loops, etc.!

{ style="warning" }

## Aktualisieren des State basierend auf dem aktuellen State

Wir können zwar den State schon wie folgt aktualisieren:

````Javascript
setSteps(steps + 1);
````

Jedoch kann das in manchen Situationen zu Bugs führen. Damit das nicht passiert können wir der Methode eine Funktion mitgeben, die den aktuellen 
State beinhaltet:

````Javascript
setStep((s) => s + 1);
````

## Guidelines

- Verwende eine State-Variable für alle Daten, die die Komponente im Laufe der Zeit verfolgen ("merken") soll. **Das sind Daten, die sich irgendwann einmal ändern werden.** In Vanilla JS ist das eine `let`-Variable oder ein `[]` oder `{}`.
- Wann immer man möchte, dass etwas in der Komponente **dynamisch** ist, erstelle einen Status, der sich auf dieses "Ding" bezieht, und 
  aktualisiere den Status, wenn sich das "Ding" ändert (auch bekannt als "dynamisch")
  - **Beispiel:** Ein Modal kann geöffnet oder geschlossen sein. Wir erstellen also eine State-Variable `isOpen`, die festhält, ob das Modal geöffnet ist oder nicht. Bei `isOpen = true` zeigen wir das Fenster an, bei `isOpen = false` blenden wir es aus.
- Wenn Sie das Aussehen einer Komponente oder die angezeigten Daten ändern möchten, aktualisieren Sie ihren Status. Dies geschieht in der Regel in einer Event-Handler-Funktion.
- Stell dir bei der Erstellung einer Komponente vor, dass ihre View den sich im Laufe der Zeit ändernden Zustand widerspiegelt.
- Verwende für Daten, die keine erneuten Komponentenrenderungen auslösen sollen, keinen State. Verwende stattdessen eine reguläre Variable. Dies ist ein häufiger Anfängerfehler.