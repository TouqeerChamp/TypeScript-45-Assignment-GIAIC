// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magicians_names : string[] = ['Harry Potter','Ron Weasley','Hermione Granger'];

function show_magicians(array_names: string[]){
    array_names.forEach(name => {
        console.log(name);
    })
}
show_magicians(magicians_names)