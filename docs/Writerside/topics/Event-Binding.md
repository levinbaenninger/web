# Event Binding

Mit Event Binding können wir auf **DOM-Events reagieren**, bspw. `click`, `mouseover`, `keypress`, etc. Auch können wir Event-Binding dazu nutzen, um Properties aus einer **Child-Component an eine Parent-Component** zu übergeben (von innen nach aussen)

## Event aufnehmen

Um auf ein Event zu warten, geben wir dem Element, auf welches gewartet werden soll ein Event mit:

```HTML
<button (click)="onClick()">Klick mich</button>
```

Hier führen wir die Aktion `onClick()` aus, falls der Button gedrückt wird. Wir können aber auch direkt unseren TypeScript-Code zwischen die Hochkommas schreiben:

```HTML
<button (click)="attachClass = false">Klick mich</button>
```

## $event

Mit der Variable `$event` können wir unserer Funktion ein Objekt mit den Informationen des Events mitgeben:

<path>**databinding.component.html**</path>

```HTML
<button (click)="onClick($event)">Klick mich</button>
```

<path>**databinding.component.ts**</path>

```Typescript
onClick(event: Event) {
    console.log(event);
    alert('Clicked!');
}
```

## Eigene Events verarbeiten

In Angular können wir auch eigene Events erstellen, um beispielsweise auf Properties der Parent-Component zuzugreifen:

<path>**event-binding.component.html**</path>

```HTML
<div (click)="onClick()"></div>
```

<path>**event-binding.component.ts**</path>

```Typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styles: `div {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin-top: 10px;
  }`,
})
export class EventBindingComponent {
  @Output() clicked = new EventEmitter<string>();

  onClick() {
    this.clicked.emit('You have clicked the div!');
  }
}
```

Hier müssen wir den `Output`-Decorator nutzen, um von aussen aus auf das Event zu reagieren. Dann erstellen wir mit `new EvenEmitter<T>()` ein neues Event. `<T>` ist ein Generic, das heisst, dass wir hier sagen, welchen Typen wir übermitteln.

In der `onClick()` Funktion sagen wir, dass ein neues `clicked`-Event losgeschickt werden soll und als Argument übergeben wir den Wert, welcher unser Property nachher haben soll.

<path>**databinding.component.html**</path>

```HTML
<app-event-binding (clicked)="string = $event"></app-event-binding>
```

Hier sagen wir, dass wenn wir auf das Component klicken, soll das Property den Wert von `$event` erhalten.
