const R = require('ramda');

// bind | (* → *) → {*} → (* → *)
// :the bind() method creates a new function that, when called,
// has its "this" keyword set to the provided value


// Example 1
const Greeter = function (phrase) {
  this.phrase = phrase;
};

Greeter.prototype.greet = function (name) {
  return this.phrase + name;
};

const helloer = new Greeter('Hello, ');
helloer.greet('Franz');
// Hello, Franz

console.log(helloer.greet(R.toUpper('franz')));
// Hello, FRANZ
// similar to:
R.pipe(R.toUpper, helloer.greet, console.log)('franz');
// undefinedFRANZ
// this happens because reference to "this" in "this.phrase"
// isnt in the expected context
// Fix:
R.pipe(R.toUpper, R.bind(helloer.greet, helloer), console.log)('franz');
// Hello, FRANZ


// Example 2
const Greeter2 = {
  init: function (phrase) {
    return Object.assign({}, this, { phrase })
  },
  greet: function (name) {
    return this.phrase + name
  }
};

const helloer2 = Greeter2.init('Welcome, ');
helloer2.greet('franz');
// Welcome, franz

R.pipe(R.toUpper, helloer2.greet, console.log)('franz');
// undefinedFRANZ
R.pipe(R.toUpper, R.bind(helloer2.greet, helloer2), console.log)('franz');
// Welcome, franz