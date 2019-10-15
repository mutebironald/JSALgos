function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i =0; i < arr1.length; i++){
        //check if item exists in second array
        //indexOf loops over each item in the second array(which is quadratic n squared)
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        //when item is not present return false
        if(correctIndex === -1){
            return false;
        }
        console.log(arr2);
        //remove item from array
        arr2.splice(correctIndex, 1)
    }
    return true;
}

same([1,2,3], [1,4,9])
