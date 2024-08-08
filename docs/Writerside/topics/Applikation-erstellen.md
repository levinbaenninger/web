# Applikation erstellen

Um nun unser erstes Angular-Projekt zu erstellen, nutzen wir erneut die Angular CLI. Nun geben wir im Terminal folgendes ein:

````Console
ng new <name-of-app> 
````

> Ein weiterer Parameter, den wir mitgeben können ist, folgender: `--skip-tests`, so werden keine Dateien für Unit-Tests erstellt
> 
> ````Console
> ng new <name-of-app> --skip-tests
> ````

{ style="warning" }

Wenn wir nun <shortcut>↵ Enter</shortcut> drücken, wird das Angular CLI uns einige Fragen bezüglich der Konfiguration der Applikation stellen. Nachdem wir alle Fragen beantwortet haben, wird in einem neuen Ordner mit dem Namen unserer App, die eigentliche Applikation erstellt.

## Applikation starten

Um unsere Angular-Applikation zu starten, nutzen wir folgenden Command:

````Console
ng serve -o
````
