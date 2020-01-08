function countUniqueValues(arr){
    if(arr.length === 0){ return 0}
    let i = 0;
    for(let j = i; j < arr.length; j ++){
        if(arr[i] !== arr[j]){
            //i moves when the two numbers are not equal
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}


countUniqueValues([1,1,2,2,2,3,4,4])
