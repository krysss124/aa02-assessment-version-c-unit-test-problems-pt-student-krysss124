/***********************************************************************

Write a function `getAverage` using fat arrow syntax that takes in an arbitrary
number of arguments, adds them up and returns a string containing the
average amount with a dollar sign in front.

Hint: Look up `toFixed()` on MDN.

Examples:

getAverage(30, 70); // '$50.00'
getAverage(1.12, 2.23, 3.34, 4.45); // '$2.79'
getAverage(4.99, 9.99, 19.99); // '$11.66'
***********************************************************************/
/*
Test Specs: 
getAverage()
7) should a return a string with the average price price for a collection of integer prices
8) should a return a rounded string price for a collection fo floating point input prices
9) should be an arrow function
*/

// Your code here 

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = getAverage;
} catch {
  module.exports = null;
}