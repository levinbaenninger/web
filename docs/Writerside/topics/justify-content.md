# justify-content

Dieses Attribut definiert die Ausrichtung an der **Main Axis**.

![justify-content.png](justify-content.png) { width="300" }

```CSS
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

- `flex-start` (default): Elemente werden an den Anfang der Achse gepackt
- `flex-end`: Elemente werden an das Ende der Achse gepackt
- `center`: Elemente werden entlang der Achse zentriert
- `space-between`: Die Elemente sind gleichmäßig in der Zeile verteilt; das erste Element befindet sich am Anfang der Achse, das letzte
  Element am Ende der Achse
- `space-around`: Die Elemente sind gleichmäßig in der Reihe verteilt und haben gleich viel Platz um sie herum. Beachte, dass die Abstände visuell
  nicht gleich sind, da alle Artikel auf beiden Seiten gleich viel Platz haben.
- `space-evently`: Die Elemente sind so verteilt, dass der Abstand zwischen zwei beliebigen Elementen (und der Abstand zu den Rändern) gleich ist
