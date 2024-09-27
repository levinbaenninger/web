# Interfaces

Interfaces sind ein neues Feature von TypeScript gegenüber JavaScript. Interfaces erlauben es uns, eine bestimmte Struktur von bspw. Personen, Rechnungen, Rezepten, etc. zu erzwingen. Mit einem Interface geben wir an, welche Attribute, Methoden, welche Rückgabetypen, usw. eine Klasse bzw. ein Objekt haben soll.

Im Gegensatz zu einer Klasse können wir mit einem Interface keine Objekte erstellen, sondern geben nur die Grundstruktur vor; so hat z.B. eine Methode keinen Funktionskörper.

```Typescript
interface Person {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
```

## Objekte aus Interfaces

Aus diesem Interface können wir nun ein Objekt erstellen:

```Typescript
const levin: Person = {
  name: 'Levin Baenninger',
  age: 16,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log(`I spent ${amount}`);
    return amount;
  },
};
```

Dadurch, dass wir sagen, dass das Objekt `levin` vom Typ `Person` sein soll, muss dieses Objekt alle Attribute und Methoden mit denselben Parametern und Rückgabewerten haben. Wenn ein Feld fehlt oder eines hinzugefügt wird, dann ergibt das ein Fehler.

## Klassen aus Interfaces

Mit Interfaces können wir sichergehen, dass eine Klasse bestimmte Attribute und Methoden hat:

<path>./Interfaces/Formatter.ts</path>

```Typescript
export interface Formatter {
  format(): string;
}
```

Hier sagen wir, dass wenn eine Klasse das Interface `Formatter` implementiert, dass diese Klasse dann die Methode `format()` mit dem Rückgabetypen `string` haben muss.

<path>./Models/Invoice.ts</path>

```Typescript
import { Formatter } from "../Interfaces/Formatter";

export class Invoice implements Formatter {
  constructor(private client: string, private details: string, private amount: number) {}

  format(): string {
    return `${this.client} owes CHF ${this.amount} for ${this.details}`;
  }
}
```

Hier importieren wir zuerst das Interface `Formatter` und implementieren es dann.
