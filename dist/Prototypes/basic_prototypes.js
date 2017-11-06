"use strict";

function Ninja() {
  this.swung = false;
  this.swingSword = function () {
    return this.swung;
  };
}

Ninja.prototype.swingSword = function () {
  return !this.swung;
};

var ninja1 = Ninja();
var ninja2 = new Ninja();
console.log(ninja1 && ninja1.swingSword());
console.log(ninja2.swingSword());

// Does not have to be in order, prototypes will be
// 'attached', rather than 'added', so even after creation
// of the object, you can magically attach properties
Ninja.prototype.doubleSwing = function () {
  return 2;
};

console.log(ninja2.doubleSwing());
//# sourceMappingURL=basic_prototypes.js.map