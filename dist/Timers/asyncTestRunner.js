"use strict";

var asyncTestRunner = {
  paused: false,
  queue: [],

  addTest: function addTest(fn) {
    this.queue.push(fn);
  },

  runTest: function runTest() {
    if (!this.paused && this.queue.length > 0) {
      // if there are tests left and test suite isnt paused, run the tests
      var fn = this.queue.shift();
      fn();
      if (!this.paused) this.resume();
    }
  },

  pause: function pause() {
    this.paused = true;
  },

  resume: function resume() {
    this.paused = false;
    setTimeout(this.runTest, 1);
  }
};
//# sourceMappingURL=asyncTestRunner.js.map