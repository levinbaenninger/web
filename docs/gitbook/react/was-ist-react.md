---
icon: question
---

# Was ist React?

<details>

<summary>React</summary>

_Extremely popular **declarative**, **component-based**, **state-driven** JavaScript **library** for building user interfaces, created by Meta._

React eignet sich also besonders für die folgenden zwei Punkte:

1. **Komponenten** basierend auf ihrem aktuellen State auf einer Webpage rendern
2. Die **UI synchron mit dem State halten**, indem es die Seite re-rendert, wenn der State sich ändert

</details>

## Component-Based

React ist ein Framework, welches auf Komponenten basiert.

* Komponenten sind die **Baublöcke** unseres User Interfaces in React
* Wir bauen komplexe UIs, indem wir mehrere Komponenten bauen und diese dann miteinander wie Legosteine kombinieren

Komponenten können dabei ganz unterschiedlich sein, bspw. können sie so gross wie eine **Sidebar** sein oder so klein wie ein **Button**.

{% hint style="info" %}
Komponenten können wir überall auf unserer UI widerverwenden
{% endhint %}

## Deklarativ

<details>

<summary>Deklarativ</summary>

Wir sagen React, wie eine Komponente aussehen soll basierend auf den aktuellen Daten und dem aktuellen Status.

</details>

Wir **beschreiben**, wie Komponenten aussehen und wie sie funktioniert mit einer deklarativen Syntax namens **JSX**.

<details>

<summary>JSX</summary>

Eine Syntax, die HTML, CSS, JavaScript kombiniert und **andere Komponenten** referenzieren kann.

</details>

React bietet uns eine **Abstraktion** von unserem DOM -> **wir arbeiten niemals mit dem DOM**!

## State-Driven

<img src="../.gitbook/assets/file.excalidraw.svg" alt="" class="gitbook-drawing">

{% hint style="info" %}
React **reagiert** auf State-Changes, indem es die UI neu rendert.
{% endhint %}

## Library

React wird oftmals als Framework betitelt, obwohl es das gar nicht ist.

{% hint style="warning" %}
React ist eine **Library**! React deckt nur den sogenannten **View**-Teil unserer Applikation ab.
{% endhint %}

Jedoch gibt es einige Frameworks, die auf React aufbauen, bspw. **Next.js** und **Remix**. Diese fügen z.B. noch Routing und SSR hinzu.

