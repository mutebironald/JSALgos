function maxSubArrayInt(arr, int) {
  let left, right, sum;
  let list = [];
  left = 0;
  right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === int) {
      list.push([arr[left], arr[right]]);
    } else if (sum > int) {
      right--;
    }
    left++;
  }
  return list;
}

//alternative
function maxSubArrayInt(arr, int){
    let len, sum, list;
    len = arr.length;
    list = [];
    for(let i = 0; i < len; i++){
        for(let j = i + 1; j < len; j++){
            sum = arr[i] + arr[j]
            if(sum === int){
                list.push([arr[i], arr[j]])
            }
        }
    }
    return list;
}



//alternative
function maxSubArrayInt(arr, int){
    const rst = [];
    arr.forEach((x) => {
      const rmd = int - x;
      if (rmd > 0 && arr.includes(rmd)) {
        rst.push([rmd, x])
      }
    })
    return rst;
}

let val = maxSubArrayInt([1, 2, 3, 46], 47);
console.log(val);

