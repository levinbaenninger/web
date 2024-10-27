# Children Prop

Das Children Prop ist ein spezielles Prop, welches wir einer Komponente mitgeben können. Der Name ist `children` ist vorgegeben und wir können ihn 
nicht ändern.

Das `children`-Prop erhält die Daten, die zwischen dem öffnenden und schliessenden Tag unserer Komponente sind:

````Javascript
function Steps() {
  ...

  return (
    <>
      ...

      {isOpen && (
        <div className="steps">
          ...

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#ffffff"
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColor="#ffffff"
              onClick={handleNext}
            >
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
}
````

Beim ersten Button wird im Button selbst also der Text "👈 Previous" angezeigt, während im zweiten der Text "Next 👉" angezeigt wird. Dabei brauchen 
wir nicht extra drei Komponenten mehr für den Text, das Emoji und die Richtung des Emojis zu deklarieren.