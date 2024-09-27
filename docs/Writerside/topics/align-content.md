# align-content

Dieses Property richtet die Zeilen eines Flex-Containers aus, wenn es freien Platz auf der **Cross Axis** hat.

> Dieses Property wird nur wirksam, wenn der Container mehrere Zeilen hat. Dafür muss `flex-wrap` entweder auf `wrap` oder `wrap-reverse` sein.

![](align-content.png) { width="300" }

```CSS
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | baseline;
}
```

- `normal` (default): Elemente sind in deren Standardposition, als ob kein Wert gesetzt wurde
- `flex-start`: Elemente werden an den Start des Containers gepackt
- `flex-end`: Elemente werden an das Ende des Containers gepackt
- `center`: Elemente werden im Container zentriert
- `space-between`: Die Elemente sind gleichmäßig in der Zeile verteilt; das erste Element befindet sich am Anfang des Containers, das letzte
  Element am Ende des Containers
- `space-around`: Die Elemente sind gleichmäßig in der Reihe verteilt mit gleichmässigem Abstand um jede Zeile
- `space-evenly`: Die Elemente sind gleichmässig verteilt mit gleichmässigem Abstand um sie herum
