/**
 * Created by schandramouli on 7/16/17.
 */

// This is such a beautiful example, not only does it explain the quirks of JS,
// but also uses CS fundamentals like Hashmaps and stuff <3
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
      // this is assignment and verifying if assignment passes
      // its definitely harder to read tho haha :)
      // is equivalent to doing Boolean(expr)
      // but not equivalent to new Boolean(expr), as that is an object
      // Objects are truthy even if they contain falsy values
      // !! false === Boolean(false) !== new Boolean(false)
      return !! (this.cache[fn.id] = fn);
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
