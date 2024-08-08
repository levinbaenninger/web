# Tabellen

<show-structure depth="2" />

Tabellen werden in HTML hauptsächlich dafür gebraucht, tabellarische Daten zu strukturieren.

## Syntax

Für Tabellen gibt es mehrere Elemente:

- `<table>` - Anfang und Ende der Tabelle
- `<th>` - Eine Zelle als Header einer Tabelle
- `<tr>` - Eine Spalte in einer Tabelle
- `<td>` - Eine Zelle in einer Tabelle
- `<caption>` - Beschreibung/Titel einer Tabelle
- `<thead>` - Gruppiert den Headerinhalt in einer Tabelle
- `<tbody>` - Gruppiert den Hauptinhalt in einer Tabelle
- `<tfoot>` - Gruppiert den Fusszeileninhalt in einer Tabelle

Darüber hinaus gibt es noch zwei wichtige Attribute:

- `colspan` - Länge von einer Reihe
- `rowspan` - Länge von einer Spalte

## Beispiel

<tabs>
    <tab title="HTML">
        <code-block lang="html" collapsible="true">
            <![CDATA[
                <table>
                    <caption>How I chose to spend my money</caption>
                    <thead>
                      <tr>
                        <th>Purchase</th>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Evaluation</th>
                        <th>Cost (€)</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <td colspan="4">SUM</td>
                        <td>118</td>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>Haircut</td>
                        <td>Hairdresser</td>
                        <td>12/09</td>
                        <td>Great idea</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>Lasagna</td>
                        <td>Restaurant</td>
                        <td>12/09</td>
                        <td>Regrets</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>Shoes</td>
                        <td>Shoeshop</td>
                        <td>13/09</td>
                        <td>Big regrets</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>Toothpaste</td>
                        <td>Supermarket</td>
                        <td>13/09</td>
                        <td>Good</td>
                        <td>5</td>
                      </tr>
                    </tbody>
                </table>
            ]]>
        </code-block>
    </tab>
    <tab title="CSS">
        <code-block lang="css" collapsible="true">
            tbody {
              font-size: 90%;
              font-style: italic;
            }
            tfoot {
              font-weight: bold;
            }
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="table.png" width="350" thumbnail="true" />
    </tab>
</tabs>