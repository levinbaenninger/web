# Verknüpfung einer JavaScript-Datei

<show-structure depth="2" />

Wir binden eine JavaScript-Datei in eine HTML-Datei ein. Dort verlinken wir sie im `<head>`-Tag mit dem `<script>`-Tag:

```HTML

<script src="script.js"></script>
```

Das `src`-Attribut teilt der HTML-Datei mit, wo sich die JS-Datei befindet, wir verlinken also einen Pfad, entweder relativ oder absolut.

Jetzt können wir mit `console.log();` etwas ausgeben.

```Javascript
console.log('Hello World!');
```
