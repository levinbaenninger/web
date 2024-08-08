# Partials

Mit Partials können wir unseren Code in mehrere Dateien aufteilen. Partials machen unseren Code modular, einfacher zu warten und einfacher zu lesen.

Um bspw. Variablen von einer anderen Datei nutzen zu können, müssen wir diese importieren:

````CSS
@import './variables';
````

> **Wichtig:** Die Reihenfolge spielt eine Rolle!

{style="warning"}

Nun können wir die Variablen der Datei im aktuellen File nutzen:

````CSS
.notification {
  color: $secondary;
  border: $secondary solid $base-border-thickness;
  margin: $base-margin;
  padding: $base-padding;
  border-radius: $base-border-radius;
}
````

## Partials ignorieren

Manche Partials, wie beispielsweise unsere wären in normalem CSS-Code einfach leer, da bspw. nur Variablen darin deklariert werden. Damit solche Dateien nicht kompiliert werden können wir ein `_` vor den Dateinamen setzen:

<path>_variables.scss</path>