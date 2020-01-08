function countUniqueValues(arr) {
  const lookup = {};
  // add whatever parameters you deem necessary - good luck!
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let number = arr[i];
      lookup[number] ? lookup[number] +=1 : lookup[number] = 1;
  }
  let count = 0
  for(key in lookup){
      count++
  }
  return count;
}

countUniqueValues([]);
