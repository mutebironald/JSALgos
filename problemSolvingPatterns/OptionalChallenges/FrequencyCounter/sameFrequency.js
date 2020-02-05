function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  (num1 = num1.toString()), (num2 = num2.toString());
  if (num1.length !== num2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let i = 0; i < num1.length; i++) {
    let value = num1[i];
    frequencyCounter1[value] = ++frequencyCounter1[value] || 1;
  }

  for (let i = 0; i < num2.length; i++) {
    let value = num2[i];
    frequencyCounter2[value] = ++frequencyCounter2[value] || 1;
  }

  for (let k in frequencyCounter1) {
    if (frequencyCounter1[k] !== frequencyCounter2[k]) {
      return false;
    }
    if (!(k in frequencyCounter2)) {
      return false;
    }
  }
  return true;
}

let val = sameFrequency(34, 14);
console.log(val)
