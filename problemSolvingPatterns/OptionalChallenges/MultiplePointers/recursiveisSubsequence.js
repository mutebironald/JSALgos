/**
 * Takes in two strings and checks wether the characters in the first string form a subsequence of
 * the characters in the second string. i.e the function should check wether the characters in the first string
 * appear somewhere in the second string without their order changing.
 * isSubsequence('abc', 'acb') //false(order matters)
 * isSubsequence('sing', 'sting') //true
 */

//NB: This soltn is recursive but not  O(1) space
function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  if (str1.length === 0) {
    return true;
  }
  if (str2.length === 0) {
    return false;
  }
  if (str2[0] === str1[0]) {
    return isSubsequence(str1.slice(1), str2.slice(1));
  }
  return isSubsequence(str1, str2.slice(1));
}

isSubsequence("Hello", "Hello World");
