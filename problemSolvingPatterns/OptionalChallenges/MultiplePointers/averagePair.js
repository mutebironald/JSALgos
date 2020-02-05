function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0 || arr.length === undefined) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    let sumAvg = sum / 2;
    if (sumAvg === avg) {
      return true;
    } else if (sumAvg > avg) {
      right--;
    } else {
      left++;
    }
  }
  return false
}

let res = averagePair([1,3,3,5,6,7,10,12,19], 8);
console.log(res)
