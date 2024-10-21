# Frameworks

## Single-Page Applications

Frontend-Frameworks erlauben es uns Singe-Page Applications zu erstellen, also Webapplikationen, die vollkommen auf den Client gerendert werden. 
Somit ist kein ständiger Datenverkehr zwischen dem Server und dem Client nötig, um bspw. auf eine Unterseite zu wechseln.

> Daten aus einer Datenbank müssen immer noch über eine API geladen werden. Dafür machen wir vom Client aus einen Request an den Server, welcher 
> uns die entsprechenden Daten zurückgibt.

Singe-Page Applications mit reinem JavaScript zu erstellen ist sehr mühsam, da unmengen an Daten geladen und stets aktuell gehalten werden müssen. 
Es gibt zwei Hauptprobleme mit JavaScript:

- Viel DOM-Manipulation und -Traversing (imperativ) &rarr; "Spaghetti Code" 🍝
- Daten (State) wird im DOM gespeichert und in der ganzen App geteilt &rarr; schwer zu verstehen und Bugs

## Warum gibt es Frontend-Frameworks?

Mit den verschiedenen Frontend-Frameworks werden obige Probleme gelöst und sie nehmen uns viel harte Arbeit ab. Beispiele sind:

- Angular
- React
- Svelte
- Vue
- ...

Alle Frameworks haben eine andere Herangehensweise, um die Probleme zu lösen, verfolgen jedoch alle dasselbe Ziel.