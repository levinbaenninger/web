# Structural Directives

Structural Directives interagieren mit dem aktuellen ViewContainer des elements auf welches sie angewendet werden. Sie verändern die Struktur des DOM.

## *ngIf

Mit `*ngIf` können wir bestimmen, ob ein bestimmtes Element sichtbar sein soll oder nicht. Es erwartet als Wert einen Boolean.

<path>**app.component.html**</path>

````HTML
<p *ngIf="switch">Nicht immer zu sehen</p>
<button (click)="switch = !switch" class="btn btn-primary">Switch</button>
````

<path>**app.component.ts**</path>

````Typescript
@Component({...})
export class AppComponent {
  ...
  switch = true;
  ...
  }
}

````

Mit dem Button wechseln wir den Wert des Properties `switch`. Nun wird je nachdem, ob `switch` `true` oder `false` ist, das `<p>`-Element angezeigt oder nicht.

## *ngFor

Mit `*ngFor` können wir durch ein Iterable iterieren und so jedes Element ausgeben. Das ist vor allem nützlich um Listen zu erstellen.

<path>**app.component.html**</path>

````HTML
<ul>
  <li *ngFor="let element of elements; let i = index">
    {{ element }} - (Index: {{ i }})
  </li>
</ul>
````

<path>**app.component.ts**</path>

````Typescript
elements = [1, 2, 3, 4, 5];
````

Hier wird durch das Array `elements` iteriert. Zusätzlich deklarieren wir noch den Index, dies ist aber auf keinen Fall obligatorisch. Danach geben wir die zwei erstellten Variablen mittels String Interpolation aus.

## ngSwitch

`ngSwitch` ist eine alternative Variante für `*ngIf`.

<path>**app.component.html**</path>

````HTML
<div [ngSwitch]="value">
    <p *ngSwitchCase="10">10</p>
    <p *ngSwitchCase="100">100</p>
    <p *ngSwitchDefault>Irgendwas</p>
</div>
````

<path>**app.component.ts**</path>

````Typescript
value = 10;

  constructor() {
    setTimeout(() => {
      this.value = 100;
    }, 1000);

    setTimeout(() => {
      this.value = 1000;
    }, 2000);
  }
````

Wenn wir die Seite neu laden wird `10` angezeigt, nach einer Sekunde `100` und nach zwei Sekunden wird `Irgendwas` angezeigt.