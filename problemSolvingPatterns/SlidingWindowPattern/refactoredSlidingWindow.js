//add up num(numbers) that would give you a maximum sum in the array supplied(arr)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null;
  }
  for(let i = 0; i< num; i++){
      maxSum += arr[i] 
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let res = maxSubarraySum([12,23,4,1,23,1], 2)
console.log(res)
