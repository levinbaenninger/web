# Query Parameter

Query Parameter sind optionale Parameter, die wir einem Pfad mitgeben können.

## Übergabe

Diese können wir bei der `navigate()`-Methode des Routers als Objekt mitgeben:

```Typescript
this.router.navigate(['/'], {
  queryParams: { token: 100 },
});
```

Hier geben wir den Query Parameter `token` mit dem Wert `100` mit. Diesen Query Parameter sehen wir dann auch in der URL: `.../?token=100`. Wir können es aber auch bei Links mitgeben; dafür brauchen wir allerdings ein neues Attribut:

```HTML
<a [routerLink]="['']" [queryParams]="{ token: 500 }">Home</a>
```

## Extrahierung

Die Extrahierung funktioniert gleich, wie bei den normalen Routingparametern:

```Typescript
private subscription!: Subscription;
token!: string;

constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  // this.token = this.activatedRoute.snapshot.queryParams['token'];
  this.subscription = this.activatedRoute.queryParams.subscribe(
    (queryParams) => {
      this.token = queryParams['token'];
    }
  );
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
```
