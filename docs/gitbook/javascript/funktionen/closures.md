---
icon: lambda
---

# Closures

Mit Closures können wir auf Variablen zugreifen, die eigentlich gar nicht mehr existieren sollten.

```javascript
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 passengers
booker(); // 2 passengers
booker(); // 3 passengers
```

Hier hat also die Funktion `booker()` Zugriff auf den aktuellen Status der Variable `passengerCount`, obwohl diese nur im äusseren Scope existiert.

<details>

<summary><strong>Closure</strong></summary>

* Eine Closure ist ein abgeschlossenes **Variable Environment** des Execution Contexts, in **dem eine Funktion erstellt wurde**, und zwar auch dann noch, wenn dieser Ausführungskontext _**nicht mehr besteht**_.
* Eine Closure ermöglicht einer Funktion den Zugriff auf alle Variablen **der übergeordneten Funktion**, auch _**nachdem**_ diese returned wurde. Die Funktion behält einen **Verweis** auf ihren äusseren Bereich, wodurch die Scope Chain über die gesamte Zeit _**erhalten bleibt**_.
* Eine Closure stellt sicher, dass eine Funktion nicht die Verbindung zu **Variablen verliert, die bei der Entstehung der Funktion vorhanden waren**.
* Eine Closure ist wie ein **Rucksack**, die eine Funktion mit sich herumträgt, wohin sie auch geht. Dieser Rucksack enthält **alle Variablen, die in der Umgebung vorhanden waren, in der die Funktion erstellt wurde**.

</details>

{% hint style="info" %}
Wir müssen keine Closures manuell erstellen, dies ist eine Javascript-Funktion, die automatisch geschieht. Wir können nicht einmal explizit auf abgeschlossene Variablen zugreifen. Ein Closure ist kein greifbares Javascript-Objekt
{% endhint %}

### Beispiele

```javascript
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // 46

const h = function () {
  const b = 777;

  f = function () {
    console.log(b * 2);
  };
};

// Re-assigning f function
h();
f(); // 1554
```
