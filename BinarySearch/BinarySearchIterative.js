//binary search works for an already sorted list.
let binarySearchIterative = (arr, key) => {
  //note the key is the item you want to find in the array
  let min = 0,
    max = arr.length - 1,
    guess;
  while (min <= max) {
    //the guess was written this way so as to avoid overflow on longer arrays
    guess = Math.floor(min + (max - min) / 2); // this can be (max + min)/2 if the length of the array is not long.
    if (arr[guess] == key) {
      return key + " found at position " + guess;
    } else if (arr[guess] < key) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1; //shows that element is not found
};

console.log(binarySearchIterative([1, 2, 3, 4], 4), "hello");
