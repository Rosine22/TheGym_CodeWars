/*Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.*/

function secondIndexOf(i,y) {
    let firstIndex = i.indexOf(y);
    return i.indexOf(y,firstIndex +1);
    }
    console.log(secondIndexOf('White Rabbit', 'it')) ; 