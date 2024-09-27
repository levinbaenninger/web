# Boxmodell - Border

<show-structure depth="2" />

Als Nächstes können wir eine Border definieren, der um das gesamte Element herumgeht. Es ist eine **Linie**, rund um das Element und es ist immer noch
**im Element**.

![border.png](border.png) { width="350" thumbnail="true" }

## Properties

Folgende Styling-Properties sind bei Borders verfügbar:

- `border-width`
- `border-style`
- `border-color`
- `border-radius`

Zudem können wir die Properties für jede Seite definieren:

- `border-top`
- `border-right`
- `border-botton`
- `border-left`

### Shorthand

Damit wir nicht immer drei Elemente aufschreiben müssen, gibt es ein Shorthand:

```CSS
/* style */
border: solid;

/* width | style */
border: 2px dotted;

/* style | color */
border: outset #f33;

/* width | style | color */
border: medium dashed green;
```

Dieses Shorthand funktioniert natürlich auch mit `border-top`, `border-right`, etc.
