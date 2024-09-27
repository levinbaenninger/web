# Attribute Directives

**Attribute Directives** interagieren mit dem element, auf dem Sie angewendet wurden.

## ngStyle

Mit `ngStyle` können wir den Style eines Elements dynamisch anpassen. Das Directive erwartet dabei ein JavaScript Objekt. Als CSS-Attribut nutzen wir wie gewohnt bspw. `background-color` und als Wert können wir beispielsweise ein Property unserer Komponente mitgeben.

<path>**app.component.html**</path>

```HTML
<div [ngStyle]="{'background-color': color}"></div>
```

<path>**app.component.ts**</path>

```Typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  color = 'red';

  constructor() {
    setTimeout(() => {
      this.color = 'blue';
    }, 1000);
  }
}
```

Hier sehen wir, dass wir `background-color` dynamisch verändern: Zuerst ist das `<div>` rot, nach einer Sekunde ist es blau.

> **Wichtig:** Wir müssen in unserem TypeScript-File das `CommonModule` importieren:
>
> ```Typescript
> import { CommonModule } from '@angular/common';
> ...
>
> @Component({
> ...
> imports: [RouterOutlet, CommonModule],
> ...
> })
> ```

{ style="warning" }

## ngClass

Mit `ngClass` können wir CSS-Klassen dynamisch einem Element hinzufügen bzw. wegnehmen. Auch diese Directive erwartet ein JavaScript Objekt mit dem Namen der Klasse und `true` oder `false`:

<path>**app.component.html**</path>

```HTML
<div [ngClass]="{'yellow': attachClass}"></div>
```

<path>**app.component.ts**</path>

```Typescript
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  color = 'red';
  attachClass = false;

  constructor() {
    setTimeout(() => {
      this.attachClass = true;
    }, 2000);
  }
}
```

Hier fügen wir die Klasse erst nach zwei Sekunden hinzu, da der Wert von `attachClass` nach zwei Sekunden auf `true` gesetzt werden.
