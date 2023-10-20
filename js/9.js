/* 
Write a JavaScript function to capitalize the first letter of each word in a string.
 */


function wordCapitalizer(text) {
    

    let p = text.split('')

    /* console.log(text.split('')); */
    console.log(p);

    console.log(p.indexOf(' '));
    

    /* for (let i = 0; i < p.length; i++) {
        
        if (p[i] == ' ') {
            console.log(p.indexOf(' '));
        }

        
        

    } */

    for (let item of p) {
        if (item == ' ') {
           console.log(item);
        }
    
    }
}

wordCapitalizer('deberia ir al mercado')