---
icon: file-lines
---

# Das DOM

Die Abkürzung DOM steht für **Document Object Model**, die strukturierte Darstellung von HTML-Dokumenten. Es ermöglicht JavaScript den Zugriff auf HTML-Elemente und Stile, um sie zu manipulieren.

Wir können zum Beispiel Text, HTML-Attribute und sogar CSS-Stile ändern. Es ist im Grunde ein Verbindungspunkt zwischen HTML-Dokumenten und JavaScript-Code.

Das DOM wird automatisch vom Browser erzeugt, sobald die HTML-Seite geladen wird, und ist in einer Baumstruktur gespeichert:

<figure><img src="../../.gitbook/assets/image (13).png" alt=""><figcaption><p>Das DOM</p></figcaption></figure>

Das DOM sieht ein bisschen aus wie ein Stammbaum. Deshalb verwenden wir ständig die Begriffe Kind-Element, Eltern-Element, Geschwister-Element usw., wenn wir über das DOM sprechen.

Das DOM beginnt immer mit dem `document`-Objekt ganz oben. Das `document`-Objekt ist ein spezielles Objekt, auf das wir in JavaScript Zugriff haben. Dieses Objekt dient als Einstiegspunkt in das DOM. Das `document`-Objekt hat viele Methoden, um die Knoten des DOM auszuwählen.

***

Das DOM ist also das Interface zwischen unserem JavaScript Code und dem Browser bzw. den Elementen darin.

* Erlaubt uns, dass JavaScript mit dem Browser interagieren kann
* Wir können JavaScript schreiben um:
  * HTML-Elemente zu erstellen, zu bearbeiten und zu löschen
  * Styles, Klassen und Attribute zu setzen
  * Events abzuwarten und darauf zu reagieren
* Der DOM-Tree wird von einem HTML-Dokument erstellt, mit welchem wir interagieren können
* DOM ist eine extrem komplexe API, welche viele Methoden und Eigenschaften beinhaltet, um mit dem DOM-Tree zu interagieren

## Die DOM-API

<figure><img src="../../.gitbook/assets/image (14).png" alt=""><figcaption><p>DOM-API</p></figcaption></figure>

### `Node`﻿ <a href="#node" id="node"></a>

Jeder Node im DOM-Tree ist vom Typ `Node` und beinhaltet unteranderem folgende Properties und Methoden:

* `textContent`
* `childNodes`
* `parentNode`
* `cloneNode()`
* ...

Der `Node`-Typ hat einige Child-Typen sozusagen: `Element`, `Text`, `Comment` und `Document`.

### **`Element`**﻿

Der Typ `Element` hat jedes HTML-Element auf unserer Seite, so z.B. das `<p></p>`-Tag oder `<form></form>`.

Dieser Typ hat Zugriff auf extrem viele praktische Properties und Methoden:

* `innerHTML`
* `classList`
* `children`
* `parentElement`
* `append()`
* `remove()`
* `insertAdjacentHTML()`
* `querySelector()`
* `closest()`
* `matches()`
* `scrollIntoView()`
* `setAttribute()`
* ...

Der `Element`-Typ hat intern noch ein `HTMLElement` mit noch weiteren Elementen, wie z.B. `HTMLButtonElement` oder `HTMLDivElement`

### **`Text`**﻿

Den Text-Typ gibt es immer, wenn es Text auf der Seite hat, z.B. `<p>Paragraph</p>` wobei aber nur der Text selber und nicht das Element, also hier `<p>` zählt.

### **`Comment`**﻿

Auch Kommentare von unserem HTML-Dokument werden als Node dargestellt, als `Comment`: `<!--Comment-->`

### **`Document`**﻿

Der Typ `Document` ist ein sehr wichtiger Typ der unteranderem folgende Methoden enthält:

* `querySelector()`
* `createElement()`
* `getElementById()`
* ...

### `EventTarget`﻿ <a href="#eventtarget" id="eventtarget"></a>

Weiter über dem Typ `Node` steht der Typ `EventTarget` mit den Methoden `addEventListener()` und `removeEventListener()`.

{% hint style="info" %}
Alle Methoden und Properties werden vererbt, so hat z.B. ein `HTMLFormElement` Zugriff auf die Methode `cloneNode()` vom Typ `Node`.
{% endhint %}
