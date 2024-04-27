# Services

Mit Services können wir Aufgaben zentralisieren. Somit können wir wiederholenden Code vermeiden und haben so einen zentralen Ort für unsere Funktionen.

Wenn wir nun eine Funktion in einem Component brauchen, müssen wir nur den Service hinzufügen und die darin enthaltene Methode referenzieren.

Aufgaben von Services:

- Daten bereitstellen und speichern, sowie Interaktion mit Daten ermöglichen - Interaktion mit Server welcher auf Datenbank zugreift 
- Kommunikation zwischen Components/Klassen ermöglichen
- Zentralisierung von häufig genutzten Routinen

## Service erstellen

Wir können einen Service mit der Angular CLI erstellen:

````Console
ng g s <service-name>
````

Angular erstellt und dann folgenden Code:

````Typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {

}
````

In der Klasse können wir nun unsere Methoden definieren.

## Dependency Injection

Damit wir nun unseren erstellen Service in einem unserer Components nutzen können, benutzen wir Dependency Injection. Mit Dependency Injection erstellt unser Framework eine Instanz einer Klasse bzw. eines Services.

Wir als Entwickler teilen Angular im Constructor mit, dass wir Dependency Injection nutzen wollen:

````Typescript
constructor(argument: Service) {}
````

Wenn wir eine einzelne Instanz für eine Component wollen, dann müssen wir im `@Component`-Decorator das `providers`-Property mit dem Service befüllen:

````Typescript
@Component({
...
providers: [DataService, LogService],
...
})
````

Wenn wir das machen, haben wir eine einzelne Instanz für diese Komponente erstellt. Sollen aber Daten bspw. komponentenübergreifend geteilt werden, dann können wir das `providers`-Property einfach weglassen.

## Methoden aufrufen

Nachdem die Dependency Injection erfolgt ist, können wir die Methoden unseres Services aufrufen:

<path>**cmp-a.component.ts**</path>

````Typescript
constructor(
    private logService: LogService,
    private dataService: DataService
) {}

onLog(value: string) {
    this.logService.log(value);
}

onStore(value: string) {
  this.dataService.addData(value);
}

onGet() {
  this.items = this.dataService.getData();
}
````

<path>**log.service.ts**</path>

````Typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  log(message: string) {
    console.log(message);
  }
}
````

<path>**data.service.ts**</path>

````Typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: string[] = [];

  addData(data: string) {
    this.data.push(data);
  }

  getData() {
    return this.data;
  }
}
````


## Services in Services

Wir können auch andere Services in einem Service nutzen. Dafür müssen wir sichergehen, dass wir in den Services folgenden Decorator haben:

````Typescript
@Injectable({
    providedIn: 'root';
})
````

Jetzt können wir den Service nutzen:

````Typescript
private data: string[] = [];

constructor(private logService: LogService) {}

addData(data: string) {
  this.data.push(data);
  this.logService.log('Data added: ' + data);
}
````

## Kommunikation zwischen Components

Services ermöglichen es uns die ewig langen Ketten von `@Output` und `@Input` zu vermeiden. Wir können beispielsweise eine Nachricht an eine andere Komponente über den Service senden. Das funktioniert folgendermassen:

Zuerst müssen wir in unserem Service einen neuen `EventEmitter` erstellen:

````Typescript
pushedData = new EventEmitter<string>();
````

Danach definieren wir die Funktion, die die Daten weiterleiten soll:

````Typescript
pushData(data: string) {
  this.pushedData.emit(data);
}
````

Nun können wir in unserem Component, welcher die Daten empfangen soll eine Subscription erstellen:

````Typescript


ngOnInit() value = '';{
  this.dataService.pushedData.subscribe(
    (data: string) => (this.value = data)
  );
}
````

Jetzt haben wir den `pushedData`-EventEmitter abonniert. Falls dieser sich ändert, dann wird der Wert der vom EventEmitter versendet wird automatisch in unser `value`-Property gespeichert.