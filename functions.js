/**
 * Created by schandramouli on 6/12/17.
 */

// Functional array sort
array = [6, 5, 3, 2, 8, 10];
array.sort(function (value1, value2) {
  return value1 > value2;
});
console.log(array);
array.sort(function () {
  return 1; // return true is essentially array.reverse :O :O
});
console.log(array);

// regular function
function some_func() {
  //console.log(this);
}

some_func();

// This though, is a method.
var o = {};
o.whatever = function() {
  return this;
};
// returns the object that owns the method (not the method itself)
console.log(o.whatever().whatever());
console.log(o.whatever().whatever().whatever().hasOwnProperty('whatever'));

// This is a constructor
function Creep() {
  this.skulk = function() { return this; };
}

a_creep = new Creep();
console.log(a_creep);
