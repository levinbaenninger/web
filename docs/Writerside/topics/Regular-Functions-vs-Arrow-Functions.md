# Reguläre Funktionen vs. Pfeilfunktionen

<show-structure depth="2" />

Wie wir bereits gesehen haben, gibt eine Pfeilfunktion das `window`-Objekt zurück, wenn sie in einem globalen Objekt aufgerufen wird, wenn wir
die `this`-Variable verwenden.

Das kann zu Problemen führen. Deshalb solltest du nie oder nur selten Pfeilfunktionen verwenden, wenn du Methoden für Objekte deklarierst.

````Javascript
const levin = {
  firstName: 'Levin',
  year: 2017,

  // Regular function
  calcAge: function() {
    console.log(2037 - this.year); // 20
  },

  // Arrow function
  greet: () => console.log(`Hey ${this.firstName}`) // Hey undefined
};

levin.calcAge();
levin.greet();
````

Es gibt jedoch einen Anwendungsfall für Pfeilfunktionen in Objekten: Wenn wir eine Funktion in einer Methode haben und auf Eigenschaften des Objekts
in dieser Funktion zugreifen müssen. In diesem Fall können wir zwei Dinge tun:

- In der Methode eine Variable "self" zuweisen und auf "this" setzen
- Eine Pfeilfunktion verwenden, weil sie das übergeordnete "this" verwendet

````Javascript
const levin = {
  firstName: 'Levin',
  year: 2017,

  // Regular function
  calcAge: function () {
    console.log(2037 - this.year); // 20

    // Solution 1
    const self = this; // self or that
    const isMillenial = function () {
      console.log(self); // levin object
      console.log(self.year >= 1981 && self.year <= 1996); // false
    };
    isMillenial();

    // Solution 2
    const isMillenial2 = () => {
      console.log(this); // levin object
      console.log(this.year >= 1981 && this.year <= 1996); // false
    };
    isMillenial2();
  },
};
````