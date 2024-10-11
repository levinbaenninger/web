# Datentransformation

Mit den Methoden `map()`, `filter()` und `reduce()` können wir neue Arrays erstellen mit Daten die transformiert aus einem anderen Array kommen. 
Diese Methoden sind sehr wichtig für das Schreiben von modernem JavaScript.

## Methoden Chainen

Die oben genannten Methoden eignen sich besonders zum Verketten, um somit Daten sowohl zu filtern, als auch zu mappen oder zusammenzuzählen.

````Javascript
const interest = movements
    .filter((movement) => movement > 0)
    .map((deposit) => deposit * (1.2 / 100))
    .filter((interest) => interest >= 1)
    .reduce((acc, interest) => acc + interest, 0);
labelSumInterest.textContent = `${interest}€`;
````

Im obigen Beispiel filtern wir zuerst nach Einzahlungen, wenden den Zinssatz an, überprüfen, ob die Zinsen grösser als 1 € sind und fassen 
schlussendlich zu einer Summe zusammen.