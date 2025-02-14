---
icon: plus
---

# Die create()-Methode

Die statische Methode `Object.create()` erstellt ein neues Objekt, wobei ein bestehendes Objekt als Prototyp für das neu erstellte Objekt verwendet wird.

```javascript
const PersonProto = {
  init(firstName, lastName, birthYear) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.birthYear = birthYear;
  },
  
  calcAge() {
    const currentYear = new Date().getFullYear();
    console.log(currentYear - this.birthYear);
  }
};

const steven = Object.create(PersonProto);
steven.init('Steven', 'Williams', 2002);
steven.calcAge();
```
