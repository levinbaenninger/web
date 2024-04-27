// 1. Scoping

//* Global Scope
const firstName = 'Jonas';

//* Function Scope
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  //* Function Scope
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    //* Block Scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // ? Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      //* Function Scope
      function add(a, b) {
        return a + b;
      }

      // ? Reassigning outer scope's variable
      output = 'New output!';
    }

    console.log(millenial);
    //! console.log(str); ReferenceError
    //! console.log(add(2, 3)); ReferenceError (only works in strict mode)
    console.log(output);
  }

  //! console.log(output); ReferenceError
  //! console.log(millenial); ReferenceError
  printAge();
  return age;
}

calcAge(1991);
//! console.log(age); ReferenceError
//! printAge(); ReferenceError
