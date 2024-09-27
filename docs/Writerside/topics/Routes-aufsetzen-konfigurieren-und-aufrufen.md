# Routes aufsetzen, konfigurieren und aufrufen

Um unsere Routes zu registrieren, gehen wir in das `app.routes.ts`-File. Dort können wir sagen, wie unser Segment heisst und welchen Component es anzeigen soll.

<path>**app.routes.config**</path>

```Typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user', component: UserComponent },
];
```

Dabei ist der `path` der leer ist der Standardpfad, sozusagen unser Index. Dieser zeigt uns unseren `HomeComponent` an. Dasselbe mit dem Pfas `user`, dort wird die `UserComponent` angezeigt und kann über `.../user` aufgerufen werden.

Jedoch müssen wir noch die Directive `<router-outlet>` in unsere Root-Component einfügen:

```HTML
<div class="container">
  <h1>Routing</h1>
  <router-outlet></router-outlet>
</div>
```
