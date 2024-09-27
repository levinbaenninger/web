# Data Binding

Mit **Data Binding** können wir **Daten** aus unserem TypeScript-Code in unserem **Template anzeigen lassen**. Mit Data Binding können wir über unseren Component Body **Daten** an das Component Template **schicken** und wir können auf **Events** mit Data Binding **reagieren**.

Um Data Binding zu ermöglichen, gibt es verschiedene **Methoden**:

**String Interpolation**:

```HTML
{{ Ausdruck, der in einen String resultiert }}
```

Mit String Interpolation können wir ein Property aus unserer Klasse im Template ausgeben.

**Property Binding**:

```HTML
<button [disabled]="Ausdruck, der in einen benötigten Property Type resultiert">
```

Mit Property Binding können wir bestimmten Code an ein HTML Element binden.

**Event Binding**:

```HTML
<button (click)="Ausdruck, der das Event behandelt">
```

Event Binding erlaubt es uns auf Events zu reagieren.

**Two-Way Binding**:

```HTML
<input [(ngModel)]="gebundene Datenquelle"
```

Mit Two-Way Data Binding können wir Daten einerseits anzeigen lassen, andererseits hinzufügen können.
