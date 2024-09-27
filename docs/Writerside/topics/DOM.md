# DOM

## Was ist das DOM?

Die Abkürzung DOM steht für **Document Object Model**, die strukturierte Darstellung von HTML-Dokumenten. Es ermöglicht JavaScript den Zugriff auf
HTML-Elemente und Stile, um sie zu manipulieren.

Wir können zum Beispiel Text, HTML-Attribute und sogar CSS-Stile ändern. Es ist im Grunde ein Verbindungspunkt zwischen HTML-Dokumenten und
JavaScript-Code.

Das DOM wird automatisch vom Browser erzeugt, sobald die HTML-Seite geladen wird, und ist in einer Baumstruktur gespeichert:

![DOM Tree](dom_tree.png) { width="350" thumbnail="true" }

Das DOM sieht ein bisschen aus wie ein Stammbaum. Deshalb verwenden wir ständig die Begriffe Kind-Element, Eltern-Element, Geschwister-Element usw.,
wenn wir über das DOM sprechen.

Das DOM beginnt immer mit dem **`document`-Objekt** ganz oben. Das `document`-Objekt ist ein spezielles Objekt, auf das wir in JavaScript Zugriff
haben. Dieses Objekt dient als Einstiegspunkt in das DOM. Das `document`-Objekt hat viele Methoden, um die Knoten des DOM auszuwählen, zum Beispiel:

```Javascript
document.querySelector();
```

## Inhaltsverzeichnis - DOM

In diesem Kapitel werden folgende Themen behandelt:

### Auswahl und Manipulation von Elementen

- [`querySelector()`](querySelector.md)
- [`getElementById()`, `getElementsByClassName()`, ...](getElementByID-getElementByClassName.md)
- [CSS-Styles manipulieren](CSS-Styles-manipulieren.md)
- [Mit Klassen Arbeiten](Mit-Klassen-arbeiten.md)

### Events

- [Click Events](Click-Events.md)
- [Keypress Events](Keypress-Event.md)
