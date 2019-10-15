//runtime similar to quicksort, though quick sort is preferred since hidden runtime makes it 2-3x faster

//merge sort prefered for linked lists

let merge = (left, right) => {
  let result = [];
  const leftLen = left.length;
  const rightLen = right.length;
  var l = 0;
  var r = 0;
  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
};

let mergeSort = arr => {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

mergeSort([2, 43, 1, 23]);
