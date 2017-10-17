'use strict';

// Let's write a memo function for all functions

Function.prototype.memoized = function (key) {
  this._values = this._values || {};
  return this._values[key] !== undefined ? this._values[key] : this._values[key] = this.apply(this, arguments);
};

// Regular isPrime that has no memo
function isPrimePlain(num) {
  var prime = num !== 1;
  for (var i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(isPrimePlain(5));
console.log(isPrimePlain(55));

// By overriding the function prototype, we can add our own
// memoization to an existing function, two problems with this though:
// 1. Caller needs to know this new method
// 2. The cache is stored on the original method, potentially confusing noobs who call another function
console.log(isPrimePlain.memoized(5));
console.log(isPrimePlain.memoized(55));
console.log(isPrimePlain.memoized._values);
console.log(isPrimePlain._values);

// To fix this, lets wrap isPrimePlain in a closure, bind the scope
// to memoized(), and call it as though nothing extra is happening
Function.prototype.memoize = function () {
  var fn = this;
  // Pretty much return the function wrapped with a call to the memoized() version
  // Look at how the closure enables us to do something that is otherwise not very
  // straightforward. It feels like all we are doing is calling the function wrapped
  // in another, but the context binding is essential and only possible due to closures.
  return function () {
    return fn.memoized.apply(fn, arguments);
  };
};
var isPrimeMemoized = isPrimePlain.memoize();
//# sourceMappingURL=memoization_with_closures.js.map