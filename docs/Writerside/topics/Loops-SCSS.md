# Loops

## @each-Loop

In SCSS können wir Loops mit `@each` erstellen:

````CSS
@each $key, $value in $colors {
  .color-#{$key} {
    color: $value;
  }
  
  .bg-#{key} {
    background-color: $value;
  }
}
````

Hier erstellen wir für jede Farbe in der `$colors`-Map eine Klasse, mit dem jeweiligen Wert des Keys. Zuerst erstellen wir eine temporäre lokale Variable für den Key und eine für den Value. Danach geben wir an, durch welche Map iteriert werden soll.

Nun können wir mit `...-#{$key}` dynamisch Klassen erstellen und geben ihnen einen dynamischen Wert mit `$value`.

## @for-Loop

Neben dem `@each`-Loop, welcher gut für das Iterieren von Maps ist, gibt es noch den `@for`-Loop mit welchem wir z.B. Schattierungen und Töne machen können:

````CSS
@for $i from 100 through 900 {
  @if $i % 100 == 0 {
    @if $i <= 500 {
      .text-#{$key}-#{$i} {
        color: lighten($value, (500 - $i) * 0.1%);
      }

      .bg-#{$key}-#{$i} {
        background-color: lighten($value, (500 - $i) * 0.1%);
      }
    } @else {
      .text-#{$key}-#{$i} {
        color: darken($value, ($i - 500) * 0.1%);
      }

      .bg-#{$key}-#{$i} {
        background-color: darken($value, ($i - 500) * 0.1%);
      }
    }
  }
}
````

Hier loopen wir durch jede Zahl von 100 bis 900 um damit verschiedene Schattierungen und Farbtöne einer Farbe zu erhalten. 

Zuerst überprüfen wir ob `$i` sauber durch 100 teilbar ist, damit wir Klassen wie z.B. `.text-indigo-200` bekommen. Danach überprüfen wir, ob `$i` kleiner oder gleich 500 ist; wenn das der Fall ist erhellen wir die Farbe um eine bestimmte Prozentzahl, wenn nicht, dann verdunkeln wir die Farbe.

> Hier benutzen wir bereits [SCSS Conditionals](Conditionals.md).