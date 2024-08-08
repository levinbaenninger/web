# Absatz

<show-structure depth="2" />

Absätze bzw. Paragrafen werden mit dem `<p>`-Element erstellt.

```HTML
<p>I am a paragraph, oh yes I am.</p>
```

## Hervorhebungen

### Dick und Kursiv

Mit den beiden Keywords `<em>` und `<strong>` kann man Text **kursiv** bzw. **fett** machen.

```HTML
<p>This liquid is <strong>highly toxic</strong> — if you drink it, <strong>you may <em>die</em></strong>.</p>
```

> This liquid is **highly toxic** - if you drink it, **you may _die_**

### Markiert

Mit dem `<mark>`-Element kann man Text mit einem Leuchtstift **markieren**.

```HTML

<p>Do not forget to buy
    <mark>milk</mark>
    today.
</p>
```

### Gelöscht

Mit dem `<del>`-Element kann man Text als **gelöscht** definieren. Oft wird es als durchgestrichene Linie gerendert:

```HTML

<p>My favorite color is
    <del>blue</del>
    red.
</p>
```

### Eingefügt

Mit dem `<ins>`-Element kann man Text als **eingefügt** definieren. Oft wird es als unterstrichene Linie gerendert:

```HTML

<p>My favorite color is
    <del>blue</del>
    <ins>red</ins>
    .
</p>
```

