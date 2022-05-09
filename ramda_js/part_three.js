const R = require('ramda');

// aperture | Number → [a] → [[a]] n-tuples consecutive
const peopleQueue = ['01', '02', '03', '04'];
const possibleInteractions = R.aperture(2, peopleQueue);
// [ [ '01', '02' ], [ '02', '03' ], [ '03', '04' ] ]
R.aperture(3, [1, 2, 3, 4])
// [ [ 1, 2, 3 ], [ 2, 3, 4 ] ]



// append & prepend | a → [a] → [a]
const addItem_Queue = R.append('task 3', ['task 1', 'task 2'])
// [ 'task 1', 'task 2', 'task 3' ]
const addBook_Stack = R.prepend('last book', ['book 1', 'book 2'])
// [ 'last book', 'book 1', 'book 2' ]



// apply | (*… → a) → [*] → a
const ages = [12, 45, 56, 23, 78]
R.apply(Math.max, ages) // 78



// applySpec | {k: ((a, b, …, m) → v)} → ((a, b, …, m) → {k: v})
// divide
const allPossibleOperations = R.applySpec({
  sum: R.add,
  subt: R.subtract,
  mult: R.multiply,
  div: R.divide
});
allPossibleOperations(40, 8)
// { sum: 48, subt: 32, mult: 320, div: 5 }

R.applySpec({
  anyFn: (...s) => {
    // console.log(s); // [ 'a', 3, true ]
    return s.join()
  }
})('a', 3, true) // { anyFn: 'a,3,true' }



// applyTo | a → (a → b) → b
const toMyName = R.applyTo('franz');
toMyName(R.toUpper)
// 'FRANZ'
toMyName(R.repeat(R.__, 3))
// [ 'franz', 'franz', 'franz' ]