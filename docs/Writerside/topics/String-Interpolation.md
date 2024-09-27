# String Interpolation

Mit String Interpolation können wir im Template die Properties unserer Klasse ausgeben. Beispiel:

<path>**databinding.component.ts**</path>

```Typescript
@Component({...})
export class DatabindingComponent {
  string = 'This is a string';
  number = 10;
}
```

<path>**databinding.component.html**</path>

```HTML
{{ string }} {{ number }}
```

> Wir können jeden primitiven Datentypen ausgeben, d.h. Numbers, Strings, Booleans, etc. nur bei Objekten müssen wir die Daten zuvor extrahieren.

## Die Power von Angular in Aktion

Wenn wir nun einen Constructor in unserer Klasse erstellen und dort die `setTimeout`-Funktion nutzen, können wir sehen, dass Angular, dass DOM automatisch anpassen kann:

```Typescript
constructor() {
    setTimeout(() => {
      this.string = 'The number changed →';
      this.number += 5;
    }, 3000);
  }
```

Das Feature heisst **Change Detection** und schaut, wann unsere Seite aktualisiert werden soll.
