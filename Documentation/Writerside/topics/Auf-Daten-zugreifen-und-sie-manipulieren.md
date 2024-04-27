# Arrays - Datenzugriff und -modifikation

<show-structure depth="2" />

## Datenzugriff

Wir können auf einen Wert in einem Array mit dem **Index eines Wertes** zugreifen. Der Index ist die Nummer eines Elements, **er ist nullbasiert**.
Das erste Element hat den Index 0, das zweite hat den Index 1, das dritte hat den Index 2 und so weiter. Wir greifen auf den Wert mit der
**Klammer-Notation** zu.

````Javascript
console.log(friends[0]); // Michael
console.log(friends[2]); // Peter
````

### Die `length` Eigenschaft

Mit der `length`-Eigenschaft können wir herausfinden, wie lang ein Array ist. Wir greifen auf sie über die Punkt-Notation zu.

```JavaScript
console.log(friends.length); // 3
```

Mit diesem Wissen im Hinterkopf müssen wir nicht jedes Element zählen, um den letzten Index zu erhalten. Wir können einfach die Eigenschaft `length`
verwenden:

````Javascript
console.log(friends[friends.length - 1]); // Peter
````

## Datenmodifikation

Wir können den Index benutzen, um zu bestimmen, welchen Wert wir ersetzen möchten:

````Javascript
friends[2] = 'Jay';
console.log(friends); // ["Michael", "Steven", "Jay"]
````

> Ist es nicht seltsam, dass wir eine Konstante ändern können? Nein, denn nur primitive Datentypen können nicht geändert werden, aber ein Array ist
> kein
> primitiver Datentyp, also können wir es problemlos ändern.
> Aber es gibt etwas, das wir nicht tun können, nämlich das Array einem neuen Array zuweisen, weil wir dann seine Referenz ändern:
> <code-block lang="javascript">
>   friends = ['Bob', 'Alice']; // TypeError: Assignment to constant variable.
> </code-block>