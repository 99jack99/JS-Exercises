/* 
Create a function to calculate the distance between 
two points defined by their x, y coordinates 
*/

let differenceBetween2points = (p1, p2) =>{

let distance = Math.sqrt((Math.pow(p1[0] - p2[0],2) + Math.pow(p1[1] - p2[1],2))).toFixed(2)

console.log(distance);
}

differenceBetween2points([1,2],[2,5])