# Conditionals

Conditionals werden mit `@if` erstellt:

````CSS
@if ($i % 100 == 0) {
    @if ($i <= 500) {
      ...
    } @else {
      ...
      }
    }
  }
}
````

Wie wir sehen können wir auch mehrere `if`-Statements verschachteln und `else` nutzen.