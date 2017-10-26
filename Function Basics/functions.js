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
b_creep = new Creep();


function juggle() {
  var result = 0;
  for(var n = 0; n < arguments.length; n++) {
    result += arguments[n];
  }
  this.result = result;
}

// This would change the internal state of the a_creep
juggle.apply(a_creep, [1, 2, 3]);
console.log(a_creep);

// call is the same as apply, except that the args are passed in separately
juggle.call(a_creep, 4, 5, 6);
console.log(a_creep);

// Practical application of these methods to bind context to a function
function forEach(list, callback) {
  for (var n = 0; n < list.length; n++) {
    // For each element, bind the callback with that element,
    // and pass in the index to the callback as an argument
    callback.call(list[n], n);
  }
}

// Now we can use it like a traditional arrays.forEach, but as a function call
var array = ['a', 'b', 'c'];
forEach(array, function (index) {
  // check binding
  console.log(this);
  // print item
  console.log(array[index]);
});