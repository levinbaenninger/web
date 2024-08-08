# Module

Mit Modulen können wir unseren Code in mehrere Dateien aufteilen, das macht das Projekt deutlich strukturierter und übersichtlicher. 

Um mit Modulen arbeite zu können müssen wir zuerst in unserem <path>tsconfig.json</path>-File die Option `module` auf `ES2022` setzen. Zusätzlich müssen wir in unserem HTML-File folgendes machen:

````HTML
<script type="module" src="script.js"></script>
````

Nun können wir beispielsweise unser Model für eine Invoice auslagern:

<path>./Models/Invoice.ts</path>

````Typescript
class Invoice {
  constructor(
    private client: string,
    private details: string,
    private amount: number
  ) { }

  format(): string {
    return `${this.client} owes CHF ${this.amount} for ${this.details}`;
  }
}
````

## Exportieren und Importieren

Um nun die Klasse unserer separaten Datei nutzen zu können, müssen wir diese erst exportieren und danach, je nachdem, wo wir die Klasse brauchen wieder importieren:

<path>./Models/Invoice.ts</path>

````Typescript
export class Invoice {
  ...
}
````

<path>./script.ts</path>

````Typescript
import { Invoice } from './Models/Invoice';

...
````