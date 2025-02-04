---
icon: rotate-left
---

# Iteration über Arrays

Es gibt viele verschiedene Methoden, um in JavaScript über Arrays zu loopen. Dabei ist jede Methode für etwas anderes zuständig.

## `forEach()`

Die `forEach()`-Methode ruft für jedes Element eine Callback-Funktion auf.  In der Callback-Funktion haben wir Zugriff auf drei Parameter:

* `cur`: Das aktuelle Element
* `index`: Den Index des aktuellen Elements
* `arr`: Der gesamte Array

```javascript
movements.forEach((movement, index, array) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
```

{% hint style="warning" %}
Bei der `forEach()`-Methode können wir den Loop nicht abbrechen oder überspringen.
{% endhint %}

## `map()`

Die `map()`-Methode funktioniert ähnlich wie die [`forEach()`-Methode](iteration-uber-arrays.md#foreach). Sie geht durch jedes Element im Array durch und führt eine bestimmte Callback-Methode aus.

{% hint style="info" %}
Im Gegensatz zur genannten `forEach()`-Methode gibt uns `map()` einen neuen Array mit den Resultaten der angewandten Operation zurück.
{% endhint %}

Wie auch bei der `forEach()`-Methode haben wir Zugriff auf:

* `cur`: Das aktuelle Element
* `index`: Den Index des aktuellen Elements
* `arr`: Der gesamte Array

```javascript
const movementsInEuro = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsdConversionRate = 1.1;

const movementsInUsd = movementsInEuro.map(
  (movement) => movement * euroToUsdConversionRate
);
```

## `filter()`

Die `filter()`-Methode ist dafür da, um bestimmte Elemente aus einem Array herauszufiltern.

{% hint style="info" %}
`filter()` gibt uns einen neuen Array zurück, welcher den Anforderungen der Kondition entspricht.
{% endhint %}

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter((movement) => movement > 0);
const withdrawals = movements.filter((movement) => movement < 0);
```

## `reduce()`

Die `reduce()`-Methode "reduziert" alle Elemente eines Arrays auf einen Wert hinab.

```javascript
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, cur) => acc + cur, 0);
```

Die Methode erwartet zwei Argumente: Die Callback-Funktion und den Initialwert des `accumulators`, hier `acc`. Die Callbackmethode hat vier Argumente, die wir nutzen können:

* `acc`: Der Accumulator, welcher den gesamten Wert speichert
* `cur`: Das aktuelle Element
* `index`: Den Index des aktuellen Elements
* `arr`: Der gesamte Array

```javascript
const max = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);
```
