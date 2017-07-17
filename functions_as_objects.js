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