# align-content

Funktioniert gleich, wie `justify-content` einfach auf der **Block-Achse** (Spalte).

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
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;    
}
````

## Beispiele

### Start

````CSS
.container {
  align-content: start;    
}
````

![](align-content-start.jpg) { width="250" }

### End

````CSS
.container {
  align-content: end;    
}
````

![](align-content-end.jpg) { width="250" }

### Center

````CSS
.container {
  align-content: center;    
}
````

![](align-content-center.jpg) { width="250" }

### Stretch

````CSS
.container {
  align-content: stretch;    
}
````

![](align-content-stretch.jpg) { width="250" }

### Space-Around

````CSS
.container {
  align-content: space-around;    
}
````

![](align-content-space-around.jpg) { width="250" }

### Space-Between

````CSS
.container {
  align-content: space-between;    
}
````

![](align-content-space-between.jpg) { width="250" }

### Space-Evenly

````CSS
.container {
  align-content: space-evenly;    
}
````

![](align-content-space-evenly.jpg) { width="250" }