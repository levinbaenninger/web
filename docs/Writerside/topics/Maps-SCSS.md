# Maps

Maps in SCSS sind wie Maps in JavaScript. Eine Map ist eine Kollektion von Key-Value-Pairs für Variablen.

```CSS
$colors: (
  'primary': $primary,
  'secondary': $secondary,
  'error': $error,
  'info': $info,
  'blue': #1919e6,
  'red': #e61919,
  'yellow': #e6e619,
  'green': #19e635,
  'orange': #ffa600,
  'purple': #9900ff,
  'gray': #808080,
  'black': #000000,
  'white': #ffffff,
);
```

Maps sind sehr nützlich, wenn wir bspw. Klassen erstellen müssen, die sich nur in einem Wert ändern, denn mit SCSS können wir durch diese Map loopen und für jede Farbe bspw. einen Button erstellen.

## Funktionen

### map-get()

Mit der Funktion `map-get()` können wir den Wert herausholen:

```CSS
@debug map-get($colors, 'purple'); // #9900ff
```

Als erstes Argument übergeben wir den Namen unserer Map und als zweites Argument einen Key.

### map-has-key()

Mit der `map-has-key()`-Funktion können wir überprüfen, ob eine Map einen bestimmten Key hat:

```CSS
@debug map-has-key($colors, 'secondary'); // true
@debug map-has-key($colors, 'tertiary'); // false
```

Hier übergeben wir als erstes Argument den Namen unserer Map und als zweites Argument den Key, den wir überprüfen wollen.

### map-keys()

Mit der Funktion `map-keys`, bekommen wir alle Keys einer Map zurück:

```CSS
@debug map-keys($colors); // "primary", "secondary", "error", "info", "blue", ...
```

Als Argument übergeben wir eine Map.

### map-remove()

Mit der `map-remove()`-Funktion entfernen wir ein Key-Value-Pair von einer Map:

```CSS
@debug map-remove($colors, 'primary', 'secondary'); // ("error": #d32752, "info": #f6c31c, "blue": #1919e6, ...)
```

Als erstes Argument übergeben wir die Map und die anderen Argumente sind die Key-Value-Pairs, die wir entfernen wollen. Diese Funktion gibt uns dann eine neue Map ohne die entfernten Key-Value-Pairs zurück.

### map-merge()

Mit der Funktion `map-merge()` können wir zwei Maps zusammenfügen:

```CSS
@debug map-merge(
  $colors,
  (
    'pink': #ffc0cb,
  )
); // (..., "white": #ffffff, "pink": #ffc0cb)
```

Als Argumente übergeben wir zwei Maps, die wir zusammenfügen wollen. Diese Funktion gibt uns dann die neue Map zurück.

> Bei allen Funktionen, bei denen wir eine Map modifizieren, wird die Map selber nicht modifiziert. Die modifizierte Map müssen wir in einer neuen Map (Variable) speichern.
