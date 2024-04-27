# HTTP

Mit dem `HttpClient` von Angular können wir mit unserer Angular-App bspw. auf einen Server bzw. eine **API mit Datenbank-Anbindung zugreifen**. Dadurch können wir unsere **Daten persistent bspw. in einer Datenbank speichern** und diese zu einem späteren Zeitpunkt auch wieder **auslesen**.

## HttpClient

Wir greifen auf den `HttpClient` per Dependency Injection zu: 

````Typescript
constructor(private httpClient: HttpClient) {}
````

Vorher müssen wir aber in unserem `app.config.ts`, den `HttpClient` zur Verfügung stellen:

````Typescript
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
````

Mit dem injizierten Objekt können wir dann die verschiedenen typischen Anfragen, wie z.B. `GET`, `POST`, `PUT` und `DELETE`, ausführen:

````Typescript
return this.http.get<Recipe>(`${environment.baseApiUrl}/${this.url}/${id}`)
````

### Observables

Angular nutzt Observables, um asynchrone Aufgaben darzustellen, darunter eben auch den Zugriff auf das Internet. Ein Observable hat immer das gleiche Schema.

Wenn wir einen Request bspw. an einen Datenbankserver senden, nutzen wir ein Observable, was einfach ein Objekt ist, welches den Request beinhaltet, den Request schicken kann und mit welchem wir mit `subscribe()` auf die Antwort reagieren können. 

Nach einer Zeit wird eine Response geschickt und diese Response ruft die Callback-Funktion in der `subscribe()`-Methode auf.

## Requests

Mit Requests können wir Anfragen an unseren Server schicken. Diese geben uns ein Observable zurück, auf welches wir dann in unserer Komponente zugreifen können.

### GET-Request

Beim GET-Request holen wir Daten von unserem Server. Zuerst müssen wir in unserem Service eine Methode erstellen, die diese GET-Methode mittels `HttpClient` ausführt:

````Typescript
getRecipes(): Observable<Recipe[]> {
  return this.http.get<Recipe[]>(`${environment.baseApiUrl}/${this.url}`);
}
````

> Hier nutze ich noch sogenannte `environment`-Variablen, diese können wir mit `ng g environments` erstellen. 
> 
> Dieses Kommando erstellt uns im <path>src</path> einen neuen Ordner <path>environements</path>; darin befinden sich zwei Dateien: <path>environment.ts</path> und <path>environment.development.ts</path>. 
> 
> Diese können wir nutzen, um bspw. die Adressen von unserer API zwischen dem Production- und Development-Environment zu ändern:
> 
> ````Typescript
> export const environment = {
>   production: false,
>   baseApiUrl: 'https://localhost:7277/api',
> };
> ````
> 
> Bei Production-Environment, wären entsprechend die Properties anders.

Als Nächstes rufen wir die `subscribe`-Methode auf unserem Observable in unserer Komponente auf:

````Typescript
this.recipeService.getRecipes().subscribe((recipes) => {
  this.recipes = recipes;
});
````

Nun haben wir Daten vom Server erfolgreich in einem Array gespeichert.

### POST-Request

Mit einem POST-Request übermitteln wir Daten an unseren Server, so können wir beispielsweise einen neuen Nutzer erstellen. Die Vorgehensweise ist genau gleich, wie beim GET-Request:

````Typescript
addRecipe(recipe: Recipe): Observable<Recipe> {
  return this.http.post<Recipe>(`${environment.baseApiUrl}/${this.url}`, recipe)
}
````

Hier geben wir als Argument zusätzlich noch das Objekt mit, welches wir in der Datenbank erstellen möchten.

````Typescript
this.recipeService.addRecipe(newRecipe).subscribe((recipe) => {
  this.recipeForm.reset();
  this.router.navigate(['/rezepte', recipe.id]);
});
````

Wenn wir also eine Response bekommen, wird das Formular zurückgesetzt und der Router bringt uns zum neu erstellen Rezept.

### PUT-Request

Mit einem PUT-Request können wir bestehende Datensätze aktualisieren. Auch hier ist der Ablauf derselbe:

**<path>recipe.service.ts</path>**

````Typescript
updateRecipe(id: number, recipe: Recipe): Observable<void> {
  return this.http.put<void>(`${environment.baseApiUrl}/${this.url}/${id}`, recipe)
}
````

**<path>recipe-edit.component.ts</path>**

````Typescript
this.recipeService.updateRecipe(id, newRecipe).subscribe(() => {
  this.recipeForm.reset();
  this.router.navigate(['/rezepte', id]);
});
````

### DELETE-Request

Mit einem DELETE-Request können wir einen Datensatz in unserer Datenbank löschen:

**<path>recipe.service.ts</path>**

````Typescript
deleteRecipe(id: number): Observable<void> {
  return this.http.delete<void>(`${environment.baseApiUrl}/${this.url}/${id}`)
}
````

**<path>recipe-edit.component.ts</path>**

````Typescript
if (this.selectedRecipe?.id !== undefined) {
  this.recipeService.deleteRecipe(this.selectedRecipe.id).subscribe(() => {
    this.router.navigate(['/rezepte']);
  });    
}
````

