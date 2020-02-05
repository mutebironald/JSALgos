// SAMPLE INPUT/OUTPUT
// recursiveRange(6) => 6 + 5 + 4 + 3 + 2 + 1 // 21
// recursiveRange(10) // 55 
//adds up all "sub numbers" that make up a given number
function recursiveRange(num){
    if(num=== 0){
        return 0;
    }
    return num + recursiveRange(num - 1);
}


let value = recursiveRange(6)
console.log(value)
