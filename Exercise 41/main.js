// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
let magicians_names = ['Harry Potter', 'Ron Weasley', 'Hermione Granger'];
function show_magicians(array) {
    array.forEach(name => {
        console.log(name);
    });
}
show_magicians(magicians_names);
export {};
