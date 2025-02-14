---
icon: brackets-curly
---

# Constructor Functions

Constuctor Functions sind eine Technik, um Objekte von einer Funktion zu erstellen. Constructor Functions sollen traditionelle Klassen simulieren.

<pre class="language-javascript"><code class="lang-javascript">const Person = function (firstname, lastname, birthYear) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthYear = birthYear;
};

const levin = new Person('Levin', 'Bänninger', 2007);
const matilda = new Person('Matilda', 'Johnson', 2009);
const jay = new Person('Jay', 'Smith', 2010);
<a data-footnote-ref href="#user-content-fn-1">console.log(levin, matilda, jay);</a>
</code></pre>

1. Neues `{}` wird erstellt
2. Funktion wird aufgerufen, `this` = `{}`
3. `{}` wird mit dem Prototype verknüpft
4. Funktion gibt neues Objekt automatisch zurück

{% hint style="danger" %}
Man sollte **keine Methoden** bei Constructor Functions definieren!
{% endhint %}

## `instanceof`

Mit `instanceof` können wir überprüfen ob ein Objekt eine Instanz einer bestimmten Constructor Function ist.

<pre class="language-javascript"><code class="lang-javascript">const john = 'John';

<a data-footnote-ref href="#user-content-fn-2">console.log(levin instanceof Person);</a>
<a data-footnote-ref href="#user-content-fn-3">console.log(john instanceof Person);</a>
</code></pre>

## Prototype

Wir können uns nun den Prototype zu nutze machen, indem wir darin die Methoden und gemeinsame Properties für unsere Constructor Function definieren.

<pre class="language-javascript"><code class="lang-javascript">Person.prototype.calcAge = function () {
  const currentYear = new Date().getFullYear();
  console.log(currentYear - this.birthYear);
};

<a data-footnote-ref href="#user-content-fn-4">levin.calcAge();</a>
<a data-footnote-ref href="#user-content-fn-5">matilda.calcAge();</a>

Person.prototype.species = 'Homo sapiens';
<a data-footnote-ref href="#user-content-fn-6">console.log(levin.species, jay.species);</a>
</code></pre>

### `__proto__`

Mit diesem Property können wir nachschauen, welchen Prototype eine Instanz hat.

```javascript
console.log(levin.__proto__);
```

## Statische Methoden

Statische Methoden sind nicht an ein Objekt geknüpft sondern an den Constructor. Das heisst wir können die Methode nur auf dem Constructor aufrufen, nicht aber auf dem Objekt.

<pre class="language-javascript"><code class="lang-javascript">Person.hey = function () {
  console.log('Hey there 👋');
};

<a data-footnote-ref href="#user-content-fn-7">Person.hey();</a>
</code></pre>

## Vererbung

```javascript
const Student = function (firstName, lastName, birthYear, course) {
  Person.call(this, firstName, lastName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstname} and I study ${this.course}`);
};

const mike = new Student('Mike', 'Johnson', 2010, 'Computer Science');
mike.introduce();
mike.calcAge();
```

Wir setzen den Protoype von Student also auf den Prototype von Person. So können wir alle Methoden vom Person Prototype ebenfalls nutzen.

[^1]: `Person {firstname: 'Levin', lastname: 'Bänninger', birthYear: 2007}`&#x20;



    `Person {firstname: 'Matilda', lastname: 'Johnson', birthYear: 2009}`&#x20;

    \
    `Person {firstname: 'Jay', lastname: 'Smith', birthYear: 2010}`

[^2]: `true`

[^3]: `false`

[^4]: `18`

[^5]: `16`

[^6]: Homo Sapiens Homo Sapiens

[^7]: Hey there 👋
