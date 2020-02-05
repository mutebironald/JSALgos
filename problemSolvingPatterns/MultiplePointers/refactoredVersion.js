//this is the refactored version and it has O(n) complexity which is better than the earlier O(n2)
//this algorithm has a weakness in that it will only look at the first digit and get any other digit in the array to negate the first one
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    console.log("sum", sum)
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let val = sumZero([1, 2, 1, 0, -2, 1]);
console.log(val)
