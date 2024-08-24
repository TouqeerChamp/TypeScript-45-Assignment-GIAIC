// Great Magicians: Start with a copy of your program from Exercise 41. 
// Write a function called make_great() that modifies the array of magicians 
// by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

let magicians_names : string[] = ['Harry Potter','Ron Weasley','Hermione Granger'];

function show_magicians(array_names: string[]){
    array_names.forEach(name => {
        console.log(name);
    })
}
function make_great(array_names: string[]) {
    return array_names.map(name => `The Great ${name}`)    
}

show_magicians(make_great(magicians_names))












