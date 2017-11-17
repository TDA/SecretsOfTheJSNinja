lib = require('../lib');

function Ninja(){
  this.swung = false;
  this.swingSword = function(){
    return this.swung;
  };
}

Ninja.prototype.swingSword = function(){
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
lib.printHorizontalRule();

// This is pretty much what the engine does to fetch a property on a JS object:
// 1. It searches the object itself to see if it contains the property, if not
// 2. It searches the prototype of the object to see if it contains the property, if not
// 3. Return undefined.
var obj = new Object();
// Notice how the prototype is set on the Constructor, not the object itself
// The prototype of the object is actually undefined
Object.prototype.property = 'sai';
// Similarly, look at how we call the prototype on the constructor and it prints out the value.
console.log(obj.property || undefined);
console.log(obj.property === Object.prototype.property);
// Surpriseee!!! You can also access the property *directly* on the constructor.
console.log(Object.property);
console.log(Object.prototype.property === Object.property);
// First time I am actually using `===` more than once in a statement haha. EDIT: Apparently, doesn't work as intended
console.log(Object.prototype.property === Object.property
  && Object.property === obj.property
  && obj.property !== (obj.prototype && obj.prototype.property));
// Need to figure why this did not work, haha
// console.log(Object.prototype.property === Object.property === obj.property !== (obj.prototype && obj.prototype.property));
lib.printHorizontalRule();

// let us change some values
// whoops, no change to the other values :O
Object.property = 1;
console.log(Object.property);
console.log(Object.prototype.property);
console.log(obj.property);

// But wait, what?? EDIT: nvm, just my bad `===`
console.log(Object.prototype.property === Object.property
  && Object.property === obj.property
  && obj.property !== (obj.prototype && obj.prototype.property));
lib.printHorizontalRule();

// What if we change the prototype instead?
Object.prototype.property = 'maybe?';
console.log(Object.property);
console.log(Object.prototype.property);
console.log(obj.property);

// So despite both `.prototype.property` and `.property` making changes to the
// Constructor, they do not update each other. But the object instance gets the changes.