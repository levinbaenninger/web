# JavaScript Engine und Runtime

<show-structure depth="2" />

## Die JavaScript Engine

Die JavaScript-Engine ist das Programm, das unseren Code **ausführt**. Jeder Browser hat seine eigene Engine, aber die bekannteste ist die
**V8 Engine** von den Chromium-Browsern. Aber wie funktioniert die Engine?

Sie hat einen Call Stack und einen Heap. Auf dem Call Stack wird unser gesamter Code unter Verwendung des sogenannten Ausführungskontexts ausgeführt,
während auf dem Heap unsere Objekte gespeichert werden.

![](engine.png) { width="300" thumbnail="true" }

### Kompilation vs. Interpretation

Ein Prozessor versteht nur Nullen und Einsen, deshalb muss jedes einzelne Computerprogramm letztendlich in diesen Maschinencode umgewandelt werden.
Dies geschieht durch Kompilierung oder Interpretation.

#### Kompilation

Bei der Kompilierung wird der gesamte Quellcode auf einmal in Maschinencode umgewandelt. Dieser Maschinencode wird dann in eine portable Datei
geschrieben, die auf jedem Computer ausgeführt werden kann. Wir haben hier also zwei Schritte:

![](compilation.png) { width="500" thumbnail="true" }

#### Interpretation

Ein Interpreter durchläuft den Quellcode und führt ihn Zeile für Zeile aus. JavaScript war früher eine rein interpretierte Sprache, aber das Problem
mit interpretierten Sprachen ist, dass sie viel, viel langsamer sind als kompilierte Sprachen.

![](interpreted.png) { width="500" thumbnail="true" }

#### Just-In-Time (JIT) Kompilation

JavaScript verwendet jetzt eine sogenannte JIT-Kompilierung. Das ist eine Mischung aus Kompilierung und Interpretation. Dabei wird der gesamte Code
auf einmal in Maschinencode umgewandelt und dann sofort ausgeführt.

![](jit.png) { width="500" thumbnail="true" }

### Die JIT Kompilation von JavaScript

<table style="none">
<tr><td>Wenn ein Stück JS-Code in die Engine gelangt, wird der Code zunächst <b>geparst</b>, d.h. gelesen. Beim Parsen wird der Code in eine Datenstruktur zerlegt, die <b>AST (Abstract Syntax Tree)</b> genannt wird. Dazu wird jede Codezeile in Teile zerlegt, die für die Sprache von Bedeutung sind, z. B. die Schlüsselwörter <code>const</code> oder <code>function</code>. Dann werden alle diese Teile strukturiert in dem Baum gespeichert. In diesem Schritt wird auch geprüft, ob es Syntaxfehler gibt. Der so entstandene Baum wird später verwendet, um den Maschinencode zu erzeugen.</td><td><img src="AST.png" alt="" height="400" thumbnail="true"/></td></tr>
</table>

Der nächste Schritt ist **das Kompilieren**, welcher den AST in Maschinencode übersetzt. Dieser Maschinencode wird dann sofort **ausgeführt**. Die
Ausführung erfolgt im **Call Stack**, dazu später mehr.

Aber wir sind noch nicht fertig, denn moderne JavaScript-Engines haben einige ziemlich clevere **Optimierungsstrategien**. Zunächst erstellen sie eine
sehr unoptimierte Version des Maschinencodes, damit er so schnell wie möglich ausgeführt werden kann. Im Hintergrund wird dieser Code dann **optimiert
und neu kompiliert**, während das Programm bereits ausgeführt wird. Das kann mehrmals geschehen und nach jeder Optimierung wird der nicht optimierte
Code einfach gegen den neuen, optimierten Code ausgetauscht.

Hier ist eine kleine Übersicht:

![](engine_uebersicht.png) { width="500" thumbnail="true"}

## Die JavaScript Runtime

Die häufigste JavaScript-Laufzeitumgebung ist der **Browser**. Wir können uns die JS-Runtime als eine **große Box oder einen großen Container**
vorstellen, der alle Dinge enthält, die wir brauchen, um JavaScript zu nutzen.

Das Herzstück jeder JavaScript-Laufzeitumgebung ist immer eine **JavaScript-Engine**. Ohne eine Engine gibt es keine Runtime und auch kein JavaScript.
Die Engine allein reicht jedoch nicht aus. Damit sie richtig funktioniert, brauchen wir auch Zugang zu den **WEB APIs**. Unter WEB APIs versteht man
alles, was mit dem DOM, den Timern oder sogar der `console.log` zu tun hat, die wir ständig benutzen. WEB APIs sind also Funktionalitäten, die der
Engine zur Verfügung gestellt werden, aber eigentlich nicht Teil der JavaScript-Sprache selbst sind. JavaScript erhält einfach über das
globale `window`-Objekt Zugriff auf diese APIs.

Schließlich enthält eine JS-Laufzeitumgebung auch eine sogenannte **Callback-Queue**. Dies ist eine Datenstruktur, die alle **Callback-Funktionen**
enthält, die zur Ausführung bereit sind. Wir hängen zum Beispiel Event-Handler-Funktionen an DOM-Elemente wie eine Schaltfläche, um auf bestimmte
Ereignisse zu reagieren. Diese **Eventhandler-Funktionen** werden auch **Callback-Funktionen** genannt.  
Wenn also ein Ereignis eintritt, z.B. ein Klick, wird die Callback-Funktion aufgerufen. Das Erste, was nach dem Ereignis passiert, ist, dass die
Callback-Funktion in die Callback-Warteschlange gestellt wird. Wenn der Callback-Stack leer ist, wird die Callback-Funktion an den Stack übergeben,
damit sie ausgeführt werden kann. Dies geschieht in der sogenannten **Ereignisschleife**.

![](runtime_1.png) { width="500" thumbnail="true"}

![](runtime_2.png) { width="500" thumbnail="true"}
