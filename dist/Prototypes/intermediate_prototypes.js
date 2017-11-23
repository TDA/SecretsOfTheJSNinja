'use strict';

lib = require('../lib');

function Person() {}

Person.prototype.dance = function () {};

function Ninja() {}
Ninja.prototype = { dance: Person.prototype.dance };

var ninja = new Ninja();

lib.assertCommandLine(ninja instanceof Ninja, 'Still a ninja');
lib.assertCommandLine(ninja instanceof Person, 'And not a person');
lib.assertCommandLine(typeof ninja.dance === 'function', 'But can dance like a person :O');

lib.printHorizontalRule();
Ninja.prototype = new Person();

var newNinja = new Ninja();
lib.assertCommandLine(newNinja instanceof Ninja, 'Still a ninja');
lib.assertCommandLine(newNinja instanceof Person, 'But also  a person');
lib.assertCommandLine(typeof newNinja.dance === 'function', 'And can also dance like a person :O');

lib.printHorizontalRule();
// Gotcha time, never extend Object directly
Object.prototype.keys = function () {
  var keys = [];
  for (var p in this) {
    // or at least do the hasOwn check, else you will be adding to your troubles :D
    if (this.hasOwnProperty(p)) keys.push(p);
  }

  return keys;
};

var obj = { a: 1, b: 2, c: 3 };
lib.assertCommandLine(obj.keys().length == 3, "There are three properties in this object.");
//# sourceMappingURL=intermediate_prototypes.js.map