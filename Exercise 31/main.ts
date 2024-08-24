// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
let userNames5: string[] = ['Ali','Zeeshan','Bilal','Asim','Admin_Touqeer',];

// • Remove all of the usernames from your array, and make sure the correct message is printed.
userNames5 = [];

// • If the list is empty, print the message We need to find some users!
if (userNames5.length === 0) {
    console.log('Array is empty we need to find some users!');
}
else{
    console.log('All Users Removed');
}