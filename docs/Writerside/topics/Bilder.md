# Bilder

<show-structure depth="2" />

Mit dem `<img>`-Element können wir auf unsere Webseite ein Bild einfügen. Dafür braucht es mindestens zwei Attribute:

- `src` - URL, wo das Bild ist
- `alt` - Alternativer Text, falls Bild nicht lädt oder für Screenreader

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <img src="https://image.geo.de/30484522/t/46/v2/w1440/r1/-/t-rex-bild.jpg" alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth" />
            ]]>
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="images.png" width="350" thumbnail="true" />
    </tab>
    <tab title="Resultat - Alt-Text">
        <img src="images_alt.png" width="350" thumbnail="true" />
    </tab>
</tabs>

## Alternativer Text

Dieses Attribut kommt zum Einsatz wenn:

- Der User sehbehindert ist und einen Screenreader benutzt
- Das Bild nicht gefunden werden kann (s. oben)
- Der User einen Text-Only Browser verwendet

## width und height

Wir können die Attribute `width` und `height` benutzen, um die Breite bzw. Höhe unseres Bildes zu spezifizieren. Dabei ist der Wert ein Integer ohne
eine Masseinheit und repräsentiert die Breite und Höhe des Bildes in Pixeln.

```HTML
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"
     width="400"
     height="341"/>
```
