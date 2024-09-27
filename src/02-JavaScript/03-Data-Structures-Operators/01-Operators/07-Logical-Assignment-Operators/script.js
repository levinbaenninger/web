//* Logical Assignment Operators

const rest1 = {
  restaurantName: 'Classico Italiano',
  numGuests: 20
};

const rest2 = {
  restaurantName: 'La Piazza',
  owner: 'Giovanni Rossi'
};

//? Nullish Coalescing Operator
// Old way
rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests ?? 10;

// New way
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//? AND OPERATOR

// Old way
rest1.owner = rest1.owner && '<Anonymous>';
rest2.owner = rest2.owner && '<Anonymous>';

// New way
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';
