# Relative Positioning

Relative Positioning ist ähnlich wie static Positioning, jedoch kann man die Position mit den Properties `top`, `bottom`, `left` und `right`. Das
Element bleibt jedoch im Flow.

## top, bottom, left und right

`top`, `bottom`, `left` und `right` werden zusammen mit `position` benutzt, um exakt zu spezifizieren, wo das Element positioniert werden soll.

```CSS
top: 30px;
left: 30px;
```

Wichtig bei diesen Properties ist, dass man sich eine unsichtbare Kraft vorstellt. Bei unserem Beispiel bewegen wir das Element 30px von `top` weg,
also nach unten. Das gleich gilt für `left`, das Element wird 30px von `left` weggedrückt.
