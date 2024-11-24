# UI in Komponenten aufteilen

Wenn wir die UI in Komponenten aufteilen müssen wir eine Balance zwischen zu grossen und zu kleinen Komponenten finden. Komponenten sind zu **gross**, 
wenn sie …

- zu viele **Verantwortlichkeiten** haben
- viele [**Props**](Props.md) benötigen
- schwer **wiederverwendbar** sind
- komplex und schwer zu verstehen sind

Andererseits sind Komponenten zu **klein**, wenn …

- wir am Schluss **hunderte** Mini-Komponenten haben
- unsere Codebase **verwirrend** ist
- sie zu **abstrakt** sind

> Unsere Komponenten sind dann sowohl genug gross, als auch genug klein, wenn sie...
> - eine **logische Trennung** haben
> - **wiederverwendbar** sind
> - wenig **komplex** sind 

## Die vier Kriterien

Wir trennen dann unsere UI in weitere Komponenten auf, wenn eine der folgenden vier Kriterien erfüllt ist:

1. **Logische Trennung von Inhalt und Layout** &rarr; Enthält die Komponente Teile des Inhalts oder des Layouts, die **nicht zusammengehören**?
2. **Wiederverwendbarkeit** &rarr; Kann ein Teil der Komponente wiederverwendet werden? **Möchtest** oder **musst** du die Komponente wiederverwenden?
3. **Verantwortlichkeiten und Komplexität** &rarr; Macht die Komponente **zu viele Dinge**? Verlässt sich die Komponente auf **zu viele Props**? 
   Hat die Komponente **zu viele State-Variablen** und/oder Effects? Ist der Code, inklusive JSX, zu **komplex/verwirrend**?
4. **Persönlicher Coding-Style** &rarr; Bevorzugst du **kleine** Funktionen/Komponenten?

> **Tipp:** Beginne im Zweifelsfall mit einer relativ grossen Komponente und unterteile sie dann nach Bedarf in kleinere Komponenten

