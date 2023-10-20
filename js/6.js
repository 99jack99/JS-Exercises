/* 
Write a JavaScript program to calculate number of days left until next Christmas. 
*/

function daystillxmas() {

    let today = new Date();
    let xmas = new Date(today.getFullYear(), 11, 25)
    let full_day = 1000*60*60*24;

    console.log('Days left till Xmas: ' + Math.ceil((xmas.getTime()-today.getTime())/(full_day)));

}

daystillxmas();