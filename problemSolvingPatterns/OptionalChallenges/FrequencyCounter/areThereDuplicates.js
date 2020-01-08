function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let input = [...arguments];
  let lookup = {};
  for (let i = 0; i < input.length; i++) {
    let value = input[i];
    lookup[value] = ++lookup[value] || 1;
  }
  for (let key in lookup) {
    if (lookup[key] > 1) {
      return true;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3, 4, 1, 5, 5, "a");
