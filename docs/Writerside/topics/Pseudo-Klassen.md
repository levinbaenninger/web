# Pseudo-Klassen

<show-structure depth="2" />

Pseudo-Klassen werden zu einem Selektor hinzugefügt, um spezielle Status, wie `hover` oder `active` anzuzeigen.

## :active

Das wird benutzt, wenn bspw. ein Knopf gedrückt wird und der Style sich dabei ändern sollte.

```CSS
button:active {
    background-color: blue;
}
```

## :hover

Das wird benutzt, wenn bspw. die Maus über einen Anchor hovert und sich der Style ändern soll.

```CSS
a:hover {
    color: orange
}
```

## :nth-of-type()

Das benutzt man, wenn man nur bspw. für jedes zweite Element den Style ändern möchte.

```CSS
section:nth-of-type(2n) {
	color: something;
}
```
