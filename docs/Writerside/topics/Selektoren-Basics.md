# Selektoren - Basics

<show-structure depth="2" />

## Universeller Selektor

Mit dem `*` können wir alles auswählen:

```CSS
* {
    color: black;
}
```

## Element Selektor

Um jedes spezifische Element auszuwählen, kann man den Namen des Elements nutzen:

```CSS
img {
    width: 100px;
    height: 200px;
}
```

## ID Selektor

Mit dem ID Selektor können wir ein Element auswählen, welches genau diese ID hat:

```CSS
#logout {
    color: orange;
    height: 200px;
}
```

Dieselbe ID sollte man nur einmal in einem HTML-Dokument vergeben.

## Class Selektor

Ähnlich wie eine ID, nur dass eine Klasse mehreren Elementen vergeben werden kann.

```CSS
.complete {
    color: green;
}
```
