---
icon: up
---

# Hoisting und Temporal Dead Zone (TDZ)

## Hoisting﻿ <a href="#hoisting" id="hoisting"></a>

<details>

<summary><strong>Hoisting</strong></summary>

Macht einige Arten von Variablen im Code zugänglich/verwendbar, bevor sie tatsächlich deklariert werden. "Variablen, die an den Anfang ihres Scopes gehoben werden".

</details>

Hinter den Kulissen geschieht nun Folgendes: Vor der Ausführung wird der Code nach Variablendeklarationen durchsucht und für jede Variable wird eine neue Eigenschaft im Variable Environment Object erstellt.

Jedoch funktioniert Hoisting nicht für alle Variablentypen gleich:

<table><thead><tr><th></th><th>Hoisted</th><th width="206">Initial Value</th><th>Scope</th></tr></thead><tbody><tr><td><code>function</code>-Deklarationen</td><td>✔️</td><td>Eigentliche Funktion</td><td>Block (Strict Mode: ansonsten Funktion)</td></tr><tr><td><code>var</code> Variablen</td><td>✔️</td><td><code>undefined</code></td><td>Funktion</td></tr><tr><td><code>let</code> und <code>const</code> Variablen</td><td>🚫</td><td><code>&#x3C;uninitialized></code>, TDZ</td><td>Block</td></tr><tr><td><code>function</code>-Ausdrücke und Pfeilfunktionen</td><td>🤷‍♂️ Abhängig davon, ob `var` oder `let`/`const` verwendet wird</td><td></td><td></td></tr></tbody></table>

## Temporal Dead Zone (TDZ)﻿ <a href="#temporal-dead-zone-tdz" id="temporal-dead-zone-tdz"></a>

<figure><img src="../../.gitbook/assets/image (5).png" alt=""><figcaption><p>Die Temporal Dead Zone</p></figcaption></figure>
