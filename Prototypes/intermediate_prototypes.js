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
lib.assertCommandLine(typeof ninja.dance === 'function', 'But can dance like a person :O');

lib.printHorizontalRule();
Ninja.prototype = new Person();

var newNinja = new Ninja();
lib.assertCommandLine(newNinja instanceof Ninja, 'Still a ninja');
lib.assertCommandLine(newNinja instanceof Person, 'But also  a person');
lib.assertCommandLine(typeof newNinja.dance === 'function', 'And can also dance like a person :O');

lib.printHorizontalRule();
// Gotcha time, never extend Object directly
Object.prototype.keys = function() {
  var keys = [];
  for (var p in this) {
    // or at least do the hasOwn check, else you will be adding to your troubles :D
    if (this.hasOwnProperty(p))
      keys.push(p);
  }

  return keys;
};

var obj = { a: 1, b: 2, c: 3 };
lib.assertCommandLine(obj.keys().length == 3, "There are three properties in this object.");
lib.printHorizontalRule();

// Gotcha 2 - Numbers
Number.prototype.add = function(num){
  return this + num;
};
var n = 5;
lib.assertCommandLine(n.add(3) == 8, 'Works when num is a var');
lib.assertCommandLine((5).add(3) == 8, 'Works if num is wrapped in paranthesis :O');
// lib.assertCommandLine(5.add(3) == 8, 'Blows up otherwise LOL');

lib.printHorizontalRule();
// Noob issues here:
function User(first, last) {
  this.name = first + " " + last;
}

// OUCH, missed the `new`, and this calls it as a function, NOT a constructor
var user = User("Ichigo", "Kurosaki");
lib.assertCommandLine(user && user.name, 'Name is set, NOT');

// even worse side-effect, introducing a global variable due to calling it as
// a function instead of constructor :(
lib.assertCommandLine(name === 'Ichigo Kurosaki', 'HAHAHAHA LOL');

// Being ninjas, let's fix this so users don't make mistakes
function User2(first, last) {
  if (!(this instanceof arguments.callee)) {
    return new User(first, last);
  }

  this.name = first + " " + last;
}

var kodaichi = User2('double', 'kodaichi');
lib.assertCommandLine(kodaichi.name, 'Name is set');