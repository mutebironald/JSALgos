/**
 * Define function that accepts list of numbers
 * Figure out how many digits the largest number has
 * Loop from k=0 up to this largest number of digits
 * For each iteration of the loop
 *  - create buckets for each digit( 0 - 9)
 * - Place each number in the corresponding bucket based on its kth digit
 *
 * Replace our existing array with values in our buckets, starting with 0 and going up to 9.
 * return list at the end.
 */

const { mostDigits } = require("./mostDigits");
const { getDigit } = require("./getDigit");

function radixSort(nums) {
  //get the maximum digit count of the array.
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    //for a bucket or buckets which will hold the different digits or numbers
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      //get a digit at a particular index with help of max digit count
      let digit = getDigit(nums[i], k);
      //push a numbers to the bucket
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  console.log(nums);
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
