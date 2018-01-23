"use strict";

var timers = {
  timerID: 0,
  timers: [],

  add: function add(fn) {
    this.timers.push(fn);
  },

  stopTimer: function stopTimer() {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
};
//# sourceMappingURL=centralTimerControl.js.map