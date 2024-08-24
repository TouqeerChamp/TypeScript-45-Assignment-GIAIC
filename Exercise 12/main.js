// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.
let names = ["Sir Zia", "Daniyal Nagori", "Ameen Alam", "Sir Hamza", "Sir Bilal"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
for (let i = 0; i < names.length; i++) {
    // const element = array[index];
    console.log(`Hello ${names[i]}`);
}
export {};
