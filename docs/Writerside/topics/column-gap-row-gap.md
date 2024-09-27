# gap / column-gap, row-gap

Das `gap`-Property kontrolliert den Abstand zwischen Grid-Lines. Mit `column-gap` kann man den Abstand zwischen Spalten kontrollieren und
mit `row-gap` den Abstand zwischen Reihen.

```CSS
.container {
  column-gap: <line-size>;
  row-gap: <line-size>;
  gap: <row-gap> <column-gap>;
}
```

## Beispiel

```CSS
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;

  /* Einzeln */
  column-gap: 10px;
  row-gap: 15px;

  /* Shorthand */
  gap: 15px 10px;
}
```

![](dddgrid-gap.jpg) { width="250" }
