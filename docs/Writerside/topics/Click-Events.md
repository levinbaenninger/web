# Click Events

<show-structure depth="2" />

Mit Click-Events können wir auf Mausklicks hören und so setzen wir das um:

<procedure>
    <step>
        Zuerst müssen wir das Element auswählen, auf das wir hören wollen:
        <code-block lang="javascript">document.querySelector('.check')</code-block>
    </step>
    <step>
        Dann können wir für dieses Element die Methode <code>addEventListener</code> aufrufen. Dann müssen wir entscheiden, welche Art von Ereignis-Listener wir erstellen wollen, in diesem Fall wollen wir <code>'click'</code>. Das zweite Argument ist die Funktion, die aufgerufen werden soll, wenn diese Schaltfläche angeklickt wird, der sogenannte <b>Event-Handler</b>:
        <code-block lang="javascript">
            document.querySelector('.check').addEventListener('click', () => {
                console.log(document.querySelector('.guess').value);
            });
        </code-block>
    </step>
</procedure>
