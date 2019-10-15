function same(arr1, arr2){
    //check if length is the same in both arrays
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    //we create objects with counts of the number of times a certain value occurs.
    for(let val of arr1){
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1
    }

    //loop over each key in the first object
    for(let key in frequencyCounter1){
        //check if a key in object 1 is present as akey in object 2
        if(!(key**2 in frequencyCounter2)){
            return false;
        }
        //check if count of key in object 1 is the same count in object 2
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true
}

same([1,2,35], [1,4,5])
