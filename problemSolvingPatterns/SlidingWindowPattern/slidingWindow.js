//add up num(numbers) that would give you a maximum sum in the array supplied(arr)
function maxSubarraySum(arr, num) {
  let temp;
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    //reassign max if temp value is greater.
    if (temp > max) {
      max = temp;
    }
  }
  console.log(temp, "temp")
  return max;
}

let res = maxSubarraySum([12,23,4,1,23,1], 2)
console.log(res)
