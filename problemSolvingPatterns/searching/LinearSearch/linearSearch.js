function linearSearch(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}

let mori = linearSearch([1, 2, 3], 2);
console.log(mori, ":::");
