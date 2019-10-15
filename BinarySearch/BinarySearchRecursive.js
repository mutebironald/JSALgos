let binarySearchRecursive = (arr, key, min, max) => {
  if (min > max) {
    return -1;
  } else {
    let guess = Math.floor(min + (max - min) / 2);
    if (arr[guess] == key) {
      return key + " found at position " + guess;
    } else if (arr[guess] < key) {
      return binarySearchRecursive(arr, key, guess + 1, max);
    } else {
      return binarySearchRecursive(arr, key, min, guess - 1);
    }
  }
};
