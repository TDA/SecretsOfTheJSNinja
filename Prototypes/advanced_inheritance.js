var lib = require('../lib');

// Let's simulate traditional inheritance with JS using prototypes
// This will allow us to mimic something very close to React.createClass({x: y}); syntax.

// e.g. here will be uncommented once we finish writing the basic struture
// var Person = Object.subClass({
//   init: function(isDancing) {
//     this.dancing = isDancing;
//   },
//   dance: function() {
//     return this.dancing;
//   }
// });

// var Ninja = Person.subClass({
//   init: function() {
//     this._super(false);
//   },
//   dance: function() {
//     // Ninja-specific stuff here
//     return this._super();
//   },
//   swingSword: function() {
//     return true;
//   }
// });


// All of these should pass for us when our code is done
// var person = new Person(true);
// lib.assertCommandLine(person.dance(), "The person is dancing.");
// var ninja = new Ninja();
// lib.assertCommandLine(ninja.swingSword(), "The sword is swinging.");
// lib.assertCommandLine(!ninja.dance(), "The ninja is not dancing.");
// lib.assertCommandLine(person instanceof Person, "Person is a Person.");
// lib.assertCommandLine(ninja instanceof Ninja && ninja instanceof Person, "Ninja is a Ninja and a Person.");

(function () {
  'use strict';

  let initializing = false;

  Object.subclass = function (classMembers) {

    initializing = true;
    let proto = new this();
    initializing = false;

    for (let memberName in classMembers) {
      // check if this is a function that makes a call to a `_super()`
      if (typeof classMembers[memberName] === 'function' && functionCallsSuper(classMembers[memberName])) {
        // we need special handling here
      } else {
        // Just copy the member
        proto[memberName] = classMembers[memberName];
      }
    }
  };
})();
