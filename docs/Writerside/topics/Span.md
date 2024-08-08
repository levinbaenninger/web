# `<span>`

<show-structure depth="2" />

Das `<span>`-Element ist ein inline Container für phrasing Content. Standardmässig repräsentiert es gar nichts.

Es wird also benutzt, um Inhalt miteinander zu gruppieren, um diese dann zu stylen.

Ausserdem sollte das `<span>`-Element nur benutzt werden, wenn kein anderes semantisches Element Sinn macht.

## Beispiel - ohne Styling

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <p><span>Some text</span></p>
            ]]>
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="span.png" width="150" alt="span"/>
    </tab>
</tabs>

## Beispiel - mit Styling

<tabs>
    <tab title="HTML">
        <code-block lang="html">
            <![CDATA[
                <li>
                    <span>
                        <a href="HTML.md" target="_blank">See my HTML Site</a>
                    </span>
                </li>
            ]]>
        </code-block>
    </tab>
    <tab title="CSS">
        <code-block lang="css">
            li span {
                background: gold;
            }
        </code-block>
    </tab>
    <tab title="Resultat">
        <img src="span_with.png" width="150" alt="span"/>
    </tab>
</tabs>
