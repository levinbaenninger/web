# Verzweigungen - Boolean-Logik

<show-structure depth="2" />

<show-structure depth="2"></show-structure>

Die boolesche Logik ist ein Teilgebiet der Informatik, das wahre und falsche Werte verwendet, um komplexe logische Probleme zu lösen. Dazu verwendet
sie verschiedene logische Operatoren, um wahre und falsche Werte zu kombinieren, ähnlich wie wir arithmetische Operatoren verwenden, um numerische
Werte zu kombinieren.

Es gibt die Operatoren **AND**, **OR** und **NOT**. Die Funktionsweise dieser Operatoren lässt sich am besten anhand eines Beispiels und einiger
Tabellen veranschaulichen.

### Beispiel

**A:** Sarah hat einen Führerschein

**B:** Sarah hat eine gute Sehkraft

#### AND

"Sarah hat einen Führerschein **UND** gute Sehkraft"

<table style="both">
<tr><td>AND</td><td>TRUE</td><td>FALSE</td></tr>
<tr><td>TRUE</td><td>TRUE</td><td>FALSE</td></tr>
<tr><td>FALSE</td><td>FALSE</td><td>FALSE</td></tr>
</table>

Also müssen beide Aussagen wahr sein, damit die ganze Aussage wahr ist.

#### OR

"Sarah hat einen Führerschein **ODER** gutes Sehvermögen"

<table style="both"> 
<tr><td>OR</td><td>TRUE</td><td>FALSE</td></tr>
<tr><td>TRUE</td><td>TRUE</td><td>TRUE</td></tr>
<tr><td>FALSE</td><td>TRUE</td><td>FALSE</td></tr>
</table>

Mindestens eine Aussage muss also wahr sein.

#### NOT

Der **NOT** Operator kehrt einfach einen wahr/falsch Wert um.

Wenn zum Beispiel **A** wahr ist und wir ihn mit dem **NOT** Operator verbinden, wird er falsch zurückgeben.

### Code

Im JS-Code sehen die Operatoren wie folgt aus:

- **AND**: `&&`
- **OR**: `||`
- **NOT**: `!`

```Javascript
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // true
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

// Example
if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}

// We can add more than two conditions
const isTired = false; // C

// Example
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
```