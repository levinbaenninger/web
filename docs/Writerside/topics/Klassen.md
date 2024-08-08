# Klassen

Klassen in TypeScript sind sehr ähnlich zu Klassen in JavaScript. 

## Initialisierung

In TypeScript müssen Properties immer mit einem Wert initialisiert werden. Das macht man am besten über einen Constructor:

````TypeScript
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }
}
````

## Methoden

Man erstellt eine Methode genau gleich, wie in JavaScript, ausser, dass man noch den `return`-Datentypen angeben kann:

````Typescript
class Invoice {
  ...

  format(): string {
    return `${this.client} owes CHF ${this.amount} for ${this.details}`;
  }
}
````

## Objekt erstellen

Objekte werden exakt wie in JavaScript erstellt:

````Typescript
const invoice1 = new Invoice('Mario', 'work on the website', 250);
const invoice2 = new Invoice('Luigi', 'painting the wall', 300);
````

## Klasse als Datentyp

Wir können die Klasse als Datentyp nutzen, um standardisierte Datenstrukturen zu erstellen:

````Typescript
let invoices: Invoice[] = [];
invoices.push(invoice1, invoice2);
````

## Zugriffsmodifikatoren

In TypeScript-Klassen sind Attribute und Methoden automatisch `public`; man kann also von überall auf sie zugreifen und sie modifizieren. Wir können die Felder aber auch auf `private` setzen:

````Typescript
class Invoice {
  private client: string;
  private details: string;
  private amount: number;
    
  ...
}
````

Wir können aber auch sagen, dass ein Attribut `readonly` sein soll, dadurch kann man das Attribut nicht mehr bearbeiten.