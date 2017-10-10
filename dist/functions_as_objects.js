/**
 * Created by schandramouli on 7/16/17.
 */

// This is such a beautiful example, not only does it explain the quirks of JS,
// but also uses CS fundamentals like Hashmaps and stuff <3
'use strict';

var store = {
  nextId: 1,
  cache: {},
  add: function add(fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      // this is assignment and verifying if assignment passes
      // its definitely harder to read tho haha :)
      // is equivalent to doing Boolean(expr)
      // but not equivalent to new Boolean(expr), as that is an object
      // Objects are truthy even if they contain falsy values
      // !! false === Boolean(false) !== new Boolean(false)
      return !!(this.cache[fn.id] = fn);
    } else {
      return false;
    }
  }
};

function ninja() {
  return 1;
}

console.log(store.add(ninja));
console.log(store.add(ninja));
console.log(store);

function ninja2() {
  return 2;
}

console.log(store.add(ninja2));
console.log(store);

// This is memoization function that has a cache and uses that to store
// the previously computed sums, pretty straightforward just like other languages

function isPrime(n) {
  isPrime.cache = isPrime.cache || {};
  if (isPrime.cache[n]) {
    return isPrime.cache[n];
  }
  var prime = n !== 1;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      prime = false;
    }
  }
  return isPrime.cache[n] = prime;
}

console.log(isPrime(4));
console.log(isPrime(9));
console.log(isPrime(5));
console.log(isPrime.cache);

function getElementsMemoized(selector) {
  console.log(selector);
  if (!getElementsMemoized.cache) {
    getElementsMemoized.cache = {};
  }
  console.log(getElementsMemoized.cache);
  // Missing Ruby's ||= here haha
  return getElementsMemoized.cache[selector] = getElementsMemoized.cache[selector] || document.querySelectorAll(selector);
}
//# sourceMappingURL=functions_as_objects.js.map