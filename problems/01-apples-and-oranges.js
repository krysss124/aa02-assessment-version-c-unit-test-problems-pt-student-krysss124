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

function applesAndOranges(obj) { //Step 1: Declare a function applesAndOranges that takes in an object as a parameter
  for (let i = 0; i < obj.length; i++) { //Step 2: Create a for loop that reads the given object and returns an integer (this should also have an if statement)
    if (i === "orange" || i === "apple") {
      return i
    }
  }
}

obj1 = {"banana": "fruit", "apple": "fruit", "carrot": "vegetable", "cherry": "fruit"}
applesAndOranges(obj1) // 1

obj2 = {"alex": "orange", "erin": "pineapple", "cody": "mango", "daniel": "apple"}
applesAndOranges(obj2) // 3
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = applesAndOranges;
