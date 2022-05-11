const R = require('ramda');

// ascend | Ord b => (a → b) → a → a → Number
// descend, sort
const people = [{ age: 20 }, { age: 34 }, { age: 8 }];
const byAge = R.ascend(R.prop('age'));
R.sort(byAge, people);
// [ { age: 8 }, { age: 20 }, { age: 34 } ]

const names = ['franz', 'ramda', 'js'];
R.sort(R.ascend(n=>n), names);
// [ 'franz', 'js', 'ramda' ]

const califications = [20, 10, 18, 9, 14];
R.sort(R.descend(e=>e), califications);
// [ 20, 18, 14, 10, 9 ]



// assoc | Idx → a → {k: v} → {k: v} | Idx = String | Int
// dissoc | String → {k: v} → {k: v}
// pick
const myData = {
  name: 'franz',
  age: 23,
  corrupData: 'asdkjlas',
  yearB: 1999
};
// add or update sign
const newData = R.assoc('sign', 'tauro', myData);
// { name: 'franz', age: 23, sign: 'tauro' }

R.dissoc('corrupData', newData);
// { name: 'franz', age: 23, sign: 'tauro' }

const onlyAgeAndAgeOfB = R.pick(['age', 'yearB'], myData);
// { age: 23, yearB: 1999 }



// assocPath | [Idx] → a → {a} → {a}
// dissocPath | [Idx] → {k: v} → {k: v}
// Idx = String | Int | Symbol
const nickData = {
  data: {
    nick: {
      val: 'nick_val',
      csgo: 'nick_csgo'
    }
  }
};
// add or update from path
R.assocPath(['data', 'nick', 'val'], 'updateValNIck', nickData)
// { data: { nick: { val: 'updateValNIck', csgo: 'nick_csgo' } } }

// bye csgo
R.dissocPath(['data', 'nick', 'csgo'], nickData)
// { data: { nick: { val: 'nick_val' } } }
