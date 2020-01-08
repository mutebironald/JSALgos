/**
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the 
 * maximum sum of a subarraywith the length of the number passed to the function
 * 
 * Note that a subarray must consist of consecutive elements from the original array. In the first example below
 * [100, 200, 300] is a sub array of the original array but  [100, 300] is not
 * 
 * Example maxSubarraySum([100, 200, 300, 400], 2) // 700
 */
function maxSubarraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!\
  if (num > arr.length) {
    return null;
  }
  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    // currentTotal += arr[i] - arr[i - num];
    currentTotal = currentTotal + arr[i] - arr[i - num]
    total = Math.max(total, currentTotal);
  }
  console.log(total)
  return total;
}
maxSubarraySum([1, 2, 34, 4, 5], 3);
