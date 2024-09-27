# flex-direction

In einem Element, das `display: flex` hat, gibt es zwei Achsen:

![axis](axis.png) { width="350" thumbnail="true" }

Dabei richten sich die Elemente immer der **Main Axis** zu.

## Flex-Direction

Mit Flex-Directions können wir die Achsen vertauschen:

![flex-direction.png](flex-direction.png) { width="200" }

```CSS
.container {
    flex-direction: row | row-reverse | column | column-reverse
}
```

- `row` (default): von links nach rechts
- `row-reverse`: von rechts nach links
- `column`: von oben nach unten
- `column-reverse`: von unten nach oben
