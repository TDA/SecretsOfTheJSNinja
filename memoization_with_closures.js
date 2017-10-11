'use strict';

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