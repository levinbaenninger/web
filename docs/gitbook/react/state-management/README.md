---
icon: screwdriver-wrench
---

# State Management

<details>

<summary>State Management</summary>

Entscheiden, **wann** State erstellt werden soll, welche **Arten** von State erforderlich, **wo** die einzelnen State-Variablen plaziert werden und wie die Daten durch die App **fliessen**

</details>

## Arten von State

Grundsätzlich gibt es in React zwei Arten von State.

### Local State

* State, der **nur von einer oder wenigen Komponenten** benötigt wird
* State, der in einer Komponente definiert ist und auf den **nur diese Komponente und untergeordnete Komponenten** Zugriff haben

### Global State

* State, den **viele Komponenten** benötigen
* **Gemeinsamer** State, auf den **jede Komponente** in der gesamten Anwendung zugreifen kann

{% hint style="info" %}
In React wird das mit der **Context API** oder einer State-Library wie **Redux** oder **Zustand** erreicht
{% endhint %}

## Wo und wann?

<img src="../../.gitbook/assets/file.excalidraw (3).svg" alt="State: Wo und wann?" class="gitbook-drawing">

