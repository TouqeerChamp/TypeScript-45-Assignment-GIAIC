// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
let userNames5 = ['Ali', 'Zeeshan', 'Bilal', 'Asim', 'Admin_Touqeer',];
userNames5 = [];
if (userNames5.length === 0) {
    console.log('Array is empty we need to find some users!');
}
else {
    console.log('All Users Removed');
}
export {};
