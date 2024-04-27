# Datentypen

<show-structure depth="2" />

In jeder Programmiersprache können Werte verschiedene Typen haben, je nach der Art der Daten, die sie enthalten sollen. Wir haben bereits Strings und
Zahlen gesehen.

In JavaScript ist ein Wert entweder ein Objekt oder ein Primitiv. Wir werden später alles über Objekte lernen und uns jetzt auf die sieben primitiven
Datentypen konzentrieren:

### Number

Fließkommazahlen → Wird für Dezimal- und Ganzzahlen verwendet

```JavaScript
let age = 23;
```

### String

Abfolge von Zeichen → Wird für Text verwendet

```JavaScript
let firstName = 'Jonas';
```

### Boolean

Logischer Typ, der nur `true` oder `false` sein kann → Wird für Entscheidungen verwendet

```JavaScript
let isFullAge = true;
```

### Undefined

Wert einer Variablen, die noch nicht definiert ist (leerer Wert)

```JavaScript
let children;
```

### Null

Bedeutet auch leerer Wert, mehr dazu später

```JavaScript
let creditCardNumber = null;
```

### Symbol

Wert, der eindeutig ist und nicht geändert werden kann, auch dazu später mehr.

### BigInt

Zahlentyp, der grössere Zahlen speichern kann, als Number

> JavaScript hat eine dynamische Typisierung: Wir müssen den Datentyp des in einer Variablen gespeicherten Wertes nicht manuell festlegen. Stattdessen
> werden die Datentypen automatisch bestimmt.

> Wir können den Datentyp einer Variablen ohne Probleme ändern.

{ style="note" }