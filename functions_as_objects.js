/**
 * Created by schandramouli on 7/16/17.
 */

var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if(!fn.id) {
      fn.id = this.nextId++;
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