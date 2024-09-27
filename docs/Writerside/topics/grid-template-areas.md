# grid-template-areas

Definiert ein Grid-Template, indem die Namen von den Grid-Bereichen mit dem `grid-area`-Property referenziert werden. Wenn du den Namen einer
Grid-Area wiederholst, wird der Inhalt auf diese Zellen ausgedehnt.

## Werte

- `<grid-area-name>` - der Name von einer Grid-Area
- `.` - eine leere Zelle

```CSS
.container {
  grid-template-areas:
    "<grid-area-name> | . | none | ..."
    "...";
}
```

## Beispiel

```CSS
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

![template-areas](template-areas.jpg) { width="250" }
