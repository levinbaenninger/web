# Wie das DOM wirklich funktioniert

## Überblick

Das DOM ist das Interface zwischen unserem JavaScript Code und dem Browser bzw. den Elementen darin.

- Erlaubt uns, dass JavaScript mit dem Browser interagieren kann
- Wir können JavaScript schreiben um:
  - HTML-Elemente zu erstellen, zu bearbeiten und zu löschen
  - Styles, Klassen und Attribute zu setzen
  - Events abzuwarten und darauf zu reagieren
- Der DOM-Tree wird von einem HTML-Dokument erstellt, mit welchem wir interagieren können
- DOM ist eine extrem komplexe API, welche viele Methoden und Eigenschaften beinhaltet, um mit dem DOM-Tree zu interagieren

## Wie die DOM-API organisiert ist

![image.png](image.png) { width="600" thumbnail="true" }

### `Node`

Jeder Node im DOM-Tree ist vom Typ `Node` und beinhaltet unteranderem folgende Properties und Methoden:

- `textContent`
- `childNodes`
- `parentNode`
- `cloneNode()`
- ...

Der `Node`-Typ hat einige Child-Typen sozusagen: `Element`, `Text`, `Comment` und `Document`.

#### `Element`

Der Typ `Element` hat jedes HTML-Element auf unserer Seite, so z.B. das `<p></p>`-Tag oder `<form></form>`.

Dieser Typ hat Zugriff auf extrem viele praktische Properties und Methoden:

- `innerHTML`
- `classList`
- `children`
- `parentElement`
- `append()`
- `remove()`
- `insertAdjacentHTML()`
- `querySelector()`
- `closest()`
- `matches()`
- `scrollIntoView()`
- `setAttribute()`
- ...

Der `Element`-Typ hat intern noch ein `HTMLElement` mit noch weiteren Elementen, wie z.B. `HTMLButtonElement` oder `HTMLDivElement`

#### `Text`

Den Text-Typ gibt es immer, wenn es Text auf der Seite hat, z.B. `<p>Paragraph</p>` wobei aber nur der Text selber und nicht das Element, also 
hier `<p>` zählt.

#### `Comment`

Auch Kommentare von unserem HTML-Dokument werden als Node dargestellt, als `Comment`: `<!--Comment-->`

#### `Document`

Der Typ `Document` ist ein sehr wichtiger Typ der unteranderem folgende Methoden enthält:

- `querySelector()`
- `createElement()`
- `getElementById()`
- ...

### `EventTarget`

Weiter über dem Typ `Node` steht der Typ `EventTarget` mit den Methoden `addEventListener()` und `removeEventListener()`.

> Alle Methoden und Properties werden vererbt, so hat z.B. ein `HTMLFormElement` Zugriff auf die Methode `cloneNode()` vom Typ `Node`.