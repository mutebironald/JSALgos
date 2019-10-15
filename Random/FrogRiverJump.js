//frog river jump codility
function Solution(X, A) {
  let leaves = {};//using an Object helps in item access since it will be instant lookup.
  let steps = X;
  let readyToJump = [...Array(X + 1).keys()].reduce((a, b) => a + b);
  for (let i = 0; i < X; i++) {
    leaves[steps] = false;
    steps--;
  }

  for (let i = 0; i < A.length; i++) {
    if (leaves[A[i]] === false) {
      leaves[A[i]] = true;
      readyToJump -= A[i];
    }
    if (readyToJump === 0) {
      return i;
    }
  }

  return -1;
}

console.log(Solution(4, [3, 2, 3, 1, 55, 2, 4]));
