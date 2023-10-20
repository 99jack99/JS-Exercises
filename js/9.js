/* 
Write a JavaScript function to capitalize the first letter of each word in a string.
 */


function wordCapitalizer(text) {
    console.log(text);

    let texttoarray = text.split(' ')

    let formattedText = [];

    for (let word of texttoarray) {

        let firstLetter = word.slice(0,1).toUpperCase()
        let restword = word.slice(1)

        formattedText.push(firstLetter.concat(restword))

        
    }

    console.log(formattedText.join(' '));




}

wordCapitalizer('hola jaimito como estas')