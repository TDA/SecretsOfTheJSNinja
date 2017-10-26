/**
 * Created by schandramouli on 7/10/17.
 */

function isPalindrome(text) {
  if (text) {
    if (text.length <= 1) return true;
    if (text.charAt(0) != text.charAt(text.length - 1)) return false;
    // console.log(text.substr(1, text.length - 2)); slice does what you expect, substr does not
    console.log(text.slice(1, text.length - 1));
    return isPalindrome(text.substr(1, text.length - 2));
  }
  return false;
}

console.log(isPalindrome('saipc'));
console.log(isPalindrome('saias'));

var ninja = {
  chirp: function(n) {
    return n > 1 ? ninja.chirp(n - 1) + '-chirp' : 'chirp';
  }
};

console.log(ninja.chirp(3));

var samurai = {
  chirp: ninja.chirp
};

console.log(samurai.chirp(3));

// Now if we change the value of the original chirp,
// samurai ALSO gets affected
ninja.chirp = {};
try {
  console.log(samurai.chirp(3));
} catch (e) {
  console.log(e);
}

// make it `this` instead of ninja.chirp
ninja.chirp = function(n) {
  return n > 1 ? this.chirp(n - 1) + '-chirp' : 'chirp';
};

samurai = {
  chirp: ninja.chirp
};
console.log(samurai.chirp(3));

// Now if we change the value of the original chirp,
// samurai DOES NOT get affected
ninja.chirp = {};
try {
  console.log(samurai.chirp(3));
} catch (e) {
  console.log('I am alright, I dont get here');
  console.log(e);
}

// Other ways to achieve the same thing
chirp = function someName(n) {
  return n > 1 ? someName.chirp(n - 1) + '-chirp' : 'chirp';
};

// but inline functions aren't available outside the initial scope
try {
  console.log(someName);
} catch (e) {
  console.log('oops');
}

