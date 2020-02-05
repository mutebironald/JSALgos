//this kind of splits an array into two i.e left and right, elements are counted from the left and subtracted from the right,
//considering one value at a time until we get the maximum between the left and right.

function tapeEquilibrium(array) {
  let length = array.length;
  let left = array[0];
  let right = array.reduce((a, b) => a + b, 0) - left;
  let maximumDistance = Math.abs(left - right);
  for (let i = 1; i < length; i++) {
    left += array[i];
    right -= array[i];
    let distance = Math.abs(left - right);
    if (distance > maximumDistance) {
      maximumDistance = distance;
    }
  }
  return maximumDistance;
}

let result = tapeEquilibrium([12, 3, 1, 5]);
console.log(result)
