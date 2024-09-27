# Child Routes

Mit Child Routes können wir verschachtelte Routes anlegen, die in einer anderen Komponente geladen werden.

## Child Routes definieren

Zuerst müsssen wir eine neue Datei anlegen, bspw. <path>user.routes.ts</path>. Hier drin erstellen wir unsere Child Routes:

```Typescript
import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

export const userRoutes: Routes = [
  { path: 'detail', component: UserDetailComponent },
  { path: 'edit', component: UserEditComponent },
];
```

Wenn das gemacht ist, müssen wir wieder in unserem <path>app.routes.ts</path> eine Anpassung machen. Nämlich müssen wir sagen zu welchem `path` unsere neu erstellen Child Routes relativ sind:

```Typescript
export const userRoutes: Routes = [
  ...
  { path: 'user/:id', component: UserComponent, children: userRoutes },
  ...
];
```

Zuletzt müssen wir noch `<router-outlet>` auf unserer Seite definieren:

<path>**user.component.html**</path>

```HTML
<hr />
<router-outlet></router-outlet>
```

Nun können wir bspw. die Seite `.../user/2/detail` aufrufen.

## Navigieren

Um zu den einzelnen Child Routes zu navigieren nutzen wir die relativen Pfade:

```HTML
<a [routerLink]="['detail']">Detail</a>
<a [routerLink]="['edit']">Edit</a>
```
