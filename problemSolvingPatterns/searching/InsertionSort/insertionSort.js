function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      // while (arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      //   console.log("+++++111", arr);
      // }
    }
    arr[j + 1] = currentElement;
    console.log("+++++", arr);
  }
  return arr;
}



//another solution
function insertionSort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  console.log(arr, "-----")
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
