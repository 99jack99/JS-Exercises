/*
Write a JavaScript conditional statement to sort three numbers. Display an alert
box to show the result. 
*/

function sortThree(a, b, c) {

    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number' ) {

        console.log('Numbers given: '+ a, b, c);

        let biggest;
        let bigger;
        let big;

        let ar = []

        /* -- */
        if (a > b && a > c) {
            biggest = a;

            if (b > c) {
                bigger = b;
                big = c;
            }
            else{
                bigger = c;
                big = b;
            }
        }

        /* -- */
        else if (a < b && a > c){
            biggest = b;

            if (a > c) {
                bigger = a;
                big = c;
            }

            else{
                bigger = c;
                big = a;
            }
        }

        /* -- */
        else if (a < b && a < c){
            big=a;

            if (b > c) {
                biggest = b;
                bigger = c;
            }

            else{
                biggest = c;
                bigger = b;
            }
        }

        ar.push(big, bigger, biggest)
        console.log(ar.join(' < '));

    }

    
}

sortThree(5,2,3)