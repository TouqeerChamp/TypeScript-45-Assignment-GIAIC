// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

console.log('Tests for Equality:', 'Touqeer' as string === 'Touqeer'); // true
console.log('Tests for inequality:', 'Touqeer' as string !== 'Touqeer'); // false

// • Tests using the lower case function

console.log('Tests using the lower case:', 'TOUQEER'.toLowerCase() === 'touqeer'); // true
console.log('Tests using the lower case:', 'TOUQEER'.toLowerCase() === 'Touqeer'); // false


// • Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to

let five = 5;
let ten = 10;

// Equality and Inequality Tests

console.log('Equality Tests:', five === 5); // true
console.log('inequality Tests:', five === 10); // false

// greater than and less than Tests

console.log('Greater Then Tests:', ten > 5); // true
console.log('Less Then Tests:', ten < 5); // false

// • Tests using "and" and "or" operators

console.log('Using && Tests:', ten > 5 && five < 10); // true
console.log('Using || Tests:', five > 10 || ten < 5); // false

// • Test whether an item is in a array

let testItem = ['item1', 'item2', 'item3', 'item4', 'item5']
console.log('Item is in a Array',testItem.includes('item3')); //true


// • Test whether an item is not in a array

let testItems = ['item1', 'item2', 'item3', 'item4', 'item5']
console.log('Item is Not in a Array',testItems.includes('item0')); // false
