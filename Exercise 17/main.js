// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
//and you have space for only two guests.
// • Start with your program from Exercise 16. 
let names = ["Sir Zia", "Sir Daniyal", "Sir Ameen",];
names[0] = 'Sir Hamza';
// console.log('\nHello Friends i have to inform you that i found a bigger dinner table.\n');
// • Add one new guest to the beginning of your array.
names.unshift('Sir Bilal');
// • Add one new guest to the middle of your array.•
names.splice(2, 0, 'Sir Ali');
// • Use append() to add one new guest to the end of your list. 
names.push('Sir Obaid');
console.log(names);
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('\nMy new dinner table won’t arrive in time for the dinner so i can invite only two people for dinner.\n');
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (names.length > 2) {
    let guest = names.pop();
    console.log(`\nSorry ${guest}, i can’t invite you to dinner.\n`);
}
;
console.log(names);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, you are still invited.`);
}
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
// //have an empty list at the end of your program.
names.pop();
names.pop();
console.log(names);
export {};
