/***********************************************************************
Write a function `applesAndOranges(obj)` that takes an object as
an argument and returns an integer representing how many keys and values
in the input object contain the string "apple" or "orange".

For example, `{"fruit": "pineapple", "orange": "juice"}` has two strings
containing "apple" or "orange".

Examples:

obj1 = {"banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
applesAndOranges(obj1) // 1

obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
applesAndOranges(obj2) // 3

obj3 = {"orange-juice": "orange", "apple-sauce": "apple", "snapple": "peach-tea"}
applesAndOranges(obj3) // 5

/* 
Test Specs: 
applesAndOranges()
1) should return an integer representing number of keys and values that are either "apple"
or "orange"
2) should count keys and values that contain either "apple" or "orange"


***********************************************************************/

function applesAndOranges(obj) {
  let count = 0; // Initializing a `count` variable to keep track of the number of occurrences of "apple" and "orange".
  for (let key in obj) { // Using a `for` loop to iterate through all keys in `obj`. Checking each key to see if it includes the substring "apple" or "orange" .
    if (key.includes("apple") || key.includes("orange")) {
      count++; // Incrimenting the count variable each time a key or value meets the condition.
    }
  }

  for (let value of Object.values(obj)) { // Getting an array of all values in the object. Then iterating through the array. Checking each value to make sure it is
    // a string and then checking if it includes "apple" or "orange".
    if (typeof value === 'string' && (value.includes("apple") || value.includes("orange"))) {
      count++; // Incrimeting the count variable each time a key or value meets the condition.
    }
  }

  return count; // Returning the count to show the total number of keys and values containing the string "apple" or "orange".
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = applesAndOranges;
