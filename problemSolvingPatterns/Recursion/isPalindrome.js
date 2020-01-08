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

isPalindrome("tacocat");
