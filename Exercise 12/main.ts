// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be personalized 
// with the person’s name.



let names: string[] = ["Sir Zia", "Daniyal Nagori", "Ameen Alam", "Sir Hamza", "Sir Bilal"];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}`);    
}