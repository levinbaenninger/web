# Types

Der Hauptunterschied zwischen JavaScript und TypeScript ist, dass TypeScript strikte Typen nutzt, während JavaScript dynamische Typen nutzt. Das heisst, dass man in TypeScript den Datentypen später nicht ändern kann.

## Variablen

Der Datentyp einer Variable kann auf zwei verschieden Arten angegeben werden, implizit und explizit:

````Typescript
// Implicit type declaration
let firstName = 'Levin'

// Explicit type declaration
let age: number;
let isLoggedIn: boolean;
````

Die Variable `firstName` muss immer ein String sein und die Variable `age` muss immer eine Zahl sein.

> **Beispiel**: Folgender Code würde uns einen Fehler zurückgeben:
> ````Typescript
> age = 'Thirteen';
> isLoggedIn = 1;
> ````

Jedoch können wir jederzeit den Wert ändern, dieser muss einfach vom selben Datentypen sein:

````Typescript
firstName = 'Kevin';
age = 12;
isLoggedIn = false;
````

{ style="warning" }

## Arrays

Auch bei Arrays können wir bestimmen, welchen Datentyp die Werte haben sollen:

````Typescript
let hobbies: string[] = [];
hobbies.push('Judo', 'Gym');
````

Wenn wir aber einen Array haben wollen, welche verschieden Datentypen enthält, dann können wir das wie folgt machen:

````Typescript
let mixed: (string | number | boolean)[] = [];
user.push(firstName, age, isLoggedIn);
````

Das nennt man **Union Types** und ist auch auf Variablen und andere Anwendungen anwendbar.

## Objekte

Eine weitere Möglichkeit von TypeScript ist die Deklaration von Objekten:

````Typescript
let personOne: object;
let personTwo: {};
````

Wie du siehst, gibt es zwei Arten von Objekten. Bei der ersten Variante kann die Variable auch ein Array werden, da ein Array eine Art von Objekt ist. Bei der letzteren Variante geben wir an, dass es sich zwingend um ein Object Literal handeln muss.

Des Weiteren können wir bestimmen, welche Properties das Objekt haben muss:

````Typescript
let person: {
    name: string,
    age: number,
    isLoggedIn: boolean
}

person = { name: 'Mario', age: 20, isLoggedIn = true}
````

> Wenn wir beim Objekt `person` ein Property hinzufügen würden oder weglassen würden, dann würden wir einen Fehler bekommen

{ style="warning" }