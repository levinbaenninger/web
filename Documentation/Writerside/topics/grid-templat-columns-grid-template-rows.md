# grid-template-columns / grid-template-rows

Diese zwei Attribute definieren die Spalten und Reihen mit einer Liste an Werten. Die Werte repräsentieren die Grösse und die Leertasten zwischen
ihnen die Gitterlinien.

````CSS
.container {
  grid-template-columns: ...  ...;
  /* e.g. 
      1fr 1fr
      minmax(10px, 1fr) 3fr
      repeat(5, 1fr)
      50px auto 100px 1fr
  */
  grid-template-rows: ... ...;
  /* e.g. 
      min-content 1fr min-content
      100px 1fr max-content
  */
}
````

## Gitterlinien-Nummern

Gitterlinien werden automatisch positive Nummern zugeteilt (-1 ist eine Alternative für die letzte Spalte/Reihe)

![](template-columns-rows-01.jpg) { width="300" }

## Repeat

Wenn eine Definition wiederholende Teile hat, können wir die `repeat()`-Notation nutzen:

````CSS
.container {
  grid-template-columns: repeat(3, 1fr);
}
````

Was ausgeschrieben das bedeutet:

````CSS
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
````

## Die fr Einheit

Die `fr`-Einheit erlaubt es un die Grösse einer Spalte/Reihe als eine Fraktion von freiem Platz zu setzen. So wird zum Beispiel jedes Element auf ein
Drittel der Breite des Gittercontainers eingestellt:

````CSS
.container {
    grid-template-columns: 1fr 1fr 1fr
}
````