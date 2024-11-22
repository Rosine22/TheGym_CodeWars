/* Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1*/

function indexOfIgnoreCase(s1, s2) {
    let s1Lower = s1.toLowerCase();
    let s2Lower = s2.toLowerCase();
    return s1Lower.indexOf(s2Lower);
  }
  console.log((indexOfIgnoreCase('bit','IT')));

  
  