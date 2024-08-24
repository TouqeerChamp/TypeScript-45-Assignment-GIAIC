// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.
function makeSandwich(...items) {
    console.log('\nMaking a sandwich with the following items\n');
    items.forEach(name => console.log(name));
    console.log('\nNow Enjoy\n');
}
makeSandwich('Bread', 'Chicken', 'Chess', 'Mayoness', 'Egg');
makeSandwich('Bread', 'Butter', 'Tomato', 'Cucumber');
makeSandwich('Bread', 'Egg', 'Ketchup');
export {};
