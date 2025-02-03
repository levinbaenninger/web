---
icon: arrow-progress
---

# Kontrollstrukturen

## `if`/`else`-Anweisungen

Mit `if`/`else`-Anweisungen können wir in unserem Code Entscheidungen treffen. Die Syntax einer `if`/`else`-Anweisung sieht wie folgt aus:

```javascript
if (condition) {
  // run code if condition is true
} else {
  // run code if condition is false
}
```

{% hint style="info" %}
Der `else`-Block ist optional, du kannst einfach eine `if`-Anweisung ohne `else` schreiben
{% endhint %}

Wenn du auf mehr als eine Bedingung prüfen möchtest, kannst du das mit einer `else if`-Anweisung tun:

```javascript
if (condition) {
  // run code if condition is true
} else if (conditon) {
  // run code if first condition is false and second is true
} else {
  // run code if both conditions are false
}
```

{% hint style="info" %}
Du kannst so viele `else if`-Anweisungen hinzufügen, wie du willst
{% endhint %}

### Beispiel﻿ <a href="#beispiel" id="beispiel"></a>

Wir könnten z.B. prüfen, ob eine Person den Führerschein machen darf oder nicht. Wenn ja, wird das auf der Konsole ausgegeben, wenn nicht, wird die Anzahl der Jahre ausgegeben, die noch verbleiben, bis die Person den Führerschein machen kann.

```javascript
const age = 16;

if (age >= 18) {
  console.log('Levin can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Levin is too young. Wait another ${yearsLeft} years.`);
}
```

## Conditional Operator

Der ternäre/konditionale Operator ermöglicht es uns, etwas Ähnliches wie eine `if`/`else` Anweisung zu schreiben, aber alles in einer Zeile.

Die Syntax sieht wie folgt aus:

```javascript
condition ? exprIfTrue : exprIfFalse
```

{% hint style="info" %}
Da der konditionale Operator ein Ausdruck ist, können wir ihn auch in einer Variable speichern.
{% endhint %}

### Beispiel

```javascript
const age = 18;

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(`I like to drink ${drink}`);
```



## `switch`-Anweisung

Die "Switch"-Anweisung ist eine alternative Möglichkeit, um komplizierte `if`/`else`-Ladder zu schreiben. In einer `switch`-Anweisung vergleichen wir einen Wert mit mehreren verschiedenen Optionen. Die Syntax sieht wie folgt aus:

```javascript
switch (expression) {
  case expression1:
    // run code if expression is true
  case expression2:
    // run code if expression is true
  case expressionN:
    // run code if expression is true
  default:
    // run code if none of the above expressions are true
}
```

### Beispiel

```javascript
const day = 'monday';

switch (day) {
  case 'monday':
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}
```
