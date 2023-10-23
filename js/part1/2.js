/* 
Write a JavaScript function that returns a passed string with letters in
alphabetical order.

Example string : 'webmaster'
Expected Output : 'abeemrstw'

Note: Assume punctuation and numbers symbols are not included in the passed
string 
*/

function sortString(x) {

    console.log(x.split('').sort().join(''));

}

sortString('king')

