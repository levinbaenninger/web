# Media Query - Basics

Die Syntax eines Media Query sieht so aus:

````CSS
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
````

Es besteht aus:

- Eine **Media Type**, welcher dem Browser sagt, für welches Medium dieser Code ist
- Eine **Media Expression**, bei welcher es sich um eine Regel oder Test handelt, der bestanden werden muss, damit das CSS angewendet wird.
- **CSS Regeln**, die sagen, was geändert werden muss.

## Media Txpes

Die möglichen Medientypen sind:

- `all`
- `print`
- `screen`

Der folgende Media Query setzt die Schriftgrösse nur auf `12pt`, wenn die Seite gedruckt wird:

````CSS
@media print {
  body {
    font-size: 12pt;
  }
}
````

## Media Feature Rules

Nachdem wir den Typ spezifiziert haben, können wir ein Media-Feature mit einer Regel auswählen.

### Width und Height

Das Feature, welches wir am meisten antreffen werden ist die **viewport width**. Wir können bestimmen, ob wir, die CSS-Regeln anwenden wollen,
wenn die Breite kleiner, grösser oder genau der Breite des Viewports entspricht. Dafür nutzen wir `max-width`, `min-width` oder `width`.

````CSS
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
````

Dieser Media Query wird angewendet, wenn der Viewport kleiner oder gleich 600px breit ist.

### Orientation

Mit dme Feature `orientation` können wir testen ob das Gerät im Portrait- oder Landscape-Modus ist.

````CSS
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
````

Hier ändert sich die Farbe, wenn das Gerät im Landscape-Modus ist.

### Ranged Syntax

Mit der **ranged Syntax** können wir überprüfen, ob bspw. die Viewport Width zwischen zwei Werten ist:

````CSS
@media (30em <= width <= 50em) {
  /* … */
}
````