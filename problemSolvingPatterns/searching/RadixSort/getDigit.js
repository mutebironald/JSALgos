/**
 * radix sort is not a comparison algo, rather its a
 *integer sort that works because of a special property.
 */

function getDigit(dig, pos = 0) {
  dig = Math.abs(dig);
  let dArray = dig
    .toString()
    .split("")
    .reverse();
  if (dArray[pos] === undefined) return 0;
  return dArray[pos];
}

// alternative solution
// function getDigit(num, i){
//   console.log(Math.floor(Math.abs(num) / Math.pow(10, i)) % 10)
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
// }

// getDigit(534, 2);

module.exports = {
  getDigit
};
