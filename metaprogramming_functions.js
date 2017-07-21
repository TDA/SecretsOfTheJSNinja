/**
 * Created by schandramouli on 7/19/17.
 */

// Objective is to write a function that can write X more functions.
// No idea how to go about this, but can try googling.

arr = ['fun_a', 'fun_b', 'fun_c'];
arr.forEach(function (el) {
  var x = new Function('return function() { console.log(this.name) }');
  console.log(x);
});
