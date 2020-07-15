// fn.js
const fn = require('./modules/fn');
const fnTxt = fn();
console.log(fnTxt);

// obj.js
/*
const obj = require('./modules/obj');

console.log( obj[0]() );
console.log( obj[1]() );

const a = obj[0];
const b = obj[1];
console.log( a() );
console.log( b() );

const [a, b] = require('./modules/obj');
console.log( a() );
console.log( b() );
*/

/*
const obj = require('./modules/obj');
console.log( obj.a() );
console.log( obj.b() );
*/

const { a, b, c } = require('./modules/obj2');
console.log( a() );
console.log( b() );
console.log( c() );