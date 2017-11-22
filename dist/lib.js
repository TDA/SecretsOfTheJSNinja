'use strict';

/**
 * Created by schandramouli on 6/10/17.
 */
function take(users, ccName, mail) {

  if (users[ccName]) {
    users[ccName].push(mail);
  } else {
    users[ccName] = [mail];
  }
  return users;
}

function take2(users, ccName, mail) {
  users[ccName] = users[ccName] || [];
  users[ccName].push(mail);
  return users;
}

function getObjectWithCc() {
  return {
    'cc': ['something']
  };
}

function getObject() {
  return {};
}

var mail = 'hello to everyone';

// console.log(take(getObjectWithCc(), 'cc', mail));
// console.log(take2(getObjectWithCc(), 'cc', mail));
// console.log(take2(getObject(), 'cc', mail));
// console.log(take(getObject(), 'cc', mail));

(function () {
  var results;
  this.assert = function (value, message) {
    var li = document.createElement("li");
    li.className = value ? "pass" : "fail";
    li.appendChild(document.createTextNode(message));
    results.appendChild(li);
    if (!value) {
      var test_group = li.parentNode.parentNode;
      test_group.classList.remove("pass");
      test_group.classList.add("fail");
    }
    return li;
  };
  this.test = function test(name, fn) {
    // Get the global results context (ul)
    results = document.getElementById("assert-results");
    // Get the context (li) for the current `test`
    var test_group = assert(true, name);
    test_group.classList.add('test-group');
    results = test_group.appendChild(document.createElement("ul"));
    fn();
  };
})();

var assertCommandLine = function assertCommandLine(value, message) {
  'use strict';

  console.log(value, message);
};

var printHorizontalRule = function printHorizontalRule() {
  console.log("------------------------------------------------------------");
};

module.exports = {
  assertCommandLine: assertCommandLine,
  printHorizontalRule: printHorizontalRule
};
//# sourceMappingURL=lib.js.map