// Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.
let magicians_names = ['Harry Potter', 'Ron Weasley', 'Hermione Granger'];
function show_magicians(array_names) {
    array_names.forEach(name => {
        console.log(name);
    });
}
function make_great(array_names) {
    return array_names.map(name => `The Great ${name}`);
}
let copy_magicians_names = magicians_names.slice();
let copy_make_great = make_great(copy_magicians_names);
// Orignal Array
show_magicians(magicians_names);
// Copy Array
show_magicians(copy_make_great);
export {};
