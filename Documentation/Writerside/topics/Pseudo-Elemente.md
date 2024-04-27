# Pseudo-Elemente

<show-structure depth="2" />

Mit Pseudo-Elementen kann man einen bestimmten Teil des ausgewählten Elements stylen.

## ::after

Mit `::after` kann man etwas nach dem eigentlichen Inhalt des Elements einfügen. Das kann Text, aber auch bspw. eine Box sein.

```CSS
.box::after {
    content: " ➥";
}
```

## ::before

`::before` funktioniert ganz ähnlich, wie `::after`, nur dass der Inhalt vor dem eigentlichen Inhalt erscheint.

```CSS
.box::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}
```