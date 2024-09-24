/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/



function isPalindrome(str) {
  let filteredStr = '';
  for (let char of str) {
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')) {
          filteredStr += char.toLowerCase();
      }
  }

  let i = 0, j = filteredStr.length - 1;

  while(i < j){
    if(filteredStr[i] !== filteredStr[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
