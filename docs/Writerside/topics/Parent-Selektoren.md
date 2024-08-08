# Parent-Selektoren

Mit Parent-Selektoren können wir Pseudoklassen und -elemente mit deutlich wenige Schreibaufwand erstellen:

````CSS
.text-hover-#{$key} {
    transition: all 0.1s ease-in-out;

    &:hover {
      color: $value;
    }
  }
````

Um das Parent zu selektieren, nutzen wir ganz einfach das `&`. 