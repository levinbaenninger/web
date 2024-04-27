# grid-area

Gibt einem Element einen Namen, sodass es von einem Template referenziert werden kann. Alternativ kann mann dieses Property auch als Shorthand für
`grid-row-start` + `grid-column-start` + `grid-row-end` + `grid-column-end` benutzt werden.

## Werte

- `<name>` - ein Name vom Template
- `<row-start>` / `column-start` / `row-end` / `column-end`

````CSS
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
````

## Beispiele

### Mit Name

````CSS
.item {
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
}
````

### Als Shorthand

````CSS
.item-d {
  grid-area: 1 / 4 / 4 / 6;
}
````