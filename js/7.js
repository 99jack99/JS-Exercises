/*
Write a JavaScript conditional statement to sort three numbers. Display an alert
box to show the result. 
*/

function sortThree(a, b, c) {

    

    if (typeof a == 'number' && typeof b == 'number' && typeof c == 'number' ) {
        console.log(a, b, c);

        let ar=[];

        ar.push(a,b,c);

        let si = ar.reduce((a,b) => {
            a + b
        })

        console.log(si);
    }

    
}

sortThree(1,2,3)