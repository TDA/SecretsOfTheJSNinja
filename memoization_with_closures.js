'use strict';

// Let's write a memo function for all functions
Function.prototype.memoized = function(key){
  this._values = this._values || {};
  return this._values[key] !== undefined ?
    this._values[key] :
    this._values[key] = this.apply(this, arguments);
};

// Regular isPrime that has no memo
function isPrimeMemo(num) {
  let prime = num !== 1;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(isPrimeMemo(5));
console.log(isPrimeMemo(55));

// By overriding the function prototype, we can add our own
// memoization to an existing function, two problems with this though:
// 1. Caller needs to know this new method
// 2. The cache is stored on the original method, potentially confusing noobs who call another function
console.log(isPrimeMemo.memoized(5));
console.log(isPrimeMemo.memoized(55));
console.log(isPrimeMemo.memoized._values);
console.log(isPrimeMemo._values);