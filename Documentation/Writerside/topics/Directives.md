# Directives

Directives sind Befehle, die wir im DOM platzieren, die dann Angular dazu bringen etwas Bestimmtes zu machen. Beispiele für Directives sind beispielsweise `*ngFor` welches uns einen Loop im Template zu Verfügung stellt oder sogar ein Component, da wir Angular sagen, dass es einen Component erstellen sollen und dessen View basierend auf dem Template rendern soll.

## Attribute und Structural Directives

Bei Directives gibt es zwei Arten: **Attribute Directives** und **Structural Directives**. 

### Attribute Directives

**Attribute Directives** interagieren mit dem element, auf dem Sie angewendet wurden (bspw. Veränderung des CSS Styles).

Beispiele:

- **`ngClass`** - CSS-Klasse hinzufügen
- **`ngStyle`** - Style verändern

Attribute Directive werden so bezeichnet, da sie genau wie normale Attribute benutzt werden:

````HTML
<input ngClass="..." />
````

> Attribute Directive müssen weder Property noch Event-Binding nutzen

### Structural Directives

Structural Directives interagieren mit dem aktuellen ViewContainer des elements auf welches sie angewendet werden. Sie verändern die Struktur des DOM.

Beispiele:

- **`*ngIf`** - Soll etwas im DOM dargestellt werden?
- **`*ngFor`** - wie oft soll etwas im DOM dargestellt werden?

Sie werden deshalb **Structural Directives** genannt, da sie die Struktur des DOM verändern:

````HTML
<div *ngIf="...">
````

