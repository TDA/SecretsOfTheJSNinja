var centralTimer = {
  timerID: 0,
  timerCallbacks: [],

  addTimerCallback: function(fn) {
    this.timerCallbacks.push(fn);
  },

  start: function () {
    // if there is an existing central timer, don't start a new one
    if (this.timerID) return;

    (function runNextTimer() {
      'use strict';

      for (let i = 0; i < centralTimer.timerCallbacks.length; i++) {
        // execute each callback, and remove it if it returns false, else
        // continue executing it at the next available block
        if (centralTimer.timerCallbacks[i]() === false) {
          // remove
          centralTimer.timerCallbacks.splice(i, 1);
          i--;
        }
      }
      centralTimer.timerID = setTimeout(runNextTimer, 0);
    })();
  },

  stop: function () {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
};

var x = 0;
centralTimer.addTimerCallback(function () {
  console.log(x + ' sai');
  if (x++ >= 5) return false;
});

centralTimer.addTimerCallback(function () {
  console.log(x + ' boy');
  if (x++ >= 10) return false;
});

centralTimer.addTimerCallback(function () {
  console.log(x + ' kathrikai');
  if (x++ >= 15) return false;
});

centralTimer.start();