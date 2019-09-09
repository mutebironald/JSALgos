//loop thru input array linearly, select smallest element and then swap it to the first position
//then loop thru the array again using a linear scan, get the second smallest element, swap it to the second position etcetra until array is complete
let selectionSort = (arr) => {
    let len = arr.length;
    for(let i =0; i<len; i++){
        let min = i;
        for (let j = i+1; j< len; j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        if(min !== i){
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

selectionSort([5,3,7])
