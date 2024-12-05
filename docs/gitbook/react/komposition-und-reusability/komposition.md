---
icon: diamonds-4
---

# Komposition

<details>

<summary>Komposition</summary>

Verschiedene Komponenten miteinander kombinieren, indem wir das [`children`-Prop ](../komponenten-props-und-jsx/props/children.md)oder ein anderes definiertes Prop nutzen.

</details>

Mit Komposition können wir:

1. Gut wiederverwendbare und flexible Komponente erstellen
2. Das Problem von [Prop Drilling](prop-drilling.md) lösen

## Beispiel

Unser Ziel ist es ein Modal zu haben, welches verschiedene Status anzeigen kann, z.B. `Success` oder `Error`:

```jsx
const modal = ({ children }) {
  return (
    <div className="modal">
      {children}
    </div>
  )
} 
```

Nun können wir andere Komponenten als dieses Child einfügen, um das Modal wiederzuverwenden:

```jsx
<Modal>
  <Success />  
</Modal>

<Modal>
  <Error />  
</Modal>
```
