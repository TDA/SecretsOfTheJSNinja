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