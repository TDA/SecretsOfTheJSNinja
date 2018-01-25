'use strict';

var centralTimer = {
  timerID: 0,
  timerCallbacks: [],

  add: function add(fn) {
    this.timerCallbacks.push(fn);
  },

  startCentralTimer: function startCentralTimer() {
    // if there is an existing central timer, don't start a new one
    if (this.timerID) return;

    (function runNextTimer() {
      for (var i = 0; i < centralTimer.timerCallbacks.length; i++) {
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

  stopCentralTimer: function stopCentralTimer() {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
};

centralTimer.add(function () {
  console.log('sai');
});

centralTimer.add(function () {
  console.log('boy');
});

centralTimer.add(function () {
  console.log('kathrikai');
});
//# sourceMappingURL=centralTimerControl.js.map