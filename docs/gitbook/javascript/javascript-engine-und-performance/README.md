---
icon: engine
description: Hier lernst du alles über die JavaScript Engine und Performance.
---

# JavaScript Engine und Performance

## Die JavaScript Engine﻿ <a href="#die-javascript-engine" id="die-javascript-engine"></a>

Die JavaScript-Engine ist das Programm, das unseren Code **ausführt**. Jeder Browser hat seine eigene Engine, aber die bekannteste ist die **V8 Engine** von den Chromium-Browsern. Aber wie funktioniert die Engine?

Sie hat einen **Call Stack** und einen **Heap**. Auf dem Call Stack wird unser gesamter Code unter Verwendung des sogenannten Ausführungskontexts ausgeführt, während auf dem Heap unsere Objekte gespeichert werden.

<figure><img src="../../.gitbook/assets/image (1) (1).png" alt="" width="375"><figcaption><p>Call Stack und Heap</p></figcaption></figure>

### Kompilation vs. Interpretation﻿ <a href="#kompilation-vs-interpretation" id="kompilation-vs-interpretation"></a>

Ein Prozessor versteht nur Nullen und Einsen, deshalb muss jedes einzelne Computerprogramm letztendlich in diesen Maschinencode umgewandelt werden. Dies geschieht durch Kompilierung oder Interpretation.

#### **Kompilation**﻿

Bei der Kompilierung wird der gesamte Quellcode auf einmal in Maschinencode umgewandelt. Dieser Maschinencode wird dann in eine portable Datei geschrieben, die auf jedem Computer ausgeführt werden kann. Wir haben hier also zwei Schritte:

<figure><img src="../../.gitbook/assets/image (2) (1).png" alt=""><figcaption><p>Kompilation</p></figcaption></figure>

#### **Interpretation**﻿

Ein Interpreter durchläuft den Quellcode und führt ihn Zeile für Zeile aus. JavaScript war früher eine rein interpretierte Sprache, aber das Problem mit interpretierten Sprachen ist, dass sie viel, viel langsamer sind als kompilierte Sprachen.

<figure><img src="../../.gitbook/assets/image (3) (1).png" alt=""><figcaption><p>Interpretation</p></figcaption></figure>

#### **Just-In-Time (JIT) Kompilation**﻿

JavaScript verwendet jetzt eine sogenannte JIT-Kompilierung. Das ist eine Mischung aus Kompilierung und Interpretation. Dabei wird der gesamte Code auf einmal in Maschinencode umgewandelt und dann sofort ausgeführt.

<figure><img src="../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

#### Die JIT Kompilation von JavaScript﻿ <a href="#die-jit-kompilation-von-javascript" id="die-jit-kompilation-von-javascript"></a>

Wenn ein Stück JS-Code in die Engine gelangt, wird der Code zunächst **geparst**, d.h. gelesen. Beim Parsen wird der Code in eine Datenstruktur zerlegt, die **AST (Abstract Syntax Tree)** genannt wird. Dazu wird jede Codezeile in Teile zerlegt, die für die Sprache von Bedeutung sind, z. B. die Schlüsselwörter `const` oder `function`. Dann werden alle diese Teile strukturiert in dem Baum gespeichert. In diesem Schritt wird auch geprüft, ob es Syntaxfehler gibt. Der so entstandene Baum wird später verwendet, um den Maschinencode zu erzeugen.

<figure><img src="../../.gitbook/assets/image (8).png" alt="" width="179"><figcaption></figcaption></figure>

Der nächste Schritt ist **das Kompilieren**, welcher den AST in Maschinencode übersetzt. Dieser Maschinencode wird dann sofort **ausgeführt**. Die Ausführung erfolgt im **Call Stack**, dazu später mehr.

Aber wir sind noch nicht fertig, denn moderne JavaScript-Engines haben einige ziemlich clevere **Optimierungsstrategien**. Zunächst erstellen sie eine sehr unoptimierte Version des Maschinencodes, damit er so schnell wie möglich ausgeführt werden kann. Im Hintergrund wird dieser Code dann **optimiert und neu kompiliert**, während das Programm bereits ausgeführt wird. Das kann mehrmals geschehen und nach jeder Optimierung wird der nicht optimierte Code einfach gegen den neuen, optimierten Code ausgetauscht.

<figure><img src="../../.gitbook/assets/image (9).png" alt=""><figcaption><p>Übersicht JIT-Compilation</p></figcaption></figure>

## Die JavaScript Runtime﻿ <a href="#die-javascript-runtime" id="die-javascript-runtime"></a>

Die häufigste JavaScript-Laufzeitumgebung ist der **Browser**. Wir können uns die JS-Runtime als eine **grosse Box oder einen grossen Container** vorstellen, der alle Dinge enthält, die wir brauchen, um JavaScript zu nutzen.

Das Herzstück jeder JavaScript-Laufzeitumgebung ist immer eine **JavaScript-Engine**. Ohne eine Engine gibt es keine Runtime und auch kein JavaScript. Die Engine allein reicht jedoch nicht aus. Damit sie richtig funktioniert, brauchen wir auch Zugang zu den **Web APIs**. Unter Web APIs versteht man alles, was mit dem **DOM**, den **Timern** oder sogar der **`console.log`** zu tun hat, die wir ständig benutzen. Web APIs sind also **Funktionalitäten**, die der Engine zur Verfügung gestellt werden, aber eigentlich nicht Teil der JavaScript-Sprache selbst sind. JavaScript erhält einfach über das globale **`window`-Objekt Zugriff** auf diese APIs.

Schliesslich enthält eine JS-Laufzeitumgebung auch eine sogenannte **Callback-Queue**. Dies ist eine Datenstruktur, die alle **Callback-Funktionen enthält**, die zur Ausführung bereit sind. Wir hängen zum Beispiel Event-Handler-Funktionen an DOM-Elemente wie eine Schaltfläche, um auf bestimmte Ereignisse zu reagieren. Diese **Eventhandler-Funktionen werden auch Callback-Funktionen genannt**.\
Wenn also ein Ereignis eintritt, z.B. ein Klick, wird die Callback-Funktion aufgerufen. Das Erste, was nach dem Ereignis passiert, ist, dass die Callback-Funktion in die **Callback-Warteschlange** gestellt wird. Wenn der Callback-Stack **leer** ist, wird die Callback-Funktion an den Stack übergeben, damit sie ausgeführt werden kann. Dies geschieht in der sogenannten **Ereignisschleife**.

<figure><img src="../../.gitbook/assets/image (10).png" alt=""><figcaption><p>JavaScript Runtime</p></figcaption></figure>
