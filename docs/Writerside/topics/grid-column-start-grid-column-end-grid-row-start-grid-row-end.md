# grid-column-start, grid-column-end / grid-row-start, grid-row-end

Diese Properties sagen, wo ein Item in einem Grid ist, indem es die Grid-Linien referenziert.

## Werte

- `<line>` - Eine Nummer, die auf eine nummerierte Grid-Linie verweist
- `span <number>` - Das Element erstreckt sich über die angegebene Anzahl Grid-Tracks

````CSS
.item {
  grid-column-start: <number> | span <number>;
  grid-column-end: <number> | span <number>;
  grid-row-start: <number> | span <number>;
  grid-row-end: <number> | span <number>;
}
````

## Beispiele

````CSS
.item-a {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3
}
````

````CSS
.item-b {
    grid-column-start: 1;
    grid-colum-start: span 3;
    grid-row-start: 2;
    grid-row-end: span 2;
}
````