# Specificity

<show-structure depth="2" />

Specificity ist der Algorithmus, welcher der Browser benutzt, um zu entscheiden, welche Regel angewendet werden soll.

Wenn es mehrere Styleblöcke
gibt, die verschiedene Selektoren haben, die dieselbe Property mit verschiedenen Werten bestimmen, dann entscheidet Specificity, welcher Wert
angenommen wird.

Specificity ist also ein Wert, der aussagt, wie spezifisch ein Selektor ist.

## Beispiel

```CSS
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

Eine Klasse ist genauer als ein Element Selektor, deshalb wird die Überschrift rot sein.

## Der Algorithmus dahinter

Grundsätzlich kann man sagen: ID > Klasse > Element.

Heisst, jegliche ID schlägt jegliche Anzahl Klassen. Jegliche Klasse schlägt jegliche Anzahl Elemente.

Zudem gibt es ein gewisses Punktesystem dahinter, folgend sind einige Beispiele:

![](element.png) { width="350" thumbnail="true" }

![](id.png) { width="350" thumbnail="true" }

![](klasse_elemente.png) { width="350" thumbnail="true" }

## Inline-Styles und Important

Wenn wir Styles inline deklarieren sind diese auf unserer Skala ganze 1000 Punkte wert. Darüber hinaus gibt es noch `!important`, was wir jedoch
nie oder sehr selten benutzen sollten.

## Übersicht

![specificity.png](specificity.png) { width="500" thumbnail="true"}