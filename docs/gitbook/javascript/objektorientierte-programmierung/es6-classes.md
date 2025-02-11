---
icon: diamonds-4
---

# ES6 Classes

ES6 Klassen funktionieren genau wie Constructor Function nur mit einer schöneren Syntax.

```javascript
class Person {
  constructor(firstname, lastname, birthYear) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthYear = birthYear;
  }

  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }
}

const jessica = new Person('Jessica', 'Doe', 1990);
```

## Getters and Setters

Mit Getters können wir berechnbare Werte nach aussen freigeben, ohne dafür eine Methode zu schreiben. Mit Setters können wir bestimmte Werte setzen, z.B. einem Array ein neues Element hinzufügen.

```javascript
class Person {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  get fullName() {
    return this._fullName;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log('Please provide a full name with a first and last name.');
  }
}

const jessica = new Person('Jessica Davies', 'Doe', 1990);
jessica.fullName = 'Kevin Teaser';
```

Das Beispiel mit dem `fullName` ist dabei ein wichtiges Pattern, da wir so ein Property setzen können, das bereits im Constructor vorhanden ist.

{% hint style="info" %}
Setter sind praktisch für die Datenvalidierung
{% endhint %}

## Statische Methoden
