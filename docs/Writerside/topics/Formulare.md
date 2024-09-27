# Formulare

Formulare sind ein wichtiger Bestandteil jeder Web-Applikation. Angular erstellt für ein Formular eine sogenannte `FormGroup`, welche das HTML-Formular wiederspiegelt. Darüber hinaus ist die `FormGroup` mit dem HTML-Formular synchronisiert und es kümmert sich um die Validierung, Übermittlung, etc.

Dabei gibt es in Angular zwei verschiedene Ansätze:

- **Template-Driven** - Bei diesem Ansatz wird das Formular in HTML-Code erstellt und konfiguriert. Dann leitet Angular das Formular aus dem HTML-Code automatisch ab. Hier werden Formulardaten mittels `ngSubmit()` übergeben
- **Reactive** - Formular wird programmatisch konfiguriert und erstellt. Danach müssen wir Angular darauf hinweisen, das eigene Formular statt des hergeleiteten Formulars zu nutzen. Bei dieser Methode sind die Formulardaten immer im Code verfügbar.
