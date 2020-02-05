// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}

function isPalindrome(str) {
  let value = "";
  for (let i = str.length - 1; i >= 0; i--) {
    value += str[i];
  }
  return str === value;
}

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  return false;
}

let res = isPalindrome("tacpocat");
console.log(res);
