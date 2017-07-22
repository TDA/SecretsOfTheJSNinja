/**
 * Created by schandramouli on 7/19/17.
 */

// Objective is to write a function that can write X more functions.
// No idea how to go about this, but can try googling.

obj = {};
arr = ['fun_a', 'fun_b', 'fun_c'];
arr.forEach(function (el) {
  obj[el] = new Function(`return function() { return this.${el}.arguments }`)();
});
console.log(obj);
console.log(obj.fun_a('a'));
