/*******************************************************************************

You work at a grocery store, and items over $10 are getting a 20% discount.
Write a function that takes in an array of grocery items and returns an array
of grocery items that qualify for the sale. Include their new sale price.

Example:

groceryItems = [
  {name: "eggs", price: 6},
  {name: "bread", price: 5},
  {name: "milk", price: 4},
  {name: "walnuts", price: 15}
];
console.log(applySale(groceryItems)); // [ {name: "walnuts", price: 12} ]

*******************************************************************************/

/* 
Test Specs:
applySale() 
5) should return items that are prcied more than $10 with a 20% discount
6) should not give a discount to items less than or equal to $10
*/

// Your code here 
function applySale(items) { // `applySale(items` is taking an array `items` containing objects representing grocery items.
  let qualifyingItems = items.filter(item => item.price > 10); // `qualifyingItems` is using `filter()` to create a new array containing only items where `item.price`
  // is greater than 10.
  let saleItems = qualifyingItems.map(item => { // `saleItems` is using `map()` to iterate over `qualifyingItems`.
  let discountedPrice = item.price * 0.8; // Is calculating the `discountedPrice` by multiplying `item.price` by 0.8.
    return {
      name: item.name,
      price: Math.floor(discountedPrice) // Is using `math.floor(discountedPrice)` to round down to the nearest integer.
    };
  });

  return saleItems; // `applySale` is returning `saleItems` which is now an array of objects with items that qualify for the sale ane their respective discounted prices.
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = applySale;
