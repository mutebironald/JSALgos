function digitCount(num) {
  let len;
  if (num === 0) {
    len = 1;
    // console.log(len)
    return len;
  }
  if (num === undefined) {
    return;
  }
  num = Math.abs(num);
  num = num.toString();
  len = num.length;
  //   console.log(len)
  return len;
}

//alternative solution
// function digitCount(num) {
//   if (num === 0) return 1;
//   return Math.floor(Math.log10(Math.abs(num))) + 1;
// }

module.exports = {
  digitCount
};
