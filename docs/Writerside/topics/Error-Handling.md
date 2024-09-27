# Error Handling

Gelegentlich kann es dazu kommen, das unsere API natürlich Fehler ausspuckt, wie `500` oder `404`. Diese Fehler können wir mit Angular natürlich abfangen.

Um in unserem Service mögliche Fehler abzufangen hängen wir an unseren Request eine `pipe` an. Mit der `pipe`-Methode können wir unser erhaltenes Observable weiterleiten.

```Typescript
getRecipes(): Observable<Recipe[]> {
  return this.http
    .get<Recipe[]>(`${environment.baseApiUrl}/${this.url}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorHandleService.handle(error);
        return throwError(() => error);
      })
    );
}
```

Darin rufen wir die den `catchError`-Operator von RxJs auf, mit ihm verhindern wir, dass wir einen Runtime-Error bekommen und unsere App abstürzt.

Als argument geben wir den erhaltenen HTTP-Status-Code mit. Darin nutzen wir den `errorHandleService`, welcher uns zu der entsprechenden Komponente navigiert, um die Fehlermeldung anzuzeigen:

**<path>error-handle.service.ts</path>**

```Typescript
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandleService {
  constructor(private router: Router) {}

  handle(error: HttpErrorResponse) {
    if (error.status === 404) {
      this.router.navigate(['/fehler/404']);
    } else if (error.status === 500 || error.status === 0) {
      this.router.navigate(['/fehler/500']);
    } else {
      this.router.navigate(['/fehler']);
    }
  }
}
```
