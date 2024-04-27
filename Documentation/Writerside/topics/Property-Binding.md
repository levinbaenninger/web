# Property Binding

Mit Property Binding können wir Properties eines **Parent-Components an ein Child-Component** übergeben (von aussen nach innen). Property Binding ist sowohl auf **DOM Properties**, als auch auf **Directive Properties** und **Component Properties** verfügbar.

**Beispiele:**

````HTML
<p [innerText]="firstName + ' ' + lastName"></p>
<div>
  <label>Your favorite number: </label>
  <input type="text" [value]="number" />
</div>
<div [ngClass]="{ 'red-border': attachClass }" [ngStyle]="{'background-color'}: backgroundColor">Text</div>
````

Bei letzterem müssen wir noch ein Modul in unser TypeScript-File importieren:

<path>**databinding.component.ts**</path>

````Typescript
import { CommonModule } from '@angular/common';

@Component({
  ...
  imports: [CommonModule],
  ...
})
export class DatabindingComponent {
  ...
  attachClass = false;
  backgroundColor = 'lightblue';
  
  constructor() {
    setTimeout(() => {
      ...
      this.attachClass = true;
    }, 3000);
  }
}
````

Natürlich müssen wir auch die Klasse in unserer <path>.scss</path> hinzufügen. Nun wird die Klasse `red-border` nach drei Sekunden zu unserem `<div>` hinzugefügt, da sich dann der Wert von `attachClass` auf `true` ändert.

## Eigene Properties setzen

Um seine eigenen Properties von aussen aus zu setzen, können wir folgendes machen:

<path>**property-binding.component.ts**</path>

````Typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styles: ``,
})
export class PropertyBindingComponent {
  @Input() name!: string;
}
````

Wichtig ist hierbei das `@Input`, damit wir das Property von aussen setzen können, denn standardmässig ist das nicht der Fall.

<path>**databinding.component.html**</path>

````HTML
...

<app-property-binding [name]="'Levin'"></app-property-binding>
````

Hier geben wir unserem `property-binding`-Component das selbsterstelle Property `name` mit und setzen einen Wert.