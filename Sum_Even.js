//Problem: Write a program to find the total of all even numbers in a list of integers.

var sum = 0 ;
var numbers = [1, 2, 3, 4, 5, 6] ;
numbers.forEach((num) => {
    if (num % 2 === 0) {
        sum+=num;
    }
   
});
console.log(sum) ;

