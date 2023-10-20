/* 
Write a JavaScript function where given a text and a char, removes char from text
 */


function removeChar(text, x) {
    
    let textsplitted = text.split('')

    let filterOut = textsplitted.filter((a)=>{
        return a != x;
    })

    console.log(filterOut.join(''));

}


removeChar('Mi moto alpina derrapante', 'a')