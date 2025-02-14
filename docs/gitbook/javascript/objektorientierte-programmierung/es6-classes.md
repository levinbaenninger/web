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

Statische Methoden sind nicht an ein Objekt geknüpft sondern an die Klasse. Das heisst wir können die Methode nur auf der Klasse aufrufen, nicht aber auf dem Objekt.

```javascript
class Person {
  ...
  
  static hey() {
    console.log('Hey there 👋');
  }

  ...
}

Person.hey();
```

## Vererbung

```javascript
class Student extends Person {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new Student('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
```

Wir nutzen also das `extends`-Keyword und `super` um den Konstruktor von `Person` aufzurufen.

## Encapsulation

Mit ES2022 sind private Felder und Methoden dazu gekommen. Um Felder als privat zu markieren nutzen wir ein `#`.

```javascript
class Account {
  locale = navigator.language;
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  get movements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
    }
  }
}
```

Um an die privaten Felder zu kommen nutzen wir einen Getter. Wir können aber auch öffentliche Felder definieren; diese funktionieren genau wie normale Properties.
