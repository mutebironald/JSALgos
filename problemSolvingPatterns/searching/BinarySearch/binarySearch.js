/**
 * write a function called binarySearch which accepts a sorted array
 * and a value and returns the index at which the value exists.
 * Otherwise returns -1.
 *
 * NB: it should be more efficient than a linear search.
 */
function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    console.log(start, 'start', end)
    middle = Math.floor((start + end) / 2);
  }

  if (arr[middle] === val) {
    console.log(middle)
    return middle;
  } else {
    console.log(-1)
    return -1;
  }
}

binarySearch([1, 2, 3, 4, 5], -2);
