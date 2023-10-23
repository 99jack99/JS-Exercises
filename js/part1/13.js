/* 
Implement the bubble sort algorithm for an array of numbers 
*/

let BubbleSort = (numbers) =>{
    console.log(numbers);

    let swapping;

    do {

        swapping = false;

        for (let i = 0; i < numbers.length; i++) {
        
            if (numbers[i] > numbers[i + 1]) {
                let floatingValue = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = floatingValue;
                swapping = true
            }
        }
    } while (swapping);
    
    console.log(numbers);
}

BubbleSort([55,5,1,4,5,23,-2])