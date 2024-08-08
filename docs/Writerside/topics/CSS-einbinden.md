# CSS einbinden

<show-structure depth="2" />

Das Erste, was wir tun müssen, ist es die CSS-Datei in unserer HTML-Datei zu verlinken. Dafür gibt es verschiedene Wege:

## Inline-CSS

Inline-CSS wird direkt in einem Element im HTML eingebunden:

```HTML
<p style="color: red">Ich bin rot!</p>
```

Diese Variante wird sehr selten benützt, da sie sehr umständlich ist.

## Internal-CSS

Zudem können wir im `<head>` unserer HTML-Datei das `<style>`-Element hinzufügen:

```HTML

<head>
    <meta charset="UTF-8"/>
    <title>Styles</title>
    <style>
        p {
            color: red;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>Hallo, ich bin rot und gross!</p>
</body>
```

Auch diese Variante wird nicht besonders häufig gebraucht, vor allem weil man dadurch nicht mehrere HTML-Dateien mit denselben Styles pflegen kann.

## External-CSS

Das ist die Variante, die man am häufigsten sieht. Man erstellt eine neue CSS-Datei und bindet sie mit dem `<link>`-Element in das HTML ein.

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <link rel="stylesheet" href="styles.css" />
            ]]>
        </code-block>
    </tab>
    <tab title="CSS">
        <code-block lang="css">
            h1 {
              color: red;
            }
        </code-block>
    </tab>
</tabs>