'use strict';

function someRandom(a) {
  console.log(a);
}

function someRandom2(a, b) {
  console.log(a, b);
}

// WHOAAA, crazy cool shizz
// console.log(someRandom.length);
// console.log(someRandom2.length);


let beverages = {
  items: ['coffee', 'tea', 'juice', 'cranberry juice', 'apple juice']
};
function addOrOverloadMethod(object, name, fn) {
  console.log("I am new", fn.length);
  let old = object[name];
  object[name] = function () {
    console.log(arguments);
    if (fn.length === arguments.length) {
      return fn.apply(this, arguments);
    } else if (typeof old === 'function') {
      return old.apply(this, arguments);
    }
  };
  console.log(object[name]);
}

addOrOverloadMethod(beverages, 'find', function () {
  return this.items;
});

addOrOverloadMethod(beverages, 'find', function (keyword) {
  // exact match
  return this.items.filter(function (item) {
    return item.indexOf(keyword) === 0;
  });
});

addOrOverloadMethod(beverages, 'find', function (keyword1, keyword2) {
  return this.items.filter(function (item) {
    return item.indexOf(keyword1) >= 0 && item.indexOf(keyword2) >= 0;
  });
});

console.log('-------------------------------------------------');
console.log(beverages.find());
console.log('-------------------------------------------------');
console.log(beverages.find('juice'));
console.log('-------------------------------------------------');
console.log(beverages.find('juice', 'cran'));
console.log('-------------------------------------------------');
console.log(beverages.find('juice'));
console.log('-------------------------------------------------');
console.log(beverages.find());
