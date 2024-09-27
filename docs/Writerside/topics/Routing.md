# Routing

Der Router zerlegt unsere URL. So wird beispielsweise die Seite `my.app/user/12/data` in drei Segmente unterteilt: `user`, `12`, `data`. Auf Basis der abgeleiteten Route werden passende Components, die darzustellen sind identifiziert.

**Beispiel:**

Wenn wir auf `.../user` gehen, dann soll die User-Component geladen werden.
