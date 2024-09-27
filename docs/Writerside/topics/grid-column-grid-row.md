# grid-column / grid-row

Diese Properties sind Shorthands für `grid-colum-start` + `grid-column-end` und `grid-row-start` + `grid-row-end`.

## Werte

- `<start-line>` / `<end-line>`

```CSS
.item {
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
}
```

## Beispiel

```CSS
.item-c {
  grid-column: 3 / span 2;
  grid-row: 2 / 4;
}
```
