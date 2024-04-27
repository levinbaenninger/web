# Two-Way Binding

Mit Two-Way Binding können wir sowohl Daten erhalten, als auch ändern.

<path>**databinding.component.html**</path>

````HTML
...
<h4>Two-Way-Binding</h4>
<input type="text" [(ngModel)]="string">
````

Hier fügen wir in das `input`-Element die Daten vom `string`-Property ein. Falls der User über das Input-Feld das Property ändert, wird dieses sofort aktualisiert.