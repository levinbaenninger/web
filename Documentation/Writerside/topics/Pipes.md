# Pipes

Mit Pipes können wir Daten umformatieren. Dafür gibt es in Angular vorgefertigte Pipes, wie z.B. `uppercase`, man kann aber auch eigene Pipes erstellen.

## Pipes verwenden

Eine Pipe können wir nutzen, indem wir bspw. String Interpolation verwenden. Daran hängen wir dann die Pipe `|` an:

````HTML
<p>{{ text | uppercase }}</p>
<p>{{ date | date }}</p>
````

### Argumente übergeben

Bei manchen Pipes, bspw. bei `date` kann man auch noch Argumente übergeben, um die Formatierung an seine Wünsche anzupassen:

````HTML
<p>{{ date | date : "dd.MM.yyyy" }}</p>
<p>{{ text | slice : 5 : 9 | uppercase }}</p>
````

Wie man sieht, kann man auch mehrere Pipes miteinander kombinieren.

### Verfügbare Pipes

Alle verfügbaren Pipes findet man auf der offiziellen [**API Reference**](https://angular.dev/api)

## Eigene Pipes erstellen

Wir können auch eigene Pipes erstellen. Dafür können wir das Angular CLI verwenden:

````Console
ng c p <pipe-name>
````

Diese Pipe sieht wie folgt aus:

````Typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe-name',
  standalone: true
})
export class Filter2Pipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
````

In der `transform`-Methode ist unser Code für die Formatierung. Diese Methode hat immer zwei Parameter, `value` und `args`. Bei beiden können wir den Datentypen bestimmen und wir können mehrere Argumente aufnehmen und verarbeiten.

Mit dem `return`-Statement geben wir das schlussendlich formatierte zurück.

**Beispiel:**

````Typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: string[], args: string) {
    if (value.length === 0) {
      return value;
    }

    let resultArray = [];

    for (let item of value) {
      if (item.toLowerCase().match('^.*' + args.toLowerCase() + '.*$')) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }
}
````

Diese Pipe nimmt einen Array von Strings auf und überprüft, ob das Argument in den einzelnen Elementen vorkommt; diese Pipe ist also so etwas wie eine Suchfunktion.