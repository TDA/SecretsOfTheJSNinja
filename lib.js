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