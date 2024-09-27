# align-items

Dieses Attribut definiert die Ausrichtung an der **Cross Axis**.

![align-items](align-items.png) { width="300" }

```CSS
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- `stretch` (default): Ausdehnen, um den Container auszufüllen (`min-height`/`max-height` bleiben erhalten)
- `flex-start`: Elemente werden an den Anfang der Achse gepackt
- `flex-end`: Elemente werden an das Ende der Achse gepackt
- `center`: Elemente werden auf der Achse zentriert
- `baseline`: Elemente werden so ausgerichtet, sodass ihre Textgrundlinien auf derselben Höhe sind
