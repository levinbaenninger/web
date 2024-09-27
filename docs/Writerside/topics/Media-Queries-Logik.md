# Media Queries - Logik

Um unsere Media Queries noch feiner einzustellen, können wir logische Operatoren, wie `and` und `or` verwenden.

## "and" Logik

Um zwei Media Features zu kombinieren, können wir `and` benutzen. So können wir beispielsweise testen, ob die Width grösser als 600px ist **und**
ob die Bildschirmausrichtung im Landscape-Modus ist:

```CSS
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

## "or" Logik

Um eine logische `or` Operation durchzuführen, können wir die Queries mit Kommas trennen:

```CSS
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

Hier testen wir, ob der Viewport grösser ist als 600px **oder** ob die Bildschirmausrichtung im Landscape-Modus ist.
