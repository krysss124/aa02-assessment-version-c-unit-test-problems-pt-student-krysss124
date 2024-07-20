/***********************************************************************
Write a function `leastFrequentLetter(string)` that will take a
string as an argument and return the character that appears the
least often. In case of a tie, return any character with the
lowest count. The string will have at least one character.

Examples:

leastFrequentLetter("mississippi") // "m"
leastFrequentLetter("ananab") // "b"
leastFrequentLetter("Cheese") // "C", "h", or "s"
***********************************************************************/

/*
Test Specs:
leastFrequentLetter()
3) should return the least frequent letter in a word string
4) should return any of the least frequent letters in the case of a tie
*/

function leastFrequentLetter(string) { //Declare a function leastFrequentLetter(string)
  for (let i = 0; i < string.length; i++) { //  set a for loop to read through the string arguement
    if (i < 2) { // then make an if conditional
      return string[i] // return the character that shows up the least or return any character w the lowest count
    } 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = leastFrequentLetter;
