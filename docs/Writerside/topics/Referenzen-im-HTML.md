# Referenzen im Template

In Angular können wir eine Referenz zu einem anderen Element erstellen:

```HTML
<input type="text" #input (keyup)="0">
<p>{{ input.value }}</p>
```

Jetzt wird alles, was der User im Input-Feld schreibt unten in einem `<p>`-Tag ausgegeben. Wir benutzen `(keydown)="0"`, damit die Angular Change-Detection aktiviert wird.

Diese Referenz können wir natürlich auch im TypeScript-File nutzen, dafür müssen wir aber einen kleinen Trick anwenden:

```Typescript
export class SomeComponent {
    @ViewChild('input', {static: true}) input!: ElementRef;

    constructor() {
        setTimeout(() => {
            this.input.nativeElement.value = 'Wert überschrieben';
        }, 3000)
    }
}
```

Hier nutzen wir `@ViewChild`, um auf die Referenzen im Template zuzugreifen. Wenn wir aber auf die Referenzen in unserem Element zugreifen wollen, dann müssen wir `@ContentChild` nutzen:

```Typescript
...
@ContentChild('paragraph', { static: true }) paragraph!: ElementRef;

constructor() {
    setTimeout(() => {
      ...
      this.paragraph.nativeElement.textContent = 'Content was overwritten!';
    }, 3000);
  }
```
