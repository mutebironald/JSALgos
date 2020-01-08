function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let newArr = [];
  for (let val of arr) {
    let value = val.split("");
    let newVal = [value[0].toUpperCase(), ...value.slice(1)];
    newArr.push(newVal.join(""));
    //this commented out section is the alternative approach
    // const upper = val.charAt(0).toUpperCase() + val.substring(1)
    // newArr.push(upper)
  }
  console.log(newArr);
  return newArr;
}

//alternative solution that is recursion heavy
function capitalizeFirst(array) {
  if (array.length === 0) {
    return;
  }
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  console.log(res, "hahaha")
  return res;
}

capitalizeFirst(["car", "taco", "banana"]);
// ['Car','Taco','Banana']
