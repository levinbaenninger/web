# Angular

Angular ist eine **Plattform oder ein Tool** mit welchem wir **Webapplikation** erstellen können. Angular ist ein **Framework**, welches Entwicklern hilft, **performante** und **zuverlässige** Applikation zu bauen. Das Framework wurde von **Google** entwickelt und wird auch heute ständig weiterentwickelt (Version 17.2.1 stand 14.02.2024).

Eine Angular-Applikation besteht aus:

- **Components** - Das, was der Nutzer **sehen** kann und womit er **interagieren** kann
- **Services** - Services kümmern sich um unsere **Daten**
- **Modules** - Für die **Kapselung** und die **Struktur** unserer Applikation

Eine Angular-Applikation ist eine sogenannte SPA (Single Page Application), d.h. dass die gesamte Applikation geladen wird. Wenn nun etwas geändert oder hinzugefügt wird, dann werden nur die Änderung aktualisiert. Mit diesem Verfahren reduzieren wir Ladezeiten extrem, da wir die Applikation nicht mehrere Male neu laden müssen. Angular stellt uns folgende Werkzeuge zur Verfügung:

- **Komponentenbasierte Architektur**: Angular-Anwendungen bestehen aus einer Baumstruktur von Komponenten. Jede Komponente hat eine klare Aufgabe und besteht aus einer Klasse (mit Daten und Logik), einem HTML-Template (für die Darstellung) und CSS-Stilen.
- **Modularität**: In Angular wird die App in Module unterteilt, wobei jedes Modul eine Zusammenstellung von verwandten Komponenten, Services und anderen Code-Teilen ist. Dies verbessert die Wiederverwendbarkeit und Wartbarkeit des Codes.
- **Two-Way-Data Binding**: Angular synchronisiert das Document Object Model (DOM) mit dem Zustand der App-Modelle durch ein Two-Way Data Binding, wodurch Entwickler weniger Code schreiben müssen, um das UI aktuell zu halten.
- **Dependency Injection**: Angular hat ein leistungsfähiges DI-System, das die Erstellung und Bereitstellung von Services erleichtert, welche geteilt und in verschiedene Komponenten und Module injiziert werden können.
- **Direktiven**: Angular verfügt über Direktiven, spezielle Marker im DOM, die dem Angular-Compiler signalisieren, eine bestimmte Verhaltensweise auf das HTML anzuwenden.
- **Templates**: Templates in Angular sind aus HTML mit Angular-spezifischen Elementen und Attributen, die die Anweisungen für den Angular-Compiler enthalten, um das Endbenutzer-UI zu rendern.
- **Routing**: Angular bietet einen Router an, der es ermöglicht, Navigationspfade und Ansichten zu definieren. Es ermöglicht die Navigation zwischen verschiedenen Komponenten in einer SPA, ohne dass die Seite neu geladen werden muss.
- **Form Handling**: Angular bietet Werkzeuge für das Erstellen und Arbeiten mit Formularen an, inklusive Validierung und Zustandsverwaltung.
- **HTTP Client**: Angular umfasst HTTP-Dienste, um mit einem Backend zu kommunizieren und beispielsweise Daten über REST-APIs zu senden und zu empfangen.

## Angular Versionen

AngularJS (Version 1.x) wurde 2010 von Google veröffentlicht. Angular, oft auch "Angular 2+" ist ein vollständig überarbeitetes Framework, dass viele Aspekte von AngularJS änderte und nue Konzepte einführte.

Ein grosser Unterschied zwischen AngularJS und Angular ist die Programmiersprache, JavaScript bei AngularJS, TypeScript bei Angular. Zudem folgte AngularJS einem MVC Ansatz, während Angular einer Komponentenstruktur folgen. Ausserdem ist Angular deutlich performanter.

Es gibt noch etliche weitere Unterschiede...
