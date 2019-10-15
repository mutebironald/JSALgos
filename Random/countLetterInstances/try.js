const here = "!Mutebi Ronald Roninho!";

let len = here.length;
let obj = {};

for (let i = 0; i < len; i++) {
  // pick the letter
  const letter = here[i].toLocaleLowerCase();
  //only alpha-numeric characters whould be allowed to proceed
  /**
   * this could be replaced by the isAlphanumeric(letter) which would be alot faster.
   */
  if (/[a-z0-9]/.test(letter)) {
    if (letter in obj) {
      //increment the object's value by 1.
      obj[letter] += 1;
    } else {
      //set initial object value to 1
      obj[letter] = 1;
    }
    /**
     * we could replace the if-else statement with obj[letter] = ++obj[letter] || 1
     */
  }
}
console.log(obj);

function isAlphaNumeric(letter) {
  var code = letter.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(ode > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
