/* 
Write a JavaScript function that reverse a number.
Sample Data and output:

Example x = 32243;
Expected Output : 34223 
*/

function reverseString(x) {
    console.log(x.toString().split('').reverse().join(''));
}

reverseString('tell me master')