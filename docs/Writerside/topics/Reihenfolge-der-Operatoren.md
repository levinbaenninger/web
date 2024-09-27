# Reihenfolge der Operatoren

<show-structure depth="2" />

Der Vorrang der Operatoren entscheidet darüber, welche Operationen zuerst ausgeführt werden, dann als zweites, ... MDN hat dazu eine sehr gute
Referenz:

[Reference for Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

Hier sehen wir, dass die Gruppierung die höchste Priorität hat `()`, danach folgen Funktionsaufrufe usw.

## Beispiel

```JavaScript
10 + 5 * 2; // 20 (10 + 5 * 2 = 10 + 10 = 20)
5 * 2 + 10 ** 3; // 1010 (5 * 2 + 10 ** 3 = 5 * 2 + 1000 = 10 + 1000 = 1010)
5 * (2 + 10) ** 3; // 8640 (5 * (2 + 10) ** 3 = 5 * 12 ** 3 = 5 * 1728 = 8640)
```
