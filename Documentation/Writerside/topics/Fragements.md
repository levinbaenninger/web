# Fragements

Fragments sind der Teil in der URL mit dem `#`. Das sorgt dafür, dass auf dieser Seite direkt zu einem Objekt mit der ID gesprungen wird.

## Übergabe

Die Übergabe über die `navigate()`-Methode funktioniert so: 

````Typescript
this.router.navigate(['/'], {
  fragment: 'anchor',
});
````

Um ein Fragement über den Link zu übergeben, brauchen wir erneut ein neues Attribut:

````Typescript
<a [routerLink]="['']" [fragment]="'anchor'">Home</a>
````

## Extrahierung

Die Extrahierung funktioniert genau gleich, wie bei Query Parameter:

````Typescript
private subscriptionFragment!: Subscription;
fragment!: string | null;

constructor(private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  this.subscriptionFragment = this.activatedRoute.fragment.subscribe(
    (fragment) => {
      this.fragment = fragment;
    }
  );
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
  this.subscriptionFragment.unsubscribe();
}
````