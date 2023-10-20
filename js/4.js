
/* 
Write a JavaScript function that accepts a string as a parameter and converts the
first letter of each word of the string in upper case.

Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' 
*/

function uppercaseFirstLetter(x) {

    if (typeof x == "number") {
        console.log('Parameter must be a string');
       return
    }

    let firstLetter = x.slice(0,1).toUpperCase()
    let restText = x.slice(1)
    
    console.log(firstLetter.concat(restText));
    
}


uppercaseFirstLetter('there will be fire')

