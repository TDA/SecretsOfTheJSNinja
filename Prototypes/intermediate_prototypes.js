lib = require('../lib');

function Person(){

}

Person.prototype.dance = function(){};


function Ninja(){

}
Ninja.prototype = { dance: Person.prototype.dance };

var ninja = new Ninja();

lib.assertCommandLine(ninja instanceof Ninja, 'Still a ninja');
lib.assertCommandLine(ninja instanceof Person, 'And not a person');
lib.assertCommandLine(typeof ninja.dance === 'function', 'But can dance like a person :O')