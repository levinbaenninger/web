const { join } = require('path');

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  // this path may vary depending on your project structure
  presets: [require('@buhler/ui-styles')],
  content: [
    // Purging of your own css classes
    join(__dirname, 'src/**/!(_.stories|_.spec).{ts,html}'),
    // UI-Core purging
    join(__dirname, './node_modules/@buhler/ui-core/**/*.component.mjs')
  ]
};
