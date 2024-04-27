# Schriften

## Farbe

Mit dem Property `color` können wir die Farbe des Textes verändern:

````CSS
p {
  color: red;
}
````

## Schriftart

Mit dem Property `font-family` können wir die Schriftart verändern. Der Browser wendet die Schriftart nur an, wenn die Schriftart auf dem Computer
des Clients vorhanden ist, wenn nicht, nutzt der Browser die Standardschrift.

````CSS
p {
  font-family: Arial;
}
````

### Web-Safe Schriftarten

Es gibt nur ein paar Schriftarten die auf den meisten Computern installiert sind: Arial, Courier New, Georgia, Times New Roman, Trebuchet MS und
Verdana

### Standardschriften

CSS gibt uns einige Standardschriften mit: serif, sans-serif, monospace, cursive und fantasy

### Font Stack

Da wir die Verfügbarkeit von Schriftarten nicht garantieren können, gibt es sogenannte **Font Stacks**. Mit ihnen können wir dem Browser sagen,
welche Schriften er noch ausprobieren soll, falls sie nicht vorhanden sind:

````CSS
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
````

Der Browser beginnt bei der ersten Schriftart, wenn diese nicht verfügbar ist, geht er zur Zweiten, etc.

Mehr zu Schriftarten hier:

## Schriftgrösse

Die Schriftgrösse können wir mit dem Property `font-size` bestimmen:

````CSS
p {
  font-size: 0.75rem;
}
````

## Schriftstil, Schriftstärke, Textumwandlung, Textgestaltung

### Schrifstil

Mit dem `font-style`-Property können wir kursiven Text aktivieren bzw. deaktivieren.

````CSS
/* italic oder normal */
font-style: italic;
fon-style: normal;
````

### Schriftstärke

Mit dem Property `font-weight` können wir die Schriftstärke verändern:

````CSS
/* Von 100 bis 900 */
font-weight: 100;
font-weight: 900;
````

### Textumwandlung

Mit dem Property `text-transform` können wir den Text umwandeln:

````CSS
/* none, uppercase, lowercase, capitalize, full-width */
text-transform: uppercase;
````

### Textgestaltung

Mit `text-decoration` können wir die Gestaltung von Text ändern:

````CSS
/* none, underline, overline, line-through */
text-decoration: underline blue wavy;
````
