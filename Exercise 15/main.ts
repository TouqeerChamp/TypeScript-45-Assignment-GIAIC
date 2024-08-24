//Changing Guest List: You just heard that one of your guests can’t make the dinner, 
//so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program 
//stating the name of the guest who can’t make it.

let names: string[] = ["Sir Zia", "Sir Daniyal", "Sir Ameen",];

for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, I invite you for dinner.`);    
}
console.log(`\nUnfortunatily ${names[0]}, can’t make it.\n`);

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
names[0] = "Mohammad Hussain";

// Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}, I invite you for dinner.`);    
}