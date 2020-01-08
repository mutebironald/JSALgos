function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //commented out is the es6 swap version.
  //   const swap = (arr, idx1, idx2) => {
  //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  //   };

  
  // We are assuming the pivot is always the first element
  let pivotElement = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotElement > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// pivot([3, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  console.log(arr);
  return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3]);
