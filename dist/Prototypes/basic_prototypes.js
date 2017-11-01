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
//# sourceMappingURL=basic_prototypes.js.map