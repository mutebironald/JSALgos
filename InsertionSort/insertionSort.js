//An array with 1 item is considered sorted, so we start with the second item
//we compare the selected item with the items on the LHS of the selected item.


let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for(let i =1; i<length; i++ ){
        let key = inputArr[i]
        let j = i -1;
        console.log(inputArr[j]>key, inputArr[j], key, 'hello')
        while(j >= 0 && inputArr[j] > key){
           inputArr[j+1] = inputArr[j];
           j = j-1;
        }
        inputArr[j+1] = key;
    }
    console.log(inputArr);
}

insertionSort([3,25,1,6,89,45,32])



