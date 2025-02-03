---
icon: rotate-left
---

# Schleifen

## `for` Schleife

Schleifen sind ein grundlegender Aspekt jeder Programmiersprache, denn sie ermöglichen es uns, sich wiederholende Aufgaben zu automatisieren. Die Syntax sieht wie folgt aus:

```javascript
for (initialization; condition; afterthought) {
  statement
}
```

Das mag vielleicht ein bisschen einschüchternd wirken, aber wir werden jeden Schritt aufschlüsseln.

* `initialization`: Ein Ausdruck oder eine Variablendeklaration, die einmal ausgewertet wird, bevor die Schleife beginnt. Wird typischerweise verwendet, um eine Zählervariable zu initialisieren.
* `condition`: Ein Ausdruck, der vor jeder Schleifeniteration ausgewertet wird. Wenn dieser Ausdruck als wahr bewertet wird, wird die Anweisung ausgeführt. Wenn der Ausdruck falsch ist, wird die Schleife verlassen und zur ersten Anweisung nach dem `for`-Konstrukt übergegangen.
* `afterthought`: Ein Ausdruck, der am Ende jeder Schleifeniteration ausgewertet wird. Dies geschieht vor der nächsten Auswertung der Bedingung. Wird in der Regel verwendet, um die Zählervariable zu aktualisieren oder zu erhöhen.
* `statement`: Eine Anweisung, die so lange ausgeführt wird, wie die Bedingung als wahr bewertet wird.

{% tabs %}
{% tab title="JavaScript" %}
```javascript
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}
```
{% endtab %}

{% tab title="Output" %}
```bash
Lifting weights repetition 1 🏋️‍♀️
Lifting weights repetition 2 🏋️‍♀️
Lifting weights repetition 3 🏋️‍♀️
Lifting weights repetition 4 🏋️‍♀️
Lifting weights repetition 5 🏋️‍♀️
Lifting weights repetition 6 🏋️‍♀️
Lifting weights repetition 7 🏋️‍♀️
Lifting weights repetition 8 🏋️‍♀️
Lifting weights repetition 9 🏋️‍♀️
Lifting weights repetition 10 🏋️‍♀️
```
{% endtab %}
{% endtabs %}

Wir erstellen die Zählervariable `rep` und initialisieren sie mit dem Wert `1`. Die Schleife wird so lange ausgeführt, wie `rep` nicht grösser als zehn ist. Nach jeder Iteration wird `rep` um eins größer sein.
