/* 
Create a function that will receive n as argument and return an array of n
random numbers from 1 to n. The numbers should be unique inside the array.
*/

let arrayGen = (n)=>{
    
    console.log('Number given: '+n);

    let ar = [];

    while (ar.length < n) {
        let random = (Math.random()*n).toFixed();
        if (!ar.includes(random)) {
            ar.push(random)
        }
    }


    console.log(ar);

}

arrayGen(13)
