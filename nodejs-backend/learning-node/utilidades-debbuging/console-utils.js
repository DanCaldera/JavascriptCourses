//%s string
//%d decimal
//%j json

// console.log('Un %s y un %s ', 'perrito', 'gatito');
//info
//warn ...

//Comprobar si una comparación funciona
// console.assert(42 == '42');
// console.assert(42 === '42');

// console.trace('hello'); // Te dice la línea!

const util = require('util');
const debuglog = util.debuglog('foo');

debuglog('DebugFromFoo');
