// Checking Usernames: 
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.
let current_users = ['Amir', 'Akber', 'Ali', 'zeeshan', 'bilal',];
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
let new_users = ['Kashif', 'Hassan', 'Sajid', 'Zeeshan', 'Bilal',];
// • Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username. If a username has not been used, 
// print a message saying that the username is available.
new_users.forEach(new_array => {
    let our_Condition = current_users.some(current_array => current_array.toLowerCase() === new_array.toLowerCase());
    if (our_Condition) {
        console.log(`Soorry ${new_array}, has already been used. the person will need to enter a new username`);
    }
    else {
        console.log(`The username ${new_array} is available`);
    }
});
export {};
