---
icon: expand
---

# Scope und Kontext

## Scope Konzepte﻿ <a href="#scope-konzepte" id="scope-konzepte"></a>

**Scoping**: Wie die Variablen in unserem Programm organisiert und auf sie zugegriffen wird. "_Wo befinden sich die Variablen?_ " oder _"Wo können wir auf eine bestimmte Variable zugreifen, und wo nicht?_"

**Lexical Scoping**: Das Scoping wird durch _Platzierung_ von Funktionen und Blöcken im Code gesteuert

**Scope**: Raum oder Umgebung, in der eine bestimmte Variable deklariert wird (Variablenumgebung im Falle von Funktionen). Es gibt den _Global Scope_, den _Function Scope_ und den _Block Scope_

**Scope einer Variable**: Bereich in unserem Code, in dem auf eine bestimmte Variable _zugegriffen_ werden kann

## 3 Arten von Scopes﻿ <a href="#id-3-arten-von-scopes" id="id-3-arten-von-scopes"></a>

### Global Scope﻿ <a href="#global-scope" id="global-scope"></a>

```javascript
const me = 'Jonas';
const job = 'teacher';
const year = 1989;
```

* **Ausserhalb** einer Funktion oder eines Blocks
* Im globalen Bereich deklarierte Variablen sind **überall** zugänglich

### Function Scope﻿ <a href="#function-scope" id="function-scope"></a>

<pre class="language-javascript"><code class="lang-javascript">function calcAge(birthYear) {
  const now = 2037;
  const age = now - birthyear;
  return age;
}

<a data-footnote-ref href="#user-content-fn-1">console.log(now);</a>
</code></pre>

* Variablen sind nur **in Funktionen** zugänglich, nicht ausserhalb
* Gilt für **alle Funktionstypen**
* Auch **Local Scope** genannt

### Block Scope﻿ <a href="#block-scope" id="block-scope"></a>

<pre class="language-javascript"><code class="lang-javascript">if (year >= 1981 &#x26;&#x26; year &#x3C;= 1996) {
  const millenial = true;
  const food = 'Avocado toast';
}

<a data-footnote-ref href="#user-content-fn-2">console.log(millenial);</a>
</code></pre>

* Variablen sind nur **innerhalb des Blocks** zugänglich
* Gilt nur für `let` und `const` Variablen
* Funktionen sind ebenfalls **Block Scoped** (im Strict Mode)

{% content-ref url="this-keyword.md" %}
[this-keyword.md](this-keyword.md)
{% endcontent-ref %}

{% content-ref url="call-apply-und-bind.md" %}
[call-apply-und-bind.md](call-apply-und-bind.md)
{% endcontent-ref %}

{% content-ref url="hoisting-und-temporal-dead-zone-tdz.md" %}
[hoisting-und-temporal-dead-zone-tdz.md](hoisting-und-temporal-dead-zone-tdz.md)
{% endcontent-ref %}

[^1]: `ReferenceError`

[^2]: `ReferenceError`
