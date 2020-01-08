// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
/**
 *  fibonnacci sequence is a series of whole numbers 1,1,2,3,5,8,... which starts with 1 and 1,
 * and where every number thereafter is equal to the sum of the two previous numbers
*
*/
//find fib(nth number) 
//where n is the position of element.
function fib(n){
    // add whatever parameters you deem necessary - good luck! 
    if(n<=2){
        return 1;
    }
    return fib(n-1) + fib(n - 2)
  }
