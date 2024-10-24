# JSX

JSX ist eine deklarative Syntax, um zu beschreiben, wie eine Komponente aussieht und wie sie funktioniert. Das heisst Komponenten müssen einen 
Block an JSX zurückgeben.

````Typescript
function Question({ question }})
{
  const [upVotes, setUpVotes] = useState(0);
  const upVote = () => setUpVotes((v) => v + 1);
 
  return (
    <div>
      <h4>{question.title}</h4>
      <p>{question.text}</p>
      <p>{question.hours} hours ago</p>
      
      <UpvoteBtn onClick={upVote} />
      <Answers
        numAnswers={question.num}
      />
    </div>
  );
}
````

Wie man sieht, schaut JSX sehr ähnlich wie HTML aus. Es ist jedoch eine Erweiterung von JavaScript, die es uns erlaubt JavaScript, CSS und 
React-Komponenten in ein HTML zu schreiben.

## Umwandlung

JSX wird, wenn wir es kompilieren, in normalen JavaScript-Code umgewandelt mit einem Tool namens Babel.

````HTML
<header>
  <h1 style="color: red">
    Hello React`!
  </h1>
</header>
````

````Javascript
React.createElement(
  'header',
  null,
  React.createElement(
    'h1',
    { style: { color: 'red' } },
    'Hello React!'
  )
)
````

Jedes JSX-Element wird also in ein `React.createElement()`-Funktionsaufruf umgewandelt. Theoretisch bräuchten wir so kein JSX, um Komponenten mit 
React zu schreiben, jedoch wäre das ziemlich mühsam.

## Regeln

### Generelle Regeln

- JSX funktioniert eigentlich wie HTML, aber wir können in den **"JavaScript-Mode"** mit `{}` gehen (für Text oder Attribute)
- Wir können ganze **JavaScript-Expressions** in den `{}` schreiben, z.B. um Variablen zu referenzieren, Arrays oder Objekte zu erstellen, die `.map()
`-Methode, Ternary Operator, etc.
- Statements sind jedoch **nicht erlaubt**, z.B. `if/else`, `for` und `switch`
- Ein Stück JSX darf nur **ein Root-Element beinhalten**. Wenn man mehr braucht, sollte man [`<>`](Fragments.md) benutzen

### Unterschiede zwischen JSX und HTML

- `className` anstatt HTML's `class`
- `htmlFor` anstatt HTML's `for`
- Jeder Tag muss **geschlossen** werden, z.B. `<img />` oder `<br />`
- Alle Event-Handler und andere Properties müssen in **camelCase** sein, z.B. `onClick` oder `onMouseOver`
  - **Ausnahme:** `aria-*` und `data-*` werden mit `-` wie in HTML geschrieben
- CSS Inline Styles werden wie folgt geschrieben: `{{<style>}}`
- CSS-Attributnamen werden ebenfalls im **camelCase** geschrieben
- Kommentare müssen in `{}` sein