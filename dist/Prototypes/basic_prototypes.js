"use strict";

function Ninja() {}

Ninja.prototype.swingSword = function () {
  return true;
};

var ninja1 = Ninja();
var ninja2 = new Ninja();
console.log(ninja1 && ninja1.swingSword());
console.log(ninja2.swingSword());
//# sourceMappingURL=basic_prototypes.js.map