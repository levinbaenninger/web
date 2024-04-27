# `<div>`

<show-structure depth="2" />

Das `<div>`-Element ist ein Container für Flow-Content. Es hat keinen Effekt auf den Inhalt oder das Layout, bis es mit CSS gestylet wird.

Es wird also benutzt, um Inhalt miteinander zu gruppieren, um diese dann zu stylen.

Ausserdem sollte das `<div>`-Element nur benutzt werden, wenn kein anderes semantisches Element Sinn macht.

## Beispiel - ohne Styling

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <div>
                    <p>
                        Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
                    </p>
                </div>
            ]]>
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="div_without.png" thumbnail="true" width="350" alt="div"/>
    </tab>
</tabs>

## Beispiel - mit Styling

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <div class="shadowbox">
                    <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
                </div>
            ]]>
        </code-block>
    </tab>
    <tab title="CSS">
        <code-block lang="css">
            .shadowbox {
                width: 15em;
                border: 1px solid #333;
                box-shadow: 8px 8px 5px #444;
                padding: 8px 12px;
                background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
            }
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="div_with.png" thumbnail="true" width="350" alt="div" />
    </tab>
</tabs>
