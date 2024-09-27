# Routingparameter

Mit Routingparameter können wir beispielsweise eine bestimmte ID eines Users mitgeben. Damit wir nicht für jeden User einen neuen `path` erstellen müssen, nutzen wir Parameter:

<path>**app.routes.ts**</path>

```Typescript
...
{ path: 'user/:id', component: UserComponent },
...
```

Wie du siehst legen wir einen Routingparameter mit `:` und irgendeinem Namen fest.

> Falls es andere `path`-Properties ebenfalls mit `user/...` gibt z.B. `details`, dann muss dieses vor demjenigen mit Routingparameter kommen!

Um nun zu einer Seite mit solch einem Routingparameter zu navigieren, können wir folgendes machen:

```HTML
<div class="row">
    <div class="col-xs-12">
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="['user', input.value]">User</a>
    </div>
  </div>
  <hr />
  <div class="row">
    <div class="col-xs-12">
      <input type="text" #input (input)="(0)" />
    </div>
  </div>
```

Hier gibt der User eine `id` ein und zu dieser Seite wird er dann geleitet.

## Routingparameter extrahieren

Um Parameter aus der Route zu extrahieren, gibt es zwei Wege:

```Typescript
id!: string;

constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.params['id'];
}
```

Mit diesem Weg kreieren wir einen Snapshot der aktuellen Route, wenn der Component initialisiert wird. Das kann jedoch ein Problem sein, wenn der Component gar nicht neu initialisiert wird, denn dann wir der Wert nicht aktualisiert. Deshalb gibt es einen weiteren Weg:

```Typescript
id!: string;
private subscription!: Subscription;

constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

ngOnInit(): void {
  this.subscription = this.activatedRoute.params.subscribe((params) => {
    this.id = params['id'];
  });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}
```

Hier erstellen wir, wenn die Komponente das erste Mal initialisiert wird eine Subscription mit welcher wir die Änderungen von `id` verfolgen. Wichtig ist, dass wir die Subscription wieder entnehmen, falls der Component zerstört wird, denn ansonsten kommt es zu einem Memory Leak und unser Speicher läuft voll.
