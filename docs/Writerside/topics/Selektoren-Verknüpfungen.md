# Selektoren - Verknüpfungen

<show-structure depth="2" />

## Descendant Selector

Wenn man nur bestimmten Elemente auswählen möchte, die in einem bestimmten Element genested sind, benutzt man den Descendant Selector:

```CSS
li a {
    color: teal;
}
```

Jetzt werden nur alle Anchor-Tags gestylet, die in einer Liste sind. Es können unzählige Elemente miteinander verknüpft werden:

```CSS
main section span li a {
	color: teal
}
```

## Adjacent Selector

Mit dem adjacent Selector kann man alle Elemente auswählen, die direkt einem anderen Element folgen (Geschwister):

```CSS
h1 + p {
    color: red;
}
```

Bsp.: Wähle nur alle Paragrafen aus, welche direkt einer `<h1>` folgen.

## Direct Child Selector

Mit dem direct child Selector kann man alle Elemente auswählen, die direkte Kinder eines bestimmten Elements sind:

```CSS
div > li {
    color: white;
}
```

Bsp.: Wähle nur die `<li>` aus, die direkte Children von einem `<div>` sind.
