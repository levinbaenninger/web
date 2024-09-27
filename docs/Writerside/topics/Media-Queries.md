# Media Queries

Media queries erlauben es uns zu testen, ob die Bildschirmgrösse von einem Nutzer bspw. kleiner als 756px ist. In den Media Queries können wir dann
Anpassungen vornehmen, die übernommen werden, wenn die Bedingung stimmt.

```CSS
@media screen and (min-width: 80rem) {
  .container {
    margin: 1em 2em;
  }
}
```

Hier testen wir, ob die Bildschirmgrösse grösser als 80rem ist, wenn ja vergrösser wir die Margin.

Wir können pro Stylesheet mehr als ein Media Query erstellen, somit können wir unsere Webseite für Desktops, Tablets und Handys optimieren.

## Empfehlungen

Oft wird das Prinzip Mobile-First angewendet. Hier erstellen wir zuerst das Design wenn der User ein Handy nutzt. Danach benutzen wir weitere Media
Queries um das Design auch für Tablets und Desktops anzupassen.

Wenn man Breakpoints benutzt, sollten diese mit relativen Einheiten definiert werden.

Media Queries können auch in ein separates Stylesheet geschrieben werden, dieses wird dann mit der HTML-Datei verbunden.
