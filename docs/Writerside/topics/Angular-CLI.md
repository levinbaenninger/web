# Angular CLI

Das [**Angular CLI**](https://angular.dev/tools/cli) ist ein Tool, welches wir während der Entwicklung ständig nutzen werden. Mit ihr können wir z.B.
eine neue App erstellen, eine Komponente hinzufügen, unseren Development-Server starten oder unsere Anwendung sogar deployen.

Um sie zu [**installieren**](https://angular.dev/tools/cli/setup-local#install-the-angular-cli), müssen wir folgendes auf der Konsole ausführen.

````Bash
npm install -g @angular/cli
````

Mit `ng v` können wir überprüfen, ob die Installation erfolgreich war.

## Angular-Projekt initialisieren

Um ein neues Angular-Projekt zu [**initialisieren**](https://angular.dev/tools/cli/setup-local#create-a-workspace-and-initial-application), müssen wir folgendes auf der Konsole ausführen:

````Bash
ng new [app-name]
````

Dabei ist der Name der App frei wählbar. Es gibt noch [**weitere Parameter**](https://angular.dev/cli/new), die wir diesem Kommando mitgeben 
können. Weiter wird das CLI uns verschieden Fragen fragen, z.B. über das Stylesheet-Format oder SSR.

Die genaue Bedeutung der einzelnen Files ist [**hier**](https://angular.dev/reference/configs/file-structure) dokumentiert.

## Angular-Applikation starten

Um unsere Angular-Applikation zu [**starten**](https://angular.dev/tools/cli/setup-local#run-the-application), müssen wir folgendes Kommando auf 
der Konsole ausführen:

````Bash
ng serve (-o)
````

`-o` ist ein Parameter und öffnet unsere Applikation direkt in unserem Standardbrowser. auch hier gibt es natürlich noch 
[**weitere Möglichkeiten**](https://angular.dev/cli/serve) diesen Command anzupassen.