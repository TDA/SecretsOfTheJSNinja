/**
 * Created by schandramouli on 6/10/17.
 */
function take(users, ccName, mail) {

  if (users[ccName]) {
    users[ccName].push(mail)
  } else {
    users[ccName] = [mail]
  }
  return users;
}

function take2(users, ccName, mail) {
  users[ccName] = users[ccName] || [];
  users[ccName].push(mail);
  return users;
}

users1 = {
  'cc': ['something']
};

users1_copy = {
  'cc': ['something']
};

users2 = {
};

users2_copy = {
};

var mail = 'hello to everyone';

console.log(take(users1, 'cc', mail));
console.log(take2(users1_copy, 'cc', mail));
console.log(take2(users2, 'cc', mail));
console.log(take(users2_copy, 'cc', mail));

(function () {
  var results;
  this.assert = function (value, message) {
    const li = document.createElement("li");
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
