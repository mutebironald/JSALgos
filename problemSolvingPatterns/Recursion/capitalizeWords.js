//write a recursive function called capitalizeWords, that takes in an array and
// returns a new array containing each word capitalized
function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) {
    return;
  }
  if ((arr.length === 1)) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  //how is it able to remember previous array elements????
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
let result = capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
console.log(result)
