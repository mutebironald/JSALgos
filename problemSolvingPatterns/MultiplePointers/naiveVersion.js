//this type of approach would benefit from a multiple pointers pattern refactor.
function zeroSum(arr) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        list.push([arr[i], arr[j]]);
      }
    }
  }
  return list;
}

var here = zeroSum([2, -1, 0, -2, 1]);
console.log(here);
