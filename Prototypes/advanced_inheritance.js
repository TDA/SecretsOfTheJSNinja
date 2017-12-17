var lib = require('../lib');

// Let's simulate traditional inheritance with JS using prototypes
// This will allow us to mimic something very close to React.createClass({x: y}); syntax.

(function () {

  var initializing = false;
  var superPattern = /\b_super\b/;
  
  function isFunction(fn) {
    return typeof fn === 'function';
  }

  function functionCallsSuper(fn) {
    return superPattern.test(fn);
  }

  Object.subClass = function (classMembers) {
    var _super = this.prototype;

    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy all members
    for (var memberName in classMembers) {
      // check if this is a function that makes a call to a `_super()`
      if (isFunction(classMembers[memberName]) && isFunction(_super[memberName]) && functionCallsSuper(classMembers[memberName])) {
        // we need special handling here, this calls super, so we need to
        // a. give the ability to call `_super` from within the subclass (expose it)
        // b. execute the subclass method
        // Pretty much simulating `super` keyword in other languages (and ES6+) :)
        // We need to return a new wrapped function that does a & b.
        (function (name, fn) {
          return function () {
            // store a reference to _super so we can restore it later
            var tmp = this._super;

            // set the new super method to be the method that exists in the superclass prototype
            // Note that `this` is the instance here, since new function scope
            console.log('this?', this);
            this._super = _super[name];
            // Set context to this instance and execute the method
            var returnedValue = fn.apply(this, arguments);

            // Restore the _super method
            this._super = tmp;

            return returnedValue;
          };
        })(memberName, classMembers[memberName]);
      } else {
        // Just copy the member
        prototype[memberName] = classMembers[memberName];
      }
    }

    // Now allow this to have subclassing ability as well, add its prototype etc.
    function Class() {
      if (!initializing && this.init) {
        this.init.apply(this, arguments);
      }
    }

    Class.prototype = prototype;
    Class.constructor = Class;
    Class.subClass = Object.subClass;

    return Class;
  };
})();

// e.g. here will be uncommented once we finish writing the basic structure
var Person = Object.subClass({
  init: function(isDancing) {
    this.dancing = isDancing;
  },
  dance: function() {
    return this.dancing;
  }
});

var Ninja = Person.subClass({
  init: function() {
    this._super(false);
  },
  dance: function() {
    // Ninja-specific stuff here
    return this._super();
  },
  swingSword: function() {
    return true;
  }
});

// All of these should pass for us when our code is done
var person = new Person(true);
lib.assertCommandLine(person.dance(), "The person is dancing.");
var ninja = new Ninja();
lib.assertCommandLine(ninja.swingSword(), "The sword is swinging.");
lib.assertCommandLine(!ninja.dance(), "The ninja is not dancing.");
lib.assertCommandLine(person instanceof Person, "Person is a Person.");
lib.assertCommandLine(ninja instanceof Ninja && ninja instanceof Person, "Ninja is a Ninja and a Person.");

