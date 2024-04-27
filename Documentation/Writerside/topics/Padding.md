# Boxmodell - Padding

<show-structure depth="2" />

Padding ist im Grunde genommen ein unsichtbarer Raum, den wir um die Elemente herum schaffen können. Padding ist zwischen dem Content und der Border.

![padding.png](padding.png) { width="350" thumbnail="true" }

## Properties

Padding hat folgende Properties:

- `padding-top`
- `padding-right`
- `padding-bottom`
- `padding-left`

### Shorthand

Das Shorthand ist `padding` und ist so aufgebaut:

```CSS
/* Apply to all four sides */
padding: 1em;

/* top and bottom | left and right */
padding: 5% 10%;

/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 2em;
```