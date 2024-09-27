# Execution Contexts und der Call Stack

<show-structure depth="2" />

Nachdem unser Code kompiliert wurde, wird ein **globaler Execution Context** erstellt (für Top-Level-Code). Top-Level-Code ist Code, der sich nicht in
einer Funktion befindet.

Aber was ist ein Execution Context? Ein Execution Context ist eine Umgebung, in der ein Teil von JavaScript ausgeführt wird. Er speichert alle
Informationen, die für die Ausführung eines Codes notwendig sind, z. B. lokale Variablen oder Argumente, die an eine Funktion übergeben werden.

Nachdem der globale EC erstellt wurde, wird der **Top-Level-Code** ausgeführt. Sobald der Top-Level-Code fertig ist, werden schließlich auch die
Funktionen ausgeführt. Für jeden Funktionsaufruf wird ein neuer Execution Context erstellt, der alle Informationen enthält, die für die Ausführung
der Funktion notwendig sind.

Wenn alle Funktionen ausgeführt wurden, wartet die Engine auf die Ankunft von Callback-Funktionen, damit sie diese ausführen kann.

Alle diese Execution Contexts zusammen bilden den Call Stack.

## Execution Contexts im Detail

Innerhalb eines Ausführungskontextes sind:

1. **Variable Environment**

   - `let`, `const` und `var` Deklarationen
   - Funktionen
   - `arguments` Objekt

2. **Scope Chain**

   - Verweise auf Variablen außerhalb der aktuellen Funktion

3. `this` Schlüsselwort
   - Besondere Variable

All diese Dinge werden während der **Erstellungsphase**, direkt vor der Ausführung, erstellt.

> Ein weiterer wichtiger Faktor ist, dass Pfeilfunktionen weder das Objekt `arguments` noch das Schlüsselwort `this` erhalten. Stattdessen können sie
> das `arguments`-Objekt und das `this`-Schlüsselwort von ihrer nächsten übergeordneten Funktion verwenden.

![](execution_context.png) { width="500" thumbnail="true" }

## Der Call Stack

Der Call Stack bildet zusammen mit dem Memory Heap die JavaScript-Engine selbst. Der Call Stack ist ein **Platz**, auf dem die Ausführungskontexte
übereinander gestapelt werden, um den Überblick zu behalten, wo wir uns in der Ausführung befinden.

Der Ausführungskontext, der oben auf dem Stapel liegt, ist derjenige, der gerade ausgeführt wird. Wenn die Ausführung beendet ist, wird er vom Stapel
entfernt und der Ausführungskontext kehrt zum vorherigen Ausführungskontext zurück.

![](call_stack.png) { width="500" thumbnail="true" }

Für weitere Information bitte folgende Seite aufrufen (11:35):

[Udemy - Call Stack](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648479#overview)
