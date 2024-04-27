# Verschachtelte Regeln

In SCSS können wir Regeln verschachteln, um uns einige Zeilen zu sparen. Zum Beispiel wird folgender SCSS-Code

````CSS
.card {
  display: block;
  padding: $base-padding;
  border: $base-border-thickness solid #ddd;
  box-shadow: $base-box-shadow;

  .card-title {
    font-size: $base-font-size;
    padding-bottom: $base-padding;
    font-weight: bold;
  }

  .card-body {
    font-size: $base-font-size;

    a {
      text-decoration: underline;
    }
  }
}
````

zu diesem CSS-Code kompiliert:

````CSS
.card {
  display: block;
  padding: $base-padding;
  border: $base-border-thickness solid #ddd;
  box-shadow: $base-box-shadow;
}

.card .card-title {
  font-size: $base-font-size;
  padding-bottom: $base-padding;
  font-weight: bold;
}

.card. card-body {
  font-size: $base-font-size;
}

.card. card-body a {
  text-decoration: underline
}
````