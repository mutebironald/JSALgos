//checks if two strings are the same using the help of a frequency counter problem solving pattern
function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!
  if (string1.length !== string2.length) {
    return false;
  }
  if (string1 === "" && string2 === "") {
    return true;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val in string1) {
    let value = string1[val];
    frequencyCounter1[value] = ++frequencyCounter1[value] || 1;
  }
  for (let val in string2) {
    let value = string2[val];
    frequencyCounter2[value] = ++frequencyCounter2[value] || 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("rat", "tar");
