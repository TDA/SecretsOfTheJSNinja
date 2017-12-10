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
  let superPattern = /\b_super\b/;
  
  function isFunction(fn) {
    return typeof fn === 'function';
  }

  function functionCallsSuper() {
    return superPattern.test(properties[name]);
  }

  Object.subclass = function (classMembers) {
    let _super = this.prototype;

    initializing = true;
    let prototype = new this();
    initializing = false;

    for (let memberName in classMembers) {
      // check if this is a function that makes a call to a `_super()`
      if (isFunction(classMembers[memberName]) && isFunction(_super[memberName]) && functionCallsSuper(classMembers[memberName])) {
        // we need special handling here, this calls super, so we need to
        // a. give the ability to call `_super` from within the subclass (expose it)
        // b. execute the subclass method
        // Pretty much simulating `super` keyword in other languages (and ES6+) :)
        // We need to return a new wrapped function that does a & b.
        (function (name, fn) {
          return function () {
            // store a reference to _super
            let tmp = this._super;

            this._super = _super[name];
            // Set context of the called method
            var returnedFunction = fn.apply(this, arguments);

            // Reset the _super method
            this._super = tmp;

            return returnedFunction;
          };
        })(memberName, classMembers[memberName]);
      } else {
        // Just copy the member
        prototype[memberName] = classMembers[memberName];
      }
    }
  };
})();
