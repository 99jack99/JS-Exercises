/* 
Create a function to convert a CSV 
text to a “bi-dimensional” array 

ej. el, coche, mas, rapido
result: [[el],[coche],[mas],[rapido]]
*/

let CSVToBidiArray = (text) => {
    console.log(text);

    let arrayRepo = [];

    let transformText = text.split(' ')
    arrayRepo.push(transformText)

    console.log(arrayRepo);
}

CSVToBidiArray('la tortuga es un animal feo');