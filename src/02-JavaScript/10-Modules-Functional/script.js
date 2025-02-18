import * as ShoppingCart from './shoppingCart.js';
import log, { addToCart, totalPrice as price, tq } from './shoppingCart.js';

addToCart('bread', 5);
addToCart('milk', 3);
console.log(price, tq);
console.log(ShoppingCart.totalPrice);
log();
