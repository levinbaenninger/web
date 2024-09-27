# CSS und JavaScript einbinden

<show-structure depth="2" />

## CSS einbinden

Um CSS einzubinden können wir das `<link>`-Element benutzen mit den beiden Attributen `rel="stylesheet"` und `href`, also den Pfad der CSS-Datei.

```HTML

<link rel="stylesheet" href="my-css-file.css"/>
```

## JavaScript einbinden

Mit dem `<script>`-Element und den beiden Attributen `src`, dem Pfad der JS-Datei, und `defer`, der dafür sorgt, dass unser HTML vor dem JS
geladen wird.

```HTML

<script src="my-js-file.js" defer></script>
```
