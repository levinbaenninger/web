# justify-items

Mit `justify-items` richten wir Elemente an der Inline-Achse (Zeile) aus. Dieser Wert gilt für alle Elemente innerhalb des Containers.

## Werte

- `start` - richtet Elemente am Anfang der Zelle aus
- `end` - richtet Elemente am Ende der Zelle aus
- `center` - zentriert Elemente in der Zelle
- `stretch` - füllt die ganze Zellenbreite aus

````CSS
.container {
  justify-items: start | end | center | stretch;
}
````

## Beispiele

### Start

````CSS
.container {
  justify-items: start;
}
````

![](justify-items-start.jpg) { width="250" }

### End

````CSS
.container {
  justify-items: end;
}
````

![](justify-items-end.jpg) { width="250" }

### Center

````CSS
.container {
  justify-items: center;
}
````

![](justify-items-center.jpg) { width="250" }

### Stretch

````CSS
.container {
  justify-items: stretch;
}
````

![](justify-items-stretch.jpg) { width="250" }