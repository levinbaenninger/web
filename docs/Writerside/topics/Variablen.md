# Variablen

Variablen sind vor allem dann nützlich, wenn man z.B. bestimmte Farben, Schriftgrössen, Schriftfamilien, etc. immer wieder braucht.

In SCSS wir eine Variable immer mit einem `$` kreiert:

```CSS
// Theme Colors
$primary: #326dee;
$secondary: #1ac886;
$error: #d32752;
$info: #f6c31c;

// Spacing
$base-padding: 0.75rem;
$base-margin: 0.75rem;

// Borders
$base-border-thickness: 1px;
$base-border-radius: 20px;
```

Diese Variablen können wir nun ganz einfach mit ihrem Namen in unseren Regeln referenzieren:

```CSS
h1 {
  color: $primary;
  margin-bottom: $base-margin;
}

a {
  color: $secondary;
}

button {
  color: white;
  border: 0;
  background-color: $primary;
  border-radius: $base-border-radius;
  padding: $base-padding;
}

.error {
  color: $error;
  border: $error solid $base-border-thickness;
  margin: $base-margin;
  padding: $base-padding;
  border-radius: $base-border-radius;
}

.notification {
  color: $secondary;
  border: $secondary solid $base-border-thickness;
  margin: $base-margin;
  padding: $base-padding;
  border-radius: $base-border-radius;
}
```

Wie wir hier sehen, wäre es sehr mühsam Anpassungen vorzunehmen, wenn wir bspw. die Farbe oder die Margin verändern wollten.
