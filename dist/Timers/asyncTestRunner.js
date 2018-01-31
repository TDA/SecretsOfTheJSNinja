'use strict';

var asyncTestRunner = {
  paused: false,
  testQueue: [],

  addTest: function addTest(fn) {
    console.log(this.testQueue);
    this.testQueue.push(fn);
  },

  runTests: function runTests() {
    if (!this.paused && this.testQueue.length > 0) {
      // if there are tests left and test suite isn't paused, run the tests
      var fn = this.testQueue.shift();
      fn();
      if (!this.paused) this.resume();
    }
  },

  pause: function pause() {
    this.paused = true;
  },

  resume: function resume() {
    this.paused = false;
    setTimeout(this.runTests.apply(this), 10);
  }
};

var x = 0;
asyncTestRunner.addTest(function () {
  console.log(x++ + ' sai');
  asyncTestRunner.pause();
  setTimeout(function () {
    console.log(x + ' timed');
    asyncTestRunner.resume();
  }, 0);
});

asyncTestRunner.addTest(function () {
  console.log(x++ + ' boy');
});

asyncTestRunner.addTest(function () {
  console.log(x++ + ' kathrikai');
});

asyncTestRunner.addTest(function () {
  console.log(x++ + ' well?');
});

asyncTestRunner.runTests();
//# sourceMappingURL=asyncTestRunner.js.map