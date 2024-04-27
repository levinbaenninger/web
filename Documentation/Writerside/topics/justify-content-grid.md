# justify-content

Manchmal ist die totale Grösse des Grids kleiner als der Grid-Container. Das kann passieren, wenn ale Grid-Elemente bspw. mit `px` deklariert
werden. In diesem Fall können wir die Ausrichtung des Grids im Grid-Container steuern. Mit `justify-content` können wir das Grid an der
**inline-Achse** (Reihe) ausrichten.

## Werte

- `start` - richtet das Grid am Anfang des Containers aus
- `end` - richtet das Grid am Ende des Containers aus
- `center` - zentriert das Grid im Container
- `stretch` - füllt die ganze Breite des Containers aus
- `space-around` - platziert eine gleichmässige Menge an Platz zwischen jedes Grid-Item, mit halb so grossem Platz am Anfang und Ende
- `space-between` - platziert eine gleichmässige Menge an Platz zwischen jedes Grid-Item, ohne Platz am Ende
- `space-evenly` - platziert eine gleichmässige Menge an Platz zwischen jedes Grid-Item, mit gleich viel Platz am Anfang und Ende

````CSS
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
````

## Beispiele

### Start

````CSS
.container {
  justify-content: start;
}
````

![](justify-content-start.jpg) { width="250" }

### End

````CSS
.container {
  justify-content: end;    
}
````

![](justify-content-end.jpg) { width="250" }

### Center

````CSS
.container {
  justify-content: center;    
}
````

![](justify-content-center.jpg) { width="250" }

### Stretch

````CSS
.container {
  justify-content: stretch;    
}
````

![](justify-content-stretch.jpg) { width="250" }

### Space-Around

````CSS
.container {
  justify-content: space-around;    
}
````

![](justify-content-space-around.jpg) { width="250" }

### Space-Between

````CSS
.container {
  justify-content: space-between;    
}
````

![](justify-content-space-between.jpg) { width="250" }

### Space-Evenly

````CSS
.container {
  justify-content: space-evenly;    
}
````

![](justify-content-space-evenly.jpg) { width="250" }