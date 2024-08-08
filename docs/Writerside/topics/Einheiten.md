# Einheiten

In CSS gibt es viele verschiedene Einheiten:

## Längen

### Absolute Längen

Es gibt sehr viele absolute Längeneinheiten, jedoch wird meistens nur eine Einheit wirklich gebraucht, die `px`-Einheit.

### Relative Längen

Relative längen machen es uns einfacher Webseiten zu skalieren. Sie sind bspw. abhängig von der Schriftgrösse des Parent-Elements oder des
Root-Elements.

<table>
<tr><td>Einheit</td><td>Relativ zu</td></tr>
<tr><td><code>em</code></td><td>Schriftgröße des übergeordneten Elements, wenn es sich um typografische Eigenschaften wie <code>font-size</code> handelt, und Schriftgröße des Elements selbst, wenn es sich um andere Eigenschaften wie <code>width</code> handelt</td></tr>
<tr><td><code>rem</code></td><td>Schriftgrösse des Root-Elements</td></tr>
<tr><td><code>vw</code></td><td>1% der Viewport-Breite</td></tr>
<tr><td><code>vh</code></td><td>1% der Viewport-Höhe</td></tr>
</table>

## Prozente

In den meisten Fällen werden Prozente gleich wie Längen behandelt. Prozente sind immer relative zu irgendeinem anderen Wert, bspw. `font-size`
ist relative zur `font-size` des Parents oder bei `width` wäre es relativ zur `width` des Parents.

> **Wann benutzen wir welche Einheit?**
> - Schriftgrössen: `rem`
> - Paddings und Margin: `em`
> - Breiten: `em` oder Prozente

## Nummern

Manche Wertetypen akzeptieren Nummern, ohne eine Einheit. Ein Beispiel für eine solche einheitslose Eigenschaft wäre `opacity`. Diese akzeptiert
einen Wert zwischen `0` und `1`.

## Farben

Farben sind ein wenig komplexer, weshalb ich auf diese Unterseite verweise: [Farbmodelle](Farbmodelle.md)

Es gibt noch viele weitere Einheiten, auf die ich aber, bei den jeweiligen Properties eingehe.