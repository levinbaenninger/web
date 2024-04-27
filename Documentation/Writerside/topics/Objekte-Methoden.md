# Objekte - Methoden

<show-structure depth="2" />

Zunächst einmal müssen wir wissen, dass wir alle Arten von Daten in einem Objekt speichern können. Wir können Zahlen, Strings, Booleans, Arrays,
andere Objekte oder sogar Funktionen speichern. Unser Objekt könnte also etwa so aussehen:

````Javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  birthYear: 2007,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
  hasDriversLicense: false,

  calcAge: function (birthYear) {
    return 2023 - birthYear;
  },
};

console.log(levin.calcAge(2007)); // 16
````

Jetzt haben wir eine Methode für dieses Objekt erstellt. Aber das hat einen kleinen Schönheitsfehler, denn wir müssen das Jahr zweimal schreiben.
Einmal im Objekt selbst und einmal im Funktionsaufruf. Deshalb gibt uns JavaScript Zugriff auf eine spezielle Variable namens `this`. Mit dieser
Variable können wir unsere Funktion ändern:

````Javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  birthYear: 2007,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
  hasDriversLicense: false,

  calcAge: function () {
    return 2023 - this.birthYear;
  },
};

console.log(levin.calcAge()); // 16
````

Das `this`-Schlüsselwort ist davon abhängig, wo es aufgerufen wird. In unserem Fall wird es von einem Objekt aufgerufen und wir haben Zugriff auf alle
Eigenschaften des aufrufenden Objekts. Wenn wir es jedoch global aufrufen, erhalten wir das sogenannte `window`-Objekt zurück. In diesem Fenster
befinden sich alle unsere Methoden, wie `console.log()` oder `alert()`. Wir werden es in einem späteren Abschnitt genauer kennenlernen.

Aber unser Code hat immer noch ein kleines Problem, denn wir berechnen das Alter jedes Mal, wenn wir die Methode aufrufen. Das kann zu langen
Ladezeiten führen, da die Berechnungen länger dauern. Stattdessen können wir das Alter einmal berechnen und im Objekt speichern. Wenn wir es dann
später brauchen, können wir es einfach als Eigenschaft aus dem Objekt abrufen.

````Javascript
const levin = {
  firstName: 'Levin',
  lastName: 'Bänninger',
  birthYear: 2007,
  job: 'Student',
  friends: ['Jonas', 'Marie', 'Peter'],
  hasDriversLicense: false,

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

console.log(levin.calcAge()); // 16
console.log(levin.age); // 16
````

Hier erstellen wir eine neue Eigenschaft, indem wir das Schlüsselwort `this` verwenden, dann rufen wir die Methode einmal auf und danach können wir
einfach die neue Eigenschaft `age` verwenden.