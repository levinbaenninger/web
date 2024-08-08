# justify-self

Mit `justify-items` richten wir Elemente in einer Zelle an der Inline-Achse (Zeile) aus. Dieser Wert gilt für ein Element in einer einzigen Zelle.

## Werte

- `start` - richtet das Element am Anfang der Zelle aus
- `end` - richtet das Element am Ende der Zelle aus
- `center` - zentriert das Element in der Zelle
- `stretch` - füllt die ganze Zellenbreite aus

````CSS
.item {
  justify-self: start | end | center | stretch;
}
````

## Beispiele

### Start

````CSS
.item-a {
  justify-self: start;
}
````

![](justify-self-start.jpg) { width="250" }

### End

````CSS
.item-a {
  justify-self: end;
}
````

![](justify-self-end.jpg) { width="250" }

### Center

````CSS
.item-a {
  justify-self: center;
}
````

![](justify-self-center.jpg) { width="250" }

### Stretch

````CSS
.item-a {
  justify-self: stretch;
}
````

![](justify-self-stretch.jpg) { width="250" }