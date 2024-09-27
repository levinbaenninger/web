# CSS-Styles manipulieren

<show-structure depth="2" />

Wir können nicht nur HTML, sondern auch CSS-Stile ändern.

<procedure>
<step>
    Wie immer müssen wir zunächst das Element auswählen, das wir bearbeiten wollen:
    <code-block lang="javascript">
        const body = document.querySelector('body');
    </code-block>
</step>
<step>
    Danach wählen wir die Eigenschaft `style` unseres Elements aus. In dieser Eigenschaft haben wir Zugriff auf alle CSS Properties:
    <code-block lang="javascript">
        body.style.backgroundColor = 'green';
        number.style.width = '30rem';
    </code-block>
</step>
<tip>
    <p>
        Der Wert muss immer in einem <b>String</b> sein. Ausserdem, wenn das CSS Property mit zwei Wörten geschrieben wird, z.B. `background-color`, wandelt JavaScript es in das <b>camelCase</b>-Format um.
    </p>
</tip>
</procedure>
