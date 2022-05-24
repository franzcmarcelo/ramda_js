const R = require('ramda');

// both | (*… → Boolean) → (*… → Boolean) → (*… → Boolean)
// and evaluates values, both results of functions
const gt10 = R.gt(R.__, 10)
const lt20 = R.lt(R.__, 20)

const fBoth = R.both(gt10, lt20);
fBoth(15)
// true
fBoth(30)
// false


// flip | ((a, b, c, …) → z) → (b → a → c → … → z)
// less than 20
R.lt(20)(10)
// false ? 20 < 10
R.lt(R.__, 20)(10)
// true
// or:
R.flip(R.lt)(20)(10)
// true


// call | ((*… → a), *…) → a
// Returns the result of calling its first argument with the remaining arguments
R.call(Math.max, 1, 20, 3, 4, 5)
// 20


// converge | ((x1, x2, …) → z) → [((a, b, …) → x1), ((a, b, …) → x2), …] → (a → b → … → z)
// Accepts a converging function and a list of branching functions and returns a new function.
// The results of each branching function are passed as arguments to the converging
// function to produce the return value.
const fnConverging = (...args) => {
  const responses = {
    gt: 'Sum is Greater',
    lt: 'Multiplication is greater',
    eq: 'Equals'
  };
  const _result = (res) => responses[res];
  return !R.equals(...args) ? R.gt(...args) ? _result('gt') : _result('lt') : _result('eq');
}
const maxAddOrMultiply = R.converge(fnConverging, [R.add, R.multiply]);
maxAddOrMultiply(3, 0)
// Sum is Greater
maxAddOrMultiply(3, 20)
// Multiplication is greater
maxAddOrMultiply(0, 0)
// Equals