const R = require('ramda');

// always | a → (* → a)
const getMyName = R.always('franz');
getMyName() // franz
const _getMyName = name => _ => name;
_getMyName('franz')('anything')
// franz



// and | a → b → a | b
// R.mathMod
const isMultiple3 = (n) => R.equals(R.mathMod(n, 3), 0);
const isGreaterThan10 = R.gte(R.__, 10);
R.and(isMultiple3(33), isGreaterThan10(11))
// true



// any | (a → Boolean) → [a] → Boolean
const is10 = (n) => R.equals(n, 10);
R.any(is10, [80, 20, 10])
// true
R.any(R.equals(10), [80, 20, 10])
// true
R.any(is10)([80, 20, 10])
// true



// anyPass | [(*… → Boolean)] → (*… → Boolean)
R.anyPass([isGreaterThan10, R.equals(5)])(8)
// false



// ap | [a → b] → [a] → [b] | Apply f => f (a → b) → f a → f b
// concat, prop
R.ap(
  [R.toUpper, R.concat(R.__, ' <-')],
  ['january', 'february']
);
// [ 'JANUARY', 'FEBRUARY', 'january <-', 'february <-' ]

const obj = { data: 'hello', resp: 2 }
const a = R.ap(
  R.repeat, R.prop('resp')
)(obj)
// [ { data: 'hello', resp: 2 }, { data: 'hello', resp: 2 } ]

// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('franz')
// franzFRANZ

// S combinator:
const S = (x, y, z) => x(z)(y(z));
S(R.concat, R.toUpper, 'franz')
// franzFRANZ