// More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
let names = ["Sir Zia", "Sir Daniyal", "Sir Ameen",];
names[0] = 'Sir Hamza';
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello ${names[i]}, I invite you for dinner.`);    
// }
console.log('\nHello Friends i have to inform you that i found a bigger dinner table.\n');
// • Add one new guest to the beginning of your array.
names.unshift('Sir Bilal');
// • Add one new guest to the middle of your array.•
names.splice(2, 0, 'Sir Ali');
// • Use append() to add one new guest to the end of your list. 
names.push('Sir Obaid');
console.log(names);
// Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, I invite you for dinner.`);
}
export {};
