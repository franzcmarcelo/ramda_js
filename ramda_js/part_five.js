const R = require('ramda');

// binary | (a → b → c → … → z) → ((a, b) → z)
// :wraps any function in a function that accepts exactly 2 parameters
Math.max(10, 20, 30, 40)
// 40
const maxFromPair = R.binary(Math.max)
maxFromPair(10, 20, 30, 40)
// 20



// unary | (a → b → c → … → z) → (a → z)
const maxFromUnity = R.unary(Math.max)
maxFromUnity(10, 20, 30, 40)
// 10



// nAry | Number → (* → a) → (* → a)
// :wraps any function in a unction that accepts exactly n parameters
const maxFromN = R.nAry(5, Math.max)
maxFromN(10, 20, 30, 40, 50)
// 50