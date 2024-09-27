# Aktive Pfade

Damit der User erkennt, auf welchem Pfad er sich befindet bzw. welcher gerade aktiv ist, stellt uns Angular ein Property zu Verfügung:

```HTML
<a
   [routerLink]="['user', input.value]"
   routerLinkActive="active"
   [routerLinkActiveOptions]="{ exact: true }"
>User</a>
```
