# Components und Templates

Komponenten bieten eine Struktur, um das Projekt in leicht verständliche Teile mit klaren Verantwortlichkeiten zu gliedern, damit der Code wartbar 
und skalierbar ist.

## Eine Komponente definieren

Jede Komponente hat die folgenden Kerneigenschaften:
1. Ein `@Component` [**Decorator**](https://www.typescriptlang.org/docs/handbook/decorators.html) der einige Konfigurationen enthält
2. Ein HTML-Template, das steuert, was im DOM gerendert wird
3. Einen [**CSS-Selektor**](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors), der definiert, wie die Komponente in HTML verwendet wird
4. Eine TypeScript-Klasse mit Verhaltensweisen wie der Verwaltung von Zuständen, der Verarbeitung von Benutzereingaben oder dem Abrufen von Daten 
   von einem Server.

````Typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'easy-task';
}
````

Im Decorator legen wir also viele verschiedene Metadaten fest:

- **Selector:** Mit dem Selector bestimmen wir, wie wir in anderen HTML-Templates unsere Komponente laden, z.B. `<app-root />`
- **Standalone:** Mit Standalone-Komponenten werden andere Komponenten, Directives, Pipes, etc. direkt in die Komponente geladen, anstatt über 
  [**Modules**](https://angular.dev/guide/ngmodules).
- **Imports:** Hier importieren wir alle unsere nötigen Dependencies, die wir in unserer Komponente brauchen
- **Template-URL**: Ein Link zu unserem HTML-File der Komponente, kann aber auch inline sein mit `template: ...`
- **Style-URL**: Ein Link zu unserem CSS/SCSS-File der Komponente, kann aber auch inline sein mit `styles: ...`

## Komponente nutzen

Die Komponente können wir nun in anderen Komponenten nuten. Dafür importieren wir die Komponente und nutzen sie im Template mit dem Namen des 
Selectors.

````Typescript
import {TodoListItem} from './todo-list-item.component.ts';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoListItem],
  template: `
    <ul>
      <app-todo-list-item />
    </ul>
  `,
})
export class TodoList {}
````