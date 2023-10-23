/* 
Write a JavaScript program to compare two objects to determine 
if the first contains equivalent property values to the second one.
 */

let object1 = {
    specie: 'Human',
    kind: 'Mammal',
    weight: 75,
}

let object2 = {
    specie: 'Lion',
    kind: 'Mammal',
    weight: 315,
}


let propertyComparisson = (a, b) => {

    console.log(a,b);

    for (let i in a) {
       
       if (a[i] === b[i]) {
        console.log('Property: '+i+', value: '+a[i]);
       }

    }

}

propertyComparisson(object1, object2)

