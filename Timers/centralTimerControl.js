var timers = {
  timerID: 0,
  timers: [],

  add: function(fn) {
    this.timers.push(fn);
  },

  stopTimer: function () {
    clearTimeout(this.timerID);
    this.timerID = 0;
  }
};