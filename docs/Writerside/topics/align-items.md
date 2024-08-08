# align-items

Mit `align-items` richten wir Elemente an der Block-Achse (Spalte) aus. Dieser Wert gilt für alle Elemente innerhalb des Containers.

## Werte

- `stretch` - füllt die ganze Zellenhöhe aus
- `start` - richtet Elemente am Anfang der Zelle aus
- `end` - richtet Elemente am Ende der Zelle aus
- `center` - zentriert Elemente in der Zelle
- `baseline` - richtete Elemente nach der Text-Baseline aus

````CSS
.container {
  align-items: start | end | center | stretch;
}
````

## Beispiele

### Start

````CSS
.container {
  align-items: start;
}
````

![](align-items-start.jpg) { width="250" }

### End

````CSS
.container {
  align-items: end;
}
````

![](align-items-end.jpg) { width="250" }

### Center

````CSS
.container {
  align-items: center;
}
````

![](align-items-center.jpg) { width="250" }

### Stretch

````CSS
.container {
  align-items: stretch;
}
````

![](align-items-stretch.jpg) { width="250" }