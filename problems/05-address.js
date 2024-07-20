/***********************************************************************
Write a function called `createAddress(street)`. The createAddress function will
return a new function. This new function will allow us to specify the rest of the address.

Look below to see how this function is invoked:


const address1 = createAddress("123 Main St");       // returns a function
address1("Los Angeles, CA 90001");                   // "123 Main St Los Angeles, CA 90001"

const address2 = createAddress("2 Grimmauld Place"); // returns a function
address2("LONDON, SW1A 2AA");                        // "2 Grimmauld Place LONDON, SW1A 2AA"

const address3 = createAddress("42 Wallaby Way");    // returns a function
address3("Blaxland NSW 2774");                       // "42 Wallaby Way Blaxland NSW 2774"

***********************************************************************/

/* 
Test Specs: 
createAddress() 
10) should return a function that accepts a string
11) should return a new function for each initial argument 
*/

function createAddress(street) { // `createAddress` is taking a `street` parameter and is returning a new function.
  return function(restOfAddress) { // The inner function created by `createAddress` is accepting `restOfAddress` as its parameter.
    return `${street} ${restOfAddress}`; 
  }; 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = createAddress;
