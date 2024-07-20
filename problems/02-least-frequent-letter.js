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

function leastFrequentLetter(string) {
  let frequency = {}; // Setting `frequency` to an empty object to store the count of each character in the string.

  for (let char of string) { // Iterating through each character in the `string`. If the character exists in `frequency`, it incriments its count; otherwise it initializes its
    // count to 1.
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  let minFrequency = Infinity; // Initializing `minFrequency` to `Infinity` and `leastFrequentChar` to `undefined`. Iterating through the `frequency` Object. If a character's
  // count is less than `minFrequency`, it updates it and sets `leastFrequentChar` to that number.
  let leastFrequentChar;

  for (let char in frequency) {
    if (frequency[char] < minFrequency) {
      minFrequency = frequency[char];
      leastFrequentChar = char;
    }
  }

  return leastFrequentChar; // After iterating through all characters, it returns `leastFrequentChar`.
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = leastFrequentLetter;
