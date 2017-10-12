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