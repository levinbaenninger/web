# Event Handling

In React können wir ähnlich wie bei HTML-Inline-Events das Event und die Funktion die ausgeführt werden soll deklarieren. 

````JavaScript
<button
  onClick={() => alert('Previous')}
  style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
>
  Previous
</button>
````

Jedes Mal, wenn auf den `<button>` geklickt wird, wird die Funktion darin also aufgerufen. Natürlich gibt es noch viele weitere Events, wie 
`onMouseEnter`, `onChange`, `onCopy`, etc.

> Oftmals wird der Code aber nicht direkt im Event-Handler geschrieben, sondern in eine Funktion innerhalb der Komponenten ausgelagert.

Um eine Funktion mit Parametern aufzurufen, können wir folgendes schreiben:

````Javascript
<button
  onClick={() => onPrevious(step)}
  style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
>
  Previous
</button>
````

Wir definieren also eine Funktion, die eine andere Funktion aufruft.