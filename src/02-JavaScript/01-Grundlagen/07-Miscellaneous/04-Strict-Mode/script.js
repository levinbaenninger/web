// 1. Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; //! Uncaught ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log('I can drive!');

const interface = 'Audio'; //! Uncaught SyntaxError: Unexpected strict mode reserved word
