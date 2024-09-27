# Absolute Positioning

Absolute Positioning nimmt das Element aus dem Flow heraus. Jetzt ist das Element auf seiner eigenen Ebene.

```CSS
position: absolute;
```

Zudem verhalten sich `top`, `bottom`, `left` und `right` jetzt anders. Sie orientieren sich jetzt am Container des Elements, hier das `div`.

## Der Container des Elements

**Welches ist der Container des Elements?** Dies hängt stark von der Positionseigenschaft der Ancestor des positionierten Elements ab.

Wenn bei keinem Ancestor explizit `position` definiert wurde, werden alle Ancestor-Elemente eine statische Positionierung haben. Das heisst, dass
das Element relativ zum Viewport ausgerichtet wird.

Wir können aber auch den **Positioning Context** ändern indem wir einem Parent- oder Grandparent-Element folgende Regel geben:

```CSS
position: relative;
```

## Der z-index

Jetzt können Elemente immer noch überlappen, aber wie entscheidet CSS welches Element überlappt wird? Das geht mit dem Property `z-index`. Der
`z-index` sagt aus auf welche Ebene in der z-Achse ein Element ist. Der Standardwert dabei ist `auto`, also 0.

`z-index` akzeptiert einheitslose Zahlen und sagt einfach aus auf welcher Ebene ein Element ist. Wenn wir bspw. den `z-index: -1` haben dann ist
das Element unter dem normalen Flow.
