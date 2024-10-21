# React-Projekt erstellen

Primär gibt es drei Wege, um React-Projekte zu erstellen und starten:

- [**Create React App**](https://create-react-app.dev/)
- [**Vite**](https://vite.dev/)
- [**Nx**](https://nx.dev)

## Create React App

👉&nbsp;&nbsp;Kompletes **Starterpaket** für React-Applikationen

👍&nbsp;&nbsp;&nbsp;Alles ist bereits **vorkonfiguriert**: ESLint, Prettier, Jest, etc.

👎&nbsp;&nbsp;&nbsp;Benutzt **alte und langsame** Technologien, z.B. Webpack

> Create React App eignet sich besonders für **Tutorials oder Experimente**, jedoch nicht mehr für **reale Apps** in der Produktion!

### Setup (CRA)

Create React App ist ein CLI, das heisst wir erstellen unsere Applikation im Terminal.

````Bash
npx create-react-app pizza-menu
````

Nun werden alle nötigen Pakete heruntergeladen und die Ordnerstruktur erstellt. Danach war es das dann auch schon. Mehr müssen wir nicht machen.

## Vite

Die beste Alternative zu Create React App ist wohlmöglich Vite.

👉&nbsp;&nbsp;**Modernes Build-Tool**, welches ein Template für React-Applikationen hat

👍&nbsp;&nbsp;&nbsp;**Extrem schnelles** Hot Module Replacement (HMR) und Bundling

👎&nbsp;&nbsp;&nbsp;Man muss vieles **manuell aufsetzen**, z.B. ESLint, Testing-Library, Prettier, etc.$

## Nx

Nx bietet eine gute Alternative für Vite und CRA, da es die Vorteile von beiden verknüpft. 

### Setup

````Bash
npx create-nx-workspace@latest
````

Hier klickt man sich einfach durch und schon wird alles für einen erstellt und man muss nichts mehr tun. Für mehr Informationen: [](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)

## React-Frameworks

Der vierte Weg wäre es, ein React-Framework wie [Next.js](https://nextjs.org/) oder [Remix](https://remix.run/) zu nutzen. Das ist auch der Weg, 
welchen React heute für neue Projekte **empfiehlt**.

Jedoch ist das nicht ganz richtig, da "**vanilla" React-Applikationen ebenfalls wichtig** sind, vor allem um die grundlegenden Konzepte zu lernen.