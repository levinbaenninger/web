# Boxmodell - Höhe und Breite

<show-structure depth="2" />

## Standard CSS Boxmodel

Im standard Boxmodel werden die Breiten und Höhen wie folgt berechnet:

````CSS
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
````

- **Breite**: `width` + `padding-left` + `padding-right` + `border-left` + `border-right`
- **Höhe**: `width` + `padding-top` + `padding-bottom` + `border-top` + `border-bottom`

![standard.png](standard.png) { width="350" thumbnail="true" }

Hier ist die Breite und Höhe um einiges grösser als unsere `width` und `height`.

## Alternatives CSS Boxmodel

Im alternativen Boxmodel ist unsere `width` auch genau die Breite unserer Box, analog Höhe. Um es zu aktivieren machen wir folgendes:

````CSS
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.box {
  width: 350px;
  inline-size: 350px;
  height: 150px;
  block-size: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
````

Jetzt sieht unsere Box so aus:

![alternative.png](alternative.png) { width="350" thumbnail="true" }