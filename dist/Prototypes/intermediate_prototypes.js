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
//# sourceMappingURL=intermediate_prototypes.js.map