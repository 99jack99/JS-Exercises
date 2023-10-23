/* 
Write a JavaScript program to get the current date.

Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy 
*/


function getDate() {

    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    let final = `${day}/${month}/${year}`

    console.log(final);
}

getDate()