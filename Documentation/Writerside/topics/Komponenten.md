# Components

Eine Angular-Applikation besteht aus mehreren Komponenten. Alle Komponenten zusammen ergeben am Schluss unsere Applikation.

## Komponente erstellen

Um einen Component zu erstellen, nutzen wir die Angular CLI:

```Console
ng g component <name-of-component>
```

Nun sehen wir, dass im Verzeichnis <path>app</path> ein neuer Ordner mit dem Namen unseres Components erstellt wurde.

Ein Component hat immer einen sogenannten **Decorator**, ein Feature von TypeScript, und eine Klasse die wir exportieren. Mithilfe des Decorators weiss Angular schlussendlich, dass diese Klasse ein Component sein soll. Diesem Decorator geben wir ein Objekt mit, welches folgende Daten hat:

- `selector` - Name des HTML-Tags (unser Component), den wir in HTML verwenden können
- `standalone` - Ob dieser Component standalone ist oder nicht
- `imports` - Komponenten oder Funktionen, bspw. Router, die wir in diesem Component benötigen
- `templateUrl` - HTML-Datei unseres Components
- `styleUrl` - CSS/SCSS-Datei unseres Components

Beispiel für einen Standard-Component:

````Typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'components-databinding';
}
````

## Komponente rendern

Um nun unsere Komponente zu rendern, müssen wir den `selector` in <path>other.component.ts</path> finden und ihn zu unserem Parent-Component-Template (HTML) hinzufügen, bspw. `app.component.html`. Diesen Component müssen wir dann noch in unserer Parent-Component importieren.

**app.component.html**

````HTML
<h1>Root component</h1>
<app-other></app-other>
````

**app.component.ts**

````Typescript
import { OtherComponent } from './other/other.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OtherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
````

Nun wird auf unserer Seite der Inhalt von <path>other.component.html</path> gerendert. Mit dem Import-Statement können wir auch andere Module importieren, bspw. das `FormsModule`:

````Typescript
import { FormsModule } from @angular/forms;
@Component({
    ...
    imports: [RouterOutlet, FormsModule],
    ...
}})
````

## Inline Templates und Styles

Wenn wir eine Komponente möchten ohne externes HTML/SCSS File können wir folgendes bei der Erstellung des Components machen:

````Console
ng g c <name-of-component> -t -s
````

Nun erstellt das CLI uns nur die TypeScript-Datei, die wie folgt aussieht:

````Typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [],
  template: ` <p>Another component!</p> `,
  styles: `
    p {
      color: red;
    }
  `,
})
export class AnotherComponent {}
````

Wie wir sehen können wir hier direkt im TypeScript-File HTML und CSS schreiben.

## Styles und Components

Im Gegensatz zu Vanilla Webseiten werden Styles nur auf Elemente angewendet, die in dem Component sind. Wenn wir beispielsweise alle `<p>`-Tags rot stylen würden wir Folgendes machen:

<path><b>another.component.scss</b></path>

`````CSS
p {
    color: red;
}
`````

Diese Styles werden jedoch nicht global angewendet, sondern nur für alle `<p>`-Tags in diesem Component. Für globale Styles verwenden wir die <path>styles.scss</path> Datei im <path>src</path> Ordner bzw. die Datei die wir in <path>angular.json</path> angegeben haben.

## Das Directive `<ng-content>`

Mit `<ng-content>` können wir Code in die Component hineinschieben, den wir zwischen den Component schreiben. Am besten schauen wir uns dazu ein Beispiel an:

<path>**other.component.html**</path>

````HTML
<p>Die andere Komponente</p>
<app-another>
  <p>Ich bin jetzt in der anderen Komponente</p>
</app-another>
````

<path>**another.component.ts**</path>

````Typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  standalone: true,
  imports: [],
  template: `
    <h1>Another component!</h1>
    <hr />
    <ng-content></ng-content>
  `,
  styles: ``,
})
export class AnotherComponent {}
````

Hier nutzen wir `<ng-content>`, um den Code zwischen dem Tag in dem Component zu rendern.