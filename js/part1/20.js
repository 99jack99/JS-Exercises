/* 
Write a JavaScript program to convert temperatures to and from Celsius, 
Fahrenheit.  

[ Formula : c/5 = (f-32)/9 
[ where c = temperature in Celsius 
and f = temperature in Fahrenheit ]

Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C 
*/

let tempEquivalents = (value, type) =>{

    if (type == 'celsius') {
        let CToF = ((value * 1.8) + 32)
        return console.log(CToF+' Fahrenheit');
    }

    else if (type == 'fahrenheit') {
        let FtoC = ((value - 32) / 1.8)
        return console.log(FtoC+' Celsius');;
    }

    else{
        alert('Types must be only Celsius or Farenheit')
    }

}


tempEquivalents(32, 'celsius')