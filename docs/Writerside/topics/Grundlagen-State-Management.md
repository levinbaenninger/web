# Grundlagen

State Management
: Entscheiden, **wann** State erstellt werden sollen, welche **Arten** von State erforderlich sind, **wo** die einzelnen States platziert werden sollen und wie die Daten durch die App **fliessen**

## Arten von State

### Local State

- State, der **nur von einer oder wenigen Komponenten** benötigt wird
- State, der in einer Komponente definiert ist und auf den **nur diese Komponente und untergeordnete Komponenten** Zugriff haben (durch Übergabe über Props)

### Global State

- State, den **viele Komponenten** benötigen
- **Gemeinsamer** State, auf den **jede Komponente** in der gesamten Anwendung zugreifen kann

> In React wird das mit der **React Context API** oder **Redux** umgesetzt

## Wo und wann?

![](image_3.png)