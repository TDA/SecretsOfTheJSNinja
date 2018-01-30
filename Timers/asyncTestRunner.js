var asyncTestRunner = {
  paused: false,
  testQueue: [],

  addTest: function(fn) {
    console.log(this.testQueue);
    this.testQueue.push(fn);
  },

  runTests: function () {
    if (!this.paused && this.testQueue.length > 0) {
      // if there are tests left and test suite isn't paused, run the tests
      var fn = this.testQueue.shift();
      fn();
      if (!this.paused) this.resume();
    }
  },

  pause: function () {
    this.paused = true;
  },

  resume: function () {
    this.paused = false;
    setTimeout(this.runTests.apply(this), 10);
  }
};

var x = 0;
asyncTestRunner.addTest(function () {
  console.log(x++ + ' sai');
  setTimeout(function () {
    console.log(x + ' timed');
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