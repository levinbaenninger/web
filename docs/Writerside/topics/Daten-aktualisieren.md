# Daten aktualisieren

Um Daten zu aktualisieren, wenn wir neue Daten hinzufügen, alte Daten aktualisieren oder Daten löschen können wir den RxJs Operator `tap()` verwenden.

Dieser lauscht, ob es Änderungen gibt. Wenn es welche gibt, dann ruft es die `next()`-Methode auf einem Subject auf. So werden alle Observer, die dieses Subject abonniert haben benachrichtigt, dass Daten geändert wurden:

**<path>recipe.service.ts</path>**

```Typescript
recipeDeleted = new Subject<void>();

deleteRecipe(id: number): Observable<void> {
  return this.http
    .delete<void>(`${environment.baseApiUrl}/${this.url}/${id}`)
    .pipe(
      tap(() => this.recipeDeleted.next()),
      catchError((error) => {
        this.errorHandleService.handle(error);
        return throwError(() => error);
      })
    );
}
```

**<path>recipe-list.component.ts</path>**

```Typescript
this.recipeDeletedSubscription = this.recipeService.recipeDeleted.subscribe(
  () => {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }
};
```
