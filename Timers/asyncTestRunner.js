var asyncTestRunner = {
  paused: false,
  queue: [],

  addTest: function(fn) {
    this.queue.push(fn);
  },

  runTest: function () {
    if (!this.paused && this.queue.length > 0) {
      // if there are tests left and test suite isnt paused, run the tests
      var fn = this.queue.shift();
      fn();
      if (!this.paused) this.resume();
    }
  },

  pause: function () {
    this.paused = true;
  },

  resume: function () {
    this.paused = false;
    setTimeout(this.runTest, 1);
  }
};
