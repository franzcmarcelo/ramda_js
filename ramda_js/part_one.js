const R = require('ramda');

// add | Number → Number → Number
R.add(10, 20) // 30
const inc3 = R.add(3)
inc3(4) // 7



// subtract | Number → Number → Number
R.subtract(5, 2) // 3
R.subtract(2, 5) // -3

const dec5Bad = R.subtract(5) // bad implemention (R.subtract(5, {2}))
const dec5Correct = R.subtract(R.__, 5) // dec 5 from R.__
dec5Bad(2) // 3
dec5Correct(2) // -3


// addIndex | (((a …) → b) … → [a] → *) → (((a …, Int, [a]) → b) … → [a] → *)
// map, multiply
const double = R.multiply(2);
R.map(double, [1, 2, 3])
// [ 2, 4, 6 ]
R.map(double, {x: 1, y: 2, z: 3})
// { x: 2, y: 4, z: 6 }

const mapIndexed = R.addIndex(R.map);
const plusIndex = (val, i) => val+i;
mapIndexed(plusIndex, [10, 20, 30]);
// [ 10, 21, 32 ]
// or
R.addIndex(R.map)(plusIndex, [10, 20, 30])



// adjust | Number → (a → a) → [a] → [a]
// toUpper
R.adjust(1, R.toUpper, ['franz', 'franz'])
// [ 'franz', 'FRANZ' ]
R.adjust(-1)(R.add(9))([30, 20, 50])
// [ 30, 20, 59 ]



// all | (a → Boolean) → [a] → Boolean
// gte, lte
const isGreaterThan10 = R.gte(R.__, 10);
R.all(isGreaterThan10, [40, 20, 30]);
// true
const isLessThan100 = R.lte(R.__, 100);
R.all(isLessThan100)([40, 20, 30]);
// true



// allPass | [(*… → Boolean)] → (*… → Boolean)
R.allPass([isGreaterThan10, isLessThan100])(13, 42, 50);
// true
const arr_ap = [20, 30, 999]
R.all(R.allPass([isGreaterThan10, isLessThan100]), arr_ap)
// false