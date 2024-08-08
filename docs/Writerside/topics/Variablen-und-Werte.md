# Variablen und Werte

<show-structure depth="2" />

Ein Wert ist ein Stück aus Daten. Es ist die grundlegendste Informationseinheit, die wir beim Programmieren haben. Zum Beispiel

```Javascript
"Jonas"
210
3.141
```

sind alle Werte. Wie Sie sehen, haben sie alle unterschiedliche Datentypen, sodass sie etwas anderes darstellen. `"Jonas"` zum Beispiel ist ein
String,
auf den wir im nächsten Abschnitt näher eingehen werden.

Aber das allein nützt uns nichts, weil wir es nirgendwo speichern. Dieses Problem wird mit Variablen gelöst, in denen wir einen Wert speichern, sodass
wir ihn immer wieder verwenden können. Variablen werden mit einem von drei Schlüsselwörtern erstellt: `let`, `const` oder `var`. Letzteres wird
heutzutage nicht mehr verwendet, es ist alt und nur noch für Legacy-Code da, aber es hat einige besondere Eigenschaften. Darauf werden wir später im
Kurs näher eingehen.

```JavaScript
let firstName = "Jonas";
```

Was wir hier getan haben, nennt man eine Variable **deklarieren**. Wenn wir nun den Wert verwenden wollen, referenzieren wir den **Variablennamen**

```JavaScript
console.log(firstName); // Jonas
```

Dies ist äußerst nützlich, wenn der Name in mehreren Fällen verwendet wird und wir ihn ändern wollen. Ohne Variablen müssten wir den alten Namen durch
den neuen ersetzen, aber mit der Variable müssen wir ihn nur einmal ersetzen:

```JavaScript
let firstName = "Matilda";
console.log(firstName); // Matilda
console.log(firstName); // Matilda
console.log(firstName); // Matilda
```