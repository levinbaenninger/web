# Das display Property

<show-structure depth="2" />

Es gibt viele verschiedene Werte für `display`, wir fokussieren uns auf `block`, `inline` und `inline-block`

## Block

Wenn auf ein Element `display: block` angewendet wird, geschieht Folgendes:

- Elemente werden **vertikal aufeinandergestapelt**, einer nach dem anderen
- Elemente brauchen 100% der `width` des Parent-Elements,
- Das Boxmodel wird angewendet

Standardmässig nutzen Elemente wie `<h1>`, `<p>`, `<ul>`, `<li>` den `display`-Value `block`.

## Inline

Wenn eine Box `display: inline` hat, geschieht Folgendes:

- Braucht nur den Platz, den es braucht
- Es entstehen keine Zeilenumbrüche
- `heights` und `widths` werden nicht angewendet
- Margin, Padding und Border werden nur horizontal angewendet (links und rechts)

Standardmässig nutzen Elemente wie `<a>`, `<span>` und `<em>`, `inline`.

## Inline-Block

`inline-block` ist eine Kombination aus `block` und `inline` und verhält sich wie folgt:

- Sieht aus wie `inline` von aussen und verhält sich wie `block` im Inneren
- Brauch nur den Platz, den es braucht
- Es entstehen keine Zeilenumbrüche
- Boxmodel wird angewendet
