/* 
Create a function to calculate the sum of all the numbers in a jagged array

(contains numbers or other arrays of numbers on an unlimited number of
levels)

ej. [2,4,5, [-2,2,5, [1,2]]]
result: 19

*/

let jaggedArrSum = (numbers) =>{

console.log(numbers);




let extrac = numbers.slice(3, 4)
console.log(extrac);

/* console.log(numbers.push(extrac)); */
console.log(numbers);

/* numbers.splice(3,1); */


/* let texti = numbers;

console.log('ext: '+extracto);

console.log(texti.concat(extracto)); */



};

jaggedArrSum([2,4,5, [-2,2,5]])
