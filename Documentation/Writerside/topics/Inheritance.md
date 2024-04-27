# Inheritance

<show-structure depth="2" />

Unter **Inheritance** versteht man das Erben von Properties und Werten. Wenn man bspw. das Property `color` einem Parent gibt, dann erben alle
Kinder diese Eigenschaft.

```CSS
body {
  color: blue;
}

span {
  color: black;
}
```

![inheritance.png](inheritance.png) { width="350" thumbnail="true" }

Jedoch werden nicht alle Properties vererbt; vor allem jene die mit Text zu tun haben.