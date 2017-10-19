'use strict';

var $ = 'lol';

// Inside the IIFE, the $ will always refer to the passed in
// param. This is what jQuery uses to its advantage
(function ($) {
  console.log($);
})('but ha!');

console.log($);
//# sourceMappingURL=iife_parameter_naming.js.map