---
icon: arrow-up-a-z
---

# Sortieren

Um Arrays in JavaScript zu sortieren, können wir die `sort()`-Funktion nutzen.&#x20;

Bei Strings werden die Elemente bereits alphabetisch geordnet. Bei Zahlen wird jedoch ebenfalls nach dem Alphabet geordnet.

```javascript
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
owners.sort();
```

Bei Zahlen müssen wir mit den beiden Parametern `a` und `b` in der Callback-Methode überprüfen, welcher Wert grösser bzw. kleiner ist. Dabei gilt es folgende Regel zu beachten:

* Wenn der return-Wert kleiner als `1` ist, wird so sortiert: `a`, `b`
* Wenn der return-Wert grösser als `1` ist, wird so sortiert: `b`, `a`

Das heisst, wenn wir aufsteigend sortieren wollen, dann müssen wir folgendes machen:

```javascript
movements.sort((a, b) => a - b);
```

Um absteigend zu sortieren müssen wir dementsprechend die Parameter einfach vertauschen.

```javascript
movements.sort((a, b) => b - a);
```

{% hint style="danger" %}
Die `sort()`-Methode verändert den Array!
{% endhint %}
