# Reactive / Data-Driven

## Formular erstellen

Um programmatisch ein Formular zu erstellen, müssen wir eine sogenannte `FormGroup` erstellen. Diese `FormGroup` besteht aus weiteren sogenannten `FormControl`, dort können wir mehrere Argumente mitgeben, bspw. Standardwerte, Validatoren, etc. Für jetzt beschränken wir uns auf den Standardwert:

````Typescript
reactiveForm!: FormGroup;

ngOnInit(): void {
  this.reactiveForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
}
````

### Objekt mit Template synchronisieren

Um nun unser erstelltes Objekt mit unserem Template zu synchronisieren, müssen wir einige Dinge anpassen. Zum einen müssen wir sagen, zu welchem Objekt das Formular gehört:

````HTML
<form [formGroup]="reactiveForm">...</form>
````

Zum anderen müssen wir jedem Eingabeelement den Namen geben, der mit dem Namen einer `FormControl` in unserem Objekt übereinstimmt:

````HTML
<input 
  ...
  formControlName="username"
/>
````

> **Wichtig:** Wir müssen das `ReactiveFormsModule` importieren!

{ style="warning" }

## Formular übermitteln

Für die Übermittelung machen wir Gebrauch vom `ngSubmit`-Directive und führen eine Methode aus:

````HTML
<form [formGroup]="reactiveForm" (ngSubmit)="onSubmit()">...</form>
````

Hier müssen wir das Objekt nicht übergeben, so wie beim Template-Driven Approach, da wir es ja bereits in unserem Code erstellt haben.

````Typescript
onSubmit() {
  console.log(this.reactiveForm);
}
````

## Validierungen

Im Gegensatz zum Template-Driven Ansatz fügen wir die Validierungen nicht im Template hinzu, sondern wir fügen sie hinzu, wenn wir unser Objekt initialisieren.

````Typescript
this.reactiveForm = new FormGroup({
  username: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]),
});
````

### Status überprüfen

Um den Status des Formulars zu überprüfen, nutzen wir die Properties des Objektes:

````HTML
<button type="submit" class="btn btn-primary mt-3" [disabled]="!reactiveForm.valid">
  Submit
</button>
````

Und um den Status eines Eingabeelements zu überprüfen, nutzen wir die `get()`-Methode auf unserem Objekt:

````HTML
<span
  *ngIf="
    reactiveForm.get('username')?.invalid &&
    reactiveForm.get('username')?.touched
  "
  class="small text-danger"
  >Username is required</span
>
````

## Gruppieren von Eingabeelementen

In unserem TypeScript-File erstellen wir einfach eine neue `FormGroup`:

````Typescript
this.reactiveForm = new FormGroup({
  userData: new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  }),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]),
});
````

In unserem Template müssen wir die `formGroupName` Direktive verwenden:

````HTML
<div formGroupName="userData">
  ...
</div>
````

Jedoch müssen wir aufpassen, wenn wir mit der `.get()`-Methode den Status unserer Elemente prüfen. Um das nun zu korrigieren, müssen wir der Methode einen Array mit dem gesamten Pfad mitgeben:

````HTML
<span
  *ngIf="
    reactiveForm.get(['userData', 'username'])?.invalid &&
    reactiveForm.get(['userData', 'username'])?.touched
  "
>
````

## Der FormBuilder

Der FormBuilder ist ein Objekt, welches bei der Erstellung von Formularen helfen soll. Wir injizieren ihn mit Dependency Injection:

````Typescript
constructor(private formbuilder: FormBuilder) {}

ngOnInit() {
  this.formbuilderForm = this.formbuilder.group({
    userData: this.formbuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }),
    password: ['', [Validators.required, Validators.minLength(8)]],
    hobbies: this.formbuilder.array([this.formbuilder.control('')]),
  });
}
````

Für weitere Informationen: [**Angular - FormBuilder Service**](https://angular.dev/guide/forms/reactive-forms#using-the-formbuilder-service-to-generate-controls)

### Dynamische Formulare 

Dynamische Formulare sind dann praktisch, wenn wir nicht wissen, wie viele Eingabeelemente haben sollen, bspw. für Zutaten eines Rezeptes oder Hobbies. Sie sind zwar auch ohne FormBuilder möglich, es ist jedoch deutlich umständlicher.

Weitere Informationen findest du hier: [**Angular - Dynamische Formulare**](https://angular.dev/guide/forms/reactive-forms#creating-dynamic-forms)

## Formular zurücksetzen

Wir können unser Formular mit der `reset()`-Methode zurücksetzen:

````Typescript
this.reactiveForm.reset();
````