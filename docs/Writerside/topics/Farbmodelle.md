# Farbmodelle

In CSS gibt es verschiedene Farbmodelle, bspw. RGB, HSL oder HEX.

## RGB

Bei RGB kann jede Farbe durch eine Kombination von **Rot**, **Grün** und **Blau** repräsentiert werden. Jede dieser drei Basisfarben kann einen
Wert **zwischen 0 und 255** annehmen, was zu 16.8 Millionen verschiedenen Farben führt.

RGB-Farben werden in CSS wie folgt notiert:

```CSS
rgb(0, 255, 255);
```

Wenn wir noch die Transparenz (**alpha**) ändern wollen, wird das so notiert:

```CSS
rgba(0, 255, 255, 0.3);
```

## HEX

Anstatt dass wir Dezimalzahlen von 0 bis 255 nutzen, nutzen wir Hexadezimalzahlen von **0 bis ff**. Das würde dann bspw. so aussehen:

```CSS
#00ffff
```

> In der Praxis nutzen wir meistens HEX-Farben und `rgba` wenn wir Transparenz brauchen.

## Farben Keywords

Zudem gibt es in CSS vorgefertigte Farben, bspw. `antiquewhite`, `blueviolet`, etc.

```CSS
gray
```
