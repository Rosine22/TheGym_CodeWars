// Filter out numbers that are greater than 10 
function bignum(num) {
    return num >= 10;
}
var numbers = [10,2,55,78,4,5] ;
var filterNum = numbers.filter(bignum) ;
console.log(filterNum);

