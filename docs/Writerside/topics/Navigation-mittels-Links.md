# Navigation

## Links

Wir können zu unseren Seiten natürlich mithilfe von Links navigieren. Dazu nutzen wir das `[routerLink]`-Property vom `RouterModule`. Diesem Property geben wir einen Array mit dem `path` mit:

```HTML
 <div class="row">
    <div class="col-xs-12">
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['user']">User</a>
    </div>
  </div>
```

Da wir nicht `href` nutzen, sondern `routerLink` wird unsere Seite nicht jedes Mal neu geladen, es werden nur die Komponenten aktualisiert.

> Ohne `/` ist der Pfad relativ, mit `/` ist er absolut!

## Programmatisch

Um programmatisch zu navigieren, injizieren wir den Router per Dependency Injection und können darauf nun die `navigate()`-Methode nutzen. Diese erwartet ebenfalls einen Array und funktioniert genauso, wie es bei Links der Fall war.

```Typescript
constructor(private router: Router) {}

onNavigate() {
  this.router.navigate(['/']);
}
```
