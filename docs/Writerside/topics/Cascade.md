# Cascade

<show-structure depth="2" />

Die Kaskade ist ein sehr wichtiger Bestandteil von CSS. Simpel gesagt heisst es, dass der Ursprung, die Schicht und die Reihenfolge eine Rolle bei
Konflikten spielt.

Wenn zwei Regeln von derselben Schicht sind, dann ist die Reihenfolge ausschlaggebend, welche Regel nun angewendet wird.

```CSS
h1 {
  color: red;
}

h1 {
  color: blue;
}
```

In diesem Fall wird die Überschrift blau sein, da diese Regel als letztes greift.