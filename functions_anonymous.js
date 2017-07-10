/**
 * Created by schandramouli on 7/10/17.
 */

function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  // console.log(text.substr(1, text.length - 2));
  console.log(text.slice(1, text.length - 1));
  return isPalindrome(text.substr(1, text.length - 2));
}

console.log(isPalindrome('saipc'));
console.log(isPalindrome('saias'));