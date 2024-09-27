# Overflow

Wie wir bereits wissen ist in CSS alles eine Box. Jedoch kann es passieren, dass eine Box zu viel Inhalt hat, sodass er nicht mehr in die Box
passt. Das nennt man **overflow**.

## Das overflow Property

Mit dem `overflow` Property können wir bestimmen, was passieren soll, falls es Overflow gibt.

### Overflow: Abschneiden

Um den Inhalt der übersteht abzuschneiden, können wir `hidden` benutzen.

```CSS
.box {
  border: 1px solid #333333;
  width: 350px;
  height: 100px;
  overflow: hidden;
}
```

### Overflow: Scrollen

Eine andere Möglichkeit wäre es, Scrollbars hinzuzufügen; das geht mit
`scroll`.

```CSS
.box {
  border: 1px solid #333333;
  width: 350px;
  height: 100px;
  overflow: scroll;
}
```

#### Overflow: Scrollen (x oder y)

Darüber hinaus können wir noch bestimmen, ob wir die Scrollbar nur horizontal bzw. vertikal haben wollen mit `overflow-y: scroll` oder
`overflow-x: scroll`.

```CSS
.box {
  border: 1px solid #333333;
  width: 350px;
  height: 100px;
  overflow-y: scroll;
}
```

### Overflow: Automatische Erkennung

Mit `auto` können wir sagen, dass die Scrollbars nur erscheinen sollen, wenn der Inhalt Overflow ist.

```CSS
.box {
  border: 1px solid #333333;
  width: 350px;
  height: 100px;
  overflow: auto;
}
```

### Overflow: Zeilenumbruch

Mit `overflow-wrap` können wir sagen, ob der Browser Zeilenumbrüche bei Strings machen soll. Die Keyword-Werte sind:

- `normal` - Nur Zeilenumbrüche bei normalen Punkten (bspw. ein Leerzeichen zwischen zwei Wörtern)
- `anywhere` - Jeder String kann überall auf eine neue Zeile gehen.

```CSS
.word {
border: 5px solid #333333;
width: 100px;
font-size: 250%;
overflow-wrap: anywhere;
}
```
