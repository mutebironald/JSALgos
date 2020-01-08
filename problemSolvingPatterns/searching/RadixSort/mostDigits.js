const   { digitCount }  = require('./digitCount')



function mostDigits(arr){
    let count = 0;
    for(let i = 0; i< arr.length; i++){
        let value = digitCount(arr[i]);
        if(value > count){
            count = value
        }
    }
    return count
}

//alternative solution
// function mostDigits(arr){
//     let maxDigits = 0;
//     for(let i =0; i < arr.length; i++){
//         maxDigits = Math.max(maxDigits, digitCount(arr[i]))
//     }
//     return maxDigits;
// }

// mostDigits([23,567,89,12234324,90])

module.exports = {
    mostDigits
}
