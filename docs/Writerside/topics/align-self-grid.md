# align-self

Mit `align-items` richten wir Elemente an der Block-Achse (Spalte) aus. Dieser Wert gilt für ein Grid-Element.

## Werte

- `start` - richtet das Element am Anfang der Zelle aus
- `end` - richtet das Element am Ende der Zelle aus
- `center` - zentriert Elemente in der Zelle
- `stretch` - füllt die ganze Zellenhöhe aus

```CSS
.item {
  align-self: start | end | center | stretch;
}
```

## Beispiele

### Start

```CSS
.item-a {
  align-self: start;
}
```

![](align-self-start.jpg) { width="250" }

### End

```CSS
.item-a {
  align-self: end;
}
```

![](align-self-end.jpg) { width="250" }

### Center

```CSS
.item-a {
  align-self: center;
}
```

![](align-self-center.jpg) { width="250" }

### Stretch

```CSS
.item-a {
  align-self: stretch;
}
```

![](align-self-stretch.jpg) { width="250" }
