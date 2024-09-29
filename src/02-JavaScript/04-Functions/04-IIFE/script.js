'use strict';

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();
