---
icon: table-tree
---

# Komponentenstrukturierung

Wenn wir die UI in Komponenten aufteilen müssen wir eine Balance zwischen zu grossen und zu kleinen Komponenten finden.&#x20;

{% hint style="warning" %}
Komponenten sind **zu gross**, wenn sie …

* zu viele **Verantwortlichkeiten** haben
* viele **Props** benötigen
* schwer **wiederverwendbar** sind
* komplex und schwer zu verstehen sind
{% endhint %}

***

{% hint style="danger" %}
Andererseits sind Komponenten **zu klein**, wenn …

* wir am Schluss **hunderte** Mini-Komponenten haben
* unsere Codebase **verwirrend** ist
* sie zu **abstrakt** sind
{% endhint %}

***

{% hint style="success" %}
Unsere Komponenten sind dann sowohl genug gross, als auch genug klein, wenn sie...

* eine **logische Trennung** haben
* **wiederverwendbar** sind
* wenig **komplex** sind
{% endhint %}

## Kriterien

Wir trennen unsere UI in weitere Komponenten auf, wenn eine der folgenden vier Kriterien gegeben ist:

1. **Logische Trennung von Inhalt und Layout** → Enthält die Komponente Teile des Inhalts oder des Layouts, die nicht zusammengehören?
2. **Wiederverwendbarkeit** → Kann ein Teil der Komponente wiederverwendet werden? Möchtest oder musst du die Komponente wiederverwenden?
3. **Verantwortlichkeiten und Komplexität** → Macht die Komponente zu viele Dinge? Verlässt sich die Komponente auf zu viele Props? Hat die Komponente zu viele State-Variablen und/oder Effects? Ist der Code, inklusive JSX, zu komplex/verwirrend?
4. **Persönlicher Coding-Style** → Bevorzugst du kleine Funktionen/Komponenten?

{% hint style="info" %}
**Tipp:** Beginne im Zweifelsfall mit einer relativ grossen Komponente und unterteile sie dann nach Bedarf in kleinere Komponenten
{% endhint %}

## Kategorien von Komponenten

Oftmals hilft es uns bei der Strukturierung von Komponenten auch zu verstehen welche Kategorien von Komponenten es gibt. Dabei fallen (fast) alle Komponenten in eine der drei folgenden Kategorien.

### Stateless / Presentation Components

* Kein State
* Können Props erhalten und _präsentieren_ die erhaltenen Daten und anderen Inhalt
* Normalerweise klein und wiederverwendbar

> Zum Beispiel: `Logo`-Komponente, `Result`-Komponente, `Movie`-Komponente, etc.

### Stateful Components

* State
* Können dennoch wiederverwendbar sein

> Zum Beispiel: `Search`-Komponente

### Structural Components

* Pages, Layout oder Screens unserer App
* Resultat von Komposition
* Sind gross und nicht wiederverwendbar

> Zum Beispiel: `App`-Komponente, `MovieList`-Komponente
