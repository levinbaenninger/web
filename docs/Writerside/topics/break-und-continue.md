# Loops - break und continue

<show-structure depth="2" />

## break

Die `break`-Anweisung wird verwendet, um die Schleife sofort zu beenden, wenn sie angetroffen wird.

### Syntax - break

````Javascript
break;
````

### Funktionsweise der break-Anweisung

![](break.png) { width="350" thumbnail="true"}

### Beispiel - break

<tabs>
    <tab title="JavaScript">
        <code-block lang="javascript" src="break.js" />
    </tab>
    <tab title="Output">
        <code-block lang="bash">
            Levin string
            Bänninger string
        </code-block>
    </tab>
</tabs>

## continue

Die `continue`-Anweisung wird verwendet, um die aktuelle Iteration der Schleife zu überspringen und der Kontrollfluss des Programms geht zur nächsten
Iteration über.

### Syntax - continue

````Javascript
continue;
````

### Funktionsweise der continue-Anweisung

![](continue.png) { width="350" thumbnail="true"}

### Beispiel - continue

<tabs>
    <tab title="JavaScript">
        <code-block lang="javascript" src="continue.js" />
    </tab>
    <tab title="Output">
        <code-block lang="bash">
            Levin string
            Bänninger string
            student string
        </code-block>
    </tab>
</tabs>