// 2. Hoisting and TDZ in Practice

//* Variables
console.log(me); // undefined
//! console.log(job); // ReferenceError: Cannot access 'job' before initialization
//! console.log(year); // ReferenceError: Cannot access 'year' before initialization

var me = 'Jonas';
const job = 'teacher';
const year = 1991;

//* Functions
console.log(addDecl(2, 3)); // 5
//! console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization
//! console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
