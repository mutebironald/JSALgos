//input array = ['car', 6, 'bus'], stored array = ['car', 5, 'bus'] === false

//input array = ['ron', 'ruben'] stored array = ['ron', 3, 'ruben'] === true

var arrayChecker = function(arr1, arr2){
    // console.log(arr1.every(val => arr2.indexOf(val) !== -1 ));
    return arr1.every(val => arr2.indexOf(val) !== -1 )
}

let array1 = ['car',  'bus'];
let array2 = ['car', 5, 'bus']
arrayChecker(array1, array2)
