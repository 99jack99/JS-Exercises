/* 
Write a JavaScript function that accepts a string as a parameter and counts the
number of vowels within the string.

Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do
not count 'y' as vowel here.

Sample Data and output:
Example string : 'The quick brown fox'
Expected Output : 5 
*/


function getVowels(x) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    console.log(x.split('').filter((a) => vowels.includes(a)).length);
    
    
}

getVowels('and i need you')