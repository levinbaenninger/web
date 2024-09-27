# Hoisting und die TDZ

<show-structure depth="2" />

## Hoisting

**Hoisting**: Macht einige Arten von Variablen im Code zugänglich/verwendbar, bevor sie tatsächlich deklariert werden. "Variablen, die an den Anfang
ihres Scopes gehoben werden".

Hinter den Kulissen geschieht nun Folgendes: **Vor der Ausführung** wird der Code nach Variablendeklarationen durchsucht und für jede Variable wird
eine neue Eigenschaft im **Variable Environment Object** erstellt.

Jedoch funktioniert Hoisting nicht für alle Variablentypen gleich:

<table>
<tr><td> </td><td>HOISTED</td><td>INITIAL VALUE</td><td>SCOPE</td></tr>
<tr><td><code>function</code>-Deklarationen</td><td>✔️</td><td>Eigentliche Funktion</td><td>Block (Strict Mode: ansonsten Funktion)</td></tr>
<tr><td><code>var</code> Variablen</td><td>✔️</td><td><code>undefined</code></td><td>Funktion</td></tr>
<tr><td><code>let</code> und <code>const</code> Variablen</td><td>🚫</td><td><code>&lt;uninitialized&gt;</code>, TDZ</td><td>Block</td></tr>
<tr><td><code>function</code>-Ausdrücke und Pfeilfunktionen</td><td colspan="3">🤷‍♂️ Abhängig davon, ob `var` oder `let`/`const` verwendet wird</td></tr>
</table>

## Temporal Dead Zone (TDZ)

![](tdz.png) { width="500" thumbnail="true" }

## Eine weitere Besonderheit von `var`

Wenn wir eine Variable mit `var` im globalen Kontext erstellen, wird eine Eigenschaft mit dem Namen der Variable zum `window` Objekt hinzugefügt.
